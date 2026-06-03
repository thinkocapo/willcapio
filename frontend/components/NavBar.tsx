'use client';

import Link from 'next/link';
import * as Sentry from '@sentry/nextjs';
import styles from './NavBar.module.css';

function trackNavClick(label: string) {
  // slug values are names of the cards, navbar buttons, and embedded links in the pages.
  Sentry.metrics.count('page.click', 1, { attributes: { page: label } });
  Sentry.metrics.count(`page.${label}.click`, 1);
}

export default function NavBar() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo} onClick={() => trackNavClick('home')}>
        Home
      </Link>
      <nav className={styles.nav}>
        <Link href="/whereiswill" onClick={() => trackNavClick('whereiswill')}>Where Is Will</Link>
        <Link href="/about" onClick={() => trackNavClick('about')}>About</Link>
      </nav>
    </header>
  );
}
