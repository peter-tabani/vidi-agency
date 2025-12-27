'use client';

// ============================================================================
// GLOBAL ERROR PAGE
// Handles runtime errors in the application
// ============================================================================

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

// ============================================================================
// ERROR PAGE COMPONENT
// ============================================================================

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="max-w-lg w-full text-center">
        {/* Error Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/20 mb-8">
          <AlertTriangle className="w-10 h-10 text-red-400" aria-hidden="true" />
        </div>

        {/* Error Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Something went wrong
        </h1>

        {/* Error Description */}
        <p className="text-gray-400 mb-8 leading-relaxed">
          We apologize for the inconvenience. An unexpected error has occurred. 
          Please try again or return to the homepage.
        </p>

        {/* Error Details (Development Only) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-8 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-left">
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

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-semibold hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            <RefreshCw className="w-5 h-5" aria-hidden="true" />
            Try Again
          </button>
          
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
          >
            <Home className="w-5 h-5" aria-hidden="true" />
            Go Home
          </Link>
        </div>

        {/* Help Text */}
        <p className="mt-8 text-sm text-gray-500">
          If this problem persists, please{' '}
          <Link href="/contact" className="text-purple-400 hover:text-purple-300 underline">
            contact our support team
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
