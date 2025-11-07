import { getAllTags } from '@/lib/api';
import Link from 'next/link';
import Header from '@/components/Header';
import styles from './page.module.css';

export const dynamic = 'force-static';
export const revalidate = 3600;

export const metadata = {
  title: 'Tags | WillCap.io',
  description: 'Browse all tags',
};

export default async function TagsPage() {
  const tags = await getAllTags();

  return (
    <>
      <Header title="Tags">Browse posts by topic</Header>
      <div className={styles.tagsContainer}>
        <div className={styles.tagsList}>
          {tags.map((tag) => (
            <Link key={tag} href={`/tags/${tag}`} className={styles.tagItem}>
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

