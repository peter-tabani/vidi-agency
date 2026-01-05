"use client";

import React, { useState } from 'react'; 
import { useRouter } from 'next/navigation'; 
import Navbar from "@/components/Navbar";
import { 
  Rocket, Zap, ShieldCheck, Target, MessageCircle, 
  ArrowRight, CheckCircle, Globe, Building, Users,
  Sparkles, Heart, HandHeart, Layers, Cpu, Smartphone,
  BarChart, Cloud, Lock, Clock, Award
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

  const clients = [
    { name: "Global Enterprise", industry: "Manufacturing" },
    { name: "Healthcare System", industry: "Healthcare" },
    { name: "Financial Group", industry: "Finance" },
    { name: "Retail Chain", industry: "Retail" },
    { name: "Educational Institution", industry: "Education" },
    { name: "Government Agency", industry: "Government" },
  ];

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <section className="pt-28 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white opacity-80"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-200">
              <Building className="w-4 h-4" />
              <span>Enterprise Technology Partners</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight tracking-tight">
              Digital Infrastructure for
              <span className="block mt-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Sustainable Growth
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              We architect and implement scalable technology solutions for organizations 
              focused on measurable impact and long-term value creation.
            </p>
          </div>
          
          {/* Key Differentiators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            <div className="text-center p-6 border border-gray-100 rounded-xl bg-white">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">System Architecture</h3>
              <p className="text-gray-600 text-sm">Enterprise-grade foundations</p>
            </div>
            
            <div className="text-center p-6 border border-gray-100 rounded-xl bg-white">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AI Integration</h3>
              <p className="text-gray-600 text-sm">Intelligent process automation</p>
            </div>
            
            <div className="text-center p-6 border border-gray-100 rounded-xl bg-white">
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
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
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
            
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Client Portfolio</h3>
                <p className="text-gray-600 text-sm">
                  We've partnered with organizations across multiple sectors:
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {clients.map((client, idx) => (
                  <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-medium text-gray-900 text-sm">{client.name}</div>
                    <div className="text-gray-500 text-xs mt-1">{client.industry}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- LEADERSHIP SECTION --- */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-blue-600 font-medium mb-4">
              <Users className="w-5 h-5" />
              <span>Leadership</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Senior Leadership Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Seasoned professionals with collective experience across enterprise technology, 
              business strategy, and digital innovation.
            </p>
          </div>

          {/* CEO Section - Simplified */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="text-center">
              {/* CEO Avatar */}
              <div className="w-28 h-28 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center text-white text-3xl font-light mx-auto mb-6">
                PF
              </div>
              
              {/* CEO Name & Title */}
              <h3 className="text-2xl font-medium text-gray-900 mb-2">Peter Frank</h3>
              <p className="text-blue-600 font-medium mb-8">Founder & CEO</p>
              
              {/* CEO Quote */}
              <blockquote className="text-gray-700 italic text-lg max-w-2xl mx-auto">
                "Great ideas deserve great execution. Let us be the team that turns your vision into reality."
              </blockquote>
            </div>
          </div>

          {/* Core Team */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-medium text-gray-700 mb-8 text-center">Technical Leadership</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {[
                { name: "Jakes Joel", role: "Technical Lead", initials: "JJ" },
                { name: "W. Sarah", role: "Design Director", initials: "WS" },
                { name: "Dawson Johnson", role: "Development Lead", initials: "DJ" },
                { name: "Abigael Roberts", role: "Project Manager", initials: "AR" },
                { name: "Emmannuel Douglas", role: "Systems Architect", initials: "ED" }
              ].map((member, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center mx-auto mb-3 border border-gray-300">
                    <span className="text-gray-700 text-xl font-medium">{member.initials}</span>
                  </div>
                  <h4 className="font-medium text-gray-900 text-sm">{member.name}</h4>
                  <p className="text-gray-500 text-xs mt-1">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Core Service Areas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to address critical business needs 
              across the digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Enterprise Web Platforms</h3>
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

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Mobile Applications</h3>
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

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">AI & Automation</h3>
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
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Our Engagement Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A structured methodology designed to ensure clarity, alignment, and 
              successful delivery at every stage.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200"></div>
            
            <div className="space-y-12">
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
                    
                    {/* Timeline dot */}
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

      {/* --- PRINCIPLES --- */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Guiding Principles
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white border border-gray-200 rounded-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Integrity & Transparency</h3>
              <p className="text-gray-600 text-sm">
                Clear communication, honest assessments, and transparent processes 
                form the foundation of every client relationship.
              </p>
            </div>

            <div className="text-center p-8 bg-white border border-gray-200 rounded-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Long-Term Value</h3>
              <p className="text-gray-600 text-sm">
                We prioritize sustainable solutions that deliver ongoing value 
                rather than short-term fixes that create future challenges.
              </p>
            </div>

            <div className="text-center p-8 bg-white border border-gray-200 rounded-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Excellence in Execution</h3>
              <p className="text-gray-600 text-sm">
                Rigorous quality standards, attention to detail, and commitment 
                to delivering exceptional results on every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-xl p-12 text-center shadow-sm">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Begin Your Digital Transformation
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
              Schedule a consultation to discuss how our enterprise technology 
              solutions can address your specific business challenges and objectives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                Schedule Consultation
                <MessageCircle className="w-4 h-4" />
              </button>
              
              <button className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                View Case Studies
              </button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                Response time: Within 24 business hours • Initial consultation: 45 minutes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- ORIGINAL FOOTER with HIDDEN LINKS --- */}
      <footer className="py-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">Vidi Agency</span>
              </div>
              
              <button 
                onClick={handleSecretKnock}
                className="text-gray-500 text-sm mt-1 hover:text-gray-900 transition-colors text-left"
              >
                Building tomorrow's digital infrastructure
              </button>
              
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Contact
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Work
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Connect
              </a>
            </div>
            <div className="flex items-center gap-6">
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