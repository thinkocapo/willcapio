'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';

// Demo funnel step 2/3.
function CartPage() {
  useEffect(() => {
    fetch('/robots.txt').catch(() => {});
  }, []);

  return (
    <main style={{ padding: '2rem', maxWidth: 640 }}>
      <h1>Cart</h1>
      <p>Demo funnel — step 2 of 3.</p>
      <Link href="/checkout">Go to checkout →</Link>
    </main>
  );
}

export default Sentry.withProfiler(CartPage, { name: 'CartPage' });
