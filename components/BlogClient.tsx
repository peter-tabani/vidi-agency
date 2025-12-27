// Content of components/BlogClient.tsx (315 lines)
"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Calendar, Tag, ArrowRight, BookOpen, Zap } from 'lucide-react';
import { Post } from '@/lib/posts'; // Assuming Post interface is exported from lib/posts

interface BlogClientProps {
  allPosts: Post[];
  categories: string[];
  allTags: string[];
}

export default function BlogClient({ allPosts, categories, allTags }: BlogClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Filter posts based on search, category, and tag
  const filteredPosts = useMemo(() => {
    let posts = allPosts;

    // Filter by search query
    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      posts = posts.filter(post =>
        post.title.toLowerCase().includes(lowerQuery) ||
        post.excerpt.toLowerCase().includes(lowerQuery) ||
        post.content.toLowerCase().includes(lowerQuery) ||
        post.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      posts = posts.filter(post => post.category === selectedCategory);
    }

    // Filter by tag
    if (selectedTag) {
      posts = posts.filter(post => post.tags?.includes(selectedTag));
    }

    return posts;
  }, [searchQuery, selectedCategory, selectedTag, allPosts]);

  const featuredPost = allPosts[0];

  return (
    <>
      {/* ============================================================================
          HERO SECTION
          ============================================================================ */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <BookOpen size={16} className="text-blue-600" />
              <span className="text-sm font-bold text-blue-600">Insights & Resources</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Blog & Resources
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest insights on web development, AI automation, digital transformation, and industry trends.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          FEATURED POST
          ============================================================================ */}
      {featuredPost && (
        <section className="py-12 px-6 md:px-12 lg:px-20 bg-white border-b border-gray-200">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-blue-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block px-3 py-1 bg-blue-100 rounded-full mb-6">
                    <span className="text-xs font-bold text-blue-600">Featured</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-700 text-lg mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={16} />
                      <span className="text-sm">{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <span className="text-sm">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Zap size={16} />
                      <span className="text-sm">{featuredPost.readTime} min read</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all"
                  >
                    Read Article
                    <ArrowRight size={18} />
                  </Link>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl h-64 md:h-80 flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen size={64} className="text-white/30 mx-auto mb-4" />
                    <p className="text-white/50 font-semibold">Featured Article</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================================
          FILTERS
          ============================================================================ */}
      <section className="py-12 px-6 md:px-12 lg:px-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto max-w-6xl">
          {/* Categories */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">Categories</h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600'
                }`}
              >
                All Articles
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Tags */}
          {allTags.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                      selectedTag === tag
                        ? 'bg-purple-600 text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:border-purple-600'
                    }`}
                  >
                    <Tag size={14} className="inline mr-1" />
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================================
          BLOG POSTS GRID
          ============================================================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="container mx-auto max-w-6xl">
          {filteredPosts.length > 0 ? (
            <>
              <div className="mb-12">
                <p className="text-gray-600 text-lg">
                  Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map(post => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all"
                  >
                    {/* Placeholder Image */}
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-48 flex items-center justify-center group-hover:from-blue-600 group-hover:to-purple-700 transition-all">
                      <BookOpen size={48} className="text-white/30" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="inline-block px-3 py-1 bg-blue-100 rounded-full mb-4">
                        <span className="text-xs font-bold text-blue-600">{post.category}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {post.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Meta */}
                      <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                        <div className="flex items-center gap-4 text-xs text-gray-600">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Zap size={14} />
                            {post.readTime} min
                          </span>
                        </div>
                        <ArrowRight size={18} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <BookOpen size={64} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================================
          CTA SECTION
          ============================================================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Explore our services and see how we can help you achieve your digital goals.
          </p>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-lg"
          >
            Explore Solutions
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </>
  );
}
