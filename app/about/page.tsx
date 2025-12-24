"use client";

import React, { useState } from 'react'; // <--- Added useState
import { useRouter } from 'next/navigation'; // <--- Added useRouter
import Navbar from "@/components/Navbar";
import { 
  Rocket, Zap, ShieldCheck, Target, MessageCircle, 
  ArrowRight, Code2, Palette, Bot, Smartphone, Briefcase, 
  BarChart, Bug, Users, Linkedin, Mail, ChevronRight,
  Globe, Cpu, Building, TrendingUp, Award, Check,
  Sparkles, ChevronDown, ExternalLink, ShoppingBag, 
  Megaphone, Database, Cloud
} from 'lucide-react';

// --- LEADERSHIP TEAM ---
const leadership = [
  {
    name: "Peter Frank",
    role: "Founder & CEO",
    position: "Strategic Vision & Business Development",
    expertise: ["Business Strategy", "AI Integration", "Market Expansion"],
    quote: "We build technology that becomes a competitive advantage for our clients."
  },
  {
    name: "Strategic Partner",
    role: "Technical Director",
    position: "Engineering Excellence & Innovation",
    expertise: ["System Architecture", "AI Research", "Technical Operations"],
    quote: "Engineering solutions that scale with ambition."
  },
  {
    name: "Strategic Partner",
    role: "Growth Director", 
    position: "Client Success & Market Strategy",
    expertise: ["Business Growth", "Client Relations", "Revenue Operations"],
    quote: "Transforming client potential into measurable business outcomes."
  }
];

// --- LIMITED SPECIALISTS (Only 3 exposed for hiring) ---
const exposedSpecialists = [
  {
    role: "Head of Sales",
    position: "Revenue Generation & Strategic Partnerships",
    focus: "Enterprise Sales, Client Acquisition, Revenue Growth",
    icon: ShoppingBag,
    hiringStatus: "Hiring Now",
    statusColor: "bg-green-500"
  },
  {
    role: "Marketing Director",
    position: "Brand Strategy & Digital Marketing",
    focus: "Lead Generation, Brand Positioning, Growth Marketing",
    icon: Megaphone,
    hiringStatus: "Hiring Now",
    statusColor: "bg-green-500"
  },
  {
    role: "AI Solutions Architect",
    position: "Automation Engineering & AI Integration",
    focus: "LLM Development, Workflow Automation, AI Strategy",
    icon: Bot,
    hiringStatus: "Hiring Soon",
    statusColor: "bg-yellow-500"
  }
];

export default function AboutPage() {
  const router = useRouter(); // <--- Initialize Router
  
  // --- SECRET ADMIN LOGIC ---
  const [secretCount, setSecretCount] = useState(0);

  const handleSecretKnock = () => {
    const newCount = secretCount + 1;
    setSecretCount(newCount);

    // If clicked 5 times, go to Admin
    if (newCount >= 5) {
      router.push('/admin');
    }

    // Reset count if you stop clicking for 1 second
    setTimeout(() => setSecretCount(0), 1000);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Rocket className="w-4 h-4" />
              Enterprise AI Solutions
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Building Tomorrow's
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Digital Infrastructure
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              We design, develop, and deploy AI-powered systems that transform business operations 
              and drive measurable growth.
            </p>
          </div>
          
          {/* Capabilities Overview */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="border-l-2 border-blue-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Automation</h3>
              <p className="text-gray-600">
                Intelligent workflow automation that reduces operational costs by 40-60%
              </p>
            </div>
            <div className="border-l-2 border-purple-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Applications</h3>
              <p className="text-gray-600">
                Scalable digital platforms built for business growth and operational efficiency
              </p>
            </div>
            <div className="border-l-2 border-pink-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Transformation</h3>
              <p className="text-gray-600">
                Comprehensive strategy and implementation for modern business operations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- LEADERSHIP SECTION --- */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Executive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Leadership</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Strategic vision backed by technical excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, idx) => (
              <div key={idx} className="group">
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="mb-8">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-xl font-bold mb-6">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{leader.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-gray-800 font-semibold">{leader.role}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-sm text-gray-500">{leader.position}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 italic border-l-2 border-blue-300 pl-4 py-2">
                        "{leader.quote}"
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100">
                    <div className="text-sm font-medium text-gray-500 mb-3">Strategic Focus</div>
                    <div className="space-y-3">
                      {leader.expertise.map((focus, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                          <span className="text-gray-700">{focus}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <div className="flex gap-4">
                        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Contact
                        </button>
                        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
                          <Linkedin className="w-4 h-4" />
                          Connect
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CORE CAPABILITIES SECTION --- */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Capabilities</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              End-to-end solutions from strategy to execution
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white flex-shrink-0">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic AI Implementation</h3>
                    <p className="text-gray-600">
                      Custom AI solutions that integrate seamlessly with existing business operations, 
                      driving efficiency and creating new revenue streams.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white flex-shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise-Grade Development</h3>
                    <p className="text-gray-600">
                      Scalable web and mobile applications built with modern architectures 
                      designed for growth and reliability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white flex-shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Full Project Lifecycle Management</h3>
                    <p className="text-gray-600">
                      From initial concept to deployment and ongoing optimization, 
                      we manage every aspect of your digital transformation journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technology Stack</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-500 mb-2">Frontend</div>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((tech, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-lg text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 mb-2">Backend & AI</div>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'Python', 'Supabase', 'OpenAI', 'LangChain'].map((tech, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-lg text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 mb-2">Mobile & Infrastructure</div>
                  <div className="flex flex-wrap gap-2">
                    {['React Native', 'AWS', 'Vercel', 'Docker', 'CI/CD'].map((tech, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-lg text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3.5 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2">
                  View Case Studies
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- LIMITED SPECIALISTS SECTION (Only 3 exposed) --- */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              Building Our Team
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Hiring</span>
            </h2>
            <p className="text-gray-600 mt-3">
              We're expanding our team with key leadership positions
            </p>
          </div>

          <div className="space-y-6">
            {exposedSpecialists.map((specialist, idx) => {
              const Icon = specialist.icon;
              return (
                <div 
                  key={idx} 
                  className="group"
                >
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      {/* Left Section */}
                      <div className="flex items-start md:items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:gap-6">
                            <div>
                              <h3 className="text-lg font-bold text-gray-900">
                                {specialist.role}
                              </h3>
                              <p className="text-gray-700 font-medium text-sm mt-1">
                                {specialist.position}
                              </p>
                            </div>
                            
                            <div className="hidden md:block">
                              <div className="w-px h-6 bg-gray-200"></div>
                            </div>
                            
                            <div className="mt-2 md:mt-0">
                              <p className="text-gray-600 text-sm">
                                {specialist.focus}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Section - Hiring Status */}
                      <div className="flex items-center justify-between md:justify-end gap-4">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 ${specialist.statusColor} rounded-full animate-pulse`}></div>
                          <span className="text-xs font-medium text-gray-700">
                            {specialist.hiringStatus}
                          </span>
                        </div>
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all flex items-center gap-2">
                          <span>Apply Now</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Note about confidential team */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Confidential Team Structure</h4>
                <p className="text-gray-600 text-sm mt-1">
                  Our core technical and delivery team operates confidentially on client projects. 
                  Additional positions may be available upon partnership discussions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-3xl p-12 md:p-16 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-32 -translate-x-32"></div>
            </div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Build <span className="text-blue-200">Together?</span>
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed mb-8">
                  Partner with us to transform your business with enterprise-grade 
                  technology solutions that drive growth and efficiency.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-blue-600 px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-50 transition-all flex items-center gap-2">
                    Schedule Strategy Call
                    <MessageCircle className="w-4 h-4" />
                  </button>
                  <button className="bg-transparent border border-white/30 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-all">
                    View Our Work
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-2">100%</div>
                  <div className="text-sm text-blue-200">Project Completion</div>
                </div>
                <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-2">24/7</div>
                  <div className="text-sm text-blue-200">Technical Support</div>
                </div>
                <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-2">Enterprise</div>
                  <div className="text-sm text-blue-200">Security Standards</div>
                </div>
                <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-2">Direct</div>
                  <div className="text-sm text-blue-200">Executive Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MINIMAL FOOTER with SECRET KNOCK --- */}
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
              
              {/* --- HIDDEN ADMIN BUTTON --- */}
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
  {/* ... existing links ... */}
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