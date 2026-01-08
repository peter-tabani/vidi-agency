// ============================================================================
// 404 NOT FOUND PAGE
// Displayed when a page is not found
// ============================================================================

import Link from 'next/link';
import { Home, Search, FileQuestion } from 'lucide-react';

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
    <main className="min-h-screen bg-gray-50 text-gray-900 flex items-center justify-center p-8 font-sans">
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-lg w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <span className="text-[150px] md:text-[200px] font-extrabold leading-none bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent select-none">
            404
          </span>
        </div>

        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-lg mb-6">
          <FileQuestion className="w-8 h-8 text-blue-600" aria-hidden="true" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
          Oops! The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Home className="w-5 h-5" aria-hidden="true" />
            Go Home
          </Link>
          
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
          >
            <Search className="w-5 h-5" aria-hidden="true" />
            View Our Work
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Popular pages:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <Link href="/get-started" className="text-blue-600 hover:text-purple-600 transition-colors">
              Get Started
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/case-studies" className="text-blue-600 hover:text-purple-600 transition-colors">
              Case Studies
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/blog" className="text-blue-600 hover:text-purple-600 transition-colors">
              Blog
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/contact" className="text-blue-600 hover:text-purple-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}