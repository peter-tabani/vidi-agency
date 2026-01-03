"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, HardHat, Users, TrendingUp, Shield, Zap, CheckCircle, 
  ArrowRight, Award, Star, MapPin, Calendar, Clock, BarChart, 
  Smartphone, Lock, Cloud, FileText, DollarSign, PieChart, 
  MessageSquare, Settings, RefreshCw, BatteryCharging, Globe,
  Wrench, Ruler, Truck, AlertTriangle, Layers, ClipboardCheck,
  Target, Download, Upload, FolderTree, LineChart,
  Factory, Route, X, Headphones // Icons imported correctly
} from 'lucide-react';

export default function ConstructionWelcomePage() {
  const [projectType, setProjectType] = useState('commercial');
  const [demoActive, setDemoActive] = useState(false);

  const projectTypes = [
    { id: 'commercial', label: 'Commercial', icon: Building2, color: 'from-blue-500 to-cyan-500', examples: ['Office Buildings', 'Retail Centers', 'Hotels'] },
    { id: 'residential', label: 'Residential', icon: HardHat, color: 'from-emerald-500 to-green-500', examples: ['Multi-Family', 'Custom Homes', 'Subdivisions'] },
    { id: 'industrial', label: 'Industrial', icon: Factory, color: 'from-amber-500 to-orange-500', examples: ['Factories', 'Warehouses', 'Plants'] },
    { id: 'infrastructure', label: 'Infrastructure', icon: Route, color: 'from-purple-500 to-pink-500', examples: ['Bridges', 'Roads', 'Utilities'] }, 
    { id: 'renovation', label: 'Renovation', icon: Wrench, color: 'from-red-500 to-rose-500', examples: ['Retrofits', 'Remodels', 'Upgrades'] }
  ];

  const pmFeatures = [
    { icon: Calendar, title: 'Schedule Management', description: 'Gantt charts, critical path analysis, real-time updates' },
    { icon: DollarSign, title: 'Cost Control', description: 'Budget tracking, change orders, forecasting' },
    { icon: ClipboardCheck, title: 'Quality Control', description: 'Inspections, punch lists, compliance tracking' },
    { icon: Users, title: 'Team Collaboration', description: 'Real-time communication, document sharing, task assignments' },
    { icon: BarChart, title: 'Progress Reporting', description: 'Automated reports, KPI dashboards, stakeholder updates' },
    { icon: Shield, title: 'Safety Compliance', description: 'Incident tracking, OSHA compliance, safety audits' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 font-sans">
      
      {/* --- INDUSTRY-FOCUSED HEADER --- */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <Building2 size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">BuildFlow Pro</h1>
                <p className="text-sm text-gray-500">Construction Project Intelligence</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="tel:+1-888-123-4567" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                📞 1-888-123-4567
              </a>
              <button 
                onClick={() => setDemoActive(true)}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-xl transition-all shadow-lg shadow-blue-200"
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="pt-20 pb-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        {/* Construction Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-blue-200 mb-8">
                <HardHat size={16} className="text-blue-600" />
                <span className="text-sm font-semibold text-blue-600">Built for Builders</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Complete Projects <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">15% Faster</span> & Under Budget
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Enterprise-grade project management software specifically designed for construction and engineering firms. Track every detail, control every cost, and deliver every project on time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/discovery-call" 
                  className="group px-8 py-4 rounded-xl text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-2xl transition-all shadow-xl shadow-blue-300/50 inline-flex items-center justify-center gap-3"
                >
                  <Calendar size={22} />
                  Book Discovery Call
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <button 
                  onClick={() => setDemoActive(true)}
                  className="px-8 py-4 rounded-xl text-lg font-bold text-gray-700 bg-white border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all inline-flex items-center justify-center gap-3"
                >
                  <ClipboardCheck size={22} />
                  Project Demo
                </button>
              </div>
              
              {/* Industry Stats */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: '98%', label: 'Projects On Time', icon: Calendar },
                  { value: '12%', label: 'Cost Savings Avg', icon: DollarSign },
                  { value: '0.2', label: 'Safety Incident Rate', icon: Shield },
                  { value: '47%', label: 'Change Order Reduction', icon: TrendingUp }
                ].map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Icon size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-xs text-gray-600">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Interactive Project Dashboard Preview */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <div className="text-sm text-gray-400">PROJECT DASHBOARD</div>
                </div>
                
                {/* Project Status */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm text-gray-400">Active Project</div>
                      <div className="text-xl font-bold text-gray-900">Riverfront Tower</div>
                    </div>
                    <div className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                      72% Complete
                    </div>
                  </div>
                  
                  {/* Progress Bars */}
                  <div className="space-y-3">
                    {[
                      { label: 'Foundation', progress: 95 },
                      { label: 'Structure', progress: 85 },
                      { label: 'MEP', progress: 65 },
                      { label: 'Finishes', progress: 42 }
                    ].map((phase, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-700">{phase.label}</span>
                          <span className="text-gray-900 font-medium">{phase.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${phase.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Budget & Timeline */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="text-sm text-gray-600 mb-1">Budget Status</div>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-gray-900">$2.8M</div>
                      <div className="text-emerald-600 font-medium">+4.2%</div>
                    </div>
                    <div className="text-xs text-gray-500">Under budget</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="text-sm text-gray-600 mb-1">Days Remaining</div>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-gray-900">42</div>
                      <div className="text-emerald-600 font-medium">Ahead</div>
                    </div>
                    <div className="text-xs text-gray-500">Schedule</div>
                  </div>
                </div>
              </div>
              
              {/* Floating metrics */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center gap-2">
                  <TrendingUp size={20} className="text-emerald-500" />
                  <div>
                    <div className="text-xs text-gray-500">Schedule Adherence</div>
                    <div className="text-xl font-bold text-gray-900">98%</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center gap-2">
                  <DollarSign size={20} className="text-blue-500" />
                  <div>
                    <div className="text-xs text-gray-500">Cost Variance</div>
                    <div className="text-xl font-bold text-gray-900">-4.2%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECT TYPE SELECTOR --- */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tailored Solutions for Your Projects
            </h2>
            <p className="text-xl text-gray-600">
              Industry-specific features for every construction sector
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {projectTypes.map((type) => {
              const Icon = type.icon;
              const isSelected = projectType === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => setProjectType(type.id)}
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
                    <div className="mt-2 space-y-1">
                      {type.examples.map((example, idx) => (
                        <div key={idx} className="text-xs text-gray-500">{example}</div>
                      ))}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          
          {/* Dynamic Content Based on Selection */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 border border-blue-200">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {projectTypes.find(t => t.id === projectType)?.label} Project Features
                </h3>
                
                {projectType === 'commercial' && (
                  <ul className="space-y-4">
                    {[
                      "Tower crane scheduling and optimization",
                      "Multi-tenant fit-out coordination",
                      "LEED certification tracking",
                      "Vertical transportation management",
                      "Facade installation sequencing",
                      "Coordination with MEP consultants"
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-emerald-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {projectType === 'residential' && (
                  <ul className="space-y-4">
                    {[
                      "Unit completion tracking",
                      "Homeowner customization management",
                      "HOA compliance and coordination",
                      "Subdivision phasing and sequencing",
                      "Model home scheduling",
                      "Warranty and service tracking"
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-emerald-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {projectType === 'infrastructure' && (
                  <ul className="space-y-4">
                    {[
                      "Right-of-way acquisition tracking",
                      "Utility relocation coordination",
                      "Traffic management planning",
                      "Environmental permit compliance",
                      "Erosion control monitoring",
                      "Stakeholder communication portal"
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-emerald-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Fallback for Industrial & Renovation */}
                {['industrial', 'renovation'].includes(projectType) && (
                  <ul className="space-y-4">
                    {[
                      "Hazardous material tracking and safety",
                      "Shut-down and turnaround scheduling",
                      "As-built documentation management",
                      "Site access and security logging",
                      "Equipment calibration tracking",
                      "Commissioning and handover workflows"
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
                  <h4 className="text-xl font-bold text-gray-900">Expected Results</h4>
                </div>
                
                <div className="space-y-6">
                  {[
                    { metric: "Project Duration", value: "15% Faster", change: "-", icon: Calendar },
                    { metric: "Cost Performance", value: "12% Savings", change: "-", icon: DollarSign },
                    { metric: "Change Orders", value: "47% Reduction", change: "-", icon: FileText },
                    { metric: "Safety Incidents", value: "68% Reduction", change: "-", icon: Shield }
                  ].map((result, idx) => {
                    const Icon = result.icon;
                    return (
                      <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                          <Icon size={20} className="text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-gray-700">{result.metric}</div>
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-gray-900">{result.value}</span>
                            <div className={`px-2 py-1 rounded text-xs font-bold ${result.change === '-' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
                              {result.change}{result.value}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE FEATURES --- */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Construction Management Platform
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to manage projects from bid to closeout
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {pmFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Project Dashboard Demo */}
          <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-lg mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Real-Time Project Intelligence</h3>
                <p className="text-gray-600 mb-8">
                  Get instant visibility into every aspect of your projects. Monitor progress, track costs, and identify risks before they become problems.
                </p>
                <ul className="space-y-4">
                  {[
                    "Daily progress photos with AI analysis",
                    "Automated RFI and submittal tracking",
                    "Real-time material delivery tracking",
                    "Labor productivity monitoring",
                    "Weather impact forecasting",
                    "Equipment utilization optimization"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8">
                <div className="text-white text-center mb-6">
                  <div className="text-4xl font-bold mb-2">98.7%</div>
                  <div className="text-blue-200">Schedule Accuracy</div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { label: 'Schedule Performance Index', value: '1.15', target: '>1.0' },
                    { label: 'Cost Performance Index', value: '1.12', target: '>1.0' },
                    { label: 'RFI Response Time', value: '2.3 days', target: '<3 days' },
                    { label: 'Punch List Items', value: '12', target: '<20' }
                  ].map((metric, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <div>
                        <div className="text-sm text-blue-200">{metric.label}</div>
                        <div className="text-white font-bold">{metric.value}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Target</div>
                        <div className={`font-medium ${metric.value > metric.target ? 'text-emerald-400' : 'text-amber-400'}`}>
                          {metric.target}
                        </div>
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
                Seamless Industry Integration
              </h3>
              <p className="text-gray-600">
                Connect with 150+ construction tools and platforms
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {[
                { name: 'Procore', category: 'Construction' },
                { name: 'Bluebeam', category: 'Design' },
                { name: 'PlanGrid', category: 'Field' },
                { name: 'QuickBooks', category: 'Accounting' },
                { name: 'AutoCAD', category: 'Design' },
                { name: 'BIM 360', category: 'BIM' },
                { name: 'Oracle', category: 'ERP' },
                { name: 'Sage', category: 'Accounting' },
                { name: 'Trimble', category: 'Survey' },
                { name: 'Revit', category: 'BIM' }
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

      {/* --- CASE STUDY: MEGA PROJECT --- */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
              <Award size={16} className="text-amber-300" />
              <span className="text-sm font-semibold">Case Study: $450M Mixed-Use Development</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Harbor Point Development Success
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
                <h4 className="text-xl font-bold mb-4">Project Challenges</h4>
                <ul className="space-y-3 text-blue-100">
                  {[
                    "32 subcontractors with poor coordination",
                    "$12M in change orders in first 6 months",
                    "Schedule slipping by 8 weeks",
                    "Safety incidents above industry average"
                  ].map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-500/30 flex items-center justify-center mt-1">
                        <AlertTriangle size={12} className="text-red-300" />
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
                    "Centralized project management platform",
                    "Real-time progress tracking for all teams",
                    "Automated change order workflow",
                    "Predictive analytics for risk identification"
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
                <h4 className="text-xl font-bold mb-6">Results Achieved</h4>
                
                <div className="space-y-6">
                  {[
                    { 
                      metric: 'Project Completion', 
                      before: '8 weeks late', 
                      after: '3 weeks early',
                      improvement: '+11 weeks'
                    },
                    { 
                      metric: 'Change Orders', 
                      before: '$12M', 
                      after: '$3.2M',
                      improvement: '-73%'
                    },
                    { 
                      metric: 'Safety Rating', 
                      before: '0.85', 
                      after: '0.98',
                      improvement: '+15%'
                    },
                    { 
                      metric: 'Cost Savings', 
                      before: 'None', 
                      after: '$9.8M',
                      improvement: 'Saved'
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
              href="/case-studies/harbor-point" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-xl"
            >
              <Download size={20} />
              Download Full Case Study (PDF)
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- IMPLEMENTATION PROCESS --- */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Fast, Painless Implementation
            </h2>
            <p className="text-xl text-gray-600">
              We handle everything - you focus on building
            </p>
          </div>

          <div className="relative">
            {/* Process Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-1/2 h-1 w-3/4 bg-gradient-to-r from-blue-300 to-cyan-300"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
              {[
                {
                  step: "01",
                  title: "Discovery & Planning",
                  description: "We analyze your current processes and map out your ideal workflow",
                  duration: "1-2 weeks",
                  icon: FileText
                },
                {
                  step: "02",
                  title: "Configuration & Training",
                  description: "Custom configuration and hands-on training for your team",
                  duration: "2-3 weeks",
                  icon: Settings
                },
                {
                  step: "03",
                  title: "Data Migration",
                  description: "Seamless migration of existing project data",
                  duration: "1-2 weeks",
                  icon: FolderTree // Replaced Database with FolderTree
                },
                {
                  step: "04",
                  title: "Go-Live & Support",
                  description: "Launch with 24/7 support and continuous optimization",
                  duration: "Ongoing",
                  icon: Headphones // Replaced Headphones with Headphones
                }
              ].map((phase, idx) => {
                const Icon = phase.icon;
                return (
                  <div key={idx} className="relative">
                    <div className="bg-white rounded-2xl p-8 border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all relative z-10">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 mx-auto">
                        <Icon size={28} className="text-white" />
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-blue-600 mb-2">Phase {phase.step}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                        <p className="text-gray-600 mb-4">{phase.description}</p>
                        <div className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 rounded-full">
                          <Clock size={14} className="text-blue-600" />
                          <span className="text-sm text-blue-700">{phase.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* --- ROI CALCULATOR --- */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Calculate Your ROI
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                See exactly how much our platform can save your company
              </p>
              
              <div className="space-y-6">
                {[
                  { label: 'Average Annual Revenue', value: '$25M' },
                  { label: 'Typical Margin Improvement', value: '3-5%' },
                  { label: 'Schedule Improvement', value: '15-25%' },
                  { label: 'Change Order Reduction', value: '40-60%' }
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-xl border border-blue-100">
                    <span className="text-gray-700">{stat.label}</span>
                    <span className="text-xl font-bold text-blue-600">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">ROI Calculator</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Project Volume
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Under $10M</option>
                    <option>$10M - $50M</option>
                    <option>$50M - $200M</option>
                    <option>$200M+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Active Projects
                  </label>
                  <input 
                    type="number" 
                    defaultValue="12"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Estimated Annual Savings</span>
                    <span className="font-bold text-gray-900">$875,000 - $1.2M</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Platform Investment</span>
                    <span className="font-bold text-gray-900">$185,000</span>
                  </div>
                  <div className="flex justify-between pt-4 border-t border-gray-200">
                    <span className="text-lg font-bold text-gray-900">ROI Timeframe</span>
                    <span className="text-lg font-bold text-emerald-600">2-3 months</span>
                  </div>
                </div>
                
                <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold hover:shadow-xl transition-all">
                  Get Custom ROI Analysis
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
            <Calendar size={18} className="text-cyan-300" />
            <span className="text-sm font-semibold">Limited Implementation Slots</span>
          </div>
          
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Construction Operations?
          </h2>
          
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join 850+ construction and engineering firms that have completed projects faster, under budget, and with fewer headaches.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
            {[
              {
                title: 'Free Process Audit',
                description: 'We analyze 3 of your recent projects and identify improvement opportunities'
              },
              {
                title: 'Custom Implementation Plan',
                description: 'Step-by-step roadmap tailored to your specific needs'
              },
              {
                title: 'No-Obligation Proposal',
                description: 'Transparent pricing with detailed ROI analysis'
              },
              {
                title: 'Pilot Project Support',
                description: 'Run a pilot project with our team supporting you'
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
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all shadow-xl shadow-blue-500/30"
          >
            <Calendar size={22} />
            Book Your Free Discovery Call
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <p className="mt-8 text-blue-200 text-sm">
            ⏰ 90-minute session • No sales pitch • Get actionable recommendations
          </p>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                  <Building2 size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">BuildFlow Pro</h3>
                  <p className="text-gray-400 text-sm">Construction Project Intelligence</p>
                </div>
              </div>
              <p className="text-gray-400">
                Helping construction and engineering firms deliver better projects since 2014.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Solutions</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/general-contractors" className="hover:text-white transition-colors">General Contractors</Link></li>
                <li><Link href="/subcontractors" className="hover:text-white transition-colors">Subcontractors</Link></li>
                <li><Link href="/engineering-firms" className="hover:text-white transition-colors">Engineering Firms</Link></li>
                <li><Link href="/owners-developers" className="hover:text-white transition-colors">Owners & Developers</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Resources</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link href="/construction-glossary" className="hover:text-white transition-colors">Construction Glossary</Link></li>
                <li><Link href="/roi-calculator" className="hover:text-white transition-colors">ROI Calculator</Link></li>
                <li><Link href="/industry-reports" className="hover:text-white transition-colors">Industry Reports</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <p>📞 1-888-123-4567</p>
                <p>✉️ hello@buildflowpro.com</p>
                <p>📍 Offices in Dallas, Denver, Atlanta</p>
                <div className="flex gap-4 mt-4">
                  <div className="px-3 py-1 bg-gray-800 rounded text-sm">OSHA Compliant</div>
                  <div className="px-3 py-1 bg-gray-800 rounded text-sm">ISO 9001</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} BuildFlow Pro. All rights reserved.</p>
            <p className="mt-2">Managing $85B+ in construction projects worldwide.</p>
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
      `}</style>

      {/* Demo Modal */}
      {demoActive && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Interactive Project Demo</h3>
                <button 
                  onClick={() => setDemoActive(false)}
                  className="text-gray-400 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="text-center py-12">
                <div className="text-4xl mb-4">🏗️</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Live Project Management Demo</h4>
                <p className="text-gray-600 mb-8">Experience our platform with interactive project management features</p>
                <Link 
                  href="/full-demo"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold hover:shadow-xl transition-all"
                >
                  Launch Full Demo
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}