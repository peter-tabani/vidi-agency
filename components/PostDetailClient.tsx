"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Tag, ArrowLeft, Share2, Linkedin, Twitter } from 'lucide-react';

// Flexible post type that matches what lib/posts returns
interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
  excerpt: string;
  categories?: string[];
  tags?: string[];
  coverImage?: string;
}

// Related posts may not have all fields, so we accept a simpler type
interface RelatedPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  categories?: string[];
}

interface PostDetailClientProps {
  post: Post;
  relatedPosts: RelatedPost[];
}

export default function PostDetailClient({ post, relatedPosts }: PostDetailClientProps) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <article className="py-20 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to blog
        </Link>

        {post.coverImage && (
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 font-space-grotesk">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
          {post.categories && post.categories.length > 0 && (
            <span className="flex items-center gap-1">
              <Tag className="w-4 h-4" />
              {post.categories.join(', ')}
            </span>
          )}
        </div>

        <div
          className="prose prose-invert prose-lg max-w-none
            prose-headings:text-white prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4
            prose-p:text-gray-300 prose-p:leading-relaxed
            prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white
            prose-ul:text-gray-300 prose-li:marker:text-blue-400
            prose-code:text-blue-300 prose-code:bg-white/5 prose-code:px-1 prose-code:rounded
            prose-pre:bg-white/10 prose-pre:border prose-pre:border-white/10"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-sm font-semibold text-gray-400 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/5 text-gray-400 text-xs rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Share2 className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-500">Share this article</span>
          </div>
          <div className="flex gap-3">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Share on Twitter"
            >
              <Twitter className="w-4 h-4 text-gray-400" />
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-gray-400" />
            </a>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-8 border-t border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6 font-space-grotesk">Related articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(related => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1"
                >
                  <span className="text-xs text-gray-500">
                    {new Date(related.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2 mb-2 group-hover:text-blue-400 transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2">{related.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}