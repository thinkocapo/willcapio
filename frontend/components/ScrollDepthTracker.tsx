'use client';

import { useEffect, useRef } from 'react';
import * as Sentry from '@sentry/nextjs';

export default function ScrollDepthTracker({ slug }: { slug: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // slug values are names of the cards, navbar buttons, and embedded links in the pages.
        Sentry.metrics.count('page.click', 1, { attributes: { page: `${slug}.scroll_complete` } });
        observer.disconnect();
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [slug]);

  return <div ref={ref} />;
}
