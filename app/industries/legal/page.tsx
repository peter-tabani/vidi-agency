    "use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Scale, Shield, Lock, CheckCircle2, ArrowRight, 
  FileText, Users, Zap, BarChart3, Clock, Eye,
  Database, Briefcase, TrendingUp, AlertCircle, 
  Lightbulb, Award, Globe, Smartphone, Code2,
  MessageSquare, Calendar, DollarSign, Layers
} from 'lucide-react';

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState('law-firms');

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* ============================================================================
          HERO SECTION - PREMIUM & AUTHORITATIVE
          ============================================================================ */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
        {/* Animated background with premium feel */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-slate-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border b  order-blue-400/30 rounded-full mb-6">
              <Scale size={16} className="text-blue-300" />
              <span className="text-sm font-bold text-blue-300">Legal Technology Solutions</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Digital Transformation for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Legal Excellence</span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
  Modern, secure digital solutions designed for law firms, legal departments, and compliance professionals. 
  We build technology that helps you work more efficiently while maintaining the highest security standards.
</p>

            <Link 
              href="/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-bold text-lg hover:shadow-2xl shadow-lg shadow-blue-600/50 transition-all"
            >
              Explore Legal Solutions
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
        
      </section>

      {/* ============================================================================
          SERVICES FOR LEGAL PROFESSIONALS
          ============================================================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Specialized Legal Services
            </h2>
            <p className="text-xl text-gray-600">
              Built for law firms, legal departments, and compliance teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'Client Portal & Case Management',
                desc: 'Secure, encrypted client portals with document management, case tracking, and real-time communication. HIPAA and attorney-client privilege compliant.',
                features: ['Encrypted file sharing', 'Case timeline tracking', 'Secure messaging', 'Document automation']
              },
              {
                icon: Database,
                title: 'Legal AI & Research Tools',
                desc: 'AI-powered legal research, contract analysis, and document review. Reduce research time by 70% while maintaining accuracy.',
                features: ['Contract analysis', 'Legal research automation', 'Precedent discovery', 'Risk assessment']
              },
              {
                icon: Users,
                title: 'Intake & Onboarding Automation',
                desc: 'Automated client intake forms with intelligent routing. Qualify leads, collect information, and reduce manual data entry by 80%.',
                features: ['Smart intake forms', 'Lead qualification', 'Auto-routing', 'CRM integration']
              },
              {
                icon: BarChart3,
                title: 'Practice Analytics & Billing',
                desc: 'Real-time billing, time tracking, and practice analytics. Maximize profitability and identify growth opportunities.',
                features: ['Time tracking', 'Automated billing', 'Revenue analytics', 'Profitability reports']
              },
              {
                icon: Shield,
                title: 'Compliance & Security',
                desc: 'Enterprise-grade security with SOC 2 compliance, encryption, and audit trails. Meet all regulatory requirements.',
                features: ['SOC 2 certified', 'End-to-end encryption', 'Audit trails', 'GDPR compliant']
              },
              {
                icon: Smartphone,
                title: 'Mobile Practice Management',
                desc: 'Manage your practice on the go. Access cases, documents, and client communications from anywhere, securely.',
                features: ['iOS & Android apps', 'Offline access', 'Push notifications', 'Mobile signatures']
              }
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:border-blue-300">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-6">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-700 mb-6">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
            {/* ============================================================================
          COMPLIANCE & SECURITY - THE DIFFERENTIATOR
          ============================================================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-slate-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Enterprise-Grade Security & Compliance
            </h2>
            <p className="text-xl text-slate-300">
              Your clients' data is sacred. We treat it that way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Lock,
                title: 'End-to-End Encryption',
                desc: 'Military-grade AES-256 encryption for all data in transit and at rest.'
              },
              {
  icon: Shield,
  title: 'Security Certifications',
  desc: 'Built with enterprise security standards and best practices in mind.'
},
              {
                icon: Eye,
                title: 'Audit Trails & Logging',
                desc: 'Complete audit logs for every action, accessible for compliance reviews.'
              },
              {
                icon: Globe,
                title: 'GDPR & CCPA Compliant',
                desc: 'Full compliance with international data protection regulations.'
              },
              {
                icon: Database,
                title: 'Redundant Data Centers',
                desc: '99.99% uptime with automatic failover across multiple regions.'
              },
              {
                icon: Zap,
                title: 'Instant Threat Detection',
                desc: 'Real-time monitoring and AI-powered threat detection systems.'
              },
              {
                icon: FileText,
                title: 'Privilege Log Management',
                desc: 'Automated attorney-client privilege tracking and protection.'
              },
              {
                icon: CheckCircle2,
  title: 'Regular Security Audits',
  desc: 'Ongoing security assessments and vulnerability testing.'
}
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================================
          PRACTICE TYPES - TAILORED SOLUTIONS
          ============================================================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Solutions for Every Practice Type
            </h2>
            <p className="text-xl text-gray-600">
              Whether you're a solo practitioner or a 500-person firm, we have a solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
  type: 'Solo & Small Firms (1-10 attorneys)',
  benefits: [
    'Affordable, scalable pricing',
    'Easy-to-use interface',
    'Automated intake & lead management',
    'Time tracking & billing',
    'Client portal',
    'Mobile access'
  ],
  highlight: 'Perfect for growing practices' // Changed from fake ROI
},
{
  type: 'Mid-Size Firms (11-50 attorneys)',
  benefits: [
    'Multi-user collaboration',
    'Advanced case management',
    'Team workflows & automation',
    'Custom reporting',
    'API integrations',
    'Dedicated support'
  ],
  highlight: 'Scale your operations' // Changed from fake ROI
},
{
  type: 'Large Firms (50+ attorneys)',
  benefits: [
    'Enterprise features',
    'Custom integrations',
    'White-label options',
    'Advanced security',
    'Dedicated account manager',
    'Custom development'
  ],
  highlight: 'Enterprise-grade solutions' // Changed from fake ROI
},
{
  type: 'In-House Legal Departments',
  benefits: [
    'Contract management',
    'Compliance tracking',
    'Matter management',
    'Budget tracking',
    'Vendor management',
    'Risk assessment'
  ],
  highlight: 'Streamline legal operations' // Changed from fake ROI
}
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl p-8 border border-blue-200 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{item.type}</h3>
                <ul className="space-y-3 mb-8">
                  {item.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-blue-200">
                  <p className="text-sm text-gray-600 mb-2">Highlight</p>
                  <p className="text-2xl font-bold text-blue-600">{item.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================================
          SUCCESS METRICS
          ============================================================================ */}
      {/* ============================================================================
    WHAT WE BUILD FOR LEGAL PROFESSIONALS
    ============================================================================ */}
<section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-blue-600 to-blue-700">
  <div className="container mx-auto max-w-6xl">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
        Technology That Works for Your Practice
      </h2>
      <p className="text-xl text-blue-100">
        Modern solutions built specifically for legal professionals
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { 
          icon: Lock, 
          label: 'Encrypted & Secure',
          desc: 'Military-grade data protection'
        },
        { 
          icon: CheckCircle2, 
          label: 'Compliance Ready',
          desc: 'Built for legal requirements'
        },
        { 
          icon: Zap, 
          label: 'Fast Implementation',
          desc: '2-4 week setup process'
        },
        { 
          icon: Users, 
          label: '24/7 Support',
          desc: 'Always here when you need us'
        }
      ].map((item, idx) => {
        const Icon = item.icon;
        return (
          <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
              <Icon size={32} className="text-white" />
            </div>
            <p className="text-xl font-bold text-white mb-2">{item.label}</p>
            <p className="text-blue-100 text-sm">{item.desc}</p>
          </div>
        );
      })}
    </div>
  </div>
</section>
            {/* ============================================================================
    HOW WE HELP LAW FIRMS
    ============================================================================ */}
<section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
  <div className="container mx-auto max-w-6xl">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        Common Challenges We Solve
      </h2>
      <p className="text-xl text-gray-600">
        Real problems legal professionals face every day
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        {
          challenge: "Time-Consuming Client Intake",
          solution: "Automated intake forms with intelligent document collection and e-signature integration",
          icon: FileText
        },
        {
          challenge: "Disorganized Case Management",
          solution: "Centralized case tracking with deadlines, documents, and client communications in one place",
          icon: Layers
        },
        {
          challenge: "Manual Time Tracking",
          solution: "Automated time tracking with mobile apps and billing integration",
          icon: Clock
        },
        {
          challenge: "Inefficient Legal Research",
          solution: "AI-powered research tools that find relevant cases and precedents faster",
          icon: Database
        },
        {
          challenge: "Client Communication Gaps",
          solution: "Secure client portals with messaging, document sharing, and case updates",
          icon: MessageSquare
        },
        {
          challenge: "Data Security Concerns",
          solution: "Enterprise-grade encryption, audit trails, and compliance certifications",
          icon: Shield
        }
      ].map((item, idx) => {
        const Icon = item.icon;
        return (
          <div key={idx} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-4">
              <Icon size={24} className="text-white" />
            </div>
            <div className="mb-4">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Challenge</span>
              <h3 className="text-xl font-bold text-gray-900 mt-1">{item.challenge}</h3>
            </div>
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Our Solution</span>
              <p className="text-gray-700 mt-1">{item.solution}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>
      

      {/* ============================================================================
          FAQ
          ============================================================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Legal Questions Answered
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
  q: "Is my client data truly secure?",
  a: "Yes. We use industry-standard AES-256 encryption for data at rest and in transit, implement role-based access controls, and follow security best practices. We take data protection seriously and can provide detailed security documentation upon request."
},
              {
  q: "How does this comply with attorney-client privilege?",
  a: "Our system is designed with legal professionals in mind. We implement access controls, secure communications, and can configure privilege protection features. However, we recommend consulting with your IT and compliance teams to ensure our solution meets your specific requirements."
},
              {
                q: "Can I integrate with my existing tools?",
                a: "Absolutely. We integrate with LexisNexis, Westlaw, Clio, TimeSolv, and most major legal tech platforms via API."
              },
              {
  q: "What about data portability if I leave?",
  a: "You own your data completely. We provide data exports in standard formats (CSV, JSON, PDF) at any time. No lock-in, no hassle."
},
              {
                q: "How long does implementation take?",
                a: "Typically 2-4 weeks for full implementation, depending on firm size and complexity. We provide dedicated implementation support."
              },
              {
                q: "What kind of support do you provide?",
                a: "24/7 support via chat, email, and phone. Dedicated account managers for enterprise clients. Regular training and best practices guidance."
              }
            ].map((item, idx) => (
              <details key={idx} className="group border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all cursor-pointer bg-white">
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

      {/* ============================================================================
          FINAL CTA
          ============================================================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-slate-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Elevate Your Legal Practice?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Schedule a personalized demo to see how we can transform your practice with secure, compliant, and sophisticated technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg"
            >
              Schedule Your Demo
              <ArrowRight size={20} />
            </Link>
            <Link 
              href="/solutions"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-full font-bold text-lg border border-white/30 hover:bg-white/20 transition-all"
            >
              Explore All Solutions
            </Link>
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
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </main>
  );
}


