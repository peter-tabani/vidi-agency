"use client";

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Link from 'next/link';
import { 
  GraduationCap, BookOpen, Users, TrendingUp, 
  Shield, Zap, Clock, Target, CheckCircle, 
  ArrowRight, Award, Globe, Brain, 
  MessageSquare, Calendar, FileText, 
  BarChart, Lightbulb, Video, Star,
  Heart, Lock, Cloud, Database
} from 'lucide-react';

export default function EducationWelcomePage() {
  const [selectedRole, setSelectedRole] = useState('administrator');

  const roles = [
    { id: 'administrator', label: 'School Administrator', icon: Users },
    { id: 'director', label: 'Academic Director', icon: GraduationCap },
    { id: 'teacher', label: 'Lead Teacher', icon: BookOpen },
    { id: 'tech', label: 'Technology Coordinator', icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-emerald-50">
      
      {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center">
                <GraduationCap size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">EduTech Solutions</span>
            </div>
            <Link 
              href="/contact" 
              className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-500 text-white rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Book Strategy Call
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="pt-16 pb-20 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <GraduationCap size={16} className="text-blue-600" />
              <span className="text-sm font-bold text-blue-600">Welcome to Our Education Division</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transforming Education Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Digital Innovation</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              We partner with forward-thinking educational institutions to create custom digital solutions that enhance learning, streamline operations, and prepare students for the future.
            </p>
            
            {/* Role Selector */}
            <div className="mb-12">
              <p className="text-gray-600 mb-4">I am a:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {roles.map((role) => {
                  const Icon = role.icon;
                  const isSelected = selectedRole === role.id;
                  return (
                    <button
                      key={role.id}
                      onClick={() => setSelectedRole(role.id)}
                      className={`flex items-center gap-2 px-5 py-3 rounded-xl border transition-all ${isSelected 
                        ? 'border-blue-500 bg-blue-50 text-blue-700' 
                        : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300'}`}
                    >
                      <Icon size={18} />
                      <span className="font-medium">{role.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/strategy-call" 
                className="px-8 py-4 rounded-full text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-emerald-500 hover:shadow-xl transition-all shadow-lg shadow-blue-200"
              >
                Book Your Free Strategy Session
                <ArrowRight size={20} className="inline ml-2" />
              </Link>
              <Link 
                href="#case-studies" 
                className="px-8 py-4 rounded-full text-lg font-bold text-gray-700 bg-white border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
              >
                View Education Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- PERSONALIZED VALUE PROP --- */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-3xl p-10 border border-blue-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              How We Help {roles.find(r => r.id === selectedRole)?.label}s
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Challenges */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                    <Target size={24} className="text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Current Challenges</h3>
                </div>
                <ul className="space-y-4">
                  {selectedRole === 'administrator' && [
                    "Managing budget constraints while needing technology upgrades",
                    "Ensuring compliance with changing education regulations",
                    "Staff resistance to new technology adoption",
                    "Integrating multiple systems that don't communicate",
                    "Measuring ROI on edtech investments"
                  ].map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-red-600 text-sm">!</span>
                      </div>
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  ))}
                  
                  {selectedRole === 'director' && [
                    "Curriculum that doesn't engage digital-native students",
                    "Lack of data to inform teaching strategies",
                    "Professional development for tech integration",
                    "Assessment tools that provide meaningful insights",
                    "Preparing students for future workforce needs"
                  ].map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-red-600 text-sm">!</span>
                      </div>
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  ))}
                  
                  {selectedRole === 'teacher' && [
                    "Limited time for lesson planning and grading",
                    "Engaging all students in mixed-ability classrooms",
                    "Tracking individual student progress effectively",
                    "Communicating with parents efficiently",
                    "Accessing resources that work with your teaching style"
                  ].map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-red-600 text-sm">!</span>
                      </div>
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  ))}
                  
                  {selectedRole === 'tech' && [
                    "Supporting multiple platforms and devices",
                    "Ensuring data privacy and security compliance",
                    "Integrating new tools with existing infrastructure",
                    "Training staff with varying tech proficiency",
                    "Managing software licenses and updates"
                  ].map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-red-600 text-sm">!</span>
                      </div>
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <Lightbulb size={24} className="text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Our Solutions</h3>
                </div>
                <ul className="space-y-4">
                  {selectedRole === 'administrator' && [
                    "Custom learning management systems tailored to your budget",
                    "Compliance-first design for education regulations",
                    "Change management and staff training programs",
                    "API-first architecture for seamless integration",
                    "ROI tracking and analytics dashboards"
                  ].map((solution, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle size={16} className="text-emerald-600" />
                      </div>
                      <span className="text-gray-700">{solution}</span>
                    </li>
                  ))}
                  
                  {selectedRole === 'director' && [
                    "Interactive digital curriculum with gamification",
                    "Real-time student performance analytics",
                    "Professional development micro-courses",
                    "Adaptive assessment platforms",
                    "Future skills mapping and tracking"
                  ].map((solution, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle size={16} className="text-emerald-600" />
                      </div>
                      <span className="text-gray-700">{solution}</span>
                    </li>
                  ))}
                  
                  {selectedRole === 'teacher' && [
                    "Automated grading and assignment management",
                    "Differentiated learning path creators",
                    "Individual student progress trackers",
                    "Parent communication portals with analytics",
                    "Customizable teaching resource libraries"
                  ].map((solution, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle size={16} className="text-emerald-600" />
                      </div>
                      <span className="text-gray-700">{solution}</span>
                    </li>
                  ))}
                  
                  {selectedRole === 'tech' && [
                    "Single sign-on unified platforms",
                    "GDPR/FERPA compliant infrastructure",
                    "API documentation and integration support",
                    "Step-by-step training modules for all levels",
                    "Automated license and update management"
                  ].map((solution, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle size={16} className="text-emerald-600" />
                      </div>
                      <span className="text-gray-700">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- EDUCATION SOLUTIONS GRID --- */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Education-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Custom-built technology for modern educational institutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Learning Management Systems",
                description: "Custom LMS platforms that match your pedagogy, not force you into a template",
                features: ["Course Management", "Gradebook", "Assignment Submission", "Discussion Forums"],
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Users,
                title: "Student Information Systems",
                description: "Complete student lifecycle management from enrollment to alumni tracking",
                features: ["Attendance Tracking", "Health Records", "Parent Portals", "Report Cards"],
                color: "from-emerald-500 to-emerald-600"
              },
              {
                icon: Brain,
                title: "Adaptive Learning Platforms",
                description: "AI-powered systems that adjust to each student's learning pace and style",
                features: ["Personalized Paths", "Skill Gaps Analysis", "Progress Tracking", "Intervention Alerts"],
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: Video,
                title: "Virtual Classroom Solutions",
                description: "Engaging hybrid learning environments with interactive tools",
                features: ["Live Video", "Breakout Rooms", "Whiteboard", "Polls & Quizzes"],
                color: "from-amber-500 to-amber-600"
              },
              {
                icon: BarChart,
                title: "Analytics & Reporting",
                description: "Data-driven insights to improve learning outcomes and operational efficiency",
                features: ["Learning Analytics", "ROI Tracking", "Predictive Analysis", "Custom Dashboards"],
                color: "from-red-500 to-red-600"
              },
              {
                icon: Shield,
                title: "Compliance & Security",
                description: "FERPA/GDPR compliant systems with enterprise-grade security",
                features: ["Data Encryption", "Access Controls", "Audit Logs", "Privacy Certifications"],
                color: "from-indigo-500 to-indigo-600"
              }
            ].map((solution, idx) => {
              const Icon = solution.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all group">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon size={30} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <div className="space-y-2">
                    {solution.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-emerald-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- CASE STUDIES --- */}
      <section id="case-studies" className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-4">
              <Star size={16} className="text-emerald-600" />
              <span className="text-sm font-bold text-emerald-600">Proven Results</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Education Success Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                institution: "Tech Valley High School",
                challenge: "Outdated systems causing 40% admin time on manual processes",
                solution: "Custom SIS with automated workflows",
                results: ["65% reduction in admin workload", "Improved parent satisfaction by 40%", "Saved $28k annually"],
                type: "High School"
              },
              {
                institution: "Global Online Academy",
                challenge: "Engagement dropping in virtual classes",
                solution: "Interactive LMS with gamification",
                results: ["47% increase in participation", "Course completion up 35%", "Student satisfaction 4.8/5"],
                type: "Online School"
              },
              {
                institution: "University of Innovation",
                challenge: "Fragmented systems across departments",
                solution: "Unified educational platform",
                results: ["90% system adoption rate", "Reduced IT tickets by 70%", "Scaled to 15,000+ users"],
                type: "University"
              }
            ].map((caseStudy, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <GraduationCap size={24} className="text-blue-600" />
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {caseStudy.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{caseStudy.institution}</h3>
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2">Challenge:</p>
                  <p className="text-gray-700">{caseStudy.challenge}</p>
                </div>
                
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2">Our Solution:</p>
                  <p className="text-gray-700">{caseStudy.solution}</p>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-sm text-gray-500 mb-3">Results Achieved:</p>
                  <ul className="space-y-2">
                    {caseStudy.results.map((result, ridx) => (
                      <li key={ridx} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                          <TrendingUp size={12} className="text-emerald-600" />
                        </div>
                        <span className="text-sm text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OUR PROCESS --- */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-blue-50 to-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Education-Focused Process
            </h2>
            <p className="text-xl text-gray-600">
              Designed specifically for educational institutions
            </p>
          </div>

          <div className="relative">
            {/* Process Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-1/2 h-1 w-3/4 bg-gradient-to-r from-blue-300 to-emerald-300"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
              {[
                {
                  step: "01",
                  title: "Discovery Workshop",
                  description: "We meet with all stakeholders to understand your unique needs and challenges",
                  duration: "1-2 weeks",
                  icon: MessageSquare
                },
                {
                  step: "02",
                  title: "Educational Design",
                  description: "Our learning experience designers create pedagogically sound solutions",
                  duration: "2-3 weeks",
                  icon: Brain
                },
                {
                  step: "03",
                  title: "Development & Training",
                  description: "Agile development with continuous feedback and staff training",
                  duration: "4-12 weeks",
                  icon: Zap
                },
                {
                  step: "04",
                  title: "Launch & Support",
                  description: "Phased rollout with ongoing support and improvement cycles",
                  duration: "Ongoing",
                  icon: Award
                }
              ].map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="relative">
                    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all relative z-10">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center mb-6 mx-auto">
                        <Icon size={28} className="text-white" />
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-blue-600 mb-2">Step {step.step}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-gray-600 mb-4">{step.description}</p>
                        <div className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 rounded-full">
                          <Clock size={14} className="text-blue-600" />
                          <span className="text-sm text-blue-700">{step.duration}</span>
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

      {/* --- FREE CONSULTATION --- */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
            <Calendar size={18} className="text-white" />
            <span className="text-sm font-semibold">Limited Spots Available</span>
          </div>
          
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Institution?
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Your Free Strategy Session Includes:</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                "Digital readiness assessment",
                "Competitive analysis of similar institutions",
                "Custom technology roadmap",
                "Budget planning guidance",
                "Implementation timeline",
                "No obligation quote"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-emerald-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/book-consultation" 
              className="px-10 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 hover:shadow-2xl transition-all inline-flex items-center justify-center gap-2"
            >
              <Calendar size={20} />
              Book Your Free Session
            </Link>
            <Link 
              href="/brochure" 
              className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
            >
              <FileText size={20} />
              Download Our Education Brochure
            </Link>
          </div>
          
          <p className="mt-8 text-blue-100">
            ⏰ Average session length: 45 minutes • 📍 Virtual or On-site • 🎯 No sales pitch
          </p>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <span className="text-xl font-bold">EduTech Solutions</span>
              </div>
              <p className="text-gray-400">
                Specializing in custom technology solutions for educational institutions since 2018
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 justify-center">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors">
                Case Studies
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
              <a href="tel:+1-555-123-4567" className="text-gray-400 hover:text-white transition-colors">
                📞 +1 (555) 123-4567
              </a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} EduTech Solutions. All rights reserved.</p>
            <p className="mt-2">FERPA/GDPR compliant solutions • Certified Education Technology Partners</p>
          </div>
        </div>
      </footer>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}