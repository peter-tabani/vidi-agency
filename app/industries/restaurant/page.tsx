"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Utensils, Clock, Users, TrendingUp, Shield, Zap, 
  Check, ArrowRight, Award, Star, MapPin, Coffee,
  MessageSquare, CreditCard, BarChart3, Smartphone, Lock,
  Cloud, Wifi, Headphones, Palette, Settings, RefreshCw,
  BatteryCharging, ChefHat, ShoppingBag, Calendar, X,
  Phone, Mail, FileText, CheckCircle, Truck, Wine, Bell
} from 'lucide-react';

export default function RestaurantPage() {
  const [demoActive, setDemoActive] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* ============================================================================
          HERO SECTION
          ============================================================================ */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-amber-50 via-white to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23f59e0b\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full border border-amber-200 mb-8">
              <Star size={16} className="text-amber-600" />
              <span className="text-sm font-semibold text-amber-600">Custom Restaurant Technology Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Increase Restaurant Revenue by <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">42%</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We build custom ordering systems, table management platforms, and kitchen automation 
              solutions that help restaurants operate more efficiently and deliver exceptional guest experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/case-studies" 
                className="px-8 py-3 rounded-lg text-lg font-medium text-amber-600 bg-white border-2 border-amber-200 hover:bg-amber-50 transition-all"
              >
                View Restaurant Case Studies
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3 rounded-lg text-lg font-medium text-white bg-amber-600 hover:bg-amber-700 transition-all"
              >
                Schedule Consultation
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield size={20} className="text-amber-600" />
                <span>PCI-DSS Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock size={20} className="text-amber-600" />
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <Cloud size={20} className="text-amber-600" />
                <span>Reliable Cloud Hosting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          COMMON CHALLENGES SECTION
          ============================================================================ */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Restaurant Challenges We Solve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Streamline your restaurant operations with targeted automation solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Clock,
                title: "Long Wait Times & No-Shows",
                description: "Automated reservation management and SMS reminders that reduce no-shows by up to 80%."
              },
              {
                icon: Calendar,
                title: "Inefficient Table Management",
                description: "Real-time table tracking and optimized seating to increase table turns and revenue."
              },
              {
                icon: Users,
                title: "Staff Communication Gaps",
                description: "Integrated kitchen display systems that sync front-of-house and back-of-house operations."
              },
              {
                icon: Shield,
                title: "Online Ordering Complexity",
                description: "Unified ordering platforms that handle website, mobile, and third-party delivery apps seamlessly."
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-amber-200 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================================
          OUR EXPERIENCE SECTION
          ============================================================================ */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-amber-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Restaurant Experience
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We've worked with fine dining establishments, casual eateries, food trucks, 
                and restaurant groups to build custom solutions including:
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Custom online ordering systems",
                  "Table management with waitlist optimization",
                  "Kitchen display system (KDS) integrations",
                  "Loyalty and customer relationship management"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-white rounded-xl p-6 border border-amber-200">
                <h4 className="font-bold text-gray-900 mb-2">Industry-Specific Solutions</h4>
                <p className="text-gray-600">
                  Each solution is tailored to your restaurant type—whether you're fine dining, 
                  fast casual, catering, or a food truck.
                </p>
              </div>
            </div>

            {/* HOW WE APPROACH SECTION */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                How We Approach Restaurant Projects
              </h3>
              
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    title: "Understanding Your Workflow",
                    description: "We start by learning your restaurant's current operations and where automation could save time."
                  },
                  {
                    step: "2",
                    title: "Technology Architecture",
                    description: "We design systems that integrate with your existing POS and kitchen equipment."
                  },
                  {
                    step: "3",
                    title: "Custom Development",
                    description: "We build solutions specifically for your restaurant's needs, not generic software."
                  },
                  {
                    step: "4",
                    title: "Staff Training & Support",
                    description: "Your team receives thorough training and ongoing support for smooth adoption."
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          WHAT WE CAN BUILD SECTION
          ============================================================================ */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Can Build for Your Restaurant
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Custom solutions designed specifically for restaurant operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: "AI Order Taker",
                description: "24/7 voice assistant that answers calls, takes orders, and handles inquiries.",
                features: ["Phone ordering", "FAQ handling", "After-hours service"]
              },
              {
                icon: Calendar,
                title: "Table Management System",
                description: "Real-time reservation and waitlist management with automated guest notifications.",
                features: ["Online bookings", "Waitlist management", "Guest messaging"]
              },
              {
                icon: Smartphone,
                title: "Mobile Ordering App",
                description: "Custom iOS and Android apps for your restaurant with loyalty integration.",
                features: ["Mobile ordering", "Loyalty points", "Push notifications"]
              },
              {
                icon: BarChart3,
                title: "Restaurant Dashboard",
                description: "Real-time analytics showing sales, inventory, staff performance, and customer insights.",
                features: ["Sales tracking", "Inventory alerts", "Staff analytics"]
              },
              {
                icon: CreditCard,
                title: "POS Integration",
                description: "Connect your existing POS system to online ordering and table management.",
                features: ["Real-time sync", "Menu updates", "Sales reporting"]
              },
              {
                icon: Shield,
                title: "Security & Compliance",
                description: "PCI-DSS compliant payment processing with fraud detection and data encryption.",
                features: ["PCI compliance", "Fraud detection", "Data encryption"]
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-amber-50 rounded-2xl p-6 border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all">
                  <div className="w-14 h-14 rounded-xl bg-amber-600 flex items-center justify-center mb-4">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                  <div className="space-y-2">
                    {item.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <Check size={16} className="text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-600 text-white rounded-xl font-bold text-lg hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl"
            >
              Start Your Project
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================================
          CASE STUDY SECTION
          ============================================================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
                <Award size={16} className="text-amber-300" />
                <span className="text-sm font-semibold">Case Study: Fine Dining Restaurant</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-6">
                Bistro Modern Success Story
              </h2>
              
              <div className="space-y-6 mb-10">
                <div>
                  <h4 className="text-lg font-bold mb-2">Before Our System:</h4>
                  <ul className="space-y-2 text-amber-100">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-500/30 flex items-center justify-center mt-1">
                        <span className="text-xs">✕</span>
                      </div>
                      <span>Manual reservations causing 25% no-shows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-500/30 flex items-center justify-center mt-1">
                        <span className="text-xs">✕</span>
                      </div>
                      <span>Average check size of $45 per person</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-500/30 flex items-center justify-center mt-1">
                        <span className="text-xs">✕</span>
                      </div>
                      <span>2-hour table turns limiting revenue</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-2">After Implementation:</h4>
                  <ul className="space-y-2 text-green-100">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-500/30 flex items-center justify-center mt-1">
                        <Check size={12} />
                      </div>
                      <span>No-shows reduced to 5% with automated reminders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-500/30 flex items-center justify-center mt-1">
                        <Check size={12} />
                      </div>
                      <span>Average check increased to $68 per person</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-500/30 flex items-center justify-center mt-1">
                        <Check size={12} />
                      </div>
                      <span>Table turns optimized to 1.5 hours</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Link 
                href="/case-studies/bistro-modern" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-amber-600 rounded-lg font-bold hover:bg-amber-50 transition-all"
              >
                Read Full Case Study
                <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="text-center mb-8">
                <div className="text-5xl font-bold mb-2">$380K</div>
                <div className="text-amber-200">Additional Annual Revenue</div>
              </div>
              
              <div className="space-y-6">
                {[
                  { label: 'Average Check Size', value: '$68', change: '+51%' },
                  { label: 'Table Turn Time', value: '1.5h', change: '-25%' },
                  { label: 'Online Reservations', value: '85%', change: '+40%' },
                  { label: 'Wine Pairing Upsell', value: '65%', change: '+160%' }
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <span className="text-amber-100">{stat.label}</span>
                    <div className="text-right">
                      <div className="text-xl font-bold">{stat.value}</div>
                      <div className="text-sm text-green-300">{stat.change}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20 text-center text-sm text-amber-200">
                Results measured over 12 months post-implementation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          INTEGRATION PARTNERS
          ============================================================================ */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-amber-50">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-3xl p-10 border border-amber-200">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Seamless Restaurant Ecosystem Integration
              </h3>
              <p className="text-gray-600">
                Connect with your existing restaurant tools and platforms
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {[
                { name: 'Toast POS', category: 'Point of Sale' },
                { name: 'Square', category: 'Payments' },
                { name: 'Uber Eats', category: 'Delivery' },
                { name: 'OpenTable', category: 'Reservations' },
                { name: 'QuickBooks', category: 'Accounting' },
                { name: 'Slack', category: 'Communication' },
                { name: 'Mailchimp', category: 'Marketing' },
                { name: 'Google Analytics', category: 'Analytics' },
                { name: 'Shopify', category: 'Merchandise' },
                { name: '7shifts', category: 'Scheduling' }
              ].map((partner, idx) => (
                <div key={idx} className="flex flex-col items-center p-4 bg-amber-50 rounded-xl hover:bg-amber-100 transition-colors border border-amber-100">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center mb-3">
                    <div className="font-bold text-amber-700 text-lg">{partner.name.charAt(0)}</div>
                  </div>
                  <div className="font-semibold text-gray-900 text-center">{partner.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{partner.category}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          RESOURCES SECTION
          ============================================================================ */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              <div className="lg:w-1/3">
                <div className="w-16 h-16 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                  <FileText size={32} className="text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Free Restaurant Automation Checklist
                </h3>
                <p className="text-sm text-gray-500 mb-6">Essential planning guide for restaurant owners</p>
                <a 
                  href="/restaurant-automation-guide.pdf"
                  download="Vidi-Restaurant-Automation-Guide.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-all"
                >
                  Download PDF
                  <ArrowRight size={18} />
                </a>
              </div>
              
              <div className="lg:w-2/3">
                <h4 className="font-bold text-gray-900 mb-4">Covers:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Best technology investments for ROI",
                    "Staff training and adoption strategies",
                    "Integration planning with existing systems",
                    "ROI estimation framework for restaurants"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          FINAL CTA
          ============================================================================ */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-gray-900 to-amber-900">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
            <Calendar size={18} className="text-amber-300" />
            <span className="text-sm font-semibold">Free Strategy Session</span>
          </div>
          
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Restaurant?
          </h2>
          
          <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto">
            Schedule a free consultation to discuss how custom software can streamline 
            your operations and increase your restaurant's revenue.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
            {[
              {
                title: 'Free Restaurant Analysis',
                description: 'We analyze your current operations and identify specific automation opportunities'
              },
              {
                title: 'Custom Solution Roadmap',
                description: 'Receive a detailed plan tailored to your restaurant needs and budget'
              },
              {
                title: 'Transparent Pricing',
                description: 'Clear project quote with guaranteed timeline and no hidden fees'
              },
              {
                title: 'ROI Projection',
                description: 'Understand the expected return on investment for your specific restaurant'
              }
            ].map((offer, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="font-bold text-lg mb-2">{offer.title}</h4>
                <p className="text-amber-100 text-sm">{offer.description}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/consultation" 
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all shadow-xl shadow-amber-500/30"
            >
              <Calendar size={22} />
              Schedule Free Consultation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button 
              onClick={() => setDemoActive(true)}
              className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all"
            >
              View Live Demo
            </button>
          </div>
          
          <p className="mt-8 text-amber-200 text-sm">
            ⏱️ 45-minute session • No obligation • Restaurant technology experts only
          </p>
        </div>
      </section>

      {/* Demo Modal */}
      {demoActive && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Restaurant System Demo</h3>
                <button 
                  onClick={() => setDemoActive(false)}
                  className="text-gray-400 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Online Ordering Demo</h4>
                  <p className="text-gray-600 mb-6">
                    Experience our custom restaurant ordering system that allows customers to:
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Browse digital menus with real-time availability",
                      "Place orders for pickup or delivery",
                      "Customize orders with special instructions",
                      "Join loyalty programs and earn rewards",
                      "Schedule orders for future pickup",
                      "Pay securely with multiple payment options"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Restaurant Management Demo</h4>
                  <p className="text-gray-600 mb-6">
                    See how our management dashboard streamlines restaurant operations:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Real-time order management and kitchen display",
                      "Table and reservation tracking",
                      "Inventory management and low stock alerts",
                      "Staff scheduling and performance analytics",
                      "Sales reporting and financial insights",
                      "Customer relationship management"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <Link 
                  href="/full-demo"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-xl font-bold hover:shadow-xl transition-all"
                >
                  Launch Interactive Demo
                  <ArrowRight size={20} />
                </Link>
                <p className="mt-4 text-sm text-gray-500">
                  Or schedule a personalized demo with our restaurant technology specialist
                </p>
                <Link 
                  href="/contact"
                  className="mt-2 inline-block text-amber-600 font-medium hover:text-amber-700"
                >
                  Contact for Custom Demo →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}