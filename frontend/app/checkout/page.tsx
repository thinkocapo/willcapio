'use client';

import { useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';

// Demo funnel step 3/3, with the "checkout_submit" action.
function CheckoutPage() {
  useEffect(() => {
    fetch('/robots.txt').catch(() => {});
  }, []);

  const onCheckout = () => {
    // Runs in an event handler after effects have settled, so the active span is
    // the /checkout ui.page span -> checkout_submit nests inside it (Option B).
    Sentry.startSpan(
      { name: 'checkout_submit', op: 'ui.action.submit' },
      () => fetch('/robots.txt').catch(() => {}),
    );
  };

  return (
    <main style={{ padding: '2rem', maxWidth: 640 }}>
      <h1>Checkout</h1>
      <p>Demo funnel — step 3 of 3.</p>
      <button onClick={onCheckout}>Complete checkout</button>
    </main>
  );
}

export default Sentry.withProfiler(CheckoutPage, { name: 'CheckoutPage' });
