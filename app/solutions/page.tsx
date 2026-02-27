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
  CheckCircle2, ArrowRight, Lightbulb, AlertCircle,
  Bot, Inbox, Workflow, BarChart3, Code2, Database,
  ChevronDown, Plus, Minus, Sparkles, Zap, Cpu, Brain, Rocket
} from 'lucide-react';

// --- COMPONENT: 3D TILT CARD (same as before, but we'll keep it) ---
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

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
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
  const [activeSolution, setActiveSolution] = useState('lead-capture');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  // Updated solutions focusing on AI services
  const solutions = {
    'lead-capture': {
      title: 'AI Lead Capture',
      subtitle: 'Turn every visitor into a qualified lead – automatically.',
      icon: Bot,
      color: 'from-blue-600 to-blue-500',
      bg_light: 'bg-blue-50',
      problem: 'You’re losing potential customers because no one follows up instantly. Leads go cold, forms sit unanswered, and your sales team chases low‑quality prospects.',
      solution: 'Our AI lead capture agents engage every visitor 24/7, ask qualifying questions, and route hot leads directly to your team – or book meetings automatically.',
      benefits: [
        '24/7 instant lead engagement',
        'Smart qualification based on your criteria',
        'Seamless CRM integration',
        'Automated follow‑up sequences',
        'Real‑time lead scoring & notifications'
      ],
      roi: '+40% more qualified leads',
      timeline: '2‑3 weeks'
    },
    'customer-support': {
      title: 'AI Customer Support',
      subtitle: 'Resolve 80% of queries instantly, without human intervention.',
      icon: Inbox,
      color: 'from-blue-500 to-indigo-600',
      bg_light: 'bg-indigo-50',
      problem: 'Your support team is overwhelmed with repetitive questions. Response times are slow, and customers get frustrated waiting for answers.',
      solution: 'We train AI on your knowledge base, FAQs, and past tickets to handle common issues instantly – freeing your team for complex cases.',
      benefits: [
        'Instant answers 24/7',
        'Multilingual support',
        'Sentiment analysis & escalation',
        'Integrates with Zendesk, Intercom, etc.',
        'Continuous learning from new interactions'
      ],
      roi: '80% reduction in support tickets',
      timeline: '3‑4 weeks'
    },
    'workflow-automation': {
      title: 'Workflow Automation',
      subtitle: 'Eliminate repetitive tasks and let AI run your operations.',
      icon: Workflow,
      color: 'from-indigo-600 to-purple-600',
      bg_light: 'bg-purple-50',
      problem: 'Your team wastes hours on manual data entry, follow‑ups, and routine tasks – killing productivity and slowing growth.',
      solution: 'We build custom automation workflows that connect your tools, trigger actions, and move data without human effort.',
      benefits: [
        'Connect CRM, email, Slack, and more',
        'Automate follow‑ups & reminders',
        'Sync data between systems',
        'Scheduled reporting & alerts',
        'Error‑free execution 24/7'
      ],
      roi: '15+ hours saved per week',
      timeline: '2‑4 weeks'
    },
    'analytics': {
      title: 'AI Analytics & Insights',
      subtitle: 'Turn your data into actionable business intelligence.',
      icon: BarChart3,
      color: 'from-purple-600 to-pink-600',
      bg_light: 'bg-pink-50',
      problem: 'You have tons of data but no clear picture of what’s working. Decisions are based on gut feeling, not facts.',
      solution: 'Our AI analytics engines process your sales, marketing, and customer data to deliver real‑time dashboards and predictive insights.',
      benefits: [
        'Unified dashboard from all sources',
        'Predictive lead scoring',
        'Churn risk identification',
        'Automated performance reports',
        'Custom KPIs tailored to your goals'
      ],
      roi: 'Data‑driven decisions',
      timeline: '4‑6 weeks'
    },
    'custom-ai': {
      title: 'Custom AI Development',
      subtitle: 'Tailored AI solutions for your unique business challenges.',
      icon: Code2,
      color: 'from-pink-600 to-rose-600',
      bg_light: 'bg-rose-50',
      problem: 'Off‑the‑shelf tools don’t fit your specific processes. You need something built from the ground up to match exactly how you work.',
      solution: 'We design and develop custom AI agents, tools, and platforms – from chatbots to computer vision – that solve your exact problems.',
      benefits: [
        'Built to your specifications',
        'Scalable architecture',
        'Integration with your stack',
        'Full ownership of code',
        'Continuous improvement & support'
      ],
      roi: 'Competitive advantage',
      timeline: '6‑12 weeks'
    },
    'integration': {
      title: 'AI Integration',
      subtitle: 'Supercharge your existing systems with AI capabilities.',
      icon: Database,
      color: 'from-rose-600 to-orange-600',
      bg_light: 'bg-orange-50',
      problem: 'You already use great tools, but they don’t talk to each other – and they lack AI power. You need intelligence plugged into your current workflow.',
      solution: 'We integrate AI into your CRM, website, e‑commerce platform, or any existing software – adding automation, predictions, and smart features.',
      benefits: [
        'Add AI to your current stack',
        'No need to rebuild',
        'Unlock hidden data value',
        'Seamless user experience',
        'Fast time‑to‑value'
      ],
      roi: 'Maximize existing investments',
      timeline: '2‑5 weeks'
    }
  };

  const currentSolution = solutions[activeSolution as keyof typeof solutions];
  const CurrentIcon = currentSolution.icon;

  const faqs = [
    { q: "How do I know which AI solution is right for my business?", a: "We start with a free discovery call to understand your goals, challenges, and current tools. Then we recommend the solution that will deliver the fastest ROI." },
    { q: "Do I need to replace my existing software?", a: "No – we integrate with what you already use. Our AI layers on top of your CRM, website, and communication channels." },
    { q: "How long until I see results?", a: "Most clients see initial results within the first 2 weeks of deployment. Full optimization takes a bit longer, but you'll start saving time and capturing leads immediately." },
    { q: "What happens after launch?", a: "We provide ongoing monitoring, tweaks, and support. Your AI keeps learning and improving over time." },
    { q: "Will I own the AI system?", a: "Absolutely. We build custom solutions that you own 100% – no monthly licensing fees or vendor lock‑in." },
    { q: "How much does it cost?", a: "Pricing is project‑based and depends on complexity. We'll give you a clear fixed price before we start." }
  ];

  // Tech stack remains relevant – we'll keep it
  const techStack = [
    { category: 'AI/ML', items: ['GPT‑4', 'Claude', 'LangChain', 'Pinecone', 'Hugging Face'] },
    { category: 'Frontend', items: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'Supabase'] },
    { category: 'Infrastructure', items: ['AWS', 'Vercel', 'Docker', 'Kubernetes', 'Cloudflare'] }
  ];

  // Case studies with AI focus
  const caseStudies = [
    {
      industry: 'E‑Commerce',
      company: 'Fashion Retailer',
      result: '+52% conversions',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      industry: 'Real Estate',
      company: 'Luxury Listings',
      result: '3.2x more leads',
      color: 'bg-indigo-100 text-indigo-700'
    },
    {
      industry: 'SaaS',
      company: 'B2B Software',
      result: '80% support automation',
      color: 'bg-purple-100 text-purple-700'
    }
  ];

  return (
    <main className="min-h-screen bg-[#05060b] text-white">
      <Navbar />
      
      {/* --- HERO SECTION (dark version) --- */}
      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#05060b] via-[#0a0f1e] to-[#0c2d6b] z-0" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 shadow-lg backdrop-blur-sm"
          >
            <Sparkles size={16} className="text-blue-400" />
            <span className="text-sm font-bold text-gray-300">Tailored AI for your business</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight"
          >
            AI solutions that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-sky-300">
              actually work for you.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            From lead capture to workflow automation – we build custom AI systems that integrate with your existing tools and start delivering results immediately.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              href="/get-started"
              className="relative inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Find Your AI Solution
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- SOLUTION SELECTOR (dark glass) --- */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#05060b]">
        <div className="container mx-auto max-w-7xl">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-space-grotesk">
              Choose Your AI Solution
            </h2>
            <p className="text-xl text-gray-400">See exactly how we apply AI to solve your specific challenges.</p>
          </div>

          {/* TABS GRID - dark glass */}
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
                    <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-2xl group-hover:border-blue-500/30 transition-colors backdrop-blur-sm" />
                  )}

                  <div className="relative z-10 flex items-center gap-4">
                    <div className={`p-3 rounded-xl transition-colors duration-300 ${isActive ? 'bg-white/20 text-white' : 'bg-white/10 text-blue-400'}`}>
                      <Icon size={24} />
                    </div>
                    <h3 className={`font-bold text-lg transition-colors ${isActive ? 'text-white' : 'text-gray-300'}`}>
                      {solution.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ACTIVE CONTENT CARD - dark tilt card with glass */}
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
                          transition={{ delay: 0.3 + (idx * 0.1) }}
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

      {/* --- TECH STACK (dark) --- */}
      <section className="py-24 px-6 bg-[#07080e]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-space-grotesk">
              Enterprise‑Grade Technology
            </h2>
            <p className="text-xl text-gray-400">Built on the most advanced AI and cloud platforms</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors">
                  {tech.category}
                </h3>
                <ul className="space-y-3">
                  {tech.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-400">
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

      {/* --- CASE STUDIES (dark) --- */}
      <section className="py-20 px-6 bg-[#05060b]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-4">Proven Results</h2>
            <p className="text-xl text-gray-400">Real metrics from real businesses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-sm"
              >
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${study.color} mb-4 inline-block`}>
                  {study.industry}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{study.company}</h3>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-500 mb-1">Impact</p>
                  <p className="text-3xl font-bold text-white">{study.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ANIMATED FAQ (dark) --- */}
      <section className="py-20 px-6 bg-[#07080e]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-extrabold text-center text-white mb-16">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={false}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-colors backdrop-blur-sm"
              >
                <button 
                  onClick={() => setExpandedFaq(String(idx === Number(expandedFaq) ? null : idx))}
                  className="flex items-center justify-between w-full p-6 text-left"
                >
                  <span className="font-bold text-lg text-white">{item.q}</span>
                  <div className={`p-2 rounded-full transition-colors ${String(idx) === expandedFaq ? 'bg-blue-600 text-white' : 'bg-white/10 text-gray-400'}`}>
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
                      <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/10 pt-4">
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

      {/* --- FINAL CTA (dark gradient) --- */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Scale with AI?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/get-started"
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg shadow-xl hover:bg-gray-50 transition-all"
            >
              Get Your AI Solution
            </Link>
            <Link 
              href="/case-studies"
              className="px-8 py-4 bg-transparent border-2 border-white/30 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}