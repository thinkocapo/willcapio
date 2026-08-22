import * as Sentry from '@sentry/nextjs';
// _INTERNAL_setSpanForScope is the same primitive the browserTracing integration
// uses to pin a span as the "active" span on the scope. It isn't re-exported
// through @sentry/nextjs, so we import it from @sentry/core (single copy — same
// singleton scope machinery the rest of the SDK uses).
import { _INTERNAL_setSpanForScope } from '@sentry/core';

// A "session" is modeled as ONE trace: a long-lived root span (op: session)
// with one child span per page (op: ui.page, enter -> leave). Because spans are
// indexed and queryable, all the useful dimensions live as span ATTRIBUTES
// (session.id, page, from, step, dwell_ms). Standalone Sentry.metrics.* calls are
// only aggregate rollups fired at span stop — not the source of truth.
//
// OPTION B: while a page span is open we make it the ACTIVE span (setActive
// below). That way the SDK's auto-instrumentation attaches its children to it —
// http.client (fetch/XHR), resource.* — and Sentry.withProfiler(...) components
// emit ui.react.mount / ui.react.update spans nested inside the ui.page span.
// The result is one rich session trace instead of a bare journey skeleton.

type SentrySpan = ReturnType<typeof Sentry.startInactiveSpan>;

// Pin (or clear) the scope's active span so new auto/profiler spans parent to it.
function setActive(span: SentrySpan | undefined): void {
  _INTERNAL_setSpanForScope(Sentry.getCurrentScope(), span);
}

// A session is considered over after this much inactivity. Keeping sessions
// bounded matters: an unbounded root span risks getting clamped/dropped by
// ingestion duration limits, and the trace only flushes once the root ends.
const IDLE_MS = 30 * 60 * 1000;

export interface PageToken {
  span: SentrySpan;
  path: string;
  startedAt: number;
  sessionId: string;
}

interface Session {
  id: string;
  root: SentrySpan;
  startedAt: number;
  lastPath: string | null;
  step: number;
  pages: number;
}

let session: Session | null = null;
let current: PageToken | null = null;
let idleTimer: ReturnType<typeof setTimeout> | undefined;
let listenersReady = false;
// Most recent route entered, remembered across sessions so we can start a fresh
// session at the right page when the tab is resumed (see initSessionListeners).
let lastPath: string | null = null;

function now(): number {
  return typeof performance !== 'undefined' ? performance.now() : Date.now();
}

function newId(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
  return `sess-${Math.round(now())}`;
}

function beginSession(): Session {
  const id = newId();
  let root!: SentrySpan;
  // Give the session its own trace so every page span nests under one root.
  Sentry.startNewTrace(() => {
    root = Sentry.startInactiveSpan({
      name: 'session',
      op: 'session',
      forceTransaction: true, // anchor the trace as a transaction/segment root
      attributes: { 'session.id': id },
    });
  });
  return { id, root, startedAt: now(), lastPath: null, step: 0, pages: 0 };
}

function armIdleTimer(): void {
  if (idleTimer) clearTimeout(idleTimer);
  idleTimer = setTimeout(() => endSession('idle'), IDLE_MS);
}

// Ends whatever page span is currently open, records dwell, emits the rollup.
function closeCurrentPage(): void {
  if (!current || !session) {
    current = null;
    return;
  }
  const ms = Math.round(now() - current.startedAt);
  current.span.setAttribute('dwell_ms', ms);
  current.span.end();
  session.lastPath = current.path;
  // Between pages, fall back to the session root as the active span so any spans
  // created in the gap still land on the session trace (not the just-ended page).
  setActive(session.root);

  // Aggregate rollup (not on the waterfall) — "a metric at each span stop".
  Sentry.metrics.distribution('page.dwell', ms, {
    unit: 'millisecond',
    attributes: { page: current.path },
  });
  current = null;
}

/** Call on entering a route. Starts (or resumes) a session and opens a page span. */
export function enterPage(path: string): PageToken | null {
  if (typeof window === 'undefined') return null;
  lastPath = path;
  if (!session) session = beginSession();
  armIdleTimer();

  // Defensive: if a previous page span is still open, close it as a navigation.
  if (current) closeCurrentPage();

  session.step += 1;
  session.pages += 1;
  const from = session.lastPath;

  const attributes: Record<string, string | number> = {
    'session.id': session.id,
    page: path,
    step: session.step,
  };
  if (from) attributes.from = from;

  // Parent explicitly on the session root so this span lands on the session
  // trace regardless of whatever trace the SDK's auto browser-tracing is on.
  const span = Sentry.startInactiveSpan({
    name: path,
    op: 'ui.page',
    parentSpan: session.root,
    attributes,
  });

  current = { span, path, startedAt: now(), sessionId: session.id };
  // OPTION B: make this page span the active span for the route's lifetime so
  // http.client / resource.* / ui.react.mount|update nest inside it.
  setActive(span);
  return current;
}

/** Call on leaving a route (React effect cleanup on pathname change). */
export function leavePage(token: PageToken | null): void {
  if (!token || !session) return;
  // Stale token from an already-ended session (idle/hidden). Ignore.
  if (token.sessionId !== session.id) return;
  if (current && current.span === token.span) closeCurrentPage();
  armIdleTimer();
}

function endSession(reason: 'idle' | 'hidden' | 'manual'): void {
  if (!session) return;
  const s = session;
  closeCurrentPage(); // flush any open page span first
  session = null;
  if (idleTimer) {
    clearTimeout(idleTimer);
    idleTimer = undefined;
  }

  const ms = Math.round(now() - s.startedAt);
  s.root.setAttribute('duration_ms', ms);
  s.root.setAttribute('pages', s.pages);
  s.root.setAttribute('end.reason', reason);
  s.root.end(); // <-- ending the root is what flushes the whole session trace
  setActive(undefined); // no active span until the next session starts

  Sentry.metrics.distribution('session.duration', ms, {
    unit: 'millisecond',
    attributes: { 'end.reason': reason },
  });
  Sentry.metrics.distribution('session.pages', s.pages, {
    attributes: { 'end.reason': reason },
  });
}

/** Wire session-end triggers once. Safe to call repeatedly. */
export function initSessionListeners(): void {
  if (typeof document === 'undefined' || listenersReady) return;
  listenersReady = true;
  // visibilitychange -> hidden is the reliable "user left" signal (better than
  // beforeunload, esp. on mobile). Ending here flushes the trace before close.
  // visibilitychange -> visible with no active session means the tab was resumed
  // after a prior session ended (they switched away and came back): start fresh.
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      endSession('hidden');
    } else if (document.visibilityState === 'visible' && !session && lastPath) {
      enterPage(lastPath);
    }
  });
  // pagehide backstops bfcache / hard close.
  window.addEventListener('pagehide', () => endSession('hidden'));
}
