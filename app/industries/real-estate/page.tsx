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
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Avg Lead Increase", value: "+340%", icon: TrendingUp },
                  { label: "Conversion Rate", value: "45%", icon: CheckCircle2 },
                  { label: "Revenue Growth", value: "+$280K", icon: DollarSign }
                ].map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                      <Icon size={20} className="text-blue-300 mb-2" />
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-blue-200">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Visual Element */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-400/20 to-cyan-400/20 border border-white/10 backdrop-blur-md">
                {/* Placeholder for property showcase */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 mx-auto mb-6 flex items-center justify-center">
                      <Building2 size={64} className="text-white opacity-50" />
                    </div>
                    <p className="text-white/60 font-semibold">Premium Property Showcase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* ============================================================================
          PROBLEM/SOLUTION SECTION
          ============================================================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Why Real Estate Agents Fail Online
            </h2>
            <p className="text-xl text-gray-600">
              And how we fix it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Problem */}
            <div className="bg-white rounded-3xl p-8 border-2 border-red-200 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-2xl">❌</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">The Problem</h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Outdated websites that don't showcase properties",
                  "Slow load times lose buyers before they see listings",
                  "No mobile optimization - 80% of buyers search on phones",
                  "Missing virtual tours and 3D walkthroughs",
                  "No lead capture or follow-up automation",
                  "Competing with 100+ other agents in your area",
                  "No SEO - invisible on Google for local searches",
                  "Manual processes waste hours on admin work"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-red-500 font-bold mt-1">•</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div className="bg-white rounded-3xl p-8 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Solution</h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Stunning property showcase websites that convert",
                  "Lightning-fast load times (under 1 second)",
                  "Mobile-first design optimized for all devices",
                  "Integrated virtual tours & 3D property walkthroughs",
                  "Automated lead capture & CRM integration",
                  "SEO-optimized for local real estate keywords",
                  "Rank #1 on Google for your area & property types",
                  "AI-powered chatbots handle inquiries 24/7"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </ul>
            </div>
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
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Real Results from Real Agents
            </h2>
            <p className="text-xl text-blue-100">
              See what our real estate solutions deliver
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: "340%",
                label: "Average Lead Increase",
                desc: "Agents see 3-4x more qualified leads within 90 days"
              },
              {
                metric: "45%",
                label: "Conversion Rate",
                desc: "Website visitors convert to inquiries at 45% (industry avg: 2%)"
              },
              {
                metric: "+$280K",
                label: "Average Revenue Growth",
                desc: "Annual revenue increase from improved online presence"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 text-center">
                <p className="text-5xl font-extrabold text-white mb-2">{item.metric}</p>
                <p className="text-xl font-bold text-blue-100 mb-3">{item.label}</p>
                <p className="text-blue-200">{item.desc}</p>
              </div>
            ))}
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
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Trusted by Top Real Estate Professionals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Mitchell",
                role: "Top Real Estate Agent",
                company: "Luxury Homes Realty",
                testimonial: "My website now generates 5+ qualified leads per week. This is a game-changer for my business.",
                rating: 5
              },
              {
                name: "James Rodriguez",
                role: "Brokerage Owner",
                company: "Metropolitan Properties",
                testimonial: "The lead distribution system has increased our team's efficiency by 60%. Best investment we've made.",
                rating: 5
              },
              {
                name: "Emma Chen",
                role: "Property Developer",
                company: "Urban Developments Inc",
                testimonial: "Pre-launch sales exceeded expectations thanks to the stunning website and marketing strategy.",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.testimonial}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-blue-600 font-semibold">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================================
          CTA SECTION
          ============================================================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Dominate Your Market?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of real estate professionals who are closing more deals with Vidi Agency.
          </p>
          <Link 
            href="/get-started"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-lg"
          >
            Get Your Real Estate Website Today
            <ArrowRight size={20} />
          </Link>
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


