"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ArrowRight, Check, Users, BarChart3, Clock, Cpu, Brain, 
  Shield, Zap, Target, TrendingUp, Award, FileText,
  Smartphone, Cloud, Database, Workflow, Activity,
  Radio, Barcode, QrCode, Package,
  HardDrive, Server, Globe, PieChart,
  BarChart, Bell, GitMerge, Sparkles,
  RefreshCw, Settings, Layers, Battery, Download,
  Calculator, Building2, Factory, Warehouse, Truck,
  LineChart, Tag, Percent, DollarSign, Globe2,
  Eye, Search, AlertTriangle, UserCheck, Handshake
} from 'lucide-react';

export default function IndustrialAIDCPlatformPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    challenge: '',
    varCount: '100',
    hardwareRevenue: '500000',
    attachmentRate: '10'
  });
  const [submitted, setSubmitted] = useState(false);

  const calculateROI = () => {
    const vars = parseInt(formData.varCount) || 100;
    const revenue = parseInt(formData.hardwareRevenue) || 500000;
    const attachment = parseInt(formData.attachmentRate) || 10;
    
    const totalHardwareRevenue = vars * revenue;
    const currentSoftwareRevenue = totalHardwareRevenue * (attachment / 100);
    const potentialAttachment = Math.min(attachment * 1.3, 35);
    const potentialSoftwareRevenue = totalHardwareRevenue * (potentialAttachment / 100);
    const lostRevenue = potentialSoftwareRevenue - currentSoftwareRevenue;
    
    const stagingWaste = vars * 15000;
    const refreshLoss = totalHardwareRevenue * 0.22;
    
    return {
      lostRevenue: Math.round(lostRevenue),
      stagingWaste: Math.round(stagingWaste),
      refreshLoss: Math.round(refreshLoss),
      totalLeak: Math.round(lostRevenue + stagingWaste + refreshLoss),
      potentialGain: Math.round(potentialSoftwareRevenue * 0.35)
    };
  };

interface FormData {
    name: string;
    email: string;
    company: string;
    role: string;
    challenge: string;
    varCount: string;
    hardwareRevenue: string;
    attachmentRate: string;
}

interface ROIResults {
    lostRevenue: number;
    stagingWaste: number;
    refreshLoss: number;
    totalLeak: number;
    potentialGain: number;
}

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    await new Promise<void>(resolve => setTimeout(resolve, 1000));
    setSubmitted(true);
};

  const rois = calculateROI();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* ============================================================================
          HERITAGE HERO - Trust-First Positioning
          ============================================================================ */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Shield size={16} className="text-blue-600" />
              <span className="text-sm font-medium text-blue-700">
                TRUSTED BY INDUSTRIAL AIDC DISTRIBUTORS
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Channel Infrastructure
              <span className="block text-blue-600 mt-2">
                Engineered for Long-Term Partnerships
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
              We build durable operational systems that connect physical hardware to digital intelligence.
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
              Designed by engineers focused on channel operations, not marketing software.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const el = document.getElementById('diagnostic');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 rounded-lg text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
              >
                <Search size={20} />
                <span>Explore Operational Insights</span>
              </button>
              <Link 
                href="/our-approach" 
                className="px-8 py-3 rounded-lg text-lg font-medium text-blue-600 bg-white border-2 border-blue-200 hover:bg-blue-50 transition-all"
              >
                Our Methodology
              </Link>
            </div>
          </div>

          {/* Heritage Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { icon: UserCheck, label: "Partner-First Design", detail: "Built for VAR ecosystems" },
              { icon: Shield, label: "Full Asset Ownership", detail: "No per-partner fees" },
              { icon: Handshake, label: "Multi-Year Engagements", detail: "Average 3.5 year partnership" },
              { icon: Factory, label: "Industrial Reliability", detail: "99.9% uptime SLA" }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mx-auto mb-3">
                  <item.icon size={24} className="text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-700 mb-1">{item.label}</p>
                <p className="text-xs text-gray-500">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================================
          OPERATIONAL DIAGNOSTIC - Insight Over Sales
          ============================================================================ */}
      <section id="diagnostic" className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Operational Visibility Snapshot
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understand the typical efficiency gaps in AIDC channel operations
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Diagnostic Inputs */}
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    Active Channel Partners
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="10"
                      max="5000"
                      step="10"
                      value={formData.varCount}
                      onChange={(e) => setFormData({...formData, varCount: e.target.value})}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-gray-500">10</span>
                      <span className="text-lg font-medium text-blue-600">{formData.varCount} partners</span>
                      <span className="text-sm text-gray-500">5000</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    Annual Hardware Revenue per Partner
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    {['$250K', '$500K', '$1M+'].map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => setFormData({
                          ...formData, 
                          hardwareRevenue: amount === '$1M+' ? '1000000' : amount.replace('$', '').replace('K', '000')
                        })}
                        className={`py-3 rounded-lg border transition-all text-sm ${
                          formData.hardwareRevenue === (amount === '$1M+' ? '1000000' : amount.replace('$', '').replace('K', '000')) 
                            ? 'border-blue-500 bg-blue-50 text-blue-700' 
                            : 'border-gray-300 hover:border-gray-400 text-gray-700'
                        }`}
                      >
                        {amount}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    Current Software Attachment Rate
                  </label>
                  <div className="space-y-4">
                    <div className="relative pt-1">
                      <input
                        type="range"
                        min="5"
                        max="30"
                        step="1"
                        value={formData.attachmentRate}
                        onChange={(e) => setFormData({...formData, attachmentRate: e.target.value})}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between mt-2">
                        <span className="text-sm text-gray-500">5%</span>
                        <span className="text-lg font-medium text-blue-600">{formData.attachmentRate}%</span>
                        <span className="text-sm text-gray-500">30%</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 italic">
                      Based on industry benchmarks from comparable deployments
                    </p>
                  </div>
                </div>
              </div>

              {/* Insight Output */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-6 border border-blue-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye size={20} className="text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">Efficiency Opportunity Range</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {[
                      { 
                        label: "Software Attachment Gap", 
                        value: rois.lostRevenue,
                        description: "Typical improvement with integrated analytics"
                      },
                      { 
                        label: "Operational Efficiency", 
                        value: rois.stagingWaste,
                        description: "Average savings from automation"
                      },
                      { 
                        label: "Hardware Lifecycle", 
                        value: rois.refreshLoss,
                        description: "Recoverable revenue from systematic tracking"
                      }
                    ].map((item, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-700 font-medium">{item.label}</span>
                          <span className="font-medium">${(item.value / 1000000).toFixed(1)}M</span>
                        </div>
                        <p className="text-xs text-gray-500">{item.description}</p>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-blue-400 rounded-full transition-all duration-700"
                            style={{ width: `${Math.min(90, (item.value / rois.totalLeak) * 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center text-sm text-gray-600 pt-4">
                  <p className="flex items-center justify-center gap-2">
                    <AlertTriangle size={14} />
                    <span>Illustrative ranges based on comparable industrial deployments</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          OUR APPROACH - The "How We Operate" Section
          ============================================================================ */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-white border-y border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Role in Your Ecosystem
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We operate as an extension of your technical team, focused on long-term infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                phase: "Discovery & Alignment",
                description: "We begin by understanding your existing partner ecosystem, hardware vendors, and operational constraints.",
                duration: "2-3 weeks",
                focus: "Listening and mapping current state"
              },
              {
                phase: "Tailored Architecture",
                description: "Design based on proven patterns, adapted to your specific requirements and existing systems.",
                duration: "3-4 weeks",
                focus: "Integration planning, not reinvention"
              },
              {
                phase: "Ongoing Partnership",
                description: "We maintain and evolve the system alongside your operations, ensuring long-term reliability.",
                duration: "Multi-year engagements",
                focus: "Evolution, not just delivery"
              }
            ].map((phase, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <span className="font-bold text-blue-600">{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{phase.phase}</h3>
                    <p className="text-sm text-gray-500">{phase.duration}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{phase.description}</p>
                <div className="text-sm text-gray-700 font-medium">
                  Focus: {phase.focus}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-xl p-8 border border-blue-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Shield size={24} className="text-blue-600 mt-1" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Architecture Scope & Clarity</h3>
                <p className="text-gray-600 mb-4">
                  The architecture shown represents our design framework and deployment patterns, 
                  which are tailored to each organization's specific requirements and existing ecosystem.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Check size={16} className="text-green-500" />
                    <span>Adapted to your vendor mix</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={16} className="text-green-500" />
                    <span>Integrated with existing systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={16} className="text-green-500" />
                    <span>Deployed at your operational pace</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          OPERATIONAL TRANSFORMATIONS - Measured Outcomes
          ============================================================================ */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Measured Operational Improvements
            </h2>
            <p className="text-lg text-gray-600">
              Illustrative outcomes based on comparable industrial deployments
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                category: "Partner Management",
                before: {
                  title: "Manual Onboarding & Support",
                  metrics: ["45-60 day partner ramp-up", "Manual certification tracking", "Reactive support model"]
                },
                after: {
                  title: "Systematic Partner Enablement",
                  metrics: ["14-day structured onboarding", "Automated compliance tracking", "Proactive performance insights"]
                },
                outcome: "Partner productivity increase: 3-4 months earlier revenue contribution"
              },
              {
                category: "Hardware Lifecycle",
                before: {
                  title: "Fragmented Device Management",
                  metrics: ["No systematic refresh tracking", "Reactive warranty management", "Manual inventory counts"]
                },
                after: {
                  title: "Predictive Lifecycle Management",
                  metrics: ["Automated refresh alerts", "Proactive warranty optimization", "Real-time inventory visibility"]
                },
                outcome: "Hardware refresh capture: Average 68% recovery of at-risk revenue"
              }
            ].map((transformation, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900">{transformation.category}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <AlertTriangle size={18} className="text-amber-500" />
                      <h4 className="font-bold text-gray-700">{transformation.before.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {transformation.before.metrics.map((metric, mIdx) => (
                        <li key={mIdx} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2"></div>
                          <span className="text-gray-600">{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp size={18} className="text-green-500" />
                      <h4 className="font-bold text-gray-700">{transformation.after.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {transformation.after.metrics.map((metric, mIdx) => (
                        <li key={mIdx} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2"></div>
                          <span className="text-gray-600">{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <BarChart size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">{transformation.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================================
          STRATEGIC CONVERSATION - Qualifying Frame
          ============================================================================ */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 border border-blue-800">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <UserCheck size={16} className="text-white" />
                <span className="text-sm font-medium text-white">QUALIFIED STRATEGIC REVIEW</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Channel Infrastructure Review
              </h3>
              <p className="text-xl text-blue-100">
                For AIDC organizations considering long-term operational improvements
              </p>
            </div>

            <div className="bg-white rounded-xl p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="mb-6 text-center">
                    <p className="text-gray-600">
                      We begin with a discovery conversation to understand your specific challenges 
                      and determine if our approach aligns with your operational goals.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Your Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        placeholder="First and last name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Work Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Organization *</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        placeholder="Company name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Primary Focus Area</label>
                      <select 
                        className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        value={formData.challenge}
                        onChange={(e) => setFormData({...formData, challenge: e.target.value})}
                      >
                        <option value="">Select one</option>
                        <option value="partner_operations">Partner Onboarding & Enablement</option>
                        <option value="hardware_analytics">Hardware-to-Software Analytics</option>
                        <option value="operational_efficiency">Operational Efficiency</option>
                        <option value="ecosystem_integration">Ecosystem Integration</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3"
                    >
                      <span>Request Discovery Conversation</span>
                      <ArrowRight size={20} />
                    </button>

                    <div className="text-center text-sm text-gray-500 pt-6 border-t border-gray-200 mt-6">
                      <p className="flex items-center justify-center gap-2">
                        <Check size={16} className="text-green-500" />
                        <span>We'll respond within 48 hours to schedule an initial conversation</span>
                      </p>
                      <p className="text-xs text-gray-400 mt-2">
                        For organizations with substantial AIDC channel operations
                      </p>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <Check size={36} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Conversation Request Confirmed</h3>
                  <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                    Thank you. We'll review your information and be in touch within 48 hours 
                    to schedule a discovery conversation.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 max-w-md mx-auto">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Next:</span> A 30-minute conversation to understand 
                      your specific operational context and challenges.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Partnership Language */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-4">
              <Handshake size={16} className="text-gray-600" />
              <span className="text-sm font-medium text-gray-700">ECOSYSTEM PARTNERSHIPS</span>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We work alongside existing vendor relationships and channel ecosystems, 
              focusing on integration and enablement rather than replacement.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================================
          INDUSTRY TRAJECTORY - Forward-Looking without Comparison
          ============================================================================ */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Evolving AIDC Landscape
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How industrial hardware distribution is changing, and what it means for operational infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                timeframe: "Current",
                focus: "Hardware as Commodity",
                description: "Margins compress as hardware becomes increasingly standardized",
                implication: "Value shifts to software and service layers"
              },
              {
                timeframe: "3-5 Years",
                focus: "Intelligent Ecosystems",
                description: "Predictive analytics and automation become table stakes",
                implication: "Operational efficiency becomes primary competitive advantage"
              },
              {
                timeframe: "5-7 Years",
                focus: "Autonomous Operations",
                description: "Self-optimizing supply chains with minimal human intervention",
                implication: "Infrastructure decisions today determine future capabilities"
              },
              {
                timeframe: "Beyond",
                focus: "Integrated Intelligence",
                description: "Seamless physical-digital integration across entire ecosystems",
                implication: "Early infrastructure investments compound in value"
              }
            ].map((trend, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-200 transition-colors">
                <div className="mb-4">
                  <div className="text-sm font-bold text-blue-600 mb-1">{trend.timeframe}</div>
                  <h3 className="text-xl font-bold text-gray-900">{trend.focus}</h3>
                </div>
                <p className="text-gray-600 mb-4">{trend.description}</p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-700 font-medium">{trend.implication}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 max-w-2xl mx-auto">
              We help organizations navigate this evolution with durable infrastructure 
              designed for long-term partnership and gradual, sustainable improvement.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}