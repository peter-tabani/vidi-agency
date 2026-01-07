"use client";

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import {
  MapPin, Truck, Package, Shield, Clock, BarChart,
  Zap, Cloud, Lock, Smartphone, Cpu, Users,
  MessageCircle, ArrowRight, CheckCircle, Globe,
  TrendingUp, Database, Radio, Navigation,
  Building, Target, Award, Sparkles
} from 'lucide-react';
import Link from 'next/link';

export default function LogisticsPage() {
  const [secretCount, setSecretCount] = useState(0);

  const handleSecretKnock = () => {
    const newCount = secretCount + 1;
    setSecretCount(newCount);
    setTimeout(() => setSecretCount(0), 1000);
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <section className="pt-28 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white opacity-80"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-200">
              <Truck className="w-4 h-4" />
              <span>Logistics Technology Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight tracking-tight">
              Intelligent Tracking Systems
              <span className="block mt-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                For Modern Logistics
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Real-time fleet management, freight monitoring, and delivery tracking 
              systems that transform logistics operations into competitive advantages.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                Schedule Consultation
                <MessageCircle className="w-4 h-4" />
              </button>
              <button className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
          
          {/* Key Differentiators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 border border-gray-100 rounded-xl bg-white shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Real-Time Tracking</h3>
              <p className="text-gray-600 text-sm">Live GPS monitoring for every vehicle and package</p>
            </div>
            
            <div className="text-center p-8 border border-gray-100 rounded-xl bg-white shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Automated Dispatch</h3>
              <p className="text-gray-600 text-sm">Intelligent routing and load optimization</p>
            </div>
            
            <div className="text-center p-8 border border-gray-100 rounded-xl bg-white shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Performance Analytics</h3>
              <p className="text-gray-600 text-sm">Actionable insights from operational data</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE LOGISTICS CHALLENGE --- */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Transforming Logistics
                <span className="block font-semibold text-blue-600 mt-2">Through Technology</span>
              </h2>
              
              <p className="text-gray-600 mb-8">
                Modern logistics faces unprecedented challenges: rising fuel costs, driver shortages, 
                customer expectations for real-time updates, and complex regulatory requirements. 
                Manual processes and outdated systems create inefficiencies that directly impact profitability.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Inefficient Route Planning</h4>
                    <p className="text-gray-600 text-sm">
                      Manual routing leads to wasted fuel and delayed deliveries
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Limited Visibility</h4>
                    <p className="text-gray-600 text-sm">
                      Inability to track shipments in real-time affects customer satisfaction
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Manual Data Entry</h4>
                    <p className="text-gray-600 text-sm">
                      Paper-based processes create errors and operational bottlenecks
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">The Solution: Integrated Technology</h3>
                <p className="text-gray-600 text-sm">
                  We develop custom tracking systems that address these challenges through:
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Real-Time GPS Tracking</h4>
                    <p className="text-gray-600 text-sm">Monitor every vehicle and shipment live</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Automated Route Optimization</h4>
                    <p className="text-gray-600 text-sm">AI-powered routing reduces costs and delivery times</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Paperless Operations</h4>
                    <p className="text-gray-600 text-sm">Digital documentation and electronic proof of delivery</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Predictive Analytics</h4>
                    <p className="text-gray-600 text-sm">Forecast demand and optimize fleet utilization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE SOLUTIONS --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Comprehensive Logistics Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end technology systems designed for the unique challenges of 
              transportation and logistics operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-blue-50 to-white border border-blue-100 rounded-xl p-8 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Truck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Fleet Management System</h3>
              <p className="text-gray-600 text-sm mb-6">
                Complete visibility and control over your vehicle fleet with 
                real-time tracking, maintenance scheduling, and driver performance monitoring.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Real-time GPS tracking</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Fuel consumption monitoring</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Predictive maintenance alerts</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-blue-50 to-white border border-blue-100 rounded-xl p-8 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Freight Tracking Platform</h3>
              <p className="text-gray-600 text-sm mb-6">
                End-to-end shipment visibility with automated updates, 
                digital documentation, and exception management for cargo integrity.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Shipment status updates</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Temperature monitoring (reefers)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Electronic proof of delivery</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-blue-50 to-white border border-blue-100 rounded-xl p-8 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Navigation className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Route Optimization Engine</h3>
              <p className="text-gray-600 text-sm mb-6">
                AI-powered routing that considers traffic, weather, delivery windows, 
                and vehicle specifications to minimize costs and maximize efficiency.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Dynamic route adjustment</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Multi-stop optimization</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Real-time traffic integration</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-blue-50 to-white border border-blue-100 rounded-xl p-8 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Driver Mobile App</h3>
              <p className="text-gray-600 text-sm mb-6">
                Intuitive mobile interface for drivers with navigation support, 
                digital paperwork, and real-time communication with dispatch.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Turn-by-turn navigation</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Digital delivery confirmation</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Instant dispatch communication</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-blue-50 to-white border border-blue-100 rounded-xl p-8 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Operations Dashboard</h3>
              <p className="text-gray-600 text-sm mb-6">
                Centralized command center showing real-time KPIs, exception reports, 
                and predictive analytics for proactive decision-making.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Real-time KPI monitoring</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Predictive analytics</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Custom reporting engine</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-blue-50 to-white border border-blue-100 rounded-xl p-8 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Compliance & Safety System</h3>
              <p className="text-gray-600 text-sm mb-6">
                Automated compliance tracking for regulations (ELD, HOS, DVIR) 
                with safety monitoring and incident reporting capabilities.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Electronic logging devices (ELD)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Hours of service (HOS) compliance</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Safety score tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECHNOLOGY STACK --- */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Enterprise Technology Foundation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built on modern, scalable technologies designed for reliability 
              and performance in mission-critical logistics operations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
            {[
              { name: "Real-Time GPS", icon: MapPin, color: "text-blue-600" },
              { name: "Cloud Infrastructure", icon: Cloud, color: "text-blue-500" },
              { name: "IoT Sensors", icon: Radio, color: "text-green-600" },
              { name: "Mobile Apps", icon: Smartphone, color: "text-purple-600" },
              { name: "AI/ML Engine", icon: Cpu, color: "text-orange-600" },
              { name: "Enterprise Security", icon: Lock, color: "text-red-600" },
            ].map((tech, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <tech.icon className={`w-8 h-8 ${tech.color}`} />
                </div>
                <div className="font-medium text-gray-900">{tech.name}</div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Data Integration</h4>
                <p className="text-gray-600 text-sm mt-1">
                  Seamlessly connects with existing systems (ERP, TMS, WMS) and hardware 
                  (GPS devices, ELDs, telematics) for unified operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ROI & BENEFITS --- */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Measurable Business Impact
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our logistics technology delivers tangible ROI through operational 
              efficiency improvements and cost reductions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-gray-200 rounded-xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">15-25% Fuel Savings</h3>
              <p className="text-gray-600 text-sm">
                Optimized routing and reduced idle time significantly 
                decrease fuel consumption across your fleet.
              </p>
            </div>

            <div className="text-center p-8 border border-gray-200 rounded-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">20-30% Productivity Gain</h3>
              <p className="text-gray-600 text-sm">
                Automated dispatch and digital paperwork free dispatchers 
                from manual tasks, allowing more loads per day.
              </p>
            </div>

            <div className="text-center p-8 border border-gray-200 rounded-xl">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">40% Improved Customer Satisfaction</h3>
              <p className="text-gray-600 text-sm">
                Real-time tracking updates and accurate ETAs enhance 
                customer experience and reduce status inquiry calls.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Industry Recognition</h4>
                <p className="text-gray-600 text-sm mt-1">
                  Our logistics systems are trusted by carriers, 3PLs, and shippers 
                  across multiple sectors including retail, manufacturing, and cold chain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- IMPLEMENTATION PROCESS --- */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Structured Implementation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A phased approach ensuring minimal disruption to your operations 
              while maximizing system adoption and ROI.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200"></div>
            
            <div className="space-y-12">
              {[
                { 
                  step: "01",
                  title: "Needs Assessment",
                  description: "Comprehensive analysis of your current operations, pain points, and specific requirements.",
                  icon: Target
                },
                { 
                  step: "02",
                  title: "System Design",
                  description: "Custom architecture planning with integration points to existing hardware and software.",
                  icon: Cpu
                },
                { 
                  step: "03",
                  title: "Pilot Deployment",
                  description: "Limited rollout with key vehicles/routes to validate system performance and user acceptance.",
                  icon: Zap
                },
                { 
                  step: "04",
                  title: "Full Implementation",
                  description: "Enterprise-wide deployment with comprehensive training and support structure.",
                  icon: Truck
                },
                { 
                  step: "05",
                  title: "Ongoing Optimization",
                  description: "Continuous improvement based on operational data and user feedback.",
                  icon: TrendingUp
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className={`flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
                    <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                      <div className="bg-white border border-gray-200 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="text-sm text-blue-600 font-medium">{item.step}</div>
                            <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                    
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                      <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                    </div>
                    
                    <div className="md:w-1/2"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-32 -translate-x-32"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Transform Your Logistics Operations
              </h2>
              
              <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">
                Schedule a consultation to discuss how our tracking systems 
                can optimize your fleet management, improve delivery accuracy, 
                and reduce operational costs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <button className="px-8 py-3 bg-transparent border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                  Speak to an Expert
                </button>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-sm text-blue-200">
                  Response time: Within 24 business hours • Implementation planning: 60-90 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">Vidi Agency</span>
              </div>
              
              <button 
                onClick={handleSecretKnock}
                className="text-gray-500 text-sm mt-1 hover:text-gray-900 transition-colors text-left"
              >
                Logistics Technology Solutions
              </button>
              
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Contact
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Services
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Industries
              </a>
            </div>
            <div className="flex items-center gap-6">
              <a href="/logistics" className="text-gray-400 hover:text-blue-600 text-sm font-medium border-b border-transparent hover:border-blue-600 transition-all">
                Logistics
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}