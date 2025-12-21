"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Scale } from 'lucide-react';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-6 md:px-12 lg:px-20 max-w-4xl">
        <div className="bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
          <Scale size={32} />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-gray-500 mb-12">Last updated: December 2025</p>

        <div className="prose prose-lg prose-blue text-gray-600">
          <h3>1. Agreement to Terms</h3>
          <p>
            By accessing our website and using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>

          <h3>2. Intellectual Property Rights</h3>
          <p>
            Unless otherwise indicated, the Site and our Services are our proprietary property. However, upon full payment for custom development projects, the specific intellectual property rights for the developed code and assets are transferred to the client as detailed in our Master Services Agreement (MSA).
          </p>

          <h3>3. Client Obligations</h3>
          <p>
            You agree to provide timely feedback, necessary assets (logos, content), and approvals to ensure the project timeline is met. Delays in client feedback may result in project timeline adjustments.
          </p>

          <h3>4. Payment Terms</h3>
          <p>
            Projects typically require a deposit to commence work. Final assets and code are released upon full payment of the remaining balance. We accept payments via Stripe and Bank Transfer.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}