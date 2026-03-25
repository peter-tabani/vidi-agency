import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogClient from "@/components/BlogClient";
import { getAllPosts, getAllCategories, getAllTags } from '@/lib/posts';

export const metadata = {
  title: "Blog & Resources | Vidi Agency",
  description: "Stay updated with the latest insights on industrial AI, manufacturing automation, and digital transformation.",
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  const categories = getAllCategories();
  const allTags = getAllTags();

  return (
    <main className="min-h-screen bg-[#05060b] text-white">
      <Navbar />
      <BlogClient 
        allPosts={allPosts} 
        categories={categories} 
        allTags={allTags} 
      />
      <Footer />
    </main>
  );
}