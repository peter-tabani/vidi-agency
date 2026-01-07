"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Shield, Lock, TrendingUp, BarChart3, Cpu, Database,
  ArrowRight, Check, Users, Globe, Zap, Clock,
  Building, CreditCard, LineChart, PieChart, Target,
  GitMerge, Server, Key, EyeOff, Cloud, FileCheck,
  Layers, Network, ShieldCheck, AlertCircle, GitBranch,
  HardDrive, ShieldHalf, Cctv, WifiOff, Hash, Percent
} from 'lucide-react';

export default function FinanceInsurancePage() {
  const [activeSegment, setActiveSegment] = useState('brokers');
  const [complianceFilter, setComplianceFilter] = useState('all');

  const architectureLayers = [
    {
      layer: "Security Foundation",
      components: ["Zero-Trust Architecture", "Military-Grade Encryption", "Real-Time Threat Detection"],
      protocols: ["AES-256", "TLS 1.3", "FIPS 140-2"]
    },
    {
      layer: "Compliance Core",
      components: ["Automated Audit Trails", "Regulatory Rule Engine", "Cross-Border Compliance"],
      standards: ["SOC 2 Type II", "ISO 27001", "GDPR", "PCI DSS"]
    },
    {
      layer: "Data Intelligence",
      components: ["Real-Time Risk Analytics", "Predictive Fraud Models", "Automated Reporting"],
      capabilities: ["Sub-100ms Processing", "99.999% Accuracy", "Unlimited Scale"]
    }
  ];

  const complianceStandards = [
    { id: 'soc2', name: 'SOC 2 Type II', status: 'Certified', scope: 'Security & Availability' },
    { id: 'iso27001', name: 'ISO 27001', status: 'Certified', scope: 'Information Security' },
    { id: 'pcidss', name: 'PCI DSS Level 1', status: 'Compliant', scope: 'Payment Processing' },
    { id: 'gdpr', name: 'GDPR', status: 'Compliant', scope: 'EU Data Protection' },
    { id: 'hippa', name: 'HIPAA', status: 'Compliant', scope: 'Healthcare Data' },
    { id: 'sox', name: 'SOX', status: 'Compliant', scope: 'Financial Reporting' },
  ];

  const fintechSegments = [
    {
      id: 'brokers',
      label: 'Brokerage Platforms',
      description: 'High-frequency trading systems and portfolio management',
      challenges: [
        'Real-time settlement processing',
        'Multi-exchange integration',
        'Regulatory compliance automation'
      ]
    },
    {
      id: 'banks',
      label: 'Banking Institutions',
      description: 'Core banking modernization and digital transformation',
      challenges: [
        'Legacy system integration',
        'Real-time transaction monitoring',
        'Customer data protection'
      ]
    },
    {
      id: 'insurtech',
      label: 'Insurance Technology',
      description: 'Policy administration and claims processing systems',
      challenges: [
        'Automated underwriting engines',
        'Fraud detection algorithms',
        'Cross-border compliance'
      ]
    },
    {
      id: 'fintech',
      label: 'Fintech Startups',
      description: 'Next-generation financial products and services',
      challenges: [
        'Rapid scaling infrastructure',
        'Regulatory approval navigation',
        'Enterprise-grade security'
      ]
    }
  ];

  const securityFeatures = [
    {
      icon: ShieldHalf,
      title: "Zero-Trust Architecture",
      description: "Every request authenticated and authorized, regardless of origin",
      implementation: "Built-in, no additional configuration required"
    },
    {
      icon: GitMerge,
      title: "Air-Gapped Deployments",
      description: "Complete isolation from public networks when required",
      implementation: "On-premise or private cloud options"
    },
    {
      icon: Cctv,
      title: "Real-Time Audit Trails",
      description: "Immutable logging of every action and data access",
      implementation: "Automated compliance reporting"
    },
    {
      icon: HardDrive,
      title: "End-to-End Encryption",
      description: "Data encrypted at rest, in transit, and during processing",
      implementation: "FIPS 140-2 validated cryptography"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Custom Security Patterns */}
      <style jsx global>{`
        .security-pattern {
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(30, 41, 59, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(30, 41, 59, 0.03) 0%, transparent 50%);
        }
        .hex-pattern {
          background-image: 
            linear-gradient(30deg, rgba(30, 41, 59, 0.05) 25%, transparent 25%),
            linear-gradient(150deg, rgba(30, 41, 59, 0.05) 25%, transparent 25%),
            linear-gradient(30deg, rgba(30, 41, 59, 0.05) 75%, transparent 75%),
            linear-gradient(150deg, rgba(30, 41, 59, 0.05) 75%, transparent 75%);
          background-size: 40px 40px;
        }
        .gradient-border-dark {
          border: 2px solid transparent;
          background: linear-gradient(white, white) padding-box,
                    linear-gradient(45deg, #0f172a, #1e293b, #334155) border-box;
        }
      `}</style>

      <Navbar />
      
      {/* ============================================================================
          SECURITY HERO - Institutional Grade
          ============================================================================ */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20 security-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/5 via-transparent to-transparent" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-900 rounded-full mb-8">
              <Lock className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-semibold text-white tracking-wide">
                INSTITUTIONAL-GRADE FINTECH INFRASTRUCTURE
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              <span className="block">Secure Financial</span>
              <span className="block text-blue-700 mt-4">Infrastructure</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              We build regulatory-compliant systems for brokers, banks, and fintech startups— 
              engineered for security, scale, and auditability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-10 py-4 rounded-xl bg-gradient-to-r from-blue-700 to-slate-800 text-white font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Shield className="w-6 h-6" />
                <span>Review Security Architecture</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              
              <button 
                onClick={() => document.getElementById('compliance')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-4 rounded-xl border-2 border-slate-300 text-slate-700 font-bold text-lg hover:bg-slate-50 transition-all duration-300"
              >
                View Compliance Standards
              </button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {[
              { icon: ShieldCheck, label: "SOC 2 Type II", value: "Certified" },
              { icon: FileCheck, label: "ISO 27001", value: "Certified" },
              { icon: Clock, label: "Uptime SLA", value: "99.99%" },
              { icon: Zap, label: "Processing Speed", value: "<100ms" }
            ].map((indicator, idx) => (
              <div key={idx} className="text-center p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mx-auto mb-4">
                  <indicator.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">{indicator.value}</div>
                <div className="text-sm text-slate-600">{indicator.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================================
          FINTECH SEGMENTS - Industry Focus
          ============================================================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Engineered for Financial Segments
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Specialized infrastructure for different financial verticals
            </p>
          </div>

          {/* Segment Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {fintechSegments.map((segment) => (
              <button
                key={segment.id}
                onClick={() => setActiveSegment(segment.id)}
                className={`px-8 py-4 rounded-xl border transition-all duration-300 font-medium ${
                  activeSegment === segment.id
                    ? 'border-blue-600 bg-blue-50 text-blue-700'
                    : 'border-slate-300 text-slate-700 hover:border-slate-400'
                }`}
              >
                {segment.label}
              </button>
            ))}
          </div>

          {/* Active Segment Detail */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8">
            {fintechSegments
              .filter(segment => segment.id === activeSegment)
              .map((segment) => (
                <div key={segment.id} className="space-y-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{segment.label}</h3>
                      <p className="text-slate-600">{segment.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-500 mb-1">Infrastructure Type</div>
                      <div className="text-lg font-bold text-slate-900">Private Deployment</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-4">Key Challenges Addressed</h4>
                      <ul className="space-y-3">
                        {segment.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                              <Check className="w-4 h-4 text-blue-600" />
                            </div>
                            <span className="text-slate-700">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-slate-900 mb-4">Deployment Architecture</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">Data Isolation</span>
                          <span className="font-medium text-slate-900">Per-client encryption</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">Audit Trails</span>
                          <span className="font-medium text-slate-900">Immutable logging</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">Compliance</span>
                          <span className="font-medium text-slate-900">Automated reporting</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ============================================================================
          SECURITY ARCHITECTURE - Technical Depth
          ============================================================================ */}
      <section id="architecture" className="py-20 px-6 md:px-12 lg:px-20 hex-pattern">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Cpu className="w-5 h-5 text-blue-700" />
              <span className="text-sm font-semibold text-blue-700">ARCHITECTURE LAYERS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Defense-in-Depth Architecture
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Multiple security layers protecting every aspect of financial data
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {architectureLayers.map((layer, idx) => (
              <div key={idx} className="gradient-border-dark rounded-xl p-8 bg-white">
                <div className="mb-6">
                  <div className="text-sm font-bold text-blue-600 mb-2">LAYER {idx + 1}</div>
                  <h3 className="text-2xl font-bold text-slate-900">{layer.layer}</h3>
                </div>

                <div className="space-y-4 mb-8">
                  {layer.components.map((component, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-3"></div>
                      <span className="text-slate-700">{component}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <div className="text-sm font-medium text-slate-500 mb-3">
                    {layer.protocols ? 'Security Protocols' : 'Compliance Standards'}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {layer.protocols?.map((item, iIdx) => (
                      <span key={iIdx} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Security Features Grid */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Enterprise Security Features
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="space-y-4 p-6 border border-slate-200 rounded-xl hover:border-blue-300 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-slate-50 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">{feature.title}</h4>
                      <p className="text-sm text-slate-600 mb-3">{feature.description}</p>
                      <div className="text-xs text-slate-500 font-medium">
                        {feature.implementation}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          COMPLIANCE MATRIX - Regulatory Coverage
          ============================================================================ */}
      <section id="compliance" className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Regulatory Compliance Coverage
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Built-in compliance with global financial regulations
            </p>
          </div>

          {/* Compliance Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <button
              onClick={() => setComplianceFilter('all')}
              className={`px-6 py-2 rounded-lg font-medium ${
                complianceFilter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Standards
            </button>
            <button
              onClick={() => setComplianceFilter('certified')}
              className={`px-6 py-2 rounded-lg font-medium ${
                complianceFilter === 'certified'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Certified
            </button>
            <button
              onClick={() => setComplianceFilter('compliant')}
              className={`px-6 py-2 rounded-lg font-medium ${
                complianceFilter === 'compliant'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Compliant
            </button>
          </div>

          {/* Compliance Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {complianceStandards
              .filter(standard => {
                if (complianceFilter === 'all') return true;
                if (complianceFilter === 'certified') return standard.status === 'Certified';
                if (complianceFilter === 'compliant') return standard.status === 'Compliant';
                return true;
              })
              .map((standard) => (
                <div key={standard.id} className="bg-white rounded-xl border border-slate-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-slate-900">{standard.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      standard.status === 'Certified'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {standard.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">{standard.scope}</p>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <FileCheck className="w-4 h-4" />
                    <span>Automated audit reporting</span>
                  </div>
                </div>
              ))}
          </div>

          {/* Compliance Architecture */}
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Automated Compliance Engine
                </h3>
                <p className="text-blue-100 mb-8">
                  Our systems include built-in regulatory rule engines that automatically adapt to 
                  changing compliance requirements across jurisdictions.
                </p>
                <div className="space-y-4">
                  {[
                    "Real-time regulatory updates",
                    "Automated audit trail generation",
                    "Cross-border compliance mapping",
                    "Regulatory change impact analysis"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-blue-300 mb-2">Example: GDPR Compliance</div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Data mapping automation</span>
                        <span className="font-medium">100% coverage</span>
                      </div>
                      <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-400 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-blue-300 mb-2">Example: SOX Compliance</div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Control testing automation</span>
                        <span className="font-medium">94% reduction</span>
                      </div>
                      <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-400 rounded-full" style={{ width: '94%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          DEPLOYMENT MODELS - Infrastructure Options
          ============================================================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Deployment & Infrastructure
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Flexible deployment models to meet institutional requirements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                model: "Private Cloud",
                description: "Dedicated infrastructure with full isolation",
                features: ["Single-tenant architecture", "Custom security controls", "Dedicated support team"],
                compliance: "SOC 2, ISO 27001, HIPAA"
              },
              {
                model: "On-Premise",
                description: "Complete control within your data centers",
                features: ["Air-gapped deployment", "Hardware-level encryption", "Physical security control"],
                compliance: "All major standards"
              },
              {
                model: "Hybrid",
                description: "Balanced approach with mixed deployment",
                features: ["Flexible data residency", "Burstable capacity", "Disaster recovery sites"],
                compliance: "Custom compliance mapping"
              }
            ].map((option, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-8 hover:border-blue-300 transition-colors">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{option.model}</h3>
                  <p className="text-slate-600">{option.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-bold text-slate-900">Key Features</h4>
                  {option.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <div className="text-sm font-medium text-slate-500 mb-2">Compliance Support</div>
                  <div className="text-slate-700 font-medium">{option.compliance}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================================
          SECURITY ASSESSMENT - Enterprise CTA
          ============================================================================ */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 border border-blue-800">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <Shield className="w-5 h-5 text-white" />
                <span className="text-sm font-medium text-white">ENTERPRISE SECURITY ASSESSMENT</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Infrastructure Security Review
              </h3>
              <p className="text-xl text-blue-100">
                For financial institutions evaluating technology partners
              </p>
            </div>

            <div className="bg-white rounded-xl p-8">
              <div className="mb-8">
                <h4 className="text-xl font-bold text-slate-900 mb-4">Assessment Scope Includes:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Security architecture review",
                    "Compliance gap analysis",
                    "Deployment model evaluation",
                    "Integration risk assessment"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">Organization *</label>
                    <input
                      type="text"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      placeholder="Financial institution name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">Your Role *</label>
                    <select className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
                      <option>Select role</option>
                      <option>Chief Technology Officer</option>
                      <option>Chief Information Security Officer</option>
                      <option>Head of Engineering</option>
                      <option>Compliance Officer</option>
                      <option>Technical Director</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Primary Concern *</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Regulatory compliance",
                      "Data security",
                      "System integration",
                      "Operational risk"
                    ].map((concern) => (
                      <button
                        key={concern}
                        type="button"
                        className="py-3 rounded-lg border border-slate-300 hover:border-blue-500 text-slate-700 hover:text-blue-700 transition-all text-sm font-medium"
                      >
                        {concern}
                      </button>
                    ))}
                  </div>
                </div>

                <button className="w-full py-4 bg-gradient-to-r from-blue-700 to-slate-800 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all flex items-center justify-center gap-3 group">
                  <Shield className="w-6 h-6" />
                  <span>Request Security Assessment</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>

                <div className="text-center text-sm text-slate-500 pt-4 border-t border-slate-200">
                  <p className="flex items-center justify-center gap-2">
                    <Lock className="w-4 h-4 text-blue-500" />
                    <span>All inquiries handled under strict confidentiality</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Final Disclaimer */}
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">
              This information is for qualified financial institutions and technology partners. 
              All infrastructure deployments include comprehensive security documentation and 
              third-party audit reports upon request.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}