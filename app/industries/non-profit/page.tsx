"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Heart, Users, DollarSign, Calendar, TrendingUp, Shield, Zap, 
  CheckCircle, ArrowRight, Award, Star, MessageSquare, BarChart, 
  Smartphone, Lock, Cloud, FileText, Bell, Target, Globe,
  Home, BookOpen, Music, HandHeart, Gift, Megaphone,
  Settings, RefreshCw, BatteryCharging, Video, Church, Leaf
} from 'lucide-react';

export default function ChurchNonprofitWelcomePage() {
  const [organizationType, setOrganizationType] = useState('church');
  const [demoActive, setDemoActive] = useState(false);

  const organizationTypes = [
    { 
      id: 'church', 
      label: 'Church', 
      icon: Church, 
      color: 'from-blue-500 to-purple-500',
      description: 'Worship communities and ministries'
    },
    { 
      id: 'nonprofit', 
      label: 'Nonprofit', 
      icon: Heart, 
      color: 'from-emerald-500 to-green-500',
      description: 'Charitable organizations & NGOs'
    },
    { 
      id: 'ministry', 
      label: 'Ministry', 
      icon: BookOpen, 
      color: 'from-amber-500 to-orange-500',
      description: 'Outreach and mission organizations'
    },
    { 
      id: 'community', 
      label: 'Community Org', 
      icon: Users, 
      color: 'from-purple-500 to-pink-500',
      description: 'Local community groups'
    },
    { 
      id: 'foundation', 
      label: 'Foundation', 
      icon: HandHeart, 
      color: 'from-red-500 to-rose-500',
      description: 'Grant-making foundations'
    }
  ];

  const platformFeatures = [
    { icon: Users, title: 'Member Management', description: 'Complete member database with family units' },
    { icon: DollarSign, title: 'Donation Processing', description: 'Secure giving with recurring options' },
    { icon: Calendar, title: 'Event Management', description: 'Service scheduling and volunteer coordination' },
    { icon: MessageSquare, title: 'Communication Hub', description: 'Email, SMS, and app notifications' },
    { icon: BarChart, title: 'Impact Analytics', description: 'Track growth and engagement metrics' },
    { icon: Shield, title: 'Data Protection', description: 'GDPR & compliance ready' }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-emerald-50">
        
        {/* --- WARM, TRUST-BUILDING HEADER --- */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-blue-100 shadow-sm">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <Heart size={28} className="text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">FaithConnect</h1>
                  <p className="text-sm text-gray-500">Community & Giving Platform</p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-6">
                <a href="tel:+1-888-123-4567" className="text-gray-600 hover:text-blue-600 transition-colors">
                  🙏 1-888-123-4567
                </a>
                <Link 
                  href="/demo" 
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-xl transition-all shadow-lg shadow-blue-200"
                  onClick={() => setDemoActive(true)}
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* --- HERO SECTION --- */}
        <section className="pt-20 pb-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
          {/* Gentle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200 mb-8">
                  <HandHeart size={16} className="text-blue-600" />
                  <span className="text-sm font-semibold text-blue-600">Built for Purpose-Driven Organizations</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Grow Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">Community</span> & 
                  <span className="block">Increase <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500">Giving</span> by 300%</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  Custom engagement platforms designed specifically for churches and nonprofits. Strengthen connections, simplify giving, and amplify your impact.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/discovery-call" 
                    className="group px-8 py-4 rounded-xl text-lg font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-2xl transition-all shadow-xl shadow-blue-300/50 inline-flex items-center justify-center gap-3"
                  >
                    <Calendar size={22} />
                    Book Discovery Call
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button 
                    onClick={() => setDemoActive(true)}
                    className="px-8 py-4 rounded-xl text-lg font-bold text-gray-700 bg-white border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all inline-flex items-center justify-center gap-3"
                  >
                    <Heart size={22} />
                    See Platform Demo
                  </button>
                </div>
                
                {/* Trust badges */}
                <div className="mt-12 flex flex-wrap items-center gap-8">
                  <div className="flex items-center gap-2">
                    <Shield size={20} className="text-emerald-500" />
                    <span className="text-sm text-gray-600">GDPR & Privacy Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={20} className="text-blue-500" />
                    <span className="text-sm text-gray-600">2,100+ Faith Organizations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign size={20} className="text-amber-500" />
                    <span className="text-sm text-gray-600">$850M+ in Donations Processed</span>
                  </div>
                </div>
              </div>
              
              {/* Interactive Giving Demo */}
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    </div>
                    <div className="text-sm text-gray-400">GIVING PORTAL</div>
                  </div>
                  
                  {/* Giving Options */}
                  <div className="mb-6">
                    <div className="text-center mb-6">
                      <div className="text-sm text-gray-400">Support Our Mission</div>
                      <div className="text-2xl font-bold text-gray-900">Hope Community Church</div>
                    </div>
                    
                    {/* Quick Give Amounts */}
                    <div className="grid grid-cols-4 gap-3 mb-6">
                      {[25, 50, 100, 250].map((amount, idx) => (
                        <button key={idx} className="py-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg font-bold transition-colors">
                          ${amount}
                        </button>
                      ))}
                    </div>
                    
                    {/* Custom Amount */}
                    <div className="mb-6">
                      <div className="text-sm text-gray-600 mb-2">Or enter custom amount</div>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-500">$</span>
                        <input 
                          type="number" 
                          placeholder="0.00"
                          className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                    
                    {/* Giving Frequency */}
                    <div className="mb-6">
                      <div className="text-sm text-gray-600 mb-2">Frequency</div>
                      <div className="grid grid-cols-3 gap-2">
                        {['One-time', 'Monthly', 'Yearly'].map((freq, idx) => (
                          <button key={idx} className="py-2 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded-lg font-medium transition-colors">
                            {freq}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Fund Selection */}
                    <div className="mb-6">
                      <div className="text-sm text-gray-600 mb-2">Designate to</div>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option>General Fund</option>
                        <option>Missions & Outreach</option>
                        <option>Youth Ministry</option>
                        <option>Building Fund</option>
                        <option>Benevolence</option>
                      </select>
                    </div>
                    
                    <button className="w-full py-4 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl text-white font-bold hover:shadow-lg transition-all">
                      Give Securely
                    </button>
                  </div>
                  
                  <div className="text-center text-sm text-gray-500">
                    💫 100% secure • Tax receipts provided • No hidden fees
                  </div>
                </div>
                
                {/* Floating metrics */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={20} className="text-emerald-500" />
                    <div>
                      <div className="text-xs text-gray-500">Recurring Giving</div>
                      <div className="text-xl font-bold text-gray-900">+42%</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-2">
                    <Users size={20} className="text-purple-500" />
                    <div>
                      <div className="text-xs text-gray-500">Member Engagement</div>
                      <div className="text-xl font-bold text-gray-900">+68%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- ORGANIZATION TYPE SELECTOR --- */}
        <section className="py-12 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-8">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Designed Specifically For You
              </h3>
              <p className="text-xl text-gray-600">
                Tailored solutions for different types of faith-based and nonprofit organizations
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {organizationTypes.map((type) => {
                const Icon = type.icon;
                const isSelected = organizationType === type.id;
                return (
                  <button
                    key={type.id}
                    onClick={() => setOrganizationType(type.id)}
                    className={`flex flex-col items-center gap-4 px-8 py-6 rounded-2xl border-2 transition-all ${isSelected 
                      ? `border-blue-500 bg-gradient-to-br ${type.color} bg-opacity-10` 
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg'}`}
                  >
                    <div className={`w-16 h-16 rounded-xl ${isSelected ? `bg-gradient-to-br ${type.color}` : 'bg-gray-100'} flex items-center justify-center`}>
                      <Icon size={32} className={isSelected ? 'text-white' : 'text-gray-600'} />
                    </div>
                    <div className="text-center">
                      <span className={`text-lg font-bold ${isSelected ? 'text-gray-900' : 'text-gray-700'}`}>
                        {type.label}
                      </span>
                      <div className="mt-2 text-sm text-gray-500">{type.description}</div>
                    </div>
                  </button>
                );
              })}
            </div>
            
            {/* Dynamic Content Based on Selection */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-10 border border-blue-200">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">
                    {organizationTypes.find(t => t.id === organizationType)?.label} Features
                  </h4>
                  
                  {organizationType === 'church' && (
                    <ul className="space-y-4">
                      {[
                        "Worship service planning and scheduling",
                        "Small group and ministry team management",
                        "Sermon library with notes and discussion guides",
                        "Baptism and membership class tracking",
                        "Pastoral care and prayer request system",
                        "Children's ministry check-in and safety"
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-emerald-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {organizationType === 'nonprofit' && (
                    <ul className="space-y-4">
                      {[
                        "Donor management and relationship tracking",
                        "Grant application and reporting tools",
                        "Volunteer recruitment and scheduling",
                        "Impact measurement and reporting",
                        "Program and service delivery tracking",
                        "Stakeholder communication portal"
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-emerald-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {organizationType === 'ministry' && (
                    <ul className="space-y-4">
                      {[
                        "Mission trip planning and fundraising",
                        "Outreach event coordination",
                        "Discipleship program tracking",
                        "Resource library for leaders",
                        "Partner church network tools",
                        "Cross-cultural ministry support"
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-emerald-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <Zap size={24} className="text-amber-500" />
                    <h5 className="text-xl font-bold text-gray-900">Typical Results</h5>
                  </div>
                  
                  <div className="space-y-6">
                    {[
                      { metric: "Online Giving", value: "300% Increase", icon: DollarSign, color: "text-emerald-600" },
                      { metric: "Member Engagement", value: "68% Growth", icon: Users, color: "text-blue-600" },
                      { metric: "Volunteer Participation", value: "55% Increase", icon: HandHeart, color: "text-purple-600" },
                      { metric: "Admin Time Saved", value: "20+ Hours/Week", icon: Clock, color: "text-amber-600" }
                    ].map((result, idx) => {
                      const Icon = result.icon;
                      return (
                        <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                            <Icon size={20} className="text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="text-gray-700">{result.metric}</div>
                            <div className={`text-2xl font-bold ${result.color}`}>{result.value}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="mt-8 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
                    <p className="text-sm text-emerald-700">
                      ✨ <strong>Typical Impact:</strong> Most organizations see a full return on investment within 3-6 months through increased giving and reduced administrative costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- MEMBER ENGAGEMENT PLATFORM --- */}
        <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200 mb-4">
                <Users size={16} className="text-blue-600" />
                <span className="text-sm font-semibold text-blue-600">Complete Community Platform</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Strengthen Your Community Connections
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to engage, communicate, and grow together
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {platformFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Communication Features */}
            <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-lg mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Stay Connected, Always</h3>
                  <p className="text-gray-600 mb-8">
                    Keep your community informed and engaged with multi-channel communication tools designed for meaningful connection.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Mobile app with push notifications",
                      "Email campaigns with 95%+ deliverability",
                      "SMS alerts for urgent updates",
                      "In-app messaging and prayer requests",
                      "Automated event reminders",
                      "Personalized content delivery"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-emerald-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-8">
                  <div className="text-white text-center mb-6">
                    <div className="text-4xl font-bold mb-2">92%</div>
                    <div className="text-blue-200">Message Open Rate</div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { channel: 'Mobile App', engagement: '85%', trend: '+12%' },
                      { channel: 'Email', engagement: '78%', trend: '+8%' },
                      { channel: 'SMS', engagement: '95%', trend: '+15%' },
                      { channel: 'Push Notifications', engagement: '88%', trend: '+20%' }
                    ].map((metric, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                            <Bell size={16} className="text-white" />
                          </div>
                          <span className="text-white">{metric.channel}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-bold">{metric.engagement}</div>
                          <div className="text-sm text-emerald-300">{metric.trend}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Integration Partners */}
            <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-lg">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Works With Your Existing Tools
                </h3>
                <p className="text-gray-600">
                  Connect with 100+ ministry and nonprofit tools
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                {[
                  { name: 'Planning Center', category: 'Church Management' },
                  { name: 'QuickBooks', category: 'Accounting' },
                  { name: 'Mailchimp', category: 'Email' },
                  { name: 'Slack', category: 'Communication' },
                  { name: 'Tithe.ly', category: 'Giving' },
                  { name: 'Google Calendar', category: 'Scheduling' },
                  { name: 'Zoom', category: 'Video' },
                  { name: 'Stripe', category: 'Payments' },
                  { name: 'Salesforce', category: 'CRM' },
                  { name: 'ChurchTrac', category: 'ChMS' }
                ].map((partner, idx) => (
                  <div key={idx} className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center mb-3">
                      <div className="font-bold text-gray-700">{partner.name.charAt(0)}</div>
                    </div>
                    <div className="font-semibold text-gray-900 text-center">{partner.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{partner.category}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- CASE STUDY: MEGA-CHURCH GROWTH --- */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
                <Award size={16} className="text-amber-300" />
                <span className="text-sm font-semibold">Case Study: 5,000-Member Church</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Grace Community Transformation
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
                  <h4 className="text-xl font-bold mb-4">Challenges Before</h4>
                  <ul className="space-y-3 text-blue-100">
                    {[
                      "40% of visitors never returned for second visit",
                      "Manual giving processes causing donation delays",
                      "Poor communication leading to event no-shows",
                      "Volunteer coordination consuming 30+ hours weekly"
                    ].map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-red-500/30 flex items-center justify-center mt-1">
                          <span className="text-xs">✕</span>
                        </div>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h4 className="text-xl font-bold mb-4">Our Solution</h4>
                  <ul className="space-y-3 text-emerald-100">
                    {[
                      "Custom mobile app for community engagement",
                      "Automated visitor follow-up system",
                      "Simplified online giving with text-to-give",
                      "Volunteer scheduling and communication platform"
                    ].map((solution, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/30 flex items-center justify-center mt-1">
                          <CheckCircle size={12} className="text-emerald-300" />
                        </div>
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h4 className="text-xl font-bold mb-6">Results in 12 Months</h4>
                  
                  <div className="space-y-6">
                    {[
                      { 
                        metric: 'Online Giving', 
                        before: '$45,000/mo', 
                        after: '$185,000/mo',
                        improvement: '+311%'
                      },
                      { 
                        metric: 'Visitor Retention', 
                        before: '40%', 
                        after: '78%',
                        improvement: '+95%'
                      },
                      { 
                        metric: 'Small Group Participation', 
                        before: '650 members', 
                        after: '1,850 members',
                        improvement: '+185%'
                      },
                      { 
                        metric: 'Volunteer Hours', 
                        before: '3,200/mo', 
                        after: '7,500/mo',
                        improvement: '+134%'
                      }
                    ].map((result, idx) => (
                      <div key={idx} className="bg-white/5 rounded-xl p-6">
                        <div className="font-bold text-lg mb-3">{result.metric}</div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm text-blue-200 mb-1">Before</div>
                            <div className="text-red-300 font-medium">{result.before}</div>
                          </div>
                          <div>
                            <div className="text-sm text-blue-200 mb-1">After</div>
                            <div className="text-emerald-300 font-medium">{result.after}</div>
                          </div>
                        </div>
                        <div className="mt-4 pt-3 border-t border-white/10 text-center">
                          <span className="text-amber-300 font-bold">{result.improvement}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/case-studies/grace-community" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-xl"
              >
                <FileText size={20} />
                Download Full Case Study (PDF)
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* --- SPECIAL PRICING FOR NONPROFITS --- */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-full border border-emerald-200 mb-4">
                <Heart size={16} className="text-emerald-600" />
                <span className="text-sm font-semibold text-emerald-600">Special Nonprofit Pricing</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Affordable Solutions for Purpose-Driven Work
              </h2>
              <p className="text-xl text-gray-600">
                We believe in your mission, so we offer special rates for nonprofit organizations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  plan: 'Start',
                  price: '$5,900',
                  description: 'For small organizations up to 250 members',
                  features: [
                    'Basic member management',
                    'Online giving portal',
                    'Event calendar',
                    'Email communication',
                    '6 months support',
                    'Up to 250 members'
                  ],
                  cta: 'Get Started',
                  popular: false,
                  special: false
                },
                {
                  plan: 'Grow',
                  price: '$14,900',
                  description: 'For growing organizations up to 1,000 members',
                  features: [
                    'Everything in Start +',
                    'Advanced analytics',
                    'Mobile app included',
                    'Volunteer management',
                    '12 months support',
                    'Recurring giving tools',
                    'Custom branding',
                    'Dedicated support'
                  ],
                  cta: 'Most Popular',
                  popular: true,
                  special: true
                },
                {
                  plan: 'Impact',
                  price: 'Custom',
                  description: 'For large churches & multisite organizations',
                  features: [
                    'Everything in Grow +',
                    'Multi-site management',
                    'API integrations',
                    '24/7 premium support',
                    'Custom development',
                    'Training for staff',
                    'White-label solution',
                    'Unlimited members'
                  ],
                  cta: 'Contact Us',
                  popular: false,
                  special: false
                }
              ].map((pricing, idx) => (
                <div key={idx} className={`rounded-3xl p-8 border-2 ${pricing.popular ? 'border-blue-500 shadow-2xl' : 'border-gray-200'} relative`}>
                  {pricing.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-bold">
                        MOST POPULAR
                      </div>
                    </div>
                  )}
                  
                  {pricing.special && (
                    <div className="absolute -top-3 right-4">
                      <div className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-full text-sm font-bold">
                        💝 40% OFF
                      </div>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pricing.plan}</h3>
                  <p className="text-gray-600 mb-6">{pricing.description}</p>
                  
                  <div className="mb-8">
                    <div className="text-4xl font-bold text-gray-900 mb-1">{pricing.price}</div>
                    <div className="text-gray-500 text-sm">One-time setup + affordable monthly</div>
                  </div>
                  
                  <ul className="space-y-3 mb-10">
                    {pricing.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-emerald-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href={pricing.plan === 'Impact' ? '/contact' : '/quote'}
                    className={`block w-full py-4 text-center rounded-xl font-bold ${pricing.popular 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-xl' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-all`}
                  >
                    {pricing.cta}
                  </Link>
                </div>
              ))}
            </div>
            
            {/* Nonprofit Grant Program */}
            <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <Gift size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Nonprofit Grant Program</h4>
                  <p className="text-gray-600">Limited number of fully-funded implementations available each quarter</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Eligibility',
                    items: ['501(c)(3) organizations', 'Annual budget under $500k', 'Serving underserved communities']
                  },
                  {
                    title: 'Grant Includes',
                    items: ['Full platform implementation', '12 months of support', 'Staff training', 'Custom branding']
                  },
                  {
                    title: 'Application',
                    items: ['Simple online application', 'No cost to apply', 'Decision within 30 days', 'Quarterly awards']
                  }
                ].map((grant, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200">
                    <h5 className="font-bold text-gray-900 mb-4">{grant.title}</h5>
                    <ul className="space-y-2">
                      {grant.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                            <CheckCircle size={12} className="text-blue-600" />
                          </div>
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Link 
                  href="/grant-application"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-lg font-bold hover:shadow-lg transition-all"
                >
                  <Gift size={20} />
                  Apply for Grant Program
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* --- FINAL CTA --- */}
        <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-blue-900">
          <div className="container mx-auto max-w-4xl text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
              <Calendar size={18} className="text-amber-300" />
              <span className="text-sm font-semibold">Limited Implementation Slots</span>
            </div>
            
            <h2 className="text-4xl font-bold mb-6">
              Ready to Strengthen Your Community?
            </h2>
            
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join 2,100+ churches and nonprofits that have deepened connections and increased giving with our purpose-built platform.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
              {[
                {
                  title: 'Free Community Audit',
                  description: 'We analyze your current engagement and giving patterns'
                },
                {
                  title: 'Custom Growth Plan',
                  description: 'Step-by-step roadmap for your specific community'
                },
                {
                  title: 'No-Obligation Proposal',
                  description: 'Transparent pricing with grant eligibility check'
                },
                {
                  title: 'Pilot Program Option',
                  description: 'Try our platform with a small group first'
                }
              ].map((offer, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h4 className="font-bold text-lg mb-2">{offer.title}</h4>
                  <p className="text-blue-100 text-sm">{offer.description}</p>
                </div>
              ))}
            </div>
            
            <Link 
              href="/book-discovery" 
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-400 text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all shadow-xl shadow-blue-500/30"
            >
              <Calendar size={22} />
              Book Your Free Discovery Call
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <p className="mt-8 text-blue-200 text-sm">
              ⏰ 60-minute session • No sales pitch • Get actionable recommendations
            </p>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="py-12 px-6 bg-gray-900 text-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <Heart size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">FaithConnect</h3>
                    <p className="text-gray-400 text-sm">Community & Giving Platform</p>
                  </div>
                </div>
                <p className="text-gray-400">
                  Helping faith-based organizations build stronger communities since 2015.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-6">Solutions</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><Link href="/churches" className="hover:text-white transition-colors">Churches</Link></li>
                  <li><Link href="/nonprofits" className="hover:text-white transition-colors">Nonprofits</Link></li>
                  <li><Link href="/ministries" className="hover:text-white transition-colors">Ministries</Link></li>
                  <li><Link href="/foundations" className="hover:text-white transition-colors">Foundations</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-6">Resources</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                  <li><Link href="/giving-guide" className="hover:text-white transition-colors">Giving Guide</Link></li>
                  <li><Link href="/grant-program" className="hover:text-white transition-colors">Grant Program</Link></li>
                  <li><Link href="/faith-tech-blog" className="hover:text-white transition-colors">Faith Tech Blog</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-6">Contact</h4>
                <div className="space-y-3 text-gray-400">
                  <p>🙏 1-888-123-4567</p>
                  <p>✉️ hello@faithconnect.com</p>
                  <p>📍 Serving organizations nationwide</p>
                  <div className="flex gap-4 mt-4">
                    <div className="px-3 py-1 bg-gray-800 rounded text-sm">501(c)(3) Friendly</div>
                    <div className="px-3 py-1 bg-gray-800 rounded text-sm">GDPR Compliant</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
              <p>© {new Date().getFullYear()} FaithConnect. All rights reserved.</p>
              <p className="mt-2">Helping organizations process over $850M in donations for meaningful causes.</p>
            </div>
          </div>
        </footer>

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
      </div>

      {/* Demo Modal */}
      {demoActive && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Interactive Platform Demo</h3>
                <button 
                  onClick={() => setDemoActive(false)}
                  className="text-gray-400 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="text-center py-12">
                <div className="text-4xl mb-4">🙏</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Live Community Platform Demo</h4>
                <p className="text-gray-600 mb-8">Experience our platform with interactive community features</p>
                <Link 
                  href="/full-demo"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold hover:shadow-xl transition-all"
                >
                  Launch Full Demo
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Add missing icon import
import { Clock } from 'lucide-react';