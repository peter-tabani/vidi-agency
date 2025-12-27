"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  // Generic Icons
  CheckCircle2, ArrowRight, Lightbulb, AlertCircle, 
  // Industry Icons
  Stethoscope, // For Medical
  Gavel,       // For Lawyers
  Hammer,      // For Contractors
  ShoppingBag, // For Retail
  Home,        // For Real Estate
  Briefcase    // For Professional Services
} from 'lucide-react';

export default function SolutionsPage() {
  // Changed default state to the first industry
  const [activeSolution, setActiveSolution] = useState('medical');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  // ... (Section 2 goes below)
  const solutions = {
    'medical': {
      title: 'For Dental & Medical Clinics',
      subtitle: 'Turn Your Digital Presence into Your Best Patient Advocate',
      icon: Stethoscope,
      color: 'from-cyan-500 to-blue-600',
      problem: 'You provide world-class care, but if patients can’t find you on Google or struggle to book an appointment, they’ll choose the clinic that’s easier to reach.',
      solution: 'We build high-converting websites that bridge the gap between a search and a visit. With One-Click Booking and Local SEO, we make sure you are the first—and most trusted—option patients see.',
      benefits: [
        '24/7 Online Scheduling: 89% of patients prefer to book online.',
        'Trust-Building Portfolios: Patient reviews and "Before & After" galleries.',
        'Google Maps Dominance: Be visible the moment someone searches "clinic near me".',
        'Professional & Clean Design',
        'HIPAA-Compliant Security: Protecting your practice and your patients.'
      ],
      roi: '+40% New Patients',
      timeline: '4-6 weeks'
    },
    'legal': {
  title: 'For Law Firms & Attorneys',
  subtitle: 'Turn Your Expertise into Unshakable Digital Authority',
  icon: Gavel,
  color: 'from-slate-700 to-slate-900',
  problem: 'High-value clients are looking for certainty. If your digital presence doesn’t reflect the caliber of your success, you’re losing your best cases to competitors who simply "look the part."',
  solution: 'We build "Power-Positioned" websites that validate your expertise, showcase your wins, and use smart intake systems to filter for the high-quality cases you actually want.',
  benefits: [
    'Proven Case Result Showcases',
    'Smart Automated Client Intake',
    'Strategic Practice Area Silos',
    'High-Impact Attorney Profiles',
    'Ultra-Fast Mobile Experience'
  ],
  roi: '+35% Qualified Lead Quality',
  timeline: '4-6 weeks'
},
    'trades': {
  title: 'For Contractors & Home Services',
  subtitle: 'Trade Your "Price-Shoppers" for Premium Contracts',
  icon: Hammer,
  color: 'from-orange-600 to-red-700',
  problem: 'Relying on word-of-mouth makes your income unpredictable, and expensive lead-gen sites often send you "tire-kickers" who only care about the lowest price.',
  solution: 'We build "Visual Authority" websites that pre-sell your craftsmanship. We help you dominate local search and use smart filtering forms so you only spend time on the high-value jobs you actually want.',
  benefits: [
    'High-Res Project Transformations',
    'Pre-Qualifying Quote Requests',
    'Local Service Area Dominance',
    'Live Google Review Feeds',
    'Job-Site Optimized Mobile Design'
  ],
  roi: '2x Higher Lead Quality',
  timeline: '3-5 weeks'
},
    'real-estate': {
  title: 'For Real Estate Professionals',
  subtitle: 'Own Your Market. Stop Renting Your Leads.',
  icon: Home,
  color: 'from-emerald-600 to-teal-700',
  problem: 'Massive portals are turning you into a commodity and charging you for your own leads. Without a powerhouse personal brand, you’re just another name on a list instead of the local authority.',
  solution: 'We build "Digital Headquarters" that move you from "agent" to "advisor." We integrate live market data and high-conversion tools that prove to sellers you have the tech stack to get their home sold for top dollar.',
  benefits: [
    'Seamless Live MLS Integration',
    'Interactive Neighborhood Authority Guides',
    'Instant Home Valuation "Hook" Tools',
    'Elite Personal Branding & Video Hero Sections',
    'Automated Seller-Leads Capture Funnels'
  ],
  roi: 'Higher Seller-Listing Conversion',
  timeline: '5-7 weeks'
},
    'ecommerce': {
  title: 'For Retail & E-Commerce',
  subtitle: 'Outperform the Giants. Turn Traffic into Transactions.',
  icon: ShoppingBag,
  color: 'from-pink-600 to-rose-700',
  problem: 'Traffic is expensive, and every "bounce" is money wasted. If your store feels slow or generic, customers will abandon their carts to find the convenience of Amazon or a competitor.',
  solution: 'We engineer high-velocity storefronts that remove every "friction point" from the buying journey. From psychological triggers to lightning-fast checkouts, we build a brand experience that builds loyalty and maximizes every visitor’s value.',
  benefits: [
    'One-Click Frictionless Checkout',
    'Psychological Conversion Triggers',
    'AI-Driven Cross-Sells & Upsells',
    'Automated Retention & Recovery Flows',
    'Lightning-Fast Mobile Architecture'
  ],
  roi: '+45% Customer Lifetime Value',
  timeline: '6-10 weeks'
},
    'professional': {
  title: 'For Consultants & Agencies',
  subtitle: 'Command Premium Fees with a High-Authority Presence',
  icon: Briefcase,
  color: 'from-indigo-600 to-purple-700',
  problem: 'It’s impossible to justify elite retainers if your digital presence looks like a DIY project. In the world of high-stakes consulting, if you look "mid-market," you’ll be forced to compete on price rather than value.',
  solution: 'We craft "High-Stakes" digital platforms that frame your unique methodology as the only logical solution. We build the social proof and psychological authority needed to stop you from "pitching" and start getting "invited."',
  benefits: [
    'Deep-Dive Methodology Showcases',
    'Strategic Case Study Storytelling',
    'Frictionless Consultation Funnels',
    'Authority-Building Content Hubs',
    'Executive-Grade Brand Identity'
  ],
  roi: '3x Higher Perceived Value',
  timeline: '4-6 weeks'
},

  };
  const currentSolution = solutions[activeSolution as keyof typeof solutions];
  const CurrentIcon = currentSolution.icon;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* HERO SECTION (Keep your existing Hero code, it was fine, or I can provide a simpler one if asked) */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
         {/* ... (Keep your existing Hero content here) ... */}
         {/* Just make sure to change the hero headline slightly if you want to match the new vibe:
             e.g., "We Build Websites That Solve Actual Business Problems." */}
             <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full mb-6">
                <Lightbulb size={16} className="text-blue-300" />
                <span className="text-sm font-bold text-blue-300">No Fluff. Just Results.</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                Solutions built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">your specific industry.</span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                We don't sell generic templates. We build tools that solve the specific headaches of your business—whether you need more patients, more cases, or more sales.
            </p>

            <Link 
                href="/get-started"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-bold text-lg hover:shadow-2xl shadow-lg shadow-blue-500/50 transition-all"
            >
                Find Your Solution
                <ArrowRight size={20} />
            </Link>
            </div>
        </div>
      </section>

      {/* SOLUTION SELECTOR */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Find Your Industry
            </h2>
            <p className="text-xl text-gray-600">
              See exactly how we help businesses like yours.
            </p>
          </div>

          {/* Solution Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {Object.entries(solutions).map(([key, solution]) => {
              const Icon = solution.icon;
              const isActive = activeSolution === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveSolution(key)}
                  className={`p-6 rounded-2xl text-left transition-all ${
                    isActive
                      ? `bg-gradient-to-br ${solution.color} text-white shadow-xl`
                      : 'bg-gray-50 text-gray-900 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <Icon size={24} className={isActive ? 'text-white' : 'text-gray-500'} />
                    <div>
                      <h3 className="font-bold text-lg">{solution.title}</h3>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Solution Details */}
          <div className={`bg-gradient-to-br ${currentSolution.color} rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl`}>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left: Problem & Solution */}
                <div>
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{currentSolution.title}</h2>
                    <p className="text-xl text-white/90">{currentSolution.subtitle}</p>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-black/20 p-6 rounded-2xl border border-white/10">
                      <h3 className="text-lg font-bold mb-2 flex items-center gap-2 text-red-200">
                        <AlertCircle size={20} />
                        The Common Problem
                      </h3>
                      <p className="text-white/90 leading-relaxed">{currentSolution.problem}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 flex items-center gap-2 text-green-200">
                        <CheckCircle2 size={20} />
                        How Vidi Fixes It
                      </h3>
                      <p className="text-white/90 leading-relaxed">{currentSolution.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Right: Specific Features */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-4">Specific Features Included</h3>
                  <ul className="space-y-4 mb-8">
                    {currentSolution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-300 flex-shrink-0 mt-1" />
                        <span className="text-white font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                    <div>
                      <p className="text-white/70 text-xs uppercase tracking-wider mb-1">Estimated Impact</p>
                      <p className="text-xl font-bold text-white">{currentSolution.roi}</p>
                    </div>
                    <div>
                      <p className="text-white/70 text-xs uppercase tracking-wider mb-1">Avg Timeline</p>
                      <p className="text-xl font-bold text-white">{currentSolution.timeline}</p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Link 
                      href="/get-started"
                      className="flex items-center justify-center gap-2 w-full py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg"
                    >
                      Start This Project
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ... (Rest of your page: Framework, Tech Stack, etc. remains the same) ... */}
            {/* ============================================================================
          TECHNOLOGY STACK
          ============================================================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Enterprise-Grade Technology
            </h2>
            <p className="text-xl text-gray-600">
              Built on the latest, most reliable platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { category: 'Frontend', items: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS'] },
              { category: 'Backend', items: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL'] },
              { category: 'AI/ML', items: ['GPT-4', 'Claude', 'Custom Models', 'LangChain'] },
              { category: 'Infrastructure', items: ['AWS', 'Vercel', 'Docker', 'Kubernetes'] }
            ].map((tech, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{tech.category}</h3>
                <ul className="space-y-3">
                  {tech.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-blue-600" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================================
          CASE STUDIES PREVIEW
          ============================================================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-gray-600">
              See how we've helped businesses like yours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                industry: 'Healthcare',
                company: 'MediCare Clinic',
                challenge: 'Lost 40% of patients to outdated website',
                result: '+340% new patient inquiries',
                metrics: '8 weeks'
              },
              {
                industry: 'Real Estate',
                company: 'Luxury Homes Realty',
                challenge: 'Competing with 100+ agents in the area',
                result: '+280% revenue growth',
                metrics: '12 weeks'
              },
              {
                industry: 'E-Commerce',
                company: 'Fashion Boutique',
                challenge: 'Low conversion rate (0.8%)',
                result: '4.2% conversion rate',
                metrics: '10 weeks'
              }
            ].map((study, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all">
                <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
                  <p className="text-sm font-bold text-blue-700">{study.industry}</p>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{study.company}</h3>
                <p className="text-gray-600 mb-6 text-sm"><strong>Challenge:</strong> {study.challenge}</p>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 mb-4">
                  <p className="text-sm text-gray-600 mb-1">Result</p>
                  <p className="text-2xl font-bold text-blue-600">{study.result}</p>
                </div>
                <p className="text-sm text-gray-500">Timeline: {study.metrics}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/case-studies"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all"
            >
              View All Case Studies
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
              Common Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our solutions
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How do you determine which solution is right for my business?",
                a: "We start with a free discovery call where we understand your business, goals, and challenges. Based on that conversation, we recommend the solution that will deliver the most ROI for your specific situation."
              },
              {
                q: "What if I need multiple solutions?",
                a: "Many of our clients benefit from combining solutions. For example, lead generation + market dominance, or operational efficiency + scalable growth. We can create a custom package tailored to your needs."
              },
              {
                q: "How long does implementation take?",
                a: "Timeline varies by solution (4-12 weeks), but we work in sprints to deliver value quickly. You'll see results within the first 2-3 weeks of launch."
              },
              {
                q: "What happens after launch?",
                a: "We don't disappear after launch. We provide ongoing optimization, monitoring, and support to ensure your solution continues to deliver results and adapts to market changes."
              },
              {
                q: "Do you offer guarantees?",
                a: "We're confident in our solutions and offer performance-based pricing options. If we don't deliver results, we'll work with you until we do."
              },
              {
                q: "How much does this cost?",
                a: "Pricing varies based on your specific solution and scope. Use our quote calculator to get an estimate, or schedule a call to discuss your investment."
              }
            ].map((item, idx) => (
              <details 
                key={idx} 
                className="group border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all cursor-pointer"
                // The onToggle logic is handled by the browser's native details tag, 
                // but we include a state for future expansion if needed.
              >
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
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Solve Your Business Challenge?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss which solution is right for your business and create a custom roadmap to success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-lg"
            >
              Get Your Custom Solution
              <ArrowRight size={20} />
            </Link>
            <Link 
              href="/case-studies"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 text-white rounded-full font-bold text-lg border border-white/30 hover:bg-white/30 transition-all"
            >
              View Case Studies
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


