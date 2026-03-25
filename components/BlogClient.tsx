"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Tag, Search, X } from 'lucide-react';

// Use a flexible interface that matches what lib/posts returns
interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  categories?: string[];      // optional
  tags?: string[];            // optional
  // add any other fields that exist in your actual data
}

interface BlogClientProps {
  allPosts: Post[];
  categories: string[];       // these come from getAllCategories, so they're safe
  allTags: string[];
}

export default function BlogClient({ allPosts, categories, allTags }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = selectedCategory
      ? (post.categories || []).includes(selectedCategory)
      : true;
    const matchesSearch = searchQuery
      ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.tags || []).some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      : true;
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-space-grotesk">
            Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Resources</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Practical guides, case studies, and technical deep‑dives on industrial AI, manufacturing automation, and operational intelligence.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors
                ${!selectedCategory 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors
                  ${selectedCategory === cat 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                    {post.categories && post.categories.length > 0 && (
                      <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded-full text-[10px] font-bold">
                        {post.categories[0]}
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}