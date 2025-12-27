// Content of components/PostDetailClient.tsx (235 lines)
"use client";

import React from 'react';
import Link from 'next/link';
import { Calendar, User, Zap, Tag, ArrowLeft, ArrowRight, Share2, BookOpen } from 'lucide-react';
import { Post } from '@/lib/posts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface PostDetailClientProps {
  post: Post;
  relatedPosts: Post[];
}

export default function PostDetailClient({ post, relatedPosts }: PostDetailClientProps) {
  return (
    <>
      {/* ============================================================================
          ARTICLE HEADER
          ============================================================================ */}
      <section className="pt-32 pb-12 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-blue-50 to-purple-50 border-b border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 font-semibold">
            <ArrowLeft size={18} />
            Back to Blog
          </Link>

          <div className="inline-block px-3 py-1 bg-blue-100 rounded-full mb-6">
            <span className="text-sm font-bold text-blue-600">{post.category}</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-gray-700 mb-8">
            {post.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <User size={18} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{post.author}</p>
                <p className="text-xs text-gray-600">Author</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Calendar size={20} className="text-blue-600" />
              <div>
                <p className="text-sm font-semibold text-gray-900">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p className="text-xs text-gray-600">Published</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Zap size={20} className="text-blue-600" />
              <div>
                <p className="text-sm font-semibold text-gray-900">{post.readTime} min read</p>
                <p className="text-xs text-gray-600">Reading time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          ARTICLE CONTENT
          ============================================================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ node, ...props }) => <h1 className="text-4xl font-extrabold text-gray-900 mt-12 mb-6" {...props} />,
                h2: ({ node, ...props }) => <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4" {...props} />,
                h3: ({ node, ...props }) => <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3" {...props} />,
                p: ({ node, ...props }) => <p className="text-gray-700 leading-relaxed mb-6" {...props} />,
                ul: ({ node, ...props }) => <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2" {...props} />,
                ol: ({ node, ...props }) => <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2" {...props} />,
                li: ({ node, ...props }) => <li className="text-gray-700" {...props} />,
                blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-blue-600 pl-6 py-2 my-6 italic text-gray-700 bg-blue-50 p-4 rounded" {...props} />,
                code: ({ node, inline, className, children, ...props }: any) => {
                  if (!inline) {
                    return (
                      <code className="block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 text-sm font-mono" {...props}>
                        {children}
                      </code>
                    );
                  }
                  return (
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600" {...props}>
                      {children}
                    </code>
                  );
                },
                a: ({ node, ...props }) => <a className="text-blue-600 hover:underline font-semibold" {...props} />,
                img: ({ node, ...props }) => <img className="rounded-lg my-6 max-w-full" {...props} />,
                table: ({ node, ...props }) => <table className="w-full border-collapse border border-gray-300 my-6" {...props} />,
                th: ({ node, ...props }) => <th className="border border-gray-300 bg-gray-100 px-4 py-2 text-left font-bold" {...props} />,
                td: ({ node, ...props }) => <td className="border border-gray-300 px-4 py-2" {...props} />,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-12 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {post.tags.map(tag => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition-all font-semibold"
                  >
                    <Tag size={16} />
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Share Section */}
          <div className="mt-12 pt-12 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Share this article</h3>
            <div className="flex gap-4">
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all font-semibold">
                <Share2 size={18} />
                Share
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          RELATED POSTS
          ============================================================================ */}
      {relatedPosts.length > 0 && (
        <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-12">Related Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map(relatedPost => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-40 flex items-center justify-center group-hover:from-blue-600 group-hover:to-purple-700 transition-all">
                    <BookOpen size={40} className="text-white/30" />
                  </div>

                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-blue-100 rounded-full mb-4">
                      <span className="text-xs font-bold text-blue-600">{relatedPost.category}</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-xs text-gray-600 flex items-center gap-1">
                        <Zap size={12} />
                        {relatedPost.readTime} min
                      </span>
                      <ArrowRight size={16} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================================
          CTA SECTION
          ============================================================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help transform your business with our services.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-lg"
          >
            Start Your Project
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
