'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';

// Demo funnel step 1/3. Client component so it can fetch on mount and be wrapped
// in withProfiler — both of which land under the active ui.page span (Option B).
function ProductsPage() {
  useEffect(() => {
    // Fires while the /products ui.page span is active -> resulting http.client
    // span nests inside it.
    fetch('/robots.txt').catch(() => {});
  }, []);

  return (
    <main style={{ padding: '2rem', maxWidth: 640 }}>
      <h1>Products</h1>
      <p>Demo funnel — step 1 of 3.</p>
      <Link href="/cart">Go to cart →</Link>
    </main>
  );
}

// withProfiler emits ui.react.mount / ui.react.update spans (Option B).
export default Sentry.withProfiler(ProductsPage, { name: 'ProductsPage' });
