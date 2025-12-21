"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import { 
  Rocket, Globe, Zap, Users, ShieldCheck, 
  Clock, Target, MessageCircle, ArrowRight, UserPlus, Cpu, CheckCircle2
} from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* --- 1. HERO & STATS --- */}
      <section className="pt-32 pb-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <Rocket size={16} /> Building The Future of Automation
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Enterprise AI. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Accessible to Everyone.
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-16">
            We started Vidi Agency with a simple belief: <b>Small businesses deserve the same AI-powered automation that Fortune 500 companies use</b>, without the enterprise price tag or complexity.
          </p>

          {/* STATS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="text-3xl font-extrabold text-blue-600 mb-1">50+</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Businesses Automated</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="text-3xl font-extrabold text-purple-600 mb-1">10k+</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Leads Captured</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="text-3xl font-extrabold text-green-600 mb-1">98%</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Client Satisfaction</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="text-3xl font-extrabold text-orange-600 mb-1">24/7</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">System Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. OUR APPROACH --- */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Why Businesses Choose Vidi</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We don't sell "software." We sell time, efficiency, and growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">What Drives Us</h3>
              <p className="text-gray-600 leading-relaxed">
                We've seen too many owners lose customers because they couldn't respond fast enough. We exist to give you back your time while capturing every opportunity.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-3xl text-white shadow-xl shadow-blue-200 transform md:-translate-y-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Tailored Intelligence</h3>
              <p className="text-blue-50 leading-relaxed">
                We take time to understand <b>your</b> business. We don't build generic solutions; we build automation tailored to how YOUR business operates.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Promise</h3>
              <p className="text-gray-600 leading-relaxed">
                Clear communication, delivered results, and AI that pays for itself. If our system doesn't bring you measurable value, we're not doing our job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. FOUNDER SECTION --- */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Left: Founder Profile (NO PHOTO, Just Initials) */}
            <div className="w-full lg:w-1/3 flex flex-col items-center text-center lg:items-start lg:text-left relative lg:sticky lg:top-32">
              {/* Initials Placeholder instead of Photo */}
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl mb-6 border-4 border-white">
                 PF
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900">Peter Frank</h2>
              <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mt-2 mb-6">Founder & CEO</p>
              
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 w-full mb-8 lg:mb-0">
                <p className="text-blue-800 text-sm font-medium mb-3">
                  "I personally respond to every inquiry, usually within a few hours."
                </p>
                <div className="flex justify-center lg:justify-start gap-3">
                   <a href="#" className="p-2 bg-white rounded-lg text-blue-600 hover:text-blue-800 hover:shadow-sm transition-all"><MessageCircle size={20}/></a>
                   <a href="#" className="p-2 bg-white rounded-lg text-blue-600 hover:text-blue-800 hover:shadow-sm transition-all"><Globe size={20}/></a>
                </div>
              </div>
            </div>

            {/* Right: The Letter */}
            <div className="w-full lg:w-2/3 prose prose-lg prose-blue text-gray-600 leading-relaxed">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Hi, I'm Peter.
              </h3>
              <p>
                Building this company means everything to me. Your success is how we measure ours.
              </p>
              <p>
                When you work with us, you're not just a ticket number. You get direct access to me and our dedicated team. 
                I lead every project personally, supported by our skilled team of AI specialists and automation engineers.
              </p>
              <p>
                When your phone rings with new customers, when you see leads coming in while you sleep, when you finally have time to focus on growing your business instead of answering the same questions — that's what keeps us going.
              </p>
              
              <div className="not-prose mt-8">
                 <h4 className="font-bold text-gray-900 mb-4">No sales pressure. Just a conversation.</h4>
                 <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg flex items-center gap-2">
                   Chat with Peter <ArrowRight size={18}/>
                 </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. EXPANDING LEADERSHIP (Big, Prominent Section) --- */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              <Users size={16} /> Growing Our Team
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Expanding Leadership</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              We are building a world-class executive team to drive the next phase of innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Leadership Card 1: Strategic Partner */}
            <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 mb-6 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                <UserPlus size={48}/>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Strategic Partner</h3>
              <p className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">Sales & Operations</p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We are seeking a visionary leader to spearhead our operations and client relationships. This role is pivotal in shaping our service delivery and ensuring client success at scale.
              </p>
              <span className="inline-block px-6 py-2 bg-blue-50 text-blue-700 font-bold rounded-full text-sm border border-blue-100">
                Position Available
              </span>
            </div>

            {/* Leadership Card 2: Technical Lead */}
            <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 mb-6 group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors">
                <Cpu size={48}/>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Technical Lead</h3>
              <p className="text-purple-600 font-bold uppercase tracking-widest text-xs mb-4">AI Engineering</p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We are looking for a technical architect to lead our R&D initiatives. This partner will define our AI infrastructure and drive the development of next-gen automation tools.
              </p>
              <span className="inline-block px-6 py-2 bg-purple-50 text-purple-700 font-bold rounded-full text-sm border border-purple-100">
                Position Available
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t border-gray-100 py-10 text-center text-gray-500 text-sm">
        © 2026 Vidi Agency. Building the Future.
      </footer>

    </main>
  );
}