// API utility functions for fetching blog data

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

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

export async function getAllPosts(): Promise<PostSummary[]> {
  const res = await fetch(`${API_URL}/api/posts`, {
    next: { revalidate: 3600 }, // Revalidate every hour
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  
  return res.json();
}

export async function getPost(slug: string): Promise<Post> {
  const res = await fetch(`${API_URL}/api/posts/${slug}`, {
    next: { revalidate: 3600 },
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }
  
  return res.json();
}

export async function getAllTags(): Promise<string[]> {
  const res = await fetch(`${API_URL}/api/tags`, {
    next: { revalidate: 3600 },
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch tags');
  }
  
  return res.json();
}

export async function getPostsByTag(tag: string): Promise<PostSummary[]> {
  const res = await fetch(`${API_URL}/api/posts/tag/${tag}`, {
    next: { revalidate: 3600 },
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch posts by tag');
  }
  
  return res.json();
}

export async function getSiteConfig(): Promise<SiteConfig> {
  const res = await fetch(`${API_URL}/api/site-config`, {
    next: { revalidate: 86400 }, // Revalidate daily
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch site config');
  }
  
  return res.json();
}

