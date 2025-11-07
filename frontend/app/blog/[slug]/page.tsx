import { getAllPosts, getPost } from '@/lib/api';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

export const dynamic = 'force-static';
export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  
  return {
    title: `${post.title} | WillCap.io`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const post = await getPost(slug);

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

