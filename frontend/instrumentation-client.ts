// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://28e4105cb014c4318175d8bdf5f96f92@o262702.ingest.us.sentry.io/4511480047140864",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,
  // Enable logs to be sent to Sentry
  // enableLogs: true,

  // Enable sending user PII (Personally Identifiable Information)
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
  // sendDefaultPii: true,
});

// Generate or retrieve a stable anonymous user ID for this browser.
// Persists in localStorage so the same visitor keeps the same ID across sessions.
let userId = localStorage.getItem('willcapio_user_id');
if (!userId) {
  userId = crypto.randomUUID();
  localStorage.setItem('willcapio_user_id', userId);
}
Sentry.setUser({ id: userId });

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
