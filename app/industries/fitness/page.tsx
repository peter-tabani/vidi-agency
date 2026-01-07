"use client";

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import {
  Heart, Activity, Users, Award, Brain, Clock,
  Smartphone, Zap, Shield, TrendingUp, Target,
  CheckCircle, Star, Globe, BarChart, Cpu,
  MessageCircle, ArrowRight, Sparkles, Dumbbell,
  Apple, Pill, Moon, Sun, Coffee, Leaf,
  Calendar, Video, Music, Thermometer
} from 'lucide-react';

type StepColor = 'rose' | 'orange' | 'amber';

export default function FitnessPage() {
  const [activeTab, setActiveTab] = useState('studios');
  const [secretCount, setSecretCount] = useState(0);

  const handleSecretKnock = () => {
    const newCount = secretCount + 1;
    setSecretCount(newCount);
    setTimeout(() => setSecretCount(0), 1000);
  };

  const wellnessTechnologies = [
    { name: "Biofeedback Sensors", icon: Heart },
    { name: "AI Workout Coaches", icon: Brain },
    { name: "Nutrition Tracking", icon: Apple },
    { name: "Sleep Analytics", icon: Moon },
    { name: "Mindfulness Apps", icon: Leaf },
    { name: "Recovery Monitoring", icon: Thermometer },
  ];

  const stepColors: Record<StepColor, string> = {
    rose: 'from-rose-500 to-pink-500',
    orange: 'from-orange-500 to-amber-500',
    amber: 'from-amber-500 to-yellow-500'
  };

  const processSteps: Array<{
    number: string;
    title: string;
    description: string;
    icon: React.ComponentType<any>;
    color: StepColor;
  }> = [
    {
      number: "01",
      title: "Vision Discovery",
      description: "We immerse ourselves in your wellness philosophy to understand your unique approach to health and fitness.",
      icon: Brain,
      color: "rose"
    },
    {
      number: "02",
      title: "Experience Design",
      description: "Crafting intuitive user journeys that make wellness accessible, engaging, and effective for your audience.",
      icon: Heart,
      color: "orange"
    },
    {
      number: "03",
      title: "Development Sprint",
      description: "Agile development of your digital platform with regular check-ins and progress demonstrations.",
      icon: Zap,
      color: "amber"
    },
    {
      number: "04",
      title: "Wellness Launch",
      description: "Strategic rollout with staff training, member onboarding, and ongoing optimization support.",
      icon: Award,
      color: "rose"
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-amber-50 font-sans">
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <section className="pt-28 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-orange-100 to-amber-100 opacity-70"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-300 to-orange-300 rounded-full opacity-20 blur-3xl -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-300 to-yellow-300 rounded-full opacity-20 blur-3xl translate-y-48 -translate-x-48"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-orange-100 text-rose-700 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-pink-200 shadow-sm">
              <Heart className="w-4 h-4" />
              <span>Wellness Technology Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6 leading-none tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-600">
                Transform
              </span>
              <span className="block text-gray-800">Fitness Experiences</span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed mb-12 font-medium">
              We build digital ecosystems that elevate personal training, studio management, 
              and wellness journeys through intelligent technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="px-10 py-4 bg-gradient-to-r from-rose-600 to-orange-600 text-white font-bold rounded-xl hover:from-rose-700 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg">
                <span>Start Wellness Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-10 py-4 bg-white text-gray-800 font-bold rounded-xl hover:bg-gray-50 transition-all border-2 border-orange-200 shadow-md flex items-center justify-center gap-3 text-lg">
                <Video className="w-5 h-5 text-rose-600" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
          
          {/* Interactive Tabs */}
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-1 shadow-xl border border-orange-100">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {[
                { id: 'studios', label: 'Fitness Studios', icon: Users },
                { id: 'trainers', label: 'Personal Trainers', icon: Award },
                { id: 'apps', label: 'Wellness Apps', icon: Smartphone },
                { id: 'brands', label: 'Wellness Brands', icon: Heart },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-rose-600 to-orange-600 text-white shadow-md'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
            
            {/* Tab Content */}
            <div className="text-center p-8">
              {activeTab === 'studios' && (
                <p className="text-gray-700 text-lg">
                  Complete studio management systems with automated scheduling, member tracking, 
                  and class booking that reduce admin work by 70%.
                </p>
              )}
              {activeTab === 'trainers' && (
                <p className="text-gray-700 text-lg">
                  Personal training platforms with client progress tracking, workout programming, 
                  and nutrition planning in one unified dashboard.
                </p>
              )}
              {activeTab === 'apps' && (
                <p className="text-gray-700 text-lg">
                  Custom wellness apps featuring AI coaching, habit tracking, and community 
                  features that keep users engaged long-term.
                </p>
              )}
              {activeTab === 'brands' && (
                <p className="text-gray-700 text-lg">
                  Digital ecosystems for wellness brands including e-commerce, content delivery, 
                  and customer engagement platforms.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-600 mb-2">89%</div>
              <div className="text-sm text-gray-600 font-medium">Member Retention Increase</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-600 mb-2">65%</div>
              <div className="text-sm text-gray-600 font-medium">Admin Time Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-600 mb-2">3.2x</div>
              <div className="text-sm text-gray-600 font-medium">Revenue Growth</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600 font-medium">Digital Coaching</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WELLNESS ECOSYSTEM --- */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white rounded-3xl mx-6 md:mx-12 lg:mx-24 shadow-xl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-rose-600 font-bold mb-4">
              <Zap className="w-5 h-5" />
              <span>THE WELLNESS ECOSYSTEM</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Complete Digital Transformation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We build interconnected systems that work together to create seamless 
              wellness experiences across every touchpoint.
            </p>
          </div>

          {/* Circular Feature Diagram */}
          <div className="relative max-w-2xl mx-auto mb-20">
            {/* Outer circle */}
            <div className="w-96 h-96 rounded-full border-4 border-rose-100 mx-auto relative">
              {/* Inner circles */}
              <div className="absolute inset-16 rounded-full border-4 border-orange-100"></div>
              <div className="absolute inset-32 rounded-full border-4 border-amber-100"></div>
              
              {/* Center */}
              <div className="absolute inset-44 rounded-full bg-gradient-to-r from-rose-600 to-orange-600 flex items-center justify-center">
                <Heart className="w-12 h-12 text-white" />
              </div>
              
              {/* Feature points */}
              {[
                { angle: 0, icon: Users, label: "Community", color: "text-rose-600" },
                { angle: 72, icon: Calendar, label: "Scheduling", color: "text-orange-600" },
                { angle: 144, icon: Brain, label: "AI Coaching", color: "text-amber-600" },
                { angle: 216, icon: Apple, label: "Nutrition", color: "text-rose-500" },
                { angle: 288, icon: BarChart, label: "Analytics", color: "text-orange-500" },
              ].map((point, idx) => (
                <div
                  key={idx}
                  className="absolute w-20 h-20"
                  style={{
                    top: `${50 - 35 * Math.cos((point.angle * Math.PI) / 180)}%`,
                    left: `${50 + 35 * Math.sin((point.angle * Math.PI) / 180)}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="w-16 h-16 bg-white rounded-full border-4 border-rose-100 flex items-center justify-center shadow-lg">
                    <point.icon className={`w-8 h-8 ${point.color}`} />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm font-semibold text-gray-700">
                    {point.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-rose-50 to-white rounded-2xl p-8 border border-rose-100 hover:border-rose-300 transition-all hover:shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center mb-6">
                <Smartphone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Member Experience Apps</h3>
              <p className="text-gray-600 mb-6">
                Custom mobile apps that provide workout tracking, class booking, 
                progress monitoring, and community engagement.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Personalized workout plans</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Video exercise libraries</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Progress photo journals</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-b from-orange-50 to-white rounded-2xl p-8 border border-orange-100 hover:border-orange-300 transition-all hover:shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center mb-6">
                <Cpu className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Wellness Coaches</h3>
              <p className="text-gray-600 mb-6">
                Intelligent systems that provide personalized recommendations, 
                form correction, and adaptive workout programming.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Real-time form analysis</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Adaptive workout difficulty</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Nutrition planning AI</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-b from-amber-50 to-white rounded-2xl p-8 border border-amber-100 hover:border-amber-300 transition-all hover:shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center mb-6">
                <BarChart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Studio Management Suite</h3>
              <p className="text-gray-600 mb-6">
                Complete business management platform for fitness studios with 
                automated billing, staff scheduling, and performance analytics.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Automated membership billing</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Staff commission tracking</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Real-time revenue dashboards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECHNOLOGY SHOWCASE --- */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Wellness Technology Stack
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We leverage cutting-edge technologies specifically tailored for 
              health and fitness applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
            {wellnessTechnologies.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div key={idx} className="text-center group">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-rose-50 to-orange-50 flex items-center justify-center mx-auto mb-4 border border-rose-100 group-hover:border-rose-300 transition-all group-hover:shadow-lg">
                    <Icon className="w-12 h-12 text-rose-600" />
                  </div>
                  <div className="font-bold text-gray-900">{tech.name}</div>
                </div>
              );
            })}
          </div>

          {/* Special Features */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">HIPAA Compliant</h3>
              </div>
              <p className="text-gray-700">
                All health data is encrypted and stored with enterprise-grade security 
                following healthcare privacy regulations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Wearable Integration</h3>
              </div>
              <p className="text-gray-700">
                Connect with Apple Health, Fitbit, Garmin, and other wearables 
                for comprehensive health data synchronization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SUCCESS STORIES --- */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-rose-600 font-bold mb-4">
              <Star className="w-5 h-5" />
              <span>TRANSFORMATION STORIES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              From Studios to Ecosystems
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-rose-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-rose-600 to-orange-600 flex items-center justify-center text-white text-2xl font-bold">
                  YF
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">YogaFlow Studios</h4>
                  <p className="text-rose-600 font-semibold">12 Locations Nationwide</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Our digital platform increased member retention by 156% and 
                reduced administrative workload by 40 hours per week."
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-rose-100">
                <div className="text-sm text-gray-500">After Implementation</div>
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-600">
                  +245% Revenue
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 flex items-center justify-center text-white text-2xl font-bold">
                  PT
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">PersonalTrain Pro</h4>
                  <p className="text-orange-600 font-semibold">500+ Trainers Network</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The AI coaching system allows each trainer to manage 3x more clients 
                while providing more personalized attention."
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-orange-100">
                <div className="text-sm text-gray-500">Client Capacity</div>
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                  +300% Increase
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROCESS TIMELINE --- */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Your Wellness Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A collaborative process designed to bring your wellness vision to life.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-rose-400 via-orange-400 to-amber-400"></div>
            
            {/* Steps */}
            <div className="space-y-20">
              {processSteps.map((step, idx) => {
                const Icon = step.icon;
                
                return (
                  <div key={idx} className={`flex flex-col md:flex-row items-center ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'} gap-8`}>
                    {/* Content */}
                    <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                      <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${stepColors[step.color]} flex items-center justify-center`}>
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-gray-500">{step.number}</div>
                            <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                          </div>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Center dot */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${stepColors[step.color]} border-4 border-white shadow-lg`}></div>
                    </div>
                    
                    <div className="md:w-1/2"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-rose-600 via-orange-600 to-amber-600 text-white rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            {/* Floating elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-16 translate-y-16"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Ready to Transform
                <span className="block text-rose-100">Wellness Experiences?</span>
              </h2>
              
              <p className="text-rose-100 max-w-2xl mx-auto mb-10 text-lg font-medium">
                Let's build the digital platform that elevates your fitness business 
                and creates lasting impact for your community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <button className="px-10 py-4 bg-white text-rose-700 font-bold rounded-xl hover:bg-rose-50 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 text-lg">
                  <span>Start Free Consultation</span>
                  <MessageCircle className="w-5 h-5" />
                </button>
                
                <button className="px-10 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3 text-lg">
                  <Video className="w-5 h-5" />
                  <span>View Platform Demo</span>
                </button>
              </div>
              
              <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Available for immediate consultation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 border-t border-rose-100">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-rose-600 to-orange-600 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-black text-gray-900">Vidi Agency</span>
                  <div className="text-xs text-gray-500">Wellness Technology Division</div>
                </div>
              </div>
              
              <button 
                onClick={handleSecretKnock}
                className="text-gray-500 text-sm mt-1 hover:text-gray-900 transition-colors text-left"
              >
                Building transformative wellness experiences
              </button>
            </div>
            
            <div className="flex items-center gap-8">
              <a href="#" className="text-gray-600 hover:text-rose-600 text-sm font-bold transition-colors">
                Wellness
              </a>
              <a href="#" className="text-gray-600 hover:text-rose-600 text-sm font-bold transition-colors">
                Fitness
              </a>
              <a href="#" className="text-gray-600 hover:text-rose-600 text-sm font-bold transition-colors">
                Contact
              </a>
            </div>
            
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a href="/fitness" className="text-rose-600 hover:text-rose-800 text-sm font-bold border-b-2 border-rose-600 transition-all">
                Fitness & Wellness
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}