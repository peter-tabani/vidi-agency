"use client";

import React, { useState } from 'react'; 
import { useRouter } from 'next/navigation'; 
import Image from 'next/image'; // ← Add Next.js Image component
import Navbar from "@/components/Navbar";
import { 
  Rocket, Zap, ShieldCheck, Target, MessageCircle, 
  ArrowRight, CheckCircle, Globe, Building, Users,
  Sparkles, Heart, HandHeart, Layers, Cpu, Smartphone,
  BarChart, Cloud, Lock, Clock, Award, Linkedin, Mail
} from 'lucide-react';

export default function AboutPage() {
  const router = useRouter(); 
  
  const [secretCount, setSecretCount] = useState(0);

  const handleSecretKnock = () => {
    const newCount = secretCount + 1;
    setSecretCount(newCount);
    if (newCount >= 5) router.push('/admin');
    setTimeout(() => setSecretCount(0), 1000);
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white opacity-80"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 sm:mb-8 border border-blue-200">
              <Building className="w-4 h-4" />
              <span>Enterprise Technology Partners</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-4 sm:mb-6 leading-tight tracking-tight px-4">
              Digital Infrastructure for
              <span className="block mt-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Sustainable Growth
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10 sm:mb-12 px-4">
              We build custom software solutions that help businesses automate operations, 
              improve customer experiences, and scale efficiently.
            </p>
          </div>
          
          {/* Key Differentiators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mt-12 sm:mt-16">
            <div className="text-center p-6 border border-gray-100 rounded-xl bg-white hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">System Architecture</h3>
              <p className="text-gray-600 text-sm">Enterprise-grade foundations</p>
            </div>
            
            <div className="text-center p-6 border border-gray-100 rounded-xl bg-white hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AI Integration</h3>
              <p className="text-gray-600 text-sm">Intelligent process automation</p>
            </div>
            
            <div className="text-center p-6 border border-gray-100 rounded-xl bg-white hover:shadow-md transition-shadow sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">ROI Focus</h3>
              <p className="text-gray-600 text-sm">Measurable business impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- VALUE PROPOSITION --- */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
                Our Approach to
                <span className="block font-semibold text-blue-600 mt-2">Digital Transformation</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Strategic Alignment</h4>
                    <p className="text-gray-600 text-sm">
                      We align technology initiatives with business objectives to ensure 
                      every investment delivers tangible value.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Enterprise Standards</h4>
                    <p className="text-gray-600 text-sm">
                      Our solutions adhere to industry best practices for security, 
                      scalability, and maintainability.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Sustainable Growth</h4>
                    <p className="text-gray-600 text-sm">
                      We build systems that evolve with your organization, avoiding 
                      technical debt and future limitations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm">
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Who We Serve</h3>
                <p className="text-gray-600 text-sm">
                  We work with organizations across multiple sectors:
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  "Healthcare",
                  "Real Estate",
                  "Legal Services",
                  "Education",
                  "Hospitality",
                  "Retail & E-Commerce",
                  "Construction",
                  "Nonprofits",
                  "Startups",
                  "Small Business",
                  "Finance",
                  "Logistics"
                ].map((industry, idx) => (
                  <div key={idx} className="p-2.5 sm:p-3 bg-gray-50 rounded-lg flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-900 text-xs sm:text-sm font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- LEADERSHIP SECTION (REDESIGNED WITH IMAGE SUPPORT) --- */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-blue-600 font-medium mb-4">
              <Users className="w-5 h-5" />
              <span>Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              Senior Leadership Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">
              Seasoned professionals with collective experience across enterprise technology, 
              business strategy, and digital innovation.
            </p>
          </div>

          {/* CEO Section - With Image Support */}
          <div className="max-w-4xl mx-auto mb-16 sm:mb-20">
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-8 sm:p-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* CEO Image */}
                <div className="flex-shrink-0">
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    {/* OPTION 1: Using Next.js Image (recommended) */}
                    <Image
                      src="/team/peter-frank.png" // ← Place your image in /public/team/
                      alt="Peter Frank - CEO of Vidi Agency"
                      fill
                      className="object-cover"
                      priority
                    />
                    
                    {/* OPTION 2: Fallback with initials (if image not available) */}
                    {/* <div className="w-full h-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center text-white text-4xl sm:text-5xl font-light">
                      PF
                    </div> */}
                  </div>
                </div>
                
                {/* CEO Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-2">Peter Frank</h3>
                  <p className="text-blue-600 font-medium mb-4 sm:mb-6">Founder & CEO</p>
                  
                  {/* CEO Quote */}
                  <blockquote className="text-gray-700 italic text-base sm:text-lg leading-relaxed mb-6">
                    "Great ideas deserve great execution. Let us be the team that turns your vision into reality."
                  </blockquote>
                  
                  {/* Contact Links */}
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <a 
                      href="https://linkedin.com/in/yourprofile" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                      aria-label="Peter Frank's LinkedIn Profile"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                    <a 
                      href="mailto:peter@vidiagency.com"
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                      aria-label="Email Peter Frank"
                    >
                      <Mail className="w-5 h-5" />
                      <span className="text-sm font-medium">Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Team - FIXED GRID */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl font-medium text-gray-700 mb-8 text-center">Technical Leadership</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { name: "Emmanuel Douglas", role: "Lead Developer", initials: "ED", image: "/team/emmanuel-douglas.jpeg" },
                { name: "Dawson Johnson", role: "Design Director", initials: "DJ", image: "/team/dawson-johnson.jpeg" },
                { name: "Anna Hall", role: "Project Manager", initials: "AH", image: "/team/anna-hall.jpeg" },
                { name: "Abigael Roberts", role: "Systems Architect", initials: "AR", image: "/team/abigael-roberts.jpeg" }
              ].map((member, idx) => (
                <div key={idx} className="text-center group">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mx-auto mb-3 border-2 border-gray-200 group-hover:border-blue-400 transition-all shadow-md group-hover:shadow-xl">
                    {/* OPTION 1: Using Image */}
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all"
                    />
                    
                    {/* OPTION 2: Fallback with initials */}
                    {/* <div className="w-full h-full bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center border border-gray-300">
                      <span className="text-gray-700 text-xl sm:text-2xl font-medium">{member.initials}</span>
                    </div> */}
                  </div>
                  <h4 className="font-medium text-gray-900 text-sm sm:text-base">{member.name}</h4>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
              Core Service Areas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">
              Comprehensive solutions designed to address critical business needs 
              across the digital landscape.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-4">Enterprise Web Platforms</h3>
              <p className="text-gray-600 text-sm mb-6">
                Scalable web applications and portals designed for complex business 
                workflows, high availability, and enterprise security requirements.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Custom business portals</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>E-commerce ecosystems</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Enterprise CMS solutions</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-4">Mobile Applications</h3>
              <p className="text-gray-600 text-sm mb-6">
                Native and cross-platform mobile solutions that deliver seamless 
                user experiences while maintaining enterprise-grade security and 
                performance standards.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>iOS & Android native apps</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Cross-platform solutions</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Enterprise mobility suites</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:border-blue-300 hover:shadow-lg transition-all sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-4">AI & Automation</h3>
              <p className="text-gray-600 text-sm mb-6">
                Intelligent automation and AI integration to optimize business 
                processes, enhance decision-making, and create competitive 
                advantages through data-driven insights.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Process automation</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Predictive analytics</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Custom AI integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROCESS --- */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
              Our Engagement Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">
              A structured methodology designed to ensure clarity, alignment, and 
              successful delivery at every stage.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200"></div>
            
            <div className="space-y-8 sm:space-y-12">
              {[
                { 
                  step: "01",
                  title: "Discovery & Strategy",
                  description: "Comprehensive analysis of business objectives, technical requirements, and success metrics.",
                  icon: Target
                },
                { 
                  step: "02",
                  title: "Architecture Design",
                  description: "Development of technical specifications, system architecture, and implementation roadmap.",
                  icon: Layers
                },
                { 
                  step: "03",
                  title: "Development & Integration",
                  description: "Agile development process with regular milestones, testing, and stakeholder review.",
                  icon: Cpu
                },
                { 
                  step: "04",
                  title: "Deployment & Support",
                  description: "Production deployment, training, documentation, and ongoing technical support.",
                  icon: Cloud
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className={`flex flex-col lg:flex-row items-start lg:items-center ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 lg:gap-8`}>
                    <div className={`w-full lg:w-1/2 ${idx % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                      <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                        <div className={`flex items-center gap-3 mb-4 ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <div className={idx % 2 === 0 ? 'lg:text-right' : ''}>
                            <div className="text-sm text-blue-600 font-medium">{item.step}</div>
                            <h3 className="text-base sm:text-lg font-medium text-gray-900">{item.title}</h3>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                      <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
                    </div>
                    
                    <div className="lg:w-1/2"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* --- PRINCIPLES --- */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
              Guiding Principles
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-6 sm:p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3">Integrity & Transparency</h3>
              <p className="text-gray-600 text-sm">
                Clear communication, honest assessments, and transparent processes 
                form the foundation of every client relationship.
              </p>
            </div>

            <div className="text-center p-6 sm:p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3">Long-Term Value</h3>
              <p className="text-gray-600 text-sm">
                We prioritize sustainable solutions that deliver ongoing value 
                rather than short-term fixes that create future challenges.
              </p>
            </div>

            <div className="text-center p-6 sm:p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3">Excellence in Execution</h3>
              <p className="text-gray-600 text-sm">
                Rigorous quality standards, attention to detail, and commitment 
                to delivering exceptional results on every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6">
              Ready to Start Your Project?
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-10 text-base sm:text-lg">
              Let's discuss your project requirements and explore how we can help you build 
              the software solution your business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a 
                href="/get-started"
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </a>
              
              <a 
                href="/contact"
                className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                Schedule Consultation
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
            
            <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Free consultation • Typical response time: 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl sm:text-2xl font-bold text-gray-900">Vidi Agency</span>
              </div>
              
              <button 
                onClick={handleSecretKnock}
                className="text-gray-500 text-sm mt-1 hover:text-gray-900 transition-colors text-left"
              >
                Building tomorrow's digital infrastructure
              </button>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="/contact" className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
                Contact
              </a>
              <a href="/case-studies" className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
                Work
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
                Connect
              </a>
              <a href="/team" className="text-gray-400 hover:text-blue-600 text-sm font-medium border-b border-transparent hover:border-blue-600 transition-all">
                Team
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}