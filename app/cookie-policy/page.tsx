'use client';

import { Shield, Lock, Eye, Cookie, ChevronRight } from 'lucide-react';

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* --- HERO HEADER --- */}
      <div className="border-b border-gray-100 bg-gray-50/50 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 mb-6 border border-blue-100">
            <Shield className="w-3 h-3" />
            Legal Compliance
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Cookie Policy
          </h1>
          <p className="text-lg text-gray-500">
            Transparent information about how we manage data and tracking technologies.
          </p>
          <p className="text-sm text-gray-400 mt-4 font-mono">
            Last Updated: January 8, 2026
          </p>
        </div>
      </div>

      {/* --- CONTENT BODY --- */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg prose-gray max-w-none">
          
          {/* Section 1: Introduction */}
          <section className="mb-12">
            <p className="text-gray-600 leading-relaxed">
              Vidi Agency Inc. ("we", "us", or "our") uses cookies and similar tracking technologies to improve your browsing experience, analyze site traffic, and personalize content. This policy explains what cookies are, how we use them, and your rights regarding their use.
            </p>
          </section>

          {/* Section 2: What Are Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Cookie className="w-6 h-6 text-blue-600" />
              What Are Cookies?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They allow the website to recognize your device and remember your preferences or actions over time.
            </p>
          </section>

          {/* Section 3: How We Use Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Cookies</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card: Essential */}
              <div className="p-6 rounded-xl border border-gray-200 bg-gray-50/50">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Essential Cookies</h3>
                <p className="text-sm text-gray-600">
                  Strictly necessary for the website to function. They enable core features like security, network management, and accessibility. You cannot switch these off.
                </p>
              </div>

              {/* Card: Analytics */}
              <div className="p-6 rounded-xl border border-gray-200 bg-white">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Analytics & Performance</h3>
                <p className="text-sm text-gray-600">
                  Help us understand how visitors interact with our website by collecting and reporting information anonymously (e.g., Google Analytics).
                </p>
              </div>

            </div>
          </section>

          {/* Section 4: Managing Preferences */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Your Preferences</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You can change your cookie preferences at any time by adjusting your browser settings. Please note that disabling essential cookies may affect the functionality of our website.
            </p>
            <ul className="space-y-3 mt-4">
              {['Google Chrome', 'Safari', 'Firefox', 'Microsoft Edge'].map((browser) => (
                <li key={browser} className="flex items-center gap-2 text-blue-600 hover:underline cursor-pointer text-sm font-medium">
                  <ChevronRight className="w-4 h-4" />
                  Manage cookies in {browser}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 5: Contact */}
          <section className="bg-gray-900 text-white rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-4">Questions about our policy?</h2>
            <p className="text-gray-400 mb-6">
              If you have any questions about our use of cookies or your personal data, please contact our privacy team.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Contact Privacy Team
            </a>
          </section>

        </div>
      </div>
    </main>
  );
}