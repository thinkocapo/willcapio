import { getAllTags, getPostsByTag } from '@/lib/api';
import Header from '@/components/Header';
import PostList from '@/components/PostList';
import styles from '../../page.module.css';

export const dynamic = 'force-static';
export const revalidate = 3600;

export async function generateStaticParams() {
  const tags = await getAllTags();
  return tags.map((tag) => ({
    tag: tag,
  }));
}

export async function generateMetadata({ params }: { params: { tag: string } }) {
  return {
    title: `Posts tagged "${params.tag}" | WillCap.io`,
    description: `All posts tagged with ${params.tag}`,
  };
}

export default async function TagPage({ params }: { params: { tag: string } }) {
  const posts = await getPostsByTag(params.tag);

  return (
    <>
      <Header title={`Tag: ${params.tag}`}>Posts tagged with {params.tag}</Header>
      <div className={styles.postWrapper}>
        {posts.map((post) => (
          <PostList
            key={post.slug}
            slug={post.slug}
            title={post.title}
            date={post.date}
            tags={post.tags}
            cover={post.cover}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </>
  );
}

