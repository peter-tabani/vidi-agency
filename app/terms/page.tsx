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
        <p className="text-gray-500 mb-12">Last updated: January 2026</p>

        <div className="prose prose-lg prose-blue text-gray-600 space-y-8">

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">1. Agreement</h3>
            <p>
              By engaging Vidi Agency Ltd for services, you agree to these terms. These terms apply to all project
              agreements, consultations, and AI implementations delivered by Vidi Agency Ltd, Nairobi, Kenya.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">2. Our Services</h3>
            <p>
              Vidi Agency Ltd builds private AI assistants and automation systems for industrial organisations.
              This includes engineering knowledge assistants, lead capture systems, EHS compliance tools,
              customer support automation, and document analysis — trained on your own documents and data.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">3. Intellectual Property</h3>
            <p>
              Upon full payment, the AI system, integrations, and custom code built for your organisation
              are yours. We do not retain rights to the specific implementation. Your engineering documents,
              manuals, and data remain your property at all times — before, during, and after the project.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">4. Client Obligations</h3>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Provide access to the documents, manuals, and systems required to build your AI assistant.</li>
              <li>Respond to queries and provide approvals in a timely manner to keep the project on schedule.</li>
              <li>Ensure that any documents or data you share with us are owned by you or that you have the right to use them.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">5. Payment</h3>
            <p>
              Projects require a deposit before work begins. The remaining balance is due upon delivery and
              before handover of the final system. Payment terms are confirmed in writing for each project.
              We accept bank transfer and major payment methods as agreed per project.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">6. Post-Launch Support</h3>
            <p>
              Every project includes a 30-day period during which we fix any defects in the delivered system
              at no additional cost. Extended support and optimisation can be arranged separately.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">7. Confidentiality</h3>
            <p>
              We treat all client data, engineering documents, and operational information as strictly
              confidential. We do not share your data with any third party without your explicit consent,
              except as required to deliver the agreed service.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">8. Limitation of Liability</h3>
            <p>
              Vidi Agency Ltd is not liable for decisions made based on AI-generated outputs. All AI systems
              we build are tools to assist your team — final decisions remain with your qualified personnel.
              We are not liable for third-party service outages (e.g. cloud providers, AI API providers)
              that are outside our control.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">9. Contact</h3>
            <p>
              For any questions about these terms, contact Peter Frank at{' '}
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