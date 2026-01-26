"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ShoppingBag, Package, TrendingUp, Shield, Zap, 
  ArrowRight, Users, CreditCard, Smartphone, Globe,
  Truck, RefreshCw, Search, Filter, ShoppingCart,
  Palette, Settings, Clock, MessageSquare, Database,
  Sparkles, Layers, Grid3x3, Command, Cpu, Workflow,
  BarChart3, Box, Wrench, Rocket, Eye, Server,
  ChevronRight, X, Plus, Minus, Target, Check,
  Store, Warehouse, Barcode, Receipt, QrCode,
  Upload, Download, Cloud, Lock, Key, MousePointer,
  Home, Link as LinkIcon, Radio, Wind, ShieldCheck,
  Globe2, Briefcase, Users2
} from 'lucide-react';

export default function RetailPage() {
  const [activeModule, setActiveModule] = useState('commerce');
  const platformRef = useRef<HTMLDivElement>(null);

  const scrollToPlatform = () => {
    if (platformRef.current) {
      platformRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Mouse follower effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.querySelector('.mouse-follower') as HTMLElement;
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Custom cursor */}
      <div className="mouse-follower fixed w-8 h-8 border-2 border-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 -translate-x-1/2 -translate-y-1/2"></div>
      
      <Navbar />
      
      {/* ============================================================================
          IMMERSIVE HERO SECTION
          ============================================================================ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 blur-3xl animate-pulse delay-700"></div>
        
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(#ffffff10_1px,transparent_1px),linear-gradient(90deg,#ffffff10_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_50%)]"></div>
        
        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="text-center">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 animate-float">
              <Sparkles size={16} className="text-white" />
              <span className="text-sm font-semibold text-white">Digital Transformation for Retail</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="block text-white mb-2">We Build</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient">
                Retail Intelligence
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
              Custom technology systems that understand inventory, predict demand, 
              and create seamless shopping experiences across all channels.
            </p>
            
            {/* Interactive CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4">
              <Link 
                href="/consultation" 
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-base sm:text-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-purple-500/30"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Store size={20} />
                  Start Conversation
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              
              <button 
                onClick={scrollToPlatform}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold text-base sm:text-lg border border-white/20 hover:bg-white/20 transition-all group"
              >
                <span className="flex items-center justify-center gap-2">
                  <Eye size={20} />
                  Explore Platform
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
            
            {/* Floating Feature Indicators */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-white/70 text-xs sm:text-sm px-4">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>Real-time Inventory</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500 animate-pulse delay-300"></div>
                <span>Multi-Channel Sync</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-500 animate-pulse delay-600"></div>
                <span>Predictive Analytics</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/50 text-sm">Explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          PLATFORM MODULES - INTERACTIVE GRID
          ============================================================================ */}
      <section ref={platformRef} className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 block sm:inline">
                The Complete Retail
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 block sm:inline">
                Technology Stack
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              We build integrated modules that work together seamlessly—no silos, 
              no disconnected systems.
            </p>
          </div>

          {/* Interactive Module Selector */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
            {[
              { id: 'commerce', label: 'Commerce', icon: ShoppingBag },
              { id: 'inventory', label: 'Inventory', icon: Package },
              { id: 'analytics', label: 'Analytics', icon: BarChart3 },
              { id: 'stores', label: 'Store Tech', icon: Store },
              { id: 'customers', label: 'Customers', icon: Users },
            ].map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveModule(module.id)}
                className={`group relative px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl border transition-all flex items-center gap-2 sm:gap-3 ${
                  activeModule === module.id
                    ? 'border-purple-600 bg-purple-50 text-purple-700'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900'
                }`}
              >
                <module.icon size={18} className="sm:w-5 sm:h-5" />
                <span className="font-semibold text-sm sm:text-base">{module.label}</span>
                {activeModule === module.id && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 rotate-45 bg-purple-600"></div>
                )}
              </button>
            ))}
          </div>

          {/* Dynamic Module Content */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-lg sm:shadow-xl p-6 sm:p-8">
            {activeModule === 'commerce' && (
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Commerce Engine</h3>
                  <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg">
                    We build shopping experiences that feel intuitive, load instantly, 
                    and convert at every touchpoint.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {[
                      "Custom product configurators",
                      "AR product visualization",
                      "One-click checkout flows",
                      "Subscription management",
                      "Multi-currency support",
                      "Payment gateway orchestration",
                      "Cart recovery automation",
                      "Gift wrapping & messaging"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-100 hover:border-purple-200 transition-colors">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-purple-100 flex items-center justify-center flex-shrink-0">
                          <Check size={12} className="sm:w-3 sm:h-3 text-purple-600" />
                        </div>
                        <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-900 to-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 relative overflow-hidden">
                  <div className="absolute top-3 right-3 text-xs sm:text-sm text-purple-300">LIVE DEMO</div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                          <ShoppingBag size={18} className="sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium text-sm sm:text-base">Product Builder</div>
                          <div className="text-purple-300 text-xs sm:text-sm">Interactive configuration</div>
                        </div>
                      </div>
                      <MousePointer className="text-purple-300 w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {['Size', 'Color', 'Material'].map((option, idx) => (
                        <div key={idx} className="p-2 bg-white/5 rounded-lg text-center">
                          <div className="text-white text-xs sm:text-sm">{option}</div>
                          <div className="text-purple-300 text-xs">Select</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeModule === 'inventory' && (
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Intelligent Inventory</h3>
                  <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg">
                    Real-time visibility across warehouses, stores, and in-transit—with 
                    predictive restocking and automated reconciliation.
                  </p>
                  <div className="space-y-3">
                    {[
                      { label: 'SKU Tracking', icon: Barcode, color: 'bg-blue-500' },
                      { label: 'Batch Management', icon: Package, color: 'bg-purple-500' },
                      { label: 'Automated Reordering', icon: RefreshCw, color: 'bg-green-500' },
                      { label: 'Real-time Sync', icon: Cloud, color: 'bg-pink-500' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${item.color} flex items-center justify-center`}>
                          <item.icon size={20} className="sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 text-sm sm:text-base">{item.label}</div>
                          <div className="text-xs sm:text-sm text-gray-500">Real-time tracking and management</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-blue-200">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div>
                        <div className="text-xs sm:text-sm text-blue-600">Inventory Status</div>
                        <div className="text-xl sm:text-2xl font-bold text-gray-900">Live View</div>
                      </div>
                      <div className="text-green-600 font-bold text-sm sm:text-base">✓ Synced</div>
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      {[
                        { location: 'Warehouse A', stock: 847, status: 'Good' },
                        { location: 'Store Front', stock: 142, status: 'Low' },
                        { location: 'In Transit', stock: 356, status: 'Moving' },
                        { location: 'Warehouse B', stock: 921, status: 'Good' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-white rounded-lg border border-blue-100">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                              <Warehouse size={14} className="sm:w-4 sm:h-4 text-blue-600" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900 text-sm sm:text-base">{item.location}</div>
                              <div className="text-xs text-gray-500">{item.stock} units</div>
                            </div>
                          </div>
                          <div className={`px-2 py-1 rounded-full text-xs font-bold ${
                            item.status === 'Good' ? 'bg-green-100 text-green-700' :
                            item.status === 'Low' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {item.status}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeModule === 'analytics' && (
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Predictive Analytics</h3>
                  <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg">
                    Move beyond basic reporting to systems that anticipate trends, 
                    forecast demand, and recommend actions before opportunities are missed.
                  </p>
                  <div className="bg-gradient-to-r from-gray-900 to-black rounded-lg sm:rounded-xl p-4 sm:p-6 text-white">
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <Cpu size={20} className="sm:w-6 sm:h-6 text-purple-400" />
                      <div className="text-base sm:text-lg font-bold">AI-Powered Insights</div>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      {[
                        "Demand forecasting 30 days ahead",
                        "Customer lifetime value predictions",
                        "Price optimization recommendations",
                        "Inventory health scoring",
                        "Promotion effectiveness analysis",
                        "Customer behavior clustering"
                      ].map((insight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                          <span className="text-xs sm:text-sm">{insight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-purple-200">
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    {[
                      { metric: 'Sales Trend', value: '+24%', change: '↑', color: 'text-green-600' },
                      { metric: 'Stock Turns', value: '8.2x', change: '↑', color: 'text-blue-600' },
                      { metric: 'Cart Abandon', value: '28%', change: '↓', color: 'text-yellow-600' },
                      { metric: 'Repeat Rate', value: '42%', change: '↑', color: 'text-purple-600' },
                    ].map((stat, idx) => (
                      <div key={idx} className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 border border-purple-100">
                        <div className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">{stat.metric}</div>
                        <div className="flex items-baseline gap-1 sm:gap-2">
                          <div className={`text-xl sm:text-2xl md:text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                          <div className={`text-xs sm:text-sm font-bold ${stat.color}`}>{stat.change}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ============================================================================
          ARCHITECTURE SHOWCASE
          ============================================================================ */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        
        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 block">
                Systems That Think
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 block">
                Like Retailers
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              We build interconnected systems where data flows intelligently 
              between commerce, inventory, and customer touchpoints.
            </p>
          </div>

          {/* Architecture Visualization */}
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
            {/* Central Commerce Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center animate-pulse-slow">
              <div className="text-center text-white">
                <ShoppingBag size={32} className="sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2 sm:mb-3 md:mb-4" />
                <div className="text-lg sm:text-xl md:text-2xl font-bold">Commerce Core</div>
                <div className="text-xs sm:text-sm opacity-80">Order Processing</div>
              </div>
            </div>

            {/* Satellite Systems */}
            {[
              { top: '20%', left: '20%', icon: Users, label: 'Customers', color: 'from-blue-500 to-cyan-500' },
              { top: '20%', left: '80%', icon: Package, label: 'Inventory', color: 'from-green-500 to-emerald-500' },
              { top: '80%', left: '20%', icon: Store, label: 'Stores', color: 'from-amber-500 to-orange-500' },
              { top: '80%', left: '80%', icon: BarChart3, label: 'Analytics', color: 'from-pink-500 to-rose-500' },
            ].map((system, idx) => (
              <div 
                key={idx}
                className={`absolute w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-2xl bg-gradient-to-br ${system.color} flex items-center justify-center animate-float`}
                style={{ 
                  top: system.top, 
                  left: system.left,
                  animationDelay: `${idx * 1}s`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className="text-center text-white">
                  <system.icon size={24} className="sm:w-8 sm:h-8 md:w-10 md:h-10 mx-auto mb-2" />
                  <div className="font-bold text-sm sm:text-base md:text-lg">{system.label}</div>
                  <div className="text-xs opacity-80 mt-1">Live Data</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================================
          PROCESS SHOWCASE
          ============================================================================ */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              We Build in
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 block">
                Retail Reality
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Our approach starts with understanding your actual operations, 
              not just installing software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                step: 1,
                title: "Discovery Phase",
                icon: Eye,
                description: "We observe your operations, talk to your team, and map your workflows.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                step: 2,
                title: "Architecture Design",
                icon: Workflow,
                description: "We design systems that fit your specific needs and scale with your growth.",
                color: "from-purple-500 to-pink-500"
              },
              {
                step: 3,
                title: "Build & Integrate",
                icon: Wrench,
                description: "We develop custom solutions that work with your existing tools and processes.",
                color: "from-amber-500 to-orange-500"
              },
              {
                step: 4,
                title: "Launch & Support",
                icon: Rocket,
                description: "We ensure smooth implementation and provide ongoing optimization support.",
                color: "from-green-500 to-emerald-500"
              }
            ].map((process, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl sm:rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-2xl sm:rounded-3xl border border-gray-200 p-4 sm:p-6 md:p-8 hover:border-transparent transition-all duration-500">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${process.color} mb-4 sm:mb-6`}>
                    <process.icon size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-gray-500 mb-2">Step {process.step}</div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================================
          FINAL CTA
          ============================================================================ */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-white to-gray-50 rounded-2xl sm:rounded-3xl border border-gray-200 shadow-xl p-6 sm:p-8 md:p-12 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 mb-6 sm:mb-8">
                <ShoppingBag size={28} className="sm:w-8 sm:h-8 text-purple-600" />
              </div>
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Let's Build Something
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  That Sells
                </span>
              </h3>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                Whether you're launching a new brand, scaling operations, or modernizing 
                existing systems—we're here to build technology that drives results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link 
                  href="/consultation"
                  className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-900 to-black text-white rounded-lg sm:rounded-xl font-bold hover:shadow-xl transition-all shadow-lg"
                >
                  <span className="flex items-center justify-center gap-2">
                    <MessageSquare size={18} className="sm:w-5 sm:h-5" />
                    Start Conversation
                    <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                
                <Link 
                  href="/work"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 rounded-lg sm:rounded-xl font-bold border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Eye size={18} className="sm:w-5 sm:h-5" />
                    See Our Work
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-20px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .delay-600 {
          animation-delay: 600ms;
        }
        
        .delay-700 {
          animation-delay: 700ms;
        }
        
        @media (max-width: 640px) {
          .mouse-follower {
            display: none;
          }
        }
      `}</style>
    </main>
  );
}