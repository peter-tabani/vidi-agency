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
                href="/contact" 
                className="px-8 py-3 rounded-lg text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all"
              >
                Schedule Consultation
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
  <div className="flex items-center gap-2">
    <Shield size={20} className="text-blue-600" />
    <span>HIPAA Compliant</span>
  </div>
  <div className="flex items-center gap-2">
    <Lock size={20} className="text-blue-600" />
    <span>Encrypted Data</span>
  </div>
  <div className="flex items-center gap-2">
    <Cloud size={20} className="text-blue-600" />
    <span>Secure Cloud Hosting</span>
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
      {/* ============================================================================
    WHAT WE CAN BUILD FOR YOU
    ============================================================================ */}
<section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
  <div className="container mx-auto max-w-6xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        What We Can Build for Your Practice
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Custom solutions designed specifically for healthcare operations
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          icon: MessageSquare,
          title: "AI Phone Receptionist",
          description: "24/7 voice assistant that answers calls, books appointments, and handles routine inquiries .",
          features: ["Appointment scheduling", "Call routing", "After-hours coverage"]
        },
        {
          icon: Calendar,
          title: "Patient Portal",
          description: "Secure platform where patients can book appointments, request refills, and communicate with your staff.",
          features: ["Online booking", "Prescription refills", "HIPAA-compliant messaging"]
        },
        {
          icon: Workflow,
          title: "Automated Reminders",
          description: "Smart SMS and email system that reduces no-shows with personalized appointment reminders.",
          features: ["SMS reminders", "Email confirmations", "Cancellation management"]
        },
        {
          icon: BarChart3,
          title: "Practice Dashboard",
          description: "Real-time analytics showing patient volume, revenue, no-show rates, and operational metrics.",
          features: ["Revenue tracking", "Patient analytics", "Staff performance"]
        },
        {
          icon: Database,
          title: "EHR Integration",
          description: "Connect your existing systems to eliminate manual data entry and sync patient information automatically.",
          features: ["Data sync", "API connections", "Reduced errors"]
        },
        {
          icon: Shield,
          title: "Compliance Tools",
          description: "Built-in HIPAA compliance features including encryption, audit logs, and access controls.",
          features: ["Data encryption", "Audit trails", "Access management"]
        },
      ].map((item, idx) => {
        const Icon = item.icon;
        return (
          <div key={idx} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mb-4">
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
        className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
      >
        Start Your Project
        <ArrowRight size={20} />
      </Link>
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
  Free Healthcare Automation Checklist
</h3>
                <p className="text-sm text-gray-500 mb-6">Essential planning guide for medical practices</p>
                <a 
  href="/healthcare-automation-guide.pdf"
  download="Vidi-Healthcare-Automation-Guide.pdf"
  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
>
  Download PDF
  <ArrowRight size={18} />
</a>
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
            <h3 className="text-3xl font-bold mb-4">Ready to Modernize Your Practice?</h3>
<p className="text-xl mb-8 text-blue-100">
  Book a consultation to discuss how automation can 
  reduce administrative burden and improve patient experience.
</p>
            
            <div className="mb-8">
              <Link 
                href="/contact"
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