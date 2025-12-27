import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostDetailClient from "@/components/PostDetailClient";
import { getPostBySlug, getRelatedPosts } from '@/lib/posts';
import { ArrowLeft } from 'lucide-react';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const post = getPostBySlug(params.slug);
    return {
      title: `${post.title} | Vidi Agency Blog`,
      description: post.excerpt,
    };
  } catch (error) {
    return {
      title: "Article Not Found | Vidi Agency Blog",
      description: "The article you're looking for doesn't exist.",
    };
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // This is a Server Component - fs operations are safe here
  let post;
  let relatedPosts;

  try {
    post = getPostBySlug(params.slug);
    relatedPosts = getRelatedPosts(params.slug, 3);
  } catch (error) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
            <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all">
              <ArrowLeft size={18} />
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Pass server-fetched data to the client component */}
      <PostDetailClient 
        post={post} 
        relatedPosts={relatedPosts} 
      />

      <Footer />
    </main>
  );
}
            