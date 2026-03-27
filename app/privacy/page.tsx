

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-32 pb-20 container mx-auto px-6 md:px-12 lg:px-20 max-w-4xl">
        <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
          <Shield size={32} />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-500 mb-12">Last updated: January 2026</p>

        <div className="prose prose-lg prose-blue text-gray-600 space-y-8">

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">1. Who We Are</h3>
            <p>
              Vidi Agency Ltd is an industrial AI company based in Nairobi, Kenya. We build private AI assistants
              for heavy equipment manufacturers, fall protection companies, loading platform providers, EHS teams,
              and field operations. You can reach us at{' '}
              <a href="mailto:peter@vidiagencyltd.com" className="text-blue-600 hover:underline">
                peter@vidiagencyltd.com
              </a>.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">2. Data We Collect</h3>
            <p>When you contact us or submit a project request, we collect:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Identity data:</strong> your name and job title.</li>
              <li><strong>Contact data:</strong> your email address, phone number, and company name.</li>
              <li><strong>Project data:</strong> details about your business, systems, and requirements that you share with us.</li>
              <li><strong>Technical data:</strong> IP address, browser type, and pages visited on our website.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Data</h3>
            <p>We use your data to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Respond to your project enquiry and prepare a proposal.</li>
              <li>Deliver and support the AI systems we build for you.</li>
              <li>Send you relevant updates about your project or our services (you can opt out at any time).</li>
            </ul>
            <p className="mt-3">
              We do not sell your data. We do not share your data with third parties except where required to deliver
              the service (e.g. email delivery providers).
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">4. Your Engineering Data & Documents</h3>
            <p>
              When we build an AI assistant for your organisation, the documents, manuals, drawings, and operational
              data you provide remain yours. We do not use your engineering data to train models for other clients.
              Your data stays within your infrastructure — fully closed-loop and private.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">5. Data Security</h3>
            <p>
              We apply appropriate technical and organisational measures to protect your personal data from
              unauthorised access, loss, or disclosure. All communication with our systems uses encrypted connections.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">6. Your Rights</h3>
            <p>
              You have the right to request access to, correction of, or deletion of your personal data at any time.
              To make a request, email us at{' '}
              <a href="mailto:peter@vidiagencyltd.com" className="text-blue-600 hover:underline">
                peter@vidiagencyltd.com
              </a>.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">7. Cookies</h3>
            <p>
              Our website uses only essential cookies required for the site to function. We do not use advertising
              or tracking cookies.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">8. Contact</h3>
            <p>
              For any privacy-related questions, contact Peter Frank at{' '}
              <a href="mailto:peter@vidiagencyltd.com" className="text-blue-600 hover:underline">
                peter@vidiagencyltd.com
              </a>.
            </p>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}