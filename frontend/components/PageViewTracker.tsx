'use client';

import { useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';

interface PageViewTrackerProps {
  slug: string;
}

export default function PageViewTracker({ slug }: PageViewTrackerProps) {
  useEffect(() => {
    Sentry.metrics.count('page.view', 1, { attributes: { page: slug } });
    Sentry.metrics.count(`${slug}.view`, 1);
  }, [slug]);

  return null;
}
