'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { enterPage, leavePage, initSessionListeners } from '@/lib/sessionTrace';

// Mounted once at the layout level so every route participates in the session
// trace. Renders nothing — it only drives span enter/leave off route changes.
export default function SessionTracker() {
  const pathname = usePathname();

  useEffect(() => {
    initSessionListeners();
  }, []);

  useEffect(() => {
    // React runs the previous effect's cleanup before this one on pathname
    // change, so leavePage(prev) fires right before enterPage(next).
    const token = enterPage(pathname);
    return () => leavePage(token);
  }, [pathname]);

  return null;
}
