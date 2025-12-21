"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-6 md:px-12 lg:px-20 max-w-4xl">
        <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
          <Shield size={32} />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-500 mb-12">Last updated: December 2025</p>

        <div className="prose prose-lg prose-blue text-gray-600">
          <h3>1. Introduction</h3>
          <p>
            Welcome to Vidi Agency. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you as to how we look after your personal data when you visit our website 
            and tell you about your privacy rights.
          </p>

          <h3>2. Data We Collect</h3>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
          </p>
          <ul>
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
          </ul>

          <h3>3. How We Use Your Data</h3>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul>
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          </ul>

          <h3>4. Data Security</h3>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}