import { getPost } from '@/lib/api';
import { notFound } from 'next/navigation';
import styles from '@/app/blog/[slug]/page.module.css';
import PageViewTracker from '@/components/PageViewTracker';
import ScrollDepthTracker from '@/components/ScrollDepthTracker';

export const dynamic = 'force-static';
export const revalidate = 3600;

export const metadata = {
  title: 'Futbol & Tailgates | WillCap.io',
};

export default async function FutbolPage() {
  try {
    const post = await getPost('futbol-tailgates');

    return (
      <article className={styles.article}>
        <PageViewTracker slug="futbol-tailgates" />
        <div className={styles.header}>
          <h1 className={styles.title}>{post.title}</h1>
        </div>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <ScrollDepthTracker slug="futbol-tailgates" />
      </article>
    );
  } catch (error) {
    notFound();
  }
}
