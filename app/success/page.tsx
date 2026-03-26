'use client';

import Link from 'next/link';
import { CheckCircle, ArrowLeft } from 'lucide-react';

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#05060b] flex items-center justify-center p-4">
      <div className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center max-w-md backdrop-blur-xl">

        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/20">
          <CheckCircle className="w-12 h-12 text-white" />
        </div>

        <h1 className="text-3xl font-bold text-white mb-3">Request Received!</h1>

        <p className="text-gray-400 mb-4 leading-relaxed">
          Thank you — we've received your project details and will be in touch within{' '}
          <span className="text-white font-semibold">24 hours</span>.
        </p>

        <p className="text-gray-500 text-sm mb-8">
          Peter and the team will review your requirements and send you a clear,
          fixed-price proposal — no surprises.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}