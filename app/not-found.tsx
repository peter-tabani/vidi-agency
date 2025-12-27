// ============================================================================
// 404 NOT FOUND PAGE
// Displayed when a page is not found
// ============================================================================

import Link from 'next/link';
import { Home, Search, ArrowLeft, FileQuestion } from 'lucide-react';

// ============================================================================
// METADATA
// ============================================================================

export const metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found.',
};

// ============================================================================
// NOT FOUND PAGE COMPONENT
// ============================================================================

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-lg w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <span className="text-[150px] md:text-[200px] font-bold leading-none bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            404
          </span>
        </div>

        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-6">
          <FileQuestion className="w-8 h-8 text-gray-400" aria-hidden="true" />
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="text-gray-400 mb-8 leading-relaxed">
          Oops! The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-semibold hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            <Home className="w-5 h-5" aria-hidden="true" />
            Go Home
          </Link>
          
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
          >
            <Search className="w-5 h-5" aria-hidden="true" />
            View Our Work
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-500 mb-4">Popular pages:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/get-started" className="text-purple-400 hover:text-purple-300 transition-colors">
              Get Started
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/case-studies" className="text-purple-400 hover:text-purple-300 transition-colors">
              Case Studies
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/blog" className="text-purple-400 hover:text-purple-300 transition-colors">
              Blog
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/contact" className="text-purple-400 hover:text-purple-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
