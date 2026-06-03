import { getPost } from '@/lib/api';
import { notFound } from 'next/navigation';
import styles from '@/app/blog/[slug]/page.module.css';
import PageViewTracker from '@/components/PageViewTracker';
import ScrollDepthTracker from '@/components/ScrollDepthTracker';

export const dynamic = 'force-static';
export const revalidate = 3600;

export const metadata = {
  title: 'Sanskrit | WillCap.io',
};

export default async function SanskritPage() {
  try {
    const post = await getPost('sanskrit');

    return (
      <article className={styles.article}>
        <PageViewTracker slug="sanskrit" />
        <div className={styles.header}>
          <h1 className={styles.title}>{post.title}</h1>
        </div>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <ScrollDepthTracker slug="sanskrit" />
      </article>
    );
  } catch (error) {
    notFound();
  }
}
