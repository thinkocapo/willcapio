"use client";

import * as Sentry from "@sentry/nextjs";
import NextError from "next/error";
import { useEffect } from "react";

/*
This file is the App Router's root error boundary — it catches errors that happen in layout.tsx or anywhere React crashes during rendering that isn't caught by a more specific error boundary.
Without it, a crash in the root layout would show a blank/broken page with no error reported to Sentry. With it, Sentry calls captureException(error) before rendering the fallback UI.
It only catches render errors (React component crashes) — not server action errors or API route errors, which onRequestError in instrumentation.ts handles instead.
*/
export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        {/* `NextError` is the default Next.js error page component. Its type
        definition requires a `statusCode` prop. However, since the App Router
        does not expose status codes for errors, we simply pass 0 to render a
        generic error message. */}
        <NextError statusCode={0} />
      </body>
    </html>
  );
}
