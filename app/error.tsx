'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <main className="min-h-screen bg-[#05060b] text-white flex items-center justify-center p-8">
      <div className="max-w-lg w-full text-center">
        {/* Error Icon – using blue/purple gradient background instead of red */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mb-8 shadow-lg shadow-blue-500/20">
          <AlertTriangle className="w-10 h-10 text-white" aria-hidden="true" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 font-space-grotesk">
          Something went wrong
        </h1>

        <p className="text-gray-400 mb-8 leading-relaxed">
          We apologize for the inconvenience. An unexpected error has occurred. 
          Please try again or return to the homepage.
        </p>

        {process.env.NODE_ENV === 'development' && (
          <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/10 text-left backdrop-blur-sm">
            <p className="text-sm font-mono text-red-400 break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-gray-500 mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#05060b]"
          >
            <RefreshCw className="w-5 h-5" aria-hidden="true" />
            Try Again
          </button>
          
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            <Home className="w-5 h-5" aria-hidden="true" />
            Go Home
          </Link>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          If this problem persists, please{' '}
          <Link href="/contact" className="text-blue-400 hover:text-blue-300 underline">
            contact our support team
          </Link>
          .
        </p>
      </div>
    </main>
  );
}