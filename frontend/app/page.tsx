import { getAllPosts } from '@/lib/api';
import Header from '@/components/Header';
import PostList from '@/components/PostList';
import CardClickTracker from '@/components/CardClickTracker';
import styles from './page.module.css';

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <>
      <Header title="Will Cap">Hello, I&apos;m Will</Header>
      <div className={styles.postWrapper}>
        {posts.map((post) => (
          <CardClickTracker key={post.slug} slug={post.slug}>
            <PostList
              slug={post.slug}
              title={post.title}
              date={post.date}
              tags={post.tags}
              cover={post.cover}
              excerpt={post.excerpt}
              preview={post.preview}
            />
          </CardClickTracker>
        ))}
      </div>
    </>
  );
}
