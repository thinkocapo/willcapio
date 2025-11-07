'use client';

import Link from 'next/link';
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Home
      </Link>
      <nav className={styles.nav}>
        <Link href="/whereiswill">Where Is Will</Link>
        <Link href="/code">Code</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}

