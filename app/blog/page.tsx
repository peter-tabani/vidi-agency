import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogClient from "@/components/BlogClient";
import { getAllPosts, getAllCategories, getAllTags } from '@/lib/posts';

export const metadata = {
  title: "Blog & Resources | Vidi Agency",
  description: "Stay updated with the latest insights on web development, AI automation, digital transformation, and industry trends.",
};

export default function BlogPage() {
  // This is a Server Component - fs operations are safe here
  const allPosts = getAllPosts();
  const categories = getAllCategories();
  const allTags = getAllTags();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Pass server-fetched data to the client component */}
      <BlogClient 
        allPosts={allPosts} 
        categories={categories} 
        allTags={allTags} 
      />

      <Footer />
    </main>
  );
}
 