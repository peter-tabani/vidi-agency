"use client";

import React, { useState } from 'react'; 
import { useRouter } from 'next/navigation'; 
import Navbar from "@/components/Navbar";
import { 
  Rocket, Zap, ShieldCheck, Target, MessageCircle, 
  ArrowRight, Bot, Users, Linkedin, Mail, 
  Sparkles, ShoppingBag, Megaphone, Heart, Globe, HandHeart
} from 'lucide-react';

// --- LEADERSHIP TEAM ---
const leadership = [

  {

    name: "Peter Frank",

    role: "Founder & CEO",

    position: "Vision & Strategy",

    quote: "Great ideas deserve great execution. Let us be the team that turns your vision into reality."

  },

  {

    name: "Technical Director",

    role: "Engineering Lead",

    position: "System Architecture",

    quote: "Our job is to make yours feel simple, so you can focus on the people you serve."

  },

  {

    name: "Head of Operations",

    role: "Client Success", 

    position: "Strategic Growth",

    quote: "Your success is how we measure ours."

  }

];;

// --- SPECIALIST NETWORK ---
const exposedSpecialists = [
  {
    role: "Head of Sales",
    position: "Partnerships",
    focus: "Connecting organizations with the right tools.",
    icon: ShoppingBag,
    hiringStatus: "Expansion Role", 
    statusColor: "bg-green-500"
  },
  {
    role: "Marketing Director",
    position: "Digital Presence",
    focus: "Crafting narratives that inspire action and loyalty.",
    icon: Megaphone,
    hiringStatus: "Expansion Role",
    statusColor: "bg-green-500"
  },
  {
    role: "Solutions Architect",
    position: "Systems Integration",
    focus: "Designing platforms that run effortlessly in the background.",
    icon: Bot,
    hiringStatus: "High Demand",
    statusColor: "bg-purple-500"
  }
];

export default function AboutPage() {
  const router = useRouter(); 
  
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
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-70"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 text-center md:text-left">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-blue-100 shadow-sm">
              <Rocket className="w-4 h-4" />
              <span>Digital Solutions for Every Mission</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
              Your Vision is Expanding.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Your Systems Should Too.
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              We design Custom Apps, Websites, and AI Integrations for everyone—from growing businesses 
              to impactful non-profits and churches. If you have a mission, we have the tools to help you scale it.
            </p>
          </div>
          
          {/* Universal Trust Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200 pt-8">
            <div>
               <h3 className="text-3xl font-bold text-blue-600">100%</h3>
               <p className="text-gray-500 text-sm">Commitment</p>
            </div>
            <div>
               <h3 className="text-3xl font-bold text-purple-600">24/7</h3>
               <p className="text-gray-500 text-sm">Reliability</p>
            </div>
            <div>
               <h3 className="text-3xl font-bold text-blue-600">Global</h3>
               <p className="text-gray-500 text-sm">Reach</p>
            </div>
            <div>
               <h3 className="text-3xl font-bold text-purple-600">Total</h3>
               <p className="text-gray-500 text-sm">Transformation</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

         <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
            <div className="text-center mb-16">
               <div className="inline-flex items-center gap-2 text-blue-300 font-bold mb-4 uppercase tracking-wider text-sm">
                  <Heart className="w-4 h-4" />
                  Our Philosophy
               </div>
               <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Technology Should Serve People.
               </h2>
               <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                  We believe that the best technology is the kind you don't have to think about. 
                  It works quietly in the background, empowering you to focus on what truly matters: 
                  <b> Your Mission and Your People.</b>
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                     <HandHeart className="w-6 h-6 text-blue-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Stewardship First</h3>
                  <p className="text-gray-400 leading-relaxed">
                     We treat your resources as if they were our own. We don't upsell you on fancy tools you don't need. 
                     We build efficient, long-lasting systems that respect your budget.
                  </p>
               </div>

               <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                     <Users className="w-6 h-6 text-purple-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Community & Connection</h3>
                  <p className="text-gray-400 leading-relaxed">
                     Whether you need to engage a congregation or convert customers, the goal is the same: Connection. 
                     Our platforms are designed to bring people closer to your organization.
                  </p>
               </div>

               <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                     <ShieldCheck className="w-6 h-6 text-green-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Simplicity & Trust</h3>
                  <p className="text-gray-400 leading-relaxed">
                     We speak your language, not code. We promise radical transparency in our process so you 
                     always feel in control of your own digital future.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* --- LEADERSHIP SECTION --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet the <span className="text-blue-600">Team</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A collective of builders, thinkers, and partners dedicated to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, idx) => (
              <div key={idx} className="group hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
                  
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-blue-700 text-xl font-bold mb-6">
                      {leader.name.split(' ')[0][0]}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900">{leader.name}</h3>
                    <p className="text-blue-600 font-medium mb-1">{leader.role}</p>
                    <p className="text-sm text-gray-400">{leader.position}</p>
                  </div>
                  
                  <blockquote className="text-gray-600 italic flex-grow">
                    "{leader.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES / CAPABILITIES --- */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Deliver</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive digital solutions without boundaries.
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
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Websites & Redesigns</h3>
                    <p className="text-gray-600">
                      We breathe new life into outdated sites or build fresh ones from scratch. 
                      Modern, fast, and responsive designs that reflect your true value.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white flex-shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile Applications</h3>
                    <p className="text-gray-600">
                      Put your organization in everyone's pocket. We build high-performance 
                      apps for iOS and Android that engage your community 24/7.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white flex-shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">AI & Automation</h3>
                    <p className="text-gray-600">
                      From smart assistants to automated scheduling, we integrate intelligence 
                      that saves you time and simplifies your operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment to You</h3>
              
              <div className="space-y-6 text-gray-600">
                <p>
                  We don't believe in "one size fits all." Every organization is unique, 
                  and we choose the right tools to solve <b>your</b> specific challenges.
                </p>
                <p>
                  Whether you need a simple informative site or a complex management system, 
                  we have the expertise to deliver it flawlessly.
                </p>
                <p>
                  We don't just hand over a product and walk away. We partner with you 
                  to ensure your digital presence continues to grow as you do.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3.5 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2">
                  View Our Portfolio
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- LIMITED SPECIALISTS SECTION (FIXED BUTTONS) --- */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              Growing Together
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Expanding Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Reach</span>
            </h2>
            <p className="text-gray-600 mt-3">
              We are always looking for passionate people to join our mission.
            </p>
          </div>

          <div className="space-y-6">
            {exposedSpecialists.map((specialist, idx) => {
              const Icon = specialist.icon;
              return (
                <div key={idx} className="group">
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

                      {/* Right Section - FIXED BUTTON */}
                      <div className="flex items-center justify-between md:justify-end gap-4">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 ${specialist.statusColor} rounded-full animate-pulse`}></div>
                          <span className="text-xs font-medium text-gray-700">
                            {specialist.hiringStatus}
                          </span>
                        </div>
                        
                        {/* THE FIX: EMAIL LINK WITH PRE-FILLED SUBJECT */}
                        <a 
                          href={`mailto:careers@vidiagency.com?subject=Application for ${specialist.role}`}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all flex items-center gap-2"
                        >
                          <span>Apply Now</span>
                          <ArrowRight className="w-3 h-3" />
                        </a>
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
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-32 -translate-x-32"></div>
            </div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Start <span className="text-blue-200">Your Journey?</span>
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed mb-8">
                  Partner with us to transform your vision into reality with tools 
                  that drive real impact and efficiency.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-blue-600 px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-50 transition-all flex items-center gap-2">
                    Start a Conversation
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
                  <div className="text-sm text-blue-200">Commitment</div>
                </div>
                <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-2">24/7</div>
                  <div className="text-sm text-blue-200">Support</div>
                </div>
                <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-2">Global</div>
                  <div className="text-sm text-blue-200">Reach</div>
                </div>
                <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-2">Direct</div>
                  <div className="text-sm text-blue-200">Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER with SECRET KNOCK --- */}
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