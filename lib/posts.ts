// Content of lib/posts.ts (113 lines)
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image?: string;
  readTime: number;
  tags?: string[];
}

// Get all posts
export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      return getPostBySlug(slug);
    })
    .sort((post1, post2) => new Date(post2.date).getTime() - new Date(post1.date).getTime());

  return posts;
}

// Get single post by slug
export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${slug}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // Calculate read time (average 200 words per minute)
  const wordCount = content.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200);

  return {
    slug: realSlug,
    title: data.title || '',
    excerpt: data.excerpt || '',
    content,
    date: data.date || new Date().toISOString(),
    author: data.author || 'Vidi Agency',
    category: data.category || 'General',
    image: data.image,
    readTime,
    tags: data.tags || [],
  };
}

// Get posts by category
export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter(post => post.category.toLowerCase() === category.toLowerCase());
}

// Get posts by tag
export function getPostsByTag(tag: string): Post[] {
  return getAllPosts().filter(post => post.tags?.includes(tag));
}

// Get related posts (same category, excluding current post)
export function getRelatedPosts(slug: string, limit: number = 3): Post[] {
  const currentPost = getPostBySlug(slug);
  return getAllPosts()
    .filter(post => post.slug !== slug && post.category === currentPost.category)
    .slice(0, limit);
}

// Get all unique categories
export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map(post => post.category));
  return Array.from(categories);
}

// Get all unique tags
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();
  posts.forEach(post => {
    post.tags?.forEach(tag => tags.add(tag));
  });
  return Array.from(tags);
}

// Search posts
export function searchPosts(query: string): Post[] {
  const lowerQuery = query.toLowerCase();
  return getAllPosts().filter(post =>
    post.title.toLowerCase().includes(lowerQuery) ||
    post.excerpt.toLowerCase().includes(lowerQuery) ||
    post.content.toLowerCase().includes(lowerQuery) ||
    post.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}
