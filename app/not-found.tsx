// ============================================================================
// 404 NOT FOUND PAGE
// ============================================================================

import Link from 'next/link';
import { Home, ArrowRight, FileQuestion } from 'lucide-react';

export const metadata = {
  title: 'Page Not Found | Vidi Agency',
  description: 'The page you are looking for could not be found.',
};

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-[#05060b] text-white flex items-center justify-center p-8 font-sans">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-lg w-full text-center">

        <div className="mb-8">
          <span className="text-[150px] md:text-[200px] font-extrabold leading-none bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent select-none">
            404
          </span>
        </div>

        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg mb-6">
          <FileQuestion className="w-8 h-8 text-blue-400" />
        </div>

        <h1 className="text-3xl font-bold mb-4">
          Page Not Found
        </h1>

        <p className="text-gray-400 mb-8 leading-relaxed text-lg">
          This page doesn't exist or has been moved. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 font-semibold hover:bg-white/10 hover:border-white/20 transition-all"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-500 mb-4">Quick links:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <Link href="/about" className="text-blue-400 hover:text-blue-300 transition-colors">
              About Us
            </Link>
            <span className="text-gray-600">·</span>
            <Link href="/case-studies" className="text-blue-400 hover:text-blue-300 transition-colors">
              Our Work
            </Link>
            <span className="text-gray-600">·</span>
            <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}