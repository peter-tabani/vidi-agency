"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Sparkles, Palette, Camera, Heart, TrendingUp, Users, 
  Star, CheckCircle, ArrowRight, Clock, Zap, Shield,
  MessageCircle, Smartphone, BarChart, Award, Target,
  Instagram, Youtube, ShoppingBag, Scissors, Brush,
  Gem, Crown, Sparkle, Flower2, Diamond, Music, Coins,
  Volume2, Film, Eye, Search, Filter, Globe, Lock,
  Calendar, CreditCard, Tag, Percent, Play, Pause,
  Maximize2, Minimize2, X, ChevronRight, ChevronLeft
} from 'lucide-react';

export default function BeautyLifestylePage() {
  const [activeTab, setActiveTab] = useState('salons');
  const [selectedImage, setSelectedImage] = useState(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const industries = [
    { id: 'salons', label: 'Salons & Spas', icon: Scissors, color: 'from-pink-500 to-rose-500' },
    { id: 'fashion', label: 'Fashion Brands', icon: ShoppingBag, color: 'from-purple-500 to-violet-500' },
    { id: 'influencers', label: 'Influencers', icon: Camera, color: 'from-blue-500 to-cyan-500' },
    { id: 'wellness', label: 'Wellness', icon: Heart, color: 'from-green-500 to-emerald-500' },
  ];

  type PortfolioKey = 'salons' | 'fashion' | 'influencers';
  type PortfolioItem = { title: string; desc: string; image: string };
  type PortfolioType = Record<PortfolioKey, PortfolioItem[]>;

  const portfolio: PortfolioType = {
  salons: [
    { 
      title: 'Salon Booking System', 
      desc: 'Online booking with automated reminders', 
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80' 
    },
    { 
      title: 'Spa Client Portal', 
      desc: 'Membership management and package tracking', 
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80' 
    },
  ],
  fashion: [
    { 
      title: 'Fashion E-Commerce', 
      desc: 'Lookbook integration with cart system', 
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&q=80' 
    },
    { 
      title: 'Brand Showcase Site', 
      desc: 'Story-driven product presentation', 
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&q=80' 
    },
  ],
  influencers: [
    { 
      title: 'Creator Portfolio', 
      desc: 'Media kit and brand collaboration hub', 
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&q=80' 
    },
    { 
      title: 'Content Monetization', 
      desc: 'Subscription and exclusive content platform', 
      image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&q=80' 
    },
  ]
};

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-rose-50/30 to-white">
      {/* Custom Styling */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .shimmer-text {
          background: linear-gradient(90deg, #ec4899 0%, #f472b6 25%, #ec4899 50%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
        .glass-effect {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .gradient-border {
          border: 2px solid transparent;
          background: linear-gradient(white, white) padding-box,
                    linear-gradient(45deg, #ec4899, #a855f7, #3b82f6) border-box;
        }
      `}</style>

      <Navbar />
      
      {/* ============================================================================
          GLAMOUR HERO - Aesthetic Focus
          ============================================================================ */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/20 via-pink-50/10 to-purple-100/20" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-pink-300/20 to-purple-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-rose-200/20 to-blue-200/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 glass-effect rounded-full mb-8 shadow-lg">
              <Sparkle className="w-5 h-5 text-pink-500" />
              <span className="text-lg font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                BEAUTY & LIFESTYLE DIGITAL ELEVATION
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="block text-gray-900">Where Aesthetics</span>
              <span className="block mt-4">
                <span className="shimmer-text">Meet Digital</span>
                <span className="text-gray-900"> Intelligence</span>
              </span>
            </h1>
            
            <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light">
              We create digital experiences as beautiful as your brand—transforming 
              salons, fashion houses, and influencers into immersive lifestyle destinations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => {
                  const el = document.getElementById('showcase');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group px-10 py-5 rounded-2xl bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
              >
                <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                <span>View Digital Showcase</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 border-4 border-white" />
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-500">Trusted by beauty innovators</p>
                  <p className="font-semibold text-gray-900">47+ premium brands</p>
                </div>
              </div>
            </div>
          </div>

          {/* Industry Navigation */}
          <div className="mt-20">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <button
                    key={industry.id}
                    onClick={() => setActiveTab(industry.id)}
                    className={`group px-8 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 ${
                      activeTab === industry.id 
                        ? `bg-gradient-to-r ${industry.color} text-white shadow-lg scale-105`
                        : 'glass-effect text-gray-700 hover:scale-105'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-semibold">{industry.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          IMMERSIVE SHOWCASE - Visual Experience
          ============================================================================ */}
      <section id="showcase" className="py-20 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Digital Experiences That
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mt-2">
                Feel Like Magic
              </span>
            </h2>
          </div>

          {/* Interactive Demo Area */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-8">
              <div className="glass-effect rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 flex items-center justify-center">
                    <Camera className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Content That Converts</h3>
                    <p className="text-gray-600">Turn visitors into loyal fans</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Interactive Lookbooks</p>
                      <p className="text-sm text-gray-600">Click-to-book, swipe-to-shop experiences</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">AI Style Assistant</p>
                      <p className="text-sm text-gray-600">Personalized recommendations 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Preview */}
            <div className="relative">
              <div className="gradient-border rounded-3xl overflow-hidden aspect-video">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster="/api/placeholder/800/450"
                  onClick={toggleVideo}
                >
                  <source src="/beauty-showcase.mp4" type="video/mp4" />
                </video>
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={toggleVideo}
                      className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Play className="w-10 h-10 text-white ml-1" />
                    </button>
                  </div>
                )}
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-r from-pink-300/30 to-purple-300/30 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Featured <span className="text-pink-600">Creations</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(portfolio as PortfolioType)[activeTab as PortfolioKey]?.map((item, idx) => (
                <div 
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-pink-200 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800">
                        {activeTab}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 mb-4">{item.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-pink-600">View Case Study →</span>
                      <div className="flex space-x-1">
                        {[1,2,3,4,5].map(i => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          BEAUTY TECH STACK - Specialized Solutions
          ============================================================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-rose-50/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-full mb-6">
              <Palette className="w-5 h-5 text-pink-600" />
              <span className="text-lg font-semibold text-gray-900">SPECIALIZED BEAUTY TECHNOLOGY</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built for the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600 mt-2">
                Beauty Economy
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Brush,
                title: "Visual AI Stylist",
                description: "AI that understands color theory, skin tones, and personal style",
                features: ["Virtual try-on", "Color palette analysis", "Style matching"]
              },
              {
                icon: Calendar,
                title: "Smart Booking Ecosystem",
                description: "Seamless appointment management with automated reminders and follow-ups",
                features: ["Waitlist optimization", "No-show prediction", "Loyalty integration"]
              },
              {
                icon: Coins,
                title: "Influence Monetization",
                description: "Turn engagement into revenue with smart affiliate and brand deal systems",
                features: ["Commission tracking", "Brand matching", "Content scheduling"]
              }
            ].map((tech, idx) => (
              <div 
                key={idx}
                className="glass-effect rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group hover:scale-[1.02]"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <tech.icon className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{tech.title}</h3>
                <p className="text-gray-600 mb-6">{tech.description}</p>
                <ul className="space-y-3">
                  {tech.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Media Integration */}
          <div className="bg-gradient-to-r from-pink-900/90 to-purple-900/90 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-500/20 to-purple-500/20 rounded-full -translate-y-32 translate-x-32" />
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="lg:w-1/2">
                  <h3 className="text-4xl font-bold mb-6">
                    Social Media
                    <span className="block text-pink-300">Supercharged</span>
                  </h3>
                  <p className="text-xl text-pink-100 mb-8">
                    We connect your website directly to Instagram, TikTok, and Pinterest— 
                    turning social engagement into measurable revenue.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                      <Instagram className="w-5 h-5" />
                      <span>Shoppable Instagram</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                      <Youtube className="w-5 h-5" />
                      <span>Video Commerce</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                      <ShoppingBag className="w-5 h-5" />
                      <span>Live Shopping</span>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { metric: "3.2x", label: "Higher engagement" },
                      { metric: "47%", label: "Faster conversion" },
                      { metric: "24/7", label: "AI content assistance" },
                      { metric: "100%", label: "Platform integration" }
                    ].map((stat, idx) => (
                      <div key={idx} className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
                        <div className="text-3xl font-bold mb-2">{stat.metric}</div>
                        <div className="text-sm text-pink-200">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          AESTHETIC TRANSFORMATION - Before/After
          ============================================================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              From Ordinary to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mt-2">
                Extraordinary
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Left Column - Before */}
            <div className="space-y-8">
              <div className="p-8 rounded-2xl border-2 border-gray-200 relative">
                <div className="absolute -top-4 left-8 bg-gray-500 text-white px-4 py-2 rounded-full font-bold">
                  BEFORE DIGITAL
                </div>
                <div className="space-y-6 pt-4">
                  {[
                    "Static website with outdated design",
                    "Manual booking and appointment management",
                    "Disconnected social media presence",
                    "Limited customer insights and analytics",
                    "Generic, non-personalized experience"
                  ].map((issue, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <X className="w-4 h-4 text-gray-500" />
                      </div>
                      <p className="text-gray-700">{issue}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
  <h3 className="text-2xl font-bold mb-4">Common Challenges</h3>
  <div className="space-y-4">
    {[
      "No online booking system",
      "Disconnected social presence",
      "Manual appointment management",
      "No customer data insights"
    ].map((issue, idx) => (
      <div key={idx} className="flex items-center gap-3 pb-2 border-b border-gray-700">
        <X className="w-4 h-4 text-red-400 flex-shrink-0" />
        <span>{issue}</span>
      </div>
    ))}
  </div>
</div>
            </div>

            {/* Right Column - After */}
            <div className="space-y-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-200 relative">
                <div className="absolute -top-4 left-8 bg-gradient-to-r from-pink-600 to-rose-600 text-white px-4 py-2 rounded-full font-bold">
                  WITH VIDI ELEVATION
                </div>
                <div className="space-y-6 pt-4">
                  {[
                    "Immersive, interactive brand experience",
                    "AI-powered booking and personalization",
                    "Seamless social commerce integration",
                    "Real-time analytics and insights",
                    "Personalized customer journeys"
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-800 font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl p-8 text-white">
  <h3 className="text-2xl font-bold mb-4">What We Build</h3>
  <div className="space-y-4">
    {[
      "Automated booking & reminders",
      "Social media integration",
      "Customer analytics dashboard",
      "Mobile-friendly experience"
    ].map((benefit, idx) => (
      <div key={idx} className="flex items-center gap-3 pb-2 border-b border-pink-500">
        <CheckCircle className="w-4 h-4 text-yellow-300 flex-shrink-0" />
        <span>{benefit}</span>
      </div>
    ))}
  </div>
</div>
            </div>
          </div>

          {/* Client Spotlight */}
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/3">
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 mx-auto flex items-center justify-center">
                    <div className="w-56 h-56 rounded-full bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
                      <Crown className="w-24 h-24 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-gradient-to-br from-yellow-200 to-amber-200 flex items-center justify-center border-8 border-white">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900">4.9</div>
                      <div className="text-sm text-gray-700">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* What We Can Build */}
<div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
  <div className="text-center mb-12">
    <h3 className="text-3xl font-bold text-gray-900 mb-4">
      What We Build for Beauty Brands
    </h3>
    <p className="text-gray-600 max-w-2xl mx-auto">
      From salons to influencers, we create digital experiences that match your brand's aesthetic
    </p>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      {
        icon: Calendar,
        title: "Smart Booking",
        features: ["Online appointments", "Automated reminders", "Waitlist management"]
      },
      {
        icon: ShoppingBag,
        title: "E-Commerce",
        features: ["Product catalogs", "Secure checkout", "Inventory tracking"]
      },
      {
        icon: Smartphone,
        title: "Social Integration",
        features: ["Instagram feeds", "Shoppable posts", "Content scheduling"]
      }
    ].map((service, idx) => {
      const Icon = service.icon;
      return (
        <div key={idx} className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center mx-auto mb-4">
            <Icon className="w-8 h-8 text-pink-600" />
          </div>
          <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
          <ul className="space-y-2">
            {service.features.map((feature, fIdx) => (
              <li key={fIdx} className="text-sm text-gray-600 flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      );
    })}
  </div>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          BEAUTY CONSULTATION - Elegant CTA
          ============================================================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-rose-50/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 glass-effect rounded-full mb-6">
              <Diamond className="w-5 h-5 text-pink-600" />
              <span className="text-lg font-semibold text-gray-900">PREMIUM DIGITAL CONSULTATION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Brand's
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 mt-2">
                Digital Transformation
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Schedule a personalized consultation to envision your brand's elevated digital presence.
            </p>
          </div>

          <form 
  action="/api/contact" 
  method="POST"
  className="space-y-6"
  onSubmit={(e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you! We\'ll be in touch within 24 hours.');
  }}
>
  <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-2">Brand Name *</label>
      <input
        type="text"
        name="brand"
        required
        className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
        placeholder="Your brand or business"
      />
    </div>
    
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">Your Name *</label>
        <input
          type="text"
          name="name"
          required
          className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
          placeholder="First and last"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">Email *</label>
        <input
          type="email"
          name="email"
          required
          className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
          placeholder="you@brand.com"
        />
      </div>
    </div>
    
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-2">Primary Focus *</label>
      <select 
        name="focus"
        required
        className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
      >
        <option value="">Select your focus</option>
        <option>Salon/Spa Digital Experience</option>
        <option>Fashion E-commerce</option>
        <option>Influencer Platform</option>
        <option>Wellness Brand</option>
        <option>Complete Digital Transformation</option>
      </select>
    </div>
  </div>
  
  <button 
    type="submit"
    className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold text-lg hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300 flex items-center justify-center gap-3 group"
  >
    <span>Schedule Consultation</span>
    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
  </button>
</form>

          {/* Final CTA */}
          <div className="text-center mt-20">
            <p className="text-2xl text-gray-600 mb-8">
              Ready to create digital magic?
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-4 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all">
                Start Your Transformation
              </button>
              <Link 
                href="/beauty-portfolio"
                className="px-10 py-4 rounded-2xl border-2 border-pink-300 text-pink-600 font-bold text-lg hover:bg-pink-50 transition-all"
              >
                View Full Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}