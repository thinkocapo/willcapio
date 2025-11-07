import Link from 'next/link';
import styles from './TagsBlock.module.css';

interface TagsBlockProps {
  tags: string[];
}

export default function TagsBlock({ tags }: TagsBlockProps) {
  if (!tags || tags.length === 0) return null;
  
  return (
    <div className={styles.tags}>
      {tags.map((tag) => (
        <Link key={tag} href={`/tags/${tag}`} className={styles.tag}>
          {tag}
        </Link>
      ))}
    </div>
  );
}

