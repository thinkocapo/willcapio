'use client';

import * as Sentry from '@sentry/nextjs';

interface CardClickTrackerProps {
  slug: string;
  children: React.ReactNode;
}

export default function CardClickTracker({ slug, children }: CardClickTrackerProps) {
  return (
    <div onClick={() => Sentry.metrics.increment('card.click', 1, { tags: { slug } })}>
      {children}
    </div>
  );
}
