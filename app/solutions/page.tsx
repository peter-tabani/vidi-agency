"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  motion, 
  AnimatePresence, 
  useMotionValue, 
  useSpring, 
  useTransform 
} from 'framer-motion';
import { 
  // Generic Icons
  CheckCircle2, ArrowRight, Lightbulb, AlertCircle, 
  // Industry Icons
  Stethoscope, Gavel, Hammer, ShoppingBag, Home, Briefcase, 
  ChevronDown, Plus, Minus
} from 'lucide-react';

// --- COMPONENT: 3D TILT CARD (The "Mesmerizing" Part) ---
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]); // Reverse axis for natural feel
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative transition-all duration-200 ease-linear ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function SolutionsPage() {
  const [activeSolution, setActiveSolution] = useState('medical');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const solutions = {
    'medical': {
      title: 'For Dental & Medical Clinics',
      subtitle: 'Turn Your Digital Presence into Your Best Patient Advocate',
      icon: Stethoscope,
      color: 'from-cyan-500 to-blue-600',
      bg_light: 'bg-cyan-50',
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
      bg_light: 'bg-slate-50',
      problem: 'High-value clients are looking for certainty. If your digital presence doesn’t reflect the caliber of your success, you’re losing your best cases to competitors who simply "look the part."',
      solution: 'We build "Power-Positioned" websites that validate your expertise, showcase your wins, and use smart intake systems to filter for the high-quality cases you actually want.',
      benefits: [
        'Proven Case Result Showcases',
        'Smart Automated Client Intake',
        'Strategic Practice Area Silos',
        'High-Impact Attorney Profiles',
        'Ultra-Fast Mobile Experience'
      ],
      roi: '+35% Lead Quality',
      timeline: '4-6 weeks'
    },
    'trades': {
      title: 'For Contractors & Home Services',
      subtitle: 'Trade Your "Price-Shoppers" for Premium Contracts',
      icon: Hammer,
      color: 'from-orange-600 to-red-700',
      bg_light: 'bg-orange-50',
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
      bg_light: 'bg-emerald-50',
      problem: 'Massive portals are turning you into a commodity and charging you for your own leads. Without a powerhouse personal brand, you’re just another name on a list instead of the local authority.',
      solution: 'We build "Digital Headquarters" that move you from "agent" to "advisor." We integrate live market data and high-conversion tools that prove to sellers you have the tech stack to get their home sold for top dollar.',
      benefits: [
        'Seamless Live MLS Integration',
        'Interactive Neighborhood Authority Guides',
        'Instant Home Valuation "Hook" Tools',
        'Elite Personal Branding & Video Hero Sections',
        'Automated Seller-Leads Capture Funnels'
      ],
      roi: 'Higher Conversions',
      timeline: '5-7 weeks'
    },
    'ecommerce': {
      title: 'For Retail & E-Commerce',
      subtitle: 'Outperform the Giants. Turn Traffic into Transactions.',
      icon: ShoppingBag,
      color: 'from-pink-600 to-rose-700',
      bg_light: 'bg-pink-50',
      problem: 'Traffic is expensive, and every "bounce" is money wasted. If your store feels slow or generic, customers will abandon their carts to find the convenience of Amazon or a competitor.',
      solution: 'We engineer high-velocity storefronts that remove every "friction point" from the buying journey. From psychological triggers to lightning-fast checkouts, we build a brand experience that builds loyalty and maximizes every visitor’s value.',
      benefits: [
        'One-Click Frictionless Checkout',
        'Psychological Conversion Triggers',
        'AI-Driven Cross-Sells & Upsells',
        'Automated Retention & Recovery Flows',
        'Lightning-Fast Mobile Architecture'
      ],
      roi: '+45% LTV',
      timeline: '6-10 weeks'
    },
    'professional': {
      title: 'For Consultants & Agencies',
      subtitle: 'Command Premium Fees with a High-Authority Presence',
      icon: Briefcase,
      color: 'from-indigo-600 to-purple-700',
      bg_light: 'bg-indigo-50',
      problem: 'It’s impossible to justify elite retainers if your digital presence looks like a DIY project. In the world of high-stakes consulting, if you look "mid-market," you’ll be forced to compete on price rather than value.',
      solution: 'We craft "High-Stakes" digital platforms that frame your unique methodology as the only logical solution. We build the social proof and psychological authority needed to stop you from "pitching" and start getting "invited."',
      benefits: [
        'Deep-Dive Methodology Showcases',
        'Strategic Case Study Storytelling',
        'Frictionless Consultation Funnels',
        'Authority-Building Content Hubs',
        'Executive-Grade Brand Identity'
      ],
      roi: '3x Perceived Value',
      timeline: '4-6 weeks'
    },
  };

  const currentSolution = solutions[activeSolution as keyof typeof solutions];
  const CurrentIcon = currentSolution.icon;

  const faqs = [
    { q: "How do you determine which solution is right for my business?", a: "We start with a free discovery call where we understand your business, goals, and challenges. Based on that conversation, we recommend the solution that will deliver the most ROI for your specific situation." },
    { q: "What if I need multiple solutions?", a: "Many of our clients benefit from combining solutions. For example, lead generation + market dominance, or operational efficiency + scalable growth. We can create a custom package tailored to your needs." },
    { q: "How long does implementation take?", a: "Timeline varies by solution (4-12 weeks), but we work in sprints to deliver value quickly. You'll see results within the first 2-3 weeks of launch." },
    { q: "What happens after launch?", a: "We don't disappear after launch. We provide ongoing optimization, monitoring, and support to ensure your solution continues to deliver results and adapts to market changes." },
    { q: "Do you offer guarantees?", a: "We're confident in our solutions and offer performance-based pricing options. If we don't deliver results, we'll work with you until we do." },
    { q: "How much does this cost?", a: "Pricing varies based on your specific solution and scope. Use our quote calculator to get an estimate, or schedule a call to discuss your investment." }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        
        {/* Living Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50/30 z-0" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] animate-pulse" />
        
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 border border-blue-100 rounded-full mb-8 shadow-sm backdrop-blur-sm"
          >
            <Lightbulb size={16} className="text-blue-600" />
            <span className="text-sm font-bold text-gray-700">Results-focused Engineering</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight"
          >
            Solutions built for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              your specific industry.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-500 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            We don't sell generic templates. We build tools that solve the specific headaches of your business—whether you need more patients, more cases, or more sales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              href="/get-started"
              className="relative inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Find Your Solution
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- SOLUTION SELECTOR --- */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="container mx-auto max-w-7xl">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Find Your Industry
            </h2>
            <p className="text-xl text-gray-600">See exactly how we help businesses like yours.</p>
          </div>

          {/* TABS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {Object.entries(solutions).map(([key, solution]) => {
              const Icon = solution.icon;
              const isActive = activeSolution === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveSolution(key)}
                  className="group relative p-6 rounded-2xl text-left outline-none"
                >
                  {/* Sliding Background (Layout Animation) */}
                  {isActive ? (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute inset-0 bg-gradient-to-br ${solution.color} rounded-2xl shadow-lg`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gray-50 border border-gray-100 rounded-2xl group-hover:border-blue-200 transition-colors" />
                  )}

                  <div className="relative z-10 flex items-center gap-4">
                    <div className={`p-3 rounded-xl transition-colors duration-300 ${isActive ? 'bg-white/20 text-white' : 'bg-white text-gray-500 shadow-sm'}`}>
                      <Icon size={24} />
                    </div>
                    <h3 className={`font-bold text-lg transition-colors ${isActive ? 'text-white' : 'text-gray-900'}`}>
                      {solution.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ACTIVE CONTENT CARD */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSolution}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <TiltCard className={`bg-gradient-to-br ${currentSolution.color} rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl overflow-hidden`}>
                
                {/* Decorative background shapes */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2 mix-blend-overlay" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  
                  {/* Text Content */}
                  <div>
                    <motion.h2 
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-3xl md:text-5xl font-bold mb-4"
                    >
                      {currentSolution.title}
                    </motion.h2>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl text-white/90 mb-10 font-light"
                    >
                      {currentSolution.subtitle}
                    </motion.p>

                    <div className="space-y-6">
                      <div className="bg-black/20 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
                        <div className="flex items-center gap-2 mb-3 text-red-200 font-bold uppercase tracking-wider text-xs">
                          <AlertCircle size={16} /> The Problem
                        </div>
                        <p className="text-white/90 leading-relaxed text-lg">
                          {currentSolution.problem}
                        </p>
                      </div>

                      <div className="p-2">
                        <div className="flex items-center gap-2 mb-3 text-green-300 font-bold uppercase tracking-wider text-xs">
                          <CheckCircle2 size={16} /> The Solution
                        </div>
                        <p className="text-white/90 leading-relaxed text-lg">
                          {currentSolution.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Feature List & Stats */}
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-inner">
                    <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-4">Features Included</h3>
                    <ul className="space-y-4 mb-8">
                      {currentSolution.benefits.map((benefit, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + (idx * 0.1) }} // Staggered Effect
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 size={20} className="text-green-300 flex-shrink-0 mt-1" />
                          <span className="text-white/90 font-medium">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between pt-6 border-t border-white/20">
                      <div>
                        <p className="text-xs text-white/70 uppercase tracking-wider mb-1">Impact</p>
                        <p className="text-2xl font-bold">{currentSolution.roi}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-white/70 uppercase tracking-wider mb-1">Timeline</p>
                        <p className="text-2xl font-bold">{currentSolution.timeline}</p>
                      </div>
                    </div>

                    <Link 
                      href="/get-started"
                      className="mt-8 flex items-center justify-center w-full py-4 bg-white text-gray-900 rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl"
                    >
                      Start This Project <ArrowRight size={18} className="ml-2" />
                    </Link>
                  </div>

                </div>
              </TiltCard>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* --- TECH STACK --- */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Enterprise-Grade Technology
            </h2>
            <p className="text-xl text-gray-600">Built on the latest, most reliable platforms</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { category: 'Frontend', items: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind'] },
              { category: 'Backend', items: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL'] },
              { category: 'AI/ML', items: ['GPT-4', 'Claude', 'LangChain', 'Pinecone'] },
              { category: 'Infrastructure', items: ['AWS', 'Vercel', 'Docker', 'Kubernetes'] }
            ].map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 bg-white rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                  {tech.category}
                </h3>
                <ul className="space-y-3">
                  {tech.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CASE STUDIES --- */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-xl text-gray-600">Real metrics from real businesses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                industry: 'Healthcare',
                company: 'MediCare Clinic',
                result: '+340% Inquiries',
                color: 'bg-blue-100 text-blue-700'
              },
              {
                industry: 'Real Estate',
                company: 'Luxury Homes Realty',
                result: '+280% Revenue',
                color: 'bg-emerald-100 text-emerald-700'
              },
              {
                industry: 'E-Commerce',
                company: 'Fashion Boutique',
                result: '4.2% Conversion',
                color: 'bg-pink-100 text-pink-700'
              }
            ].map((study, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl border border-gray-100 shadow-lg bg-white"
              >
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${study.color} mb-4 inline-block`}>
                  {study.industry}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{study.company}</h3>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-1">Impact</p>
                  <p className="text-3xl font-bold text-gray-900">{study.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ANIMATED FAQ --- */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={false}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <button 
                  onClick={() => setExpandedFaq(String(idx === Number(expandedFaq) ? null : idx))}
                  className="flex items-center justify-between w-full p-6 text-left"
                >
                  <span className="font-bold text-lg text-gray-900">{item.q}</span>
                  <div className={`p-2 rounded-full transition-colors ${String(idx) === expandedFaq ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {String(idx) === expandedFaq ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <AnimatePresence>
                  {String(idx) === expandedFaq && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Scale?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/get-started"
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg shadow-xl hover:bg-gray-50 transition-all"
            >
              Get Custom Solution
            </Link>
            <Link 
              href="/case-studies"
              className="px-8 py-4 bg-transparent border-2 border-white/30 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              View Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}