"use client";

import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Heart, Shield, Smartphone, Zap, Lock, Cloud, 
  Check, ArrowRight, Clock, Users, BarChart3, Stethoscope,
  TrendingUp, AlertCircle, Eye, Cpu, Database, Workflow,
  Calendar, MessageSquare, Activity, FileText
} from 'lucide-react';

export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* ============================================================================
          HERO SECTION
          ============================================================================ */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Software Solutions for Healthcare Practices
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We build HIPAA-compliant systems that help medical practices manage 
              patient communication, scheduling, and operations more efficiently.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/case-studies" 
                className="px-8 py-3 rounded-lg text-lg font-medium text-blue-600 bg-white border-2 border-blue-200 hover:bg-blue-50 transition-all"
              >
                View Healthcare Case Studies
              </Link>
              <Link 
                href="/consultation" 
                className="px-8 py-3 rounded-lg text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all"
              >
                Schedule Consultation
              </Link>
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
              Common Challenges We Help Solve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Streamline your practice operations with targeted automation solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Clock,
                title: "After-Hours Patient Inquiries",
                description: "Automated systems to handle common questions and appointment requests outside office hours."
              },
              {
                icon: Calendar,
                title: "Appointment Management",
                description: "Reduce no-shows with automated reminders and simplified booking processes."
              },
              {
                icon: Workflow,
                title: "System Integration",
                description: "Connect your EHR, billing, and scheduling tools to reduce manual data entry."
              },
              {
                icon: Shield,
                title: "Patient Portals",
                description: "Secure platforms for appointment booking, prescription refills, and communication that meet HIPAA standards."
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-200 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-blue-600" />
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
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Healthcare Experience
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We've worked with multi-specialty clinics, private practices, and 
                healthcare service providers to build custom solutions including:
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Patient communication systems",
                  "Automated appointment scheduling",
                  "Insurance verification workflows",
                  "Custom dashboards for practice analytics"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-white rounded-xl p-6 border border-blue-200">
                <h4 className="font-bold text-gray-900 mb-2">Compliance First</h4>
                <p className="text-gray-600">
                  All systems are architected with HIPAA requirements in mind, 
                  including encryption, access controls, and audit logging.
                </p>
              </div>
            </div>

            {/* HOW WE APPROACH SECTION */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                How We Approach Healthcare Projects
              </h3>
              
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    title: "Understanding Your Workflow",
                    description: "We start by learning how your practice currently operates and where automation could save time."
                  },
                  {
                    step: "2",
                    title: "Compliance First",
                    description: "HIPAA compliance is built into the architecture from day one, not added as an afterthought."
                  },
                  {
                    step: "3",
                    title: "Integration Planning",
                    description: "We map out connections to your existing EHR and billing systems to ensure smooth data flow."
                  },
                  {
                    step: "4",
                    title: "Staff Training",
                    description: "Your team receives thorough training so they're comfortable with the new system."
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
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
          EXAMPLE PROJECT SECTION
          ============================================================================ */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Example Project
            </h2>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
              <Activity size={16} className="text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Multi-Specialty Clinic - Miami, FL</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Challenge:</h3>
              <p className="text-gray-600">
                High no-show rate and front desk staff overwhelmed with appointment calls.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Solution:</h3>
              <ul className="space-y-2">
                {[
                  "Automated SMS appointment reminders",
                  "AI-powered phone system for routine inquiries",
                  "Analytics dashboard showing booking patterns"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Results:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    label: "No-show Rate",
                    from: "30%",
                    to: "11%",
                    icon: TrendingUp
                  },
                  {
                    label: "Front Desk Capacity",
                    value: "Freed up for complex needs",
                    icon: Users
                  },
                  {
                    label: "Practice Visibility",
                    value: "Better operational insights",
                    icon: BarChart3
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="text-center">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                        <Icon size={24} className="text-blue-600" />
                      </div>
                      <p className="font-semibold text-gray-900">{item.label}</p>
                      {item.from ? (
                        <p className="text-gray-600 text-sm">
                          {item.from} → {item.to}
                        </p>
                      ) : (
                        <p className="text-gray-600 text-sm">{item.value}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          RESOURCES SECTION
          ============================================================================ */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-blue-50">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              <div className="lg:w-1/3">
                <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <FileText size={32} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Healthcare Practice Automation Planning Guide
                </h3>
                <p className="text-sm text-gray-500 mb-6">Free Download</p>
                <Link 
                  href="/download-guide"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
                >
                  Download PDF
                  <ArrowRight size={18} />
                </Link>
              </div>
              
              <div className="lg:w-2/3">
                <h4 className="font-bold text-gray-900 mb-4">Covers:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Common automation opportunities",
                    "HIPAA compliance considerations",
                    "Questions to ask potential vendors",
                    "ROI estimation framework"
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
          CTA SECTION
          ============================================================================ */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Let's Discuss Your Needs</h3>
            <p className="text-xl mb-8 text-blue-100">
              We'll discuss your specific challenges and explore whether 
              automation could help your practice.
            </p>
            
            <div className="mb-8">
              <Link 
                href="/consultation"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-lg"
              >
                Schedule a Consultation
                <ArrowRight size={20} />
              </Link>
            </div>
            
            <p className="text-blue-200 text-sm">
              No obligation. If we're not the right solution, we'll let you know.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}