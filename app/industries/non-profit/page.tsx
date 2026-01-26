"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Heart, Users, Calendar, Shield, MessageSquare, 
  Check, ArrowRight, FileText, Smartphone, Globe,
  Video, Music, BookOpen, Target, Gift, TrendingUp,
  Home, Bell, CreditCard, Zap, Sparkles, Star
} from 'lucide-react';

export default function ChurchNonprofitPage() {
  const [activeTab, setActiveTab] = useState('churches');

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* ============================================================================
          WARM HERO SECTION
          ============================================================================ */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200 mb-8">
              <Heart size={16} className="text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Made for Purpose-Driven Organizations</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technology That Helps You
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Connect, Grow, and Serve Better
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We build custom software for churches and nonprofits—helping you engage your community, 
              manage donations, and streamline operations so you can focus on what matters most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/consultation" 
                className="px-8 py-3 rounded-lg text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg transition-all shadow-lg shadow-blue-200/50"
              >
                Start a Conversation
              </Link>
              <Link 
                href="/solutions" 
                className="px-8 py-3 rounded-lg text-lg font-medium text-blue-600 bg-white border-2 border-blue-200 hover:bg-blue-50 transition-all"
              >
                See What We Can Build
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield size={20} className="text-green-500" />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} className="text-blue-500" />
                <span>Community-First Design</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp size={20} className="text-purple-500" />
                <span>Built for Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          WE UNDERSTAND YOUR WORLD
          ============================================================================ */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We Understand Your Unique Needs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your organization isn't like any other. That's why we build custom solutions that fit your specific community, culture, and mission.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row border border-gray-200 rounded-2xl overflow-hidden mb-12">
            <button
              onClick={() => setActiveTab('churches')}
              className={`flex-1 px-8 py-6 text-center transition-all ${activeTab === 'churches' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-blue-50'}`}
            >
              <div className="flex flex-col items-center gap-3">
                <Home size={24} />
                <span className="font-bold text-lg">Churches</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('nonprofits')}
              className={`flex-1 px-8 py-6 text-center transition-all ${activeTab === 'nonprofits' ? 'bg-purple-600 text-white' : 'bg-white text-gray-700 hover:bg-purple-50'}`}
            >
              <div className="flex flex-col items-center gap-3">
                <Heart size={24} />
                <span className="font-bold text-lg">Nonprofits</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('ministries')}
              className={`flex-1 px-8 py-6 text-center transition-all ${activeTab === 'ministries' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-green-50'}`}
            >
              <div className="flex flex-col items-center gap-3">
                <BookOpen size={24} />
                <span className="font-bold text-lg">Ministries</span>
              </div>
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            {activeTab === 'churches' && (
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">For Church Communities</h3>
                  <p className="text-gray-600 mb-6">
                    We help you create digital spaces that feel as welcoming as your physical ones—connecting members, 
                    sharing resources, and supporting spiritual growth.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Custom church apps that feel like home",
                      "Secure giving platforms your members trust",
                      "Member connection tools that build community",
                      "Service planning and volunteer coordination",
                      "Children's ministry check-in systems",
                      "Small group and event management"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <div className="text-blue-600 mb-4">
                    <MessageSquare size={32} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Real Story</h4>
                  <p className="text-gray-600 italic">
                    "Our new member portal helped us stay connected during a building project. People who couldn't attend in person 
                    still felt part of our community."
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'nonprofits' && (
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">For Nonprofit Organizations</h3>
                  <p className="text-gray-600 mb-6">
                    We build tools that help you focus on your mission, not your software—streamlining operations, 
                    engaging donors, and measuring impact.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Donor management systems that build relationships",
                      "Volunteer coordination platforms",
                      "Impact tracking and reporting tools",
                      "Event registration and fundraising",
                      "Grant application and management systems",
                      "Community outreach and engagement tools"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                  <div className="text-purple-600 mb-4">
                    <Target size={32} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Real Story</h4>
                  <p className="text-gray-600 italic">
                    "Our custom donor portal made it easy for people to see their impact in real-time. Giving increased 
                    because people felt more connected to our work."
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'ministries' && (
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">For Ministries & Outreach</h3>
                  <p className="text-gray-600 mb-6">
                    We create digital tools that extend your reach and deepen your impact—connecting people with 
                    resources, support, and community wherever they are.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Resource libraries and content management",
                      "Prayer request and support systems",
                      "Online community platforms",
                      "Event and program registration",
                      "Mentorship and small group tools",
                      "Mobile apps for on-the-go ministry"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <div className="text-green-600 mb-4">
                    <Users size={32} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Real Story</h4>
                  <p className="text-gray-600 italic">
                    "Our custom app helped us connect isolated seniors with volunteers. It wasn't just efficient—it was 
                    transformative for our community."
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ============================================================================
          WHAT WE CAN BUILD - CLEAR FEATURES
          ============================================================================ */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solutions That Make a Difference
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We build custom features that address the real challenges you face every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: "Community Connection",
                description: "Custom apps and portals where your community can connect, share, and support each other.",
                examples: ["Member directories", "Discussion forums", "Prayer walls", "Small group hubs"]
              },
              {
                icon: CreditCard,
                title: "Secure Giving",
                description: "Donation systems that are easy for donors and trustworthy for your organization.",
                examples: ["Recurring donations", "Text-to-give", "Fund designation", "Tax receipts"]
              },
              {
                icon: Calendar,
                title: "Event & Volunteer Management",
                description: "Tools to organize gatherings, coordinate volunteers, and track participation.",
                examples: ["Event registration", "Volunteer scheduling", "Check-in systems", "Reminders"]
              },
              {
                icon: Smartphone,
                title: "Mobile Engagement",
                description: "Custom iOS and Android apps that keep your community connected on the go.",
                examples: ["Push notifications", "Mobile giving", "Event calendars", "Resource access"]
              },
              {
                icon: Users,
                title: "Member & Donor Care",
                description: "Systems to track relationships, follow up, and nurture your community.",
                examples: ["Member profiles", "Donor journeys", "Follow-up workflows", "Birthday tracking"]
              },
              {
                icon: Globe,
                title: "Online Presence",
                description: "Beautiful websites and portals that represent your mission and values.",
                examples: ["Custom websites", "Sermon/media libraries", "Online bulletins", "Live streaming"]
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                  <div className="space-y-2">
                    {item.examples.map((example, eIdx) => (
                      <div key={eIdx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        <span className="text-sm text-gray-700">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================================
          HOW WE WORK TOGETHER
          ============================================================================ */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                We Partner with Your Vision
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Building technology for your organization isn't a transaction—it's a partnership. 
                We take time to understand your mission, your community, and your unique needs.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    step: "Listen First",
                    description: "We start by listening to your story, your challenges, and your dreams. Your mission becomes our mission."
                  },
                  {
                    step: "Design Together",
                    description: "We create solutions that feel like they were made just for you—because they were."
                  },
                  {
                    step: "Build with Care",
                    description: "We develop with attention to detail, security, and the user experience of your community."
                  },
                  {
                    step: "Support Always",
                    description: "We're here to help you succeed, with training for your team and ongoing support."
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">{item.step}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 mb-4">
                  <Sparkles size={32} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Your Technology, Your Way
                </h3>
              </div>
              
              <div className="space-y-4">
                {[
                  "You own everything we build—no monthly fees or subscriptions",
                  "We work within your budget and timeline",
                  "Everything is tailored to your specific needs",
                  "We prioritize security and privacy for your community",
                  "You get direct access to our team throughout the process",
                  "We build for today but plan for tomorrow's growth"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Star size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-500">
                  We believe in technology that serves people, not the other way around.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          LET'S TALK - WARM INVITATION
          ============================================================================ */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 text-center border border-blue-200">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-6">
                <Heart size={32} className="text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Let's Talk About Your Mission
              </h3>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Whether you're ready to start a project or just want to explore possibilities, 
                we'd love to hear about the work you're doing and how we might help.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/consultation"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-xl transition-all shadow-lg shadow-blue-200/50"
                >
                  Schedule a Chat
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/examples"
                  className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold border-2 border-blue-200 hover:bg-blue-50 transition-all"
                >
                  See Examples
                </Link>
              </div>
              
              <div className="mt-8 pt-6 border-t border-blue-200">
                <p className="text-blue-700 font-medium">
                  No pressure, no sales pitch—just a conversation about how technology might support your important work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          SIMPLE NEXT STEPS
          ============================================================================ */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Getting Started Is Simple
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make it easy to begin exploring how technology can help your organization
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: "Share Your Story",
                description: "Tell us about your organization, your community, and what you hope to accomplish."
              },
              {
                icon: FileText,
                title: "Explore Ideas",
                description: "We'll share examples and ideas tailored to your specific needs and goals."
              },
              {
                icon: Calendar,
                title: "Plan Together",
                description: "We create a clear plan that works with your budget, timeline, and priorities."
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-200 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 mb-6">
                  <step.icon size={24} className="text-white" />
                </div>
                <div className="mb-2 text-sm font-bold text-blue-600">Step {idx + 1}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              Begin the Conversation
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}