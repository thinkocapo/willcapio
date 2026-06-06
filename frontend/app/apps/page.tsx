import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Apps & Tools | WillCap.io',
};

const apps = [
  {
    href: '/blog/language',
    title: 'German Practice',
    description: 'Interactive German sentence builder with connectors reference.',
  },
  {
    href: '/apps/fintech',
    title: 'Net Worth Calculator',
    description: 'Visualize your asset and liability breakdown.',
  },
  {
    href: '/apps/firecrawl',
    title: 'Knowledge Graph',
    description: 'Crawl a URL and visualize its semantic structure using AI.',
  },
];

export default function AppsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Apps & Tools</h1>
      <div className={styles.grid}>
        {apps.map((app) => (
          <Link key={app.href} href={app.href} className={styles.card}>
            <h2 className={styles.cardTitle}>{app.title}</h2>
            <p className={styles.cardDesc}>{app.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
