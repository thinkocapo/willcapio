import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const CONTENT_DIR = path.join(process.cwd(), '..', 'backend', 'content', 'posts');

export interface Post {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  cover: string | null;
  content: string;
  excerpt: string;
  preview?: string;
}

export interface PostSummary {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  cover: string | null;
  excerpt: string;
  preview?: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  author: string;
  url: string;
  twitter: string;
}

function processImagePaths(html: string, slug: string): string {
  return html.replace(/src="\.\/([^"]+)"/g, `src="/images/${slug}/$1"`);
}

function parseCover(cover: string | undefined, slug: string): string | null {
  if (!cover) return null;
  return `/images/${slug}/${cover.replace('./', '')}`;
}

function makeExcerpt(content: string): string {
  const text = content.replace(/\n/g, ' ').trim();
  return text.length > 150 ? text.slice(0, 150) + '...' : text;
}

function readPost(slug: string): { data: Record<string, unknown>; content: string } | null {
  const indexPath = path.join(CONTENT_DIR, slug, 'index.md');
  if (!fs.existsSync(indexPath)) return null;
  const { data, content } = matter(fs.readFileSync(indexPath, 'utf-8'));
  return { data, content };
}

export async function getAllPosts(): Promise<PostSummary[]> {
  const dirs = fs.readdirSync(CONTENT_DIR).filter((name) =>
    fs.statSync(path.join(CONTENT_DIR, name)).isDirectory()
  );

  const posts: PostSummary[] = [];

  for (const slug of dirs) {
    const parsed = readPost(slug);
    if (!parsed) continue;
    const { data, content } = parsed;
    if (data.published === false) continue;
    posts.push({
      slug,
      title: (data.title as string) || 'Untitled',
      date: data.date ? String(data.date) : '',
      tags: (data.tags as string[]) || [],
      cover: parseCover(data.cover as string | undefined, slug),
      excerpt: makeExcerpt(content),
      preview: (data.preview as string) || undefined,
    });
  }

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPost(slug: string): Promise<Post> {
  const parsed = readPost(slug);
  if (!parsed) throw new Error(`Post not found: ${slug}`);
  const { data, content } = parsed;

  let html = await marked(content);
  html = processImagePaths(html, slug);

  return {
    slug,
    title: (data.title as string) || 'Untitled',
    date: data.date ? String(data.date) : '',
    tags: (data.tags as string[]) || [],
    cover: parseCover(data.cover as string | undefined, slug),
    content: html,
    excerpt: makeExcerpt(content),
    preview: (data.preview as string) || undefined,
  };
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tags = new Set<string>();
  posts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
}

export async function getPostsByTag(tag: string): Promise<PostSummary[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.tags.includes(tag));
}

export async function getSiteConfig(): Promise<SiteConfig> {
  return {
    title: 'WillCap.io',
    description: 'life',
    author: 'Will',
    url: 'https://willcap.io',
    twitter: '@thinkocapo',
  };
}
