import Link from 'next/link';
import Image from 'next/image';
import styles from './PostList.module.css';
import TagsBlock from './TagsBlock';

interface PostListProps {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  cover: string | null;
  excerpt: string;
}

export default function PostList({ slug, title, date, tags, cover, excerpt }: PostListProps) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
  const imageSrc = cover ? `${apiUrl}${cover}` : null;

  return (
    <article className={styles.wrapper}>
      <div className={styles.image}>
        <Link href={`/blog/${slug}`} title={title}>
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
              width={800}
              height={400}
              className={styles.img}
              unoptimized
            />
          ) : (
            <div className={styles.placeholder}>No Image</div>
          )}
        </Link>
      </div>
      <div className={styles.information}>
        <div className={styles.date}>{date}</div>
        <Link href={`/blog/${slug}`}>
          <h2 className={styles.title}>{title}</h2>
        </Link>
        <TagsBlock tags={tags} />
        <p className={styles.excerpt}>{excerpt.slice(0, 84)}</p>
      </div>
    </article>
  );
}

