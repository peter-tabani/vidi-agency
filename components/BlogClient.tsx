"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Eye, ArrowRight, BookOpen, ChevronRight } from 'lucide-react';
import { Post } from '@/lib/posts';

interface BlogClientProps {
  allPosts: Post[];
  categories: string[];
  allTags: string[];
}

export default function BlogClient({ allPosts, categories, allTags }: BlogClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [visibleCount, setVisibleCount] = useState(6);

  // Get category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { 'All Categories': allPosts.length };
    allPosts.forEach(post => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    return counts;
  }, [allPosts]);

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    let posts = allPosts;

    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      posts = posts.filter(post =>
        post.title.toLowerCase().includes(lowerQuery) ||
        post.excerpt.toLowerCase().includes(lowerQuery) ||
        post.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
      );
    }

    if (selectedCategory !== 'All Categories') {
      posts = posts.filter(post => post.category === selectedCategory);
    }

    return posts;
  }, [searchQuery, selectedCategory, allPosts]);

  const displayedPosts = filteredPosts.slice(0, visibleCount);
  const hasMorePosts = visibleCount < filteredPosts.length;

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const getViewCount = (slug: string) => {
    const hash = slug.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0);
    return Math.abs(hash % 500) + 10;
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="pt-32 pb-8 px-6 md:px-12 lg:px-20 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">All Blogs</h1>
          <p className="text-lg text-gray-600">Insights, tutorials, and updates from the Vidi Agency team</p>
        </div>
      </section>

      {/* MAIN CONTENT - Two Column Layout */}
      <section className="py-8 px-6 md:px-12 lg:px-20 bg-white min-h-screen">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* SIDEBAR */}
            <aside className="lg:w-72 flex-shrink-0">
              <div className="lg:sticky lg:top-24 space-y-8">
                
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search Blog"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                  />
                </div>

                {/* Categories */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Browse by Categories</h3>
                  <ul className="space-y-1">
                    {['All Categories', ...categories].map(category => (
                      <li key={category}>
                        <button
                          onClick={() => {
                            setSelectedCategory(category);
                            setVisibleCount(6);
                          }}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-all ${
                            selectedCategory === category
                              ? 'bg-orange-50 border-l-4 border-orange-500 text-orange-700 font-semibold'
                              : 'hover:bg-gray-50 text-gray-700'
                          }`}
                        >
                          <span className="text-sm">{category}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            selectedCategory === category
                              ? 'bg-orange-100 text-orange-700'
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {categoryCounts[category] || 0}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Box */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-2">Need a Custom Solution?</h3>
                  <p className="text-sm text-blue-100 mb-4">Let&apos;s discuss how we can help transform your business.</p>
                  <Link href="/get-started" className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors">
                    Start Project
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </aside>

            {/* BLOG POSTS GRID */}
            <main className="flex-1">
              {filteredPosts.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {displayedPosts.map(post => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                      >
                        {/* Card Image */}
                        <div className="relative h-52 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                          {post.image ? (
                            <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <BookOpen size={48} className="text-white/30" />
                            </div>
                          )}
                        </div>

                        {/* Card Content */}
                        <div className="p-6">
                          <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">{post.category}</span>
                          <h3 className="text-xl font-bold text-gray-900 mt-3 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">{post.title}</h3>
                          <p className="text-gray-600 text-sm mb-6 line-clamp-2">{post.excerpt}</p>

                          {/* Author & Meta */}
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                              {post.author.charAt(0)}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-900">By {post.author}</p>
                              <p className="text-xs text-gray-500">{post.readTime} Minutes Read</p>
                            </div>
                          </div>

                          {/* Views Only (No Date) */}
                          <div className="flex items-center justify-end pt-4 border-t border-gray-100 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Eye size={14} />
                              {getViewCount(post.slug)} views
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Load More Button */}
                  {hasMorePosts && (
                    <div className="text-center mt-12">
                      <button onClick={loadMore} className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-all">
                        Load More
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  )}

                  <div className="text-center mt-8 text-sm text-gray-500">
                    Showing {displayedPosts.length} of {filteredPosts.length} articles
                  </div>
                </>
              ) : (
                <div className="text-center py-20 bg-gray-50 rounded-2xl">
                  <BookOpen size={64} className="mx-auto text-gray-300 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your search or category filter</p>
                  <button
                    onClick={() => { setSearchQuery(''); setSelectedCategory('All Categories'); }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8">Explore our services and see how we can help you achieve your digital goals.</p>
          <Link href="/solutions" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-lg">
            Explore Solutions
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
