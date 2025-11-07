import { getAllPosts, getPost } from '@/lib/api';
import { notFound } from 'next/navigation';
import TagsBlock from '@/components/TagsBlock';
import styles from './page.module.css';

export const dynamic = 'force-static';
export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  
  return {
    title: `${post.title} | WillCap.io`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  try {
    const post = await getPost(params.slug);

    return (
      <article className={styles.article}>
        <div className={styles.header}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.date}>{post.date}</div>
          <TagsBlock tags={post.tags} />
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

