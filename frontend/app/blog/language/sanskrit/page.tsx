import { getPost } from '@/lib/api';
import { notFound } from 'next/navigation';
import styles from '@/app/blog/[slug]/page.module.css';

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
        <div className={styles.header}>
          <h1 className={styles.title}>{post.title}</h1>
        </div>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    );
  } catch (error) {
    notFound();
  }
}
