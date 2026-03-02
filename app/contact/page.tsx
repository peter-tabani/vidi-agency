"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Calendar, Users, ArrowRight, CheckCircle, 
  Sparkles, MessageSquare, Video, Shield,
  Zap, Globe, Building, Mail, MapPin, ChevronRight,
  Award, Target, BadgeCheck, MessageCircle, X
} from 'lucide-react';

export default function TalkToExpertPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    website: '',
    company: '',
    message: '',
    agree: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setLoading(false);
    setSubmitted(true);
  };

  const benefits = [
    {
      icon: Users,
      title: 'Strategic Consultation',
      description: 'Direct access to our technical experts'
    },
    {
      icon: Target,
      title: 'Custom Roadmap',
      description: 'Personalized development strategy'
    },
    {
      icon: BadgeCheck,
      title: 'Technical Assessment',
      description: 'Comprehensive analysis of your needs'
    },
    {
      icon: Globe,
      title: 'Scalable Solutions',
      description: 'Future-proof technology recommendations'
    }
  ];

  return (
    <div className="min-h-screen bg-[#05060b]">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-[#05060b]/80 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <Link href="/" className="text-2xl font-bold flex items-center gap-1">
            <span className="text-blue-400">Vidi</span>
            <span className="text-white">Agency</span>
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Back to Home
            </Link>
            
            <Link href="/get-started" className="px-6 py-2.5 rounded-full text-white font-bold text-sm bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-all shadow-lg shadow-blue-500/30">
              Start Project
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles size={16} />
              <span>Schedule A Demo</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-space-grotesk">
              Connect with Our{' '}
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-sky-300 bg-clip-text text-transparent">
                Technical Experts
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Share your project details and receive a comprehensive proposal with a custom strategy from our technical team.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column: Form */}
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/30">
                      <CheckCircle className="w-12 h-12 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4 font-space-grotesk">Request Received!</h2>
                    <p className="text-gray-400 text-lg mb-8">
                      Thank you for your interest. Our technical team will review your project details and send you a comprehensive proposal within 24 hours.
                    </p>
                    <div className="flex items-center justify-center gap-4 text-gray-400">
                      <div className="flex items-center gap-2">
                        <MessageSquare size={18} />
                        <span>Email Confirmation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={18} />
                        <span>Proposal Document</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl">
                        <Calendar className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">Share Your Project Details</h2>
                        <p className="text-gray-400">Complete the form below and we'll send you a detailed proposal.</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-300">
                            First Name *
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40 transition-all text-white placeholder-gray-600"
                            placeholder="First name"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-300">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40 transition-all text-white placeholder-gray-600"
                            placeholder="Last name"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-300">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40 transition-all text-white placeholder-gray-600"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-300">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40 transition-all text-white placeholder-gray-600"
                            placeholder="Your company"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-300">
                            Website
                          </label>
                          <input
                            type="url"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40 transition-all text-white placeholder-gray-600"
                            placeholder="https://"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-300">
                          Project Details & Requirements *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40 transition-all text-white placeholder-gray-600 resize-none"
                          placeholder="Please describe your project, goals, timeline, and any specific requirements..."
                        />
                      </div>

                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          name="agree"
                          checked={formData.agree}
                          onChange={handleChange}
                          required
                          className="mt-1 w-5 h-5 bg-white/5 border-white/20 text-blue-600 rounded focus:ring-blue-500/50 focus:ring-offset-0"
                        />
                        <label className="text-sm text-gray-400">
                          By submitting this form, I agree to receive project proposals and communications from VidiAgency. I understand that VidiAgency will process my data in accordance with their Privacy Policy.
                        </label>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                      >
                        {loading ? (
                          <>
                            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            Send 
                            <ArrowRight size={20} />
                          </>
                        )}
                      </button>

                      <p className="text-center text-sm text-gray-500">
                        We'll respond via email within 24 hours with a detailed project proposal.
                      </p>
                    </form>
                  </>
                )}
              </div>

              {/* Right Column: Information */}
              <div className="space-y-8">
                {/* Consultation Card */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <MessageSquare size={24} />
                      </div>
                      <div>
                        <div className="text-sm font-semibold opacity-90">Comprehensive Service</div>
                        <div className="text-2xl font-bold">Expert Proposal</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-green-300" />
                      <span>Detailed project analysis by our technical team</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-green-300" />
                      <span>Custom technology stack recommendation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-green-300" />
                      <span>Timeline and implementation strategy</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-green-300" />
                      <span>Transparent pricing breakdown</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-green-300" />
                      <span>Post-submission technical consultation via email</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail size={16} />
                      <span>Email response within 24 hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield size={16} />
                      <span>Secure data handling</span>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6 font-space-grotesk">What You'll Receive</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => {
                      const Icon = benefit.icon;
                      return (
                        <div key={index} className="flex items-start gap-4">
                          <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex-shrink-0">
                            <Icon className="w-6 h-6 text-blue-400" />
                          </div>
                          <div>
                            <h4 className="font-bold text-white mb-1">{benefit.title}</h4>
                            <p className="text-sm text-gray-400">{benefit.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Process Steps */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 text-white border border-white/10">
                  <h3 className="text-2xl font-bold mb-6 font-space-grotesk">Our Process</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Submit Your Details</h4>
                        <p className="text-sm text-gray-400">Share your project requirements through our secure form</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Technical Analysis</h4>
                        <p className="text-sm text-gray-400">Our experts review your requirements and prepare a custom solution</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Receive Your Proposal</h4>
                        <p className="text-sm text-gray-400">Get a detailed proposal with timeline, technology stack, and pricing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}