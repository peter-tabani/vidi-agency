"use client";

import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Heart, Shield, Smartphone, Zap, Lock, Cloud, 
  Check, ArrowRight, Clock, Users, BarChart3, Stethoscope,
  TrendingUp, AlertCircle, Eye, Cpu, Database, Workflow
} from 'lucide-react';

export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* ============================================================================
          HERO SECTION
          ============================================================================ */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Heart size={16} className="text-blue-600" />
              <span className="text-sm font-bold text-blue-600">Healthcare Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              The Future of Healthcare is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Digital</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We engineer HIPAA-compliant digital solutions that transform patient experiences, streamline operations, and build trust. From secure patient portals to mobile apps that patients actually use.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/get-started" 
                className="px-8 py-4 rounded-full text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-xl shadow-lg shadow-blue-200 transition-all"
              >
                Start Your Healthcare Project
                <ArrowRight size={18} className="inline ml-2" />
              </Link>
              <Link 
                href="/case-studies" 
                className="px-8 py-4 rounded-full text-lg font-bold text-blue-600 bg-white border-2 border-blue-200 hover:bg-blue-50 transition-all"
              >
                See Healthcare Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          SERVICES TABLE SECTION
          ============================================================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Healthcare-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Tailored services designed for modern medical practices
            </p>
          </div>

          <div className="space-y-6">
            {/* Custom Web Development */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100 hover:shadow-xl transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <Stethoscope size={32} className="text-white" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Custom Web Development</h3>
                  <p className="text-lg font-semibold text-blue-600 mb-3">Build Your Digital Clinic</p>
                  <p className="text-gray-600 mb-4">
                    We create high-performance, HIPAA-compliant websites that serve as the central hub for your practice. Includes integrated patient intake forms and secure provider portals.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Patient Portal</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Intake Forms</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">HIPAA Compliant</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Secure Messaging</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Medical Web Redesign */}
            <div className="bg-gradient-to-br from-cyan-50 to-white rounded-3xl p-8 border border-cyan-100 hover:shadow-xl transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={32} className="text-white" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Medical Web Redesign</h3>
                  <p className="text-lg font-semibold text-cyan-600 mb-3">Modernize Your Patient Experience</p>
                  <p className="text-gray-600 mb-4">
                    Is your current site slow or outdated? We redesign medical websites to improve load speeds, mobile responsiveness, and patient trust, ensuring you don't lose leads to a "broken" first impression.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">Speed Optimization</span>
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">Mobile First</span>
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">Modern Design</span>
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">SEO Ready</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Healthcare App Development */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 border border-green-100 hover:shadow-xl transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0">
                  <Smartphone size={32} className="text-white" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Healthcare App Development</h3>
                  <p className="text-lg font-semibold text-green-600 mb-3">Your Practice in Their Pocket</p>
                  <p className="text-gray-600 mb-4">
                    Native iOS and Android apps for patient monitoring, medication reminders, and instant messaging between doctors and patients. Built for security and ease of use.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">iOS & Android</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Push Notifications</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Secure Messaging</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Patient Monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* ============================================================================
          WHY REDESIGN SECTION - BEFORE/AFTER COMPARISON
          ============================================================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Why Your Practice Needs a Digital Overhaul
            </h2>
            <p className="text-xl text-gray-600">
              The difference between losing patients and building loyalty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Old, Slow, Non-Compliant */}
            <div className="bg-white rounded-3xl p-8 border-2 border-red-200 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle size={32} className="text-red-500" />
                <h3 className="text-2xl font-bold text-gray-900">Old, Slow, Non-Compliant</h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Outdated design that looks unprofessional",
                  "Slow load times (patients bounce after 3 seconds)",
                  "Not mobile responsive",
                  "No HIPAA compliance measures",
                  "Manual patient intake (paper forms)",
                  "No online appointment booking",
                  "Poor SEO - hard to find on Google",
                  "Security vulnerabilities",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 text-sm">✕</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </ul>
              
              <div className="mt-8 p-4 bg-red-50 rounded-2xl">
                <p className="text-sm text-red-700 font-semibold">
                  📊 Result: 40% of potential patients never call because your site looks outdated
                </p>
              </div>
            </div>

            {/* Vidi-Engineered Medical Machine */}
            <div className="bg-white rounded-3xl p-8 border-2 border-green-200 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Check size={32} className="text-green-500" />
                <h3 className="text-2xl font-bold text-gray-900">Vidi-Engineered Medical Machine</h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Modern, professional design that builds trust",
                  "Lightning-fast load times (under 2 seconds)",
                  "Fully responsive on all devices",
                  "HIPAA-compliant architecture",
                  "Digital patient intake (paperless)",
                  "Online appointment booking system",
                  "SEO-optimized for local search",
                  "Enterprise-grade security",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check size={16} className="text-green-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </ul>
              
              <div className="mt-8 p-4 bg-green-50 rounded-2xl">
                <p className="text-sm text-green-700 font-semibold">
                  📈 Result: 60% increase in new patient inquiries within 3 months
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          APP ADVANTAGE SECTION
          ============================================================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              The App Advantage
            </h2>
            <p className="text-xl text-gray-600">
              How a mobile app increases patient retention and reduces administrative burden
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Increased Patient Retention",
                description: "Patients with app access are 3x more likely to schedule follow-up appointments. Push notifications remind them about medications and appointments.",
                stat: "3x Higher Retention"
              },
              {
                icon: Zap,
                title: "Reduced Phone Calls",
                description: "Patients can message doctors, refill prescriptions, and check test results in-app. Your staff handles 50% fewer routine calls.",
                stat: "50% Fewer Calls"
              },
              {
                icon: BarChart3,
                title: "Better Health Outcomes",
                description: "Real-time patient monitoring, medication reminders, and instant doctor communication lead to better treatment compliance.",
                stat: "Better Compliance"
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100 hover:shadow-xl transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <p className="text-sm font-bold text-blue-700">{item.stat}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
            {/* ============================================================================
          COMPLIANCE & SECURITY SECTION
          ============================================================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Compliance & Security
            </h2>
            <p className="text-xl text-gray-600">
              Your patient data is sacred. We treat it that way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: Shield,
                title: "HIPAA Compliance",
                description: "Full HIPAA compliance with Business Associate Agreements (BAA). All patient data is protected under the strictest healthcare regulations.",
                features: ["Encrypted at rest", "Encrypted in transit", "Access logs", "Audit trails"]
              },
              {
                icon: Lock,
                title: "Data Encryption",
                description: "Military-grade AES-256 encryption for all sensitive data. Patient information is encrypted before it ever leaves your device.",
                features: ["End-to-end encryption", "TLS 1.3", "Key rotation", "Secure backup"]
              },
              {
                icon: Cloud,
                title: "Secure Cloud Hosting",
                description: "Hosted on HIPAA-compliant cloud infrastructure with automatic backups, disaster recovery, and 99.99% uptime guarantee.",
                features: ["AWS/Azure HIPAA", "Auto-scaling", "DDoS protection", "24/7 monitoring"]
              },
              {
                icon: Database,
                title: "Data Privacy",
                description: "We never sell, share, or access your patient data. Your information stays yours. Full compliance with GDPR and CCPA.",
                features: ["Zero-knowledge architecture", "Data ownership", "Privacy policy", "Compliance reports"]
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <Icon size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <div className="space-y-2">
                    {item.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-2">
                        <Check size={16} className="text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Practice?</h3>
            <p className="text-xl mb-8 text-blue-100">
              Let's build a digital solution that your patients will love and your staff will thank you for.
            </p>
            <Link 
              href="/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-lg"
            >
              Start Your Healthcare Project
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================================
          FAQ SECTION
          ============================================================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Is your solution HIPAA compliant?",
                a: "Yes, 100%. All our solutions are built with HIPAA compliance from the ground up. We provide Business Associate Agreements (BAA) and handle all encryption, access controls, and audit logging."
              },
              {
                q: "How long does it take to build a healthcare website?",
                a: "Typically 4-8 weeks depending on complexity. We work in sprints to get you live features quickly while maintaining security standards."
              },
              {
                q: "Can you migrate my existing patient data?",
                a: "Yes, we handle secure data migration from your current system. We ensure zero data loss and maintain HIPAA compliance throughout the process."
              },
              {
                q: "What about ongoing support and updates?",
                a: "We provide 24/7 monitoring, security updates, and technical support. Your system is always protected and up-to-date."
              },
              {
                q: "Do you integrate with EHR systems like Epic or Cerner?",
                a: "Yes, we can integrate with most major EHR systems. We'll discuss your specific needs during the discovery call."
              },
              {
                q: "What's the cost?",
                a: "Costs vary based on complexity and features. Use our quote calculator to get an estimate, or schedule a call to discuss your specific needs."
              },
            ].map((item, idx) => (
              <details key={idx} className="group border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all cursor-pointer">
                <summary className="flex items-center justify-between font-bold text-lg text-gray-900">
                  {item.q}
                  <span className="text-2xl text-gray-400 group-open:rotate-180 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Custom animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </main>
  );
}


