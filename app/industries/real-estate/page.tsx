"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Home, TrendingUp, Users, Zap, MapPin, Search, Eye, 
  BarChart3, DollarSign, Clock, CheckCircle2, ArrowRight,
  Building2, Smartphone, Globe, Lock, Briefcase, Star,
  MessageSquare, Calendar, FileText, Layers, Rocket, Award
} from 'lucide-react';

export default function RealEstatePage() {
  const [activeTab, setActiveTab] = useState('agents');
  const [animatedStats, setAnimatedStats] = useState({ leads: 0, conversion: 0, revenue: 0 });

  // Animate statistics on scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedStats(prev => ({
        leads: Math.min(prev.leads + 15, 340),
        conversion: Math.min(prev.conversion + 2.5, 45),
        revenue: Math.min(prev.revenue + 8, 280)
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* ============================================================================
          HERO SECTION - PREMIUM REAL ESTATE FOCUS
          ============================================================================ */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full mb-6">
                <Home size={16} className="text-blue-300" />
                <span className="text-sm font-bold text-blue-300">Real Estate Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                Sell More Properties in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Less Time</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Real estate agents and brokers are losing deals to outdated websites. We build digital experiences that convert browsers into buyers and sellers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  href="/get-started" 
                  className="px-8 py-4 rounded-full text-lg font-bold text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-2xl shadow-lg shadow-blue-500/50 transition-all"
                >
                  Start Your Project
                  <ArrowRight size={18} className="inline ml-2" />
                </Link>
                <Link 
                  href="/case-studies" 
                  className="px-8 py-4 rounded-full text-lg font-bold text-blue-300 bg-white/10 border border-blue-400/30 hover:bg-white/20 transition-all"
                >
                  See Case Studies
                </Link>
              </div>

              {/* Quick Stats */}
              {/* Trust Indicators */}
<div className="grid grid-cols-3 gap-4">
  {[
    { label: "Custom Built", icon: CheckCircle2 },
    { label: "Mobile First", icon: Smartphone },
    { label: "SEO Ready", icon: TrendingUp }
  ].map((stat, idx) => {
    const Icon = stat.icon;
    return (
      <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
        <Icon size={24} className="text-blue-300 mb-2" />
        <p className="text-sm font-bold text-white">{stat.label}</p>
      </div>
    );
  })}
</div>
            </div>

            {/* Right: Visual Element */}
            {/* Right: Visual Element */}
<div className="relative hidden lg:block">
  <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-400/20 to-cyan-400/20 border border-white/10 backdrop-blur-md">
    <img 
      src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80" 
      alt="Modern luxury home"
      className="w-full h-full object-cover opacity-90"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
    <div className="absolute bottom-8 left-8 right-8 text-white">
      <p className="text-sm font-semibold mb-2">Premium Property Showcase</p>
      <p className="text-2xl font-bold">Sell Homes Faster Online</p>
    </div>
  </div>
</div>
          </div>
        </div>
      </section>
            {/* ============================================================================
          PROBLEM/SOLUTION SECTION
          ============================================================================ */}
      {/* ============================================================================
    REAL CHALLENGES WE SOLVE
    ============================================================================ */}
<section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
  <div className="container mx-auto max-w-6xl">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        Common Real Estate Website Challenges
      </h2>
      <p className="text-xl text-gray-600">
        Issues we help agents and brokers overcome
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          icon: Clock,
          title: "Outdated Design",
          description: "Your website looks like it's from 2010. Modern buyers expect premium experiences."
        },
        {
          icon: Smartphone,
          title: "Poor Mobile Experience",
          description: "Over 70% of property searches happen on mobile. Your site needs to work perfectly on phones."
        },
        {
          icon: Search,
          title: "Not Found on Google",
          description: "Potential clients can't find you when searching for '[Your City] real estate agent'."
        },
        {
          icon: MessageSquare,
          title: "No Lead Capture",
          description: "Visitors browse your listings but you have no way to follow up or nurture them."
        },
        {
          icon: Eye,
          title: "Poor Property Showcase",
          description: "Static images don't sell properties. You need virtual tours and immersive experiences."
        },
        {
          icon: BarChart3,
          title: "No Performance Data",
          description: "You don't know which listings get views, where traffic comes from, or what converts."
        }
      ].map((item, idx) => {
        const Icon = item.icon;
        return (
          <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
              <Icon size={24} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* ============================================================================
          SPECIALIZED SERVICES FOR REAL ESTATE
          ============================================================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Real Estate-Specific Services
            </h2>
            <p className="text-xl text-gray-600">
              Built for agents, brokers, and property developers
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {[
              { id: 'agents', label: 'For Agents', icon: Briefcase },
              { id: 'brokers', label: 'For Brokers', icon: Building2 },
              { id: 'developers', label: 'For Developers', icon: Layers }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activeTab === 'agents' && (
              <>
                {[
                  {
                    icon: Globe,
                    title: "Agent Portfolio Website",
                    desc: "Your personal brand showcase with featured listings, bio, testimonials, and instant lead capture."
                  },
                  {
                    icon: Eye,
                    title: "Virtual Tours & 3D Walkthroughs",
                    desc: "Immersive property experiences that let buyers explore homes from anywhere, anytime."
                  },
                  {
                    icon: Search,
                    title: "Local SEO Optimization",
                    desc: "Rank #1 on Google for '[Your City] Real Estate Agent' and property-specific searches."
                  }
                ].map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <div key={idx} className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100 hover:shadow-xl transition-all">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6">
                        <Icon size={28} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600">{service.desc}</p>
                    </div>
                  );
                })}
              </>
            )}

            {activeTab === 'brokers' && (
              <>
                {[
                  {
                    icon: Users,
                    title: "Brokerage Portal",
                    desc: "Centralized platform for managing agents, listings, leads, and team performance analytics."
                  },
                  {
                    icon: BarChart3,
                    title: "Analytics & Reporting",
                    desc: "Real-time dashboards showing lead sources, conversion rates, and agent performance metrics."
                  },
                  {
                    icon: Zap,
                    title: "Lead Distribution System",
                    desc: "Automated lead routing to agents based on location, expertise, and availability."
                  }
                ].map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <div key={idx} className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 border border-purple-100 hover:shadow-xl transition-all">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6">
                        <Icon size={28} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600">{service.desc}</p>
                    </div>
                  );
                })}
              </>
            )}

            {activeTab === 'developers' && (
              <>
                {[
                  {
                    icon: Home,
                    title: "Community Websites",
                    desc: "Showcase entire communities with interactive maps, amenities, and neighborhood information."
                  },
                  {
                    icon: FileText,
                    title: "Project Marketing Sites",
                    desc: "High-converting websites for new developments with floor plans, pricing, and pre-launch campaigns."
                  },
                  {
                    icon: Smartphone,
                    title: "Mobile Apps",
                    desc: "Native iOS/Android apps for buyers to browse properties, get alerts, and schedule viewings."
                  }
                ].map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <div key={idx} className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 border border-orange-100 hover:shadow-xl transition-all">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6">
                        <Icon size={28} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600">{service.desc}</p>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </section>

      {/* ============================================================================
          ROI & RESULTS SECTION
          ============================================================================ */}
      {/* ============================================================================
    WHAT WE BUILD FOR YOU
    ============================================================================ */}
<section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
  </div>

  <div className="container mx-auto max-w-6xl relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
        Solutions Built for Real Estate Professionals
      </h2>
      <p className="text-xl text-blue-100">
        Everything you need to stand out in a competitive market
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          icon: Globe,
          title: "Agent Websites",
          desc: "Professional portfolio showcasing your brand and listings"
        },
        {
          icon: Eye,
          title: "Virtual Tours",
          desc: "3D walkthroughs and immersive property experiences"
        },
        {
          icon: Zap,
          title: "Lead Automation",
          desc: "Capture and nurture leads automatically 24/7"
        },
        {
          icon: Search,
          title: "Local SEO",
          desc: "Rank higher on Google for your target neighborhoods"
        }
      ].map((item, idx) => {
        const Icon = item.icon;
        return (
          <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
              <Icon size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-blue-100 text-sm">{item.desc}</p>
          </div>
        );
      })}
    </div>
  </div>
</section>
            {/* ============================================================================
          FEATURES COMPARISON
          ============================================================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              What's Included
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to dominate your market
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-bold text-gray-900">Feature</th>
                  <th className="text-center py-4 px-6 font-bold text-gray-900">Agents</th>
                  <th className="text-center py-4 px-6 font-bold text-gray-900">Brokers</th>
                  <th className="text-center py-4 px-6 font-bold text-gray-900">Developers</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Custom Website", agents: true, brokers: true, developers: true },
                  { feature: "Virtual Tours & 3D", agents: true, brokers: true, developers: true },
                  { feature: "Mobile App", agents: false, brokers: true, developers: true },
                  { feature: "CRM Integration", agents: true, brokers: true, developers: false },
                  { feature: "Lead Management", agents: true, brokers: true, developers: false },
                  { feature: "AI Chatbot", agents: true, brokers: true, developers: true },
                  { feature: "Analytics Dashboard", agents: true, brokers: true, developers: true },
                  { feature: "SEO Optimization", agents: true, brokers: true, developers: true },
                  { feature: "Email Campaigns", agents: true, brokers: true, developers: false },
                  { feature: "Social Media Integration", agents: true, brokers: true, developers: true }
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6 font-semibold text-gray-900">{row.feature}</td>
                    <td className="py-4 px-6 text-center">
                      {row.agents ? <CheckCircle2 size={24} className="text-green-500 mx-auto" /> : <span className="text-gray-300">—</span>}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {row.brokers ? <CheckCircle2 size={24} className="text-green-500 mx-auto" /> : <span className="text-gray-300">—</span>}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {row.developers ? <CheckCircle2 size={24} className="text-green-500 mx-auto" /> : <span className="text-gray-300">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================================================================
          TESTIMONIALS/SOCIAL PROOF
          ============================================================================ */}
      {/* ============================================================================
    WHO WE WORK WITH
    ============================================================================ */}
<section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
  <div className="container mx-auto max-w-6xl">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        Built for Every Type of Real Estate Professional
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          icon: Briefcase,
          title: "Independent Agents",
          features: [
            "Personal branding websites",
            "Property showcase systems",
            "Lead capture forms",
            "Local SEO optimization"
          ]
        },
        {
          icon: Building2,
          title: "Brokerages",
          features: [
            "Multi-agent platforms",
            "Team management dashboards",
            "Lead distribution systems",
            "Performance analytics"
          ]
        },
        {
          icon: Rocket,
          title: "Developers",
          features: [
            "Project marketing sites",
            "Interactive community maps",
            "Pre-launch campaigns",
            "Floor plan visualizations"
          ]
        }
      ].map((item, idx) => {
        const Icon = item.icon;
        return (
          <div key={idx} className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6">
              <Icon size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{item.title}</h3>
            <ul className="space-y-3">
              {item.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
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
          CTA SECTION
          ============================================================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-blue-600 to-cyan-600">
  <div className="container mx-auto max-w-4xl text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
      Ready to Upgrade Your Online Presence?
    </h2>
    <p className="text-xl text-blue-100 mb-8">
      Let's discuss how a modern website can help you attract more qualified buyers and sellers.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link 
        href="/get-started"
        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-lg"
      >
        Start Your Project
        <ArrowRight size={20} />
      </Link>
      <Link 
        href="/contact"
        className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all"
      >
        Schedule Consultation
        <Calendar size={20} />
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


