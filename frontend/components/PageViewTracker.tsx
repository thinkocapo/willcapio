'use client';

import { useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';

interface PageViewTrackerProps {
  slug: string;
}

export default function PageViewTracker({ slug }: PageViewTrackerProps) {
  useEffect(() => {
    // slug values are names of the cards, navbar buttons, and embedded links in the pages.
    Sentry.metrics.count('page.view', 1, { attributes: { page: slug } });
  }, [slug]);

  return null;
}
