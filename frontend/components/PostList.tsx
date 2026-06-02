'use client';

import Link from 'next/link';
import Image from 'next/image';
import * as Sentry from '@sentry/nextjs';
import styles from './PostList.module.css';

interface PostListProps {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  cover: string | null;
  excerpt: string;
  preview?: string;
}

export default function PostList({ slug, title, cover, excerpt, preview }: PostListProps) {
  const imageSrc = cover || null;
  return (
    <article
      className={styles.wrapper}
      onClick={() => Sentry.metrics.count('card.click', 1, { attributes: { page: slug } })}
    >
      <div className={styles.image}>
        <Link href={`/blog/${slug}`} title={title}>
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
              fill
              className={styles.img}
              unoptimized
            />
          ) : (
            <div className={styles.placeholder}>No Image</div>
          )}
        </Link>
      </div>
      <div className={styles.information}>
        <Link href={`/blog/${slug}`}>
          <h2 className={styles.title}>{title}</h2>
        </Link>
        <p className={styles.excerpt}>{preview || excerpt.slice(0, 84)}</p>
      </div>
    </article>
  );
}
