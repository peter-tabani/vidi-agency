"use client";

import React, { useState } from 'react';
import { 
  Check, ArrowRight, Shield, Zap, TrendingUp, Clock, 
  Building, Rocket, Users, Target, DollarSign, 
  PieChart, Star 
} from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  const [projectValue, setProjectValue] = useState(5000);
  const [selectedPlan, setSelectedPlan] = useState('founder');

  // Plan logic for the calculator
  const plans = {
    founder: { 
      key: 'founder',
      name: "Founder's Path", 
      upfrontPercent: 0.25, 
      months: 6, 
      upfrontLabel: "25% Upfront" 
    },
    growth: { 
      key: 'growth',
      name: "Growth Partner", 
      upfrontPercent: 0.15, 
      months: 12, 
      upfrontLabel: "15% Upfront" 
    },
    accelerated: { 
      key: 'accelerated',
      name: "Accelerated", 
      upfrontPercent: 0.40, 
      months: 3, 
      upfrontLabel: "40% Upfront" 
    },
  };

  // Calculate numbers based on current state
  const currentPlan = plans[selectedPlan as keyof typeof plans];
  const upfrontCost = Math.round(projectValue * currentPlan.upfrontPercent);
  const remainingCost = projectValue - upfrontCost;
  const monthlyCost = Math.round(remainingCost / currentPlan.months);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-6 shadow-sm">
            <PieChart size={16} className="text-blue-600" />
            <span className="text-sm font-semibold text-slate-700">Flexible Investment Options</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-slate-900">
            Choose Your <span className="text-blue-600">Payment Path</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
            We believe great software shouldn't be limited by upfront costs. Select the structure that matches your cash flow.
          </p>
        </div>
      </section>

      {/* --- MAIN PRICING GRID --- */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. FOUNDER'S PATH */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all group relative">
              <div className="absolute top-4 right-4 bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">POPULAR</div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Star size={24} className="text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Founder's Path</h3>
              <p className="text-slate-500 text-sm mb-6">Startups & Small Businesses</p>
              
              <div className="mb-6 pb-6 border-b border-slate-100">
                <div className="text-3xl font-bold text-slate-900 mb-1">25% <span className="text-lg font-normal text-slate-500">Upfront</span></div>
                <div className="text-sm text-slate-600">Then 6 monthly payments</div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <Check size={18} className="text-green-500 mt-0.5" /> Lowest upfront cost
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <Check size={18} className="text-green-500 mt-0.5" /> 0% interest financing
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <Zap size={18} className="text-amber-500 mt-0.5" /> 2% discount for early pay
                </li>
              </ul>
              <Link href="/apply/founder" className="block w-full py-3 text-center border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-colors">Apply Now</Link>
            </div>

            {/* 2. GROWTH PARTNER */}
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700 shadow-xl transform md:-translate-y-2 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500"></div>
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp size={24} className="text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Growth Partner</h3>
              <p className="text-slate-400 text-sm mb-6">Scaling Businesses</p>
              
              <div className="mb-6 pb-6 border-b border-slate-700">
                <div className="text-3xl font-bold text-white mb-1">15% <span className="text-lg font-normal text-slate-400">Upfront</span></div>
                <div className="text-sm text-slate-400">12 monthly payments</div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-slate-300">
                  <Check size={18} className="text-green-400 mt-0.5" /> Tied to business milestones
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-300">
                  <Check size={18} className="text-green-400 mt-0.5" /> Pause payments if needed
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-300">
                  <Check size={18} className="text-green-400 mt-0.5" /> Revenue share option
                </li>
              </ul>
              <Link href="/apply/growth" className="block w-full py-3 text-center bg-green-500 text-slate-900 font-bold rounded-lg hover:bg-green-400 transition-colors">Learn More</Link>
            </div>

            {/* 3. ENTERPRISE */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all group">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Building size={24} className="text-purple-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Enterprise Build</h3>
              <p className="text-slate-500 text-sm mb-6">Large Organizations</p>
              
              <div className="mb-6 pb-6 border-b border-slate-100">
                <div className="text-3xl font-bold text-slate-900 mb-1">Custom <span className="text-lg font-normal text-slate-500">%</span></div>
                <div className="text-sm text-slate-600">Quarterly Payments</div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <Check size={18} className="text-green-500 mt-0.5" /> Dedicated account manager
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <Check size={18} className="text-green-500 mt-0.5" /> Volume discounts
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <Building size={18} className="text-purple-500 mt-0.5" /> Multiple project bundling
                </li>
              </ul>
              <Link href="/contact/enterprise" className="block w-full py-3 text-center border-2 border-slate-200 text-slate-700 font-bold rounded-lg hover:border-purple-600 hover:text-purple-600 transition-colors">Contact Sales</Link>
            </div>

            {/* 4. REVENUE SHARE */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all group">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <DollarSign size={24} className="text-amber-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Revenue Share</h3>
              <p className="text-slate-500 text-sm mb-6">Product Companies</p>
              
              <div className="mb-6 pb-6 border-b border-slate-100">
                <div className="text-3xl font-bold text-slate-900 mb-1">10% <span className="text-lg font-normal text-slate-500">Upfront</span></div>
                <div className="text-sm text-slate-600">+ % of Revenue (24 months)</div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <Check size={18} className="text-green-500 mt-0.5" /> Aligns with your success
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <Target size={18} className="text-amber-500 mt-0.5" /> Performance-based
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <Check size={18} className="text-green-500 mt-0.5" /> Capped total payment
                </li>
              </ul>
              <Link href="/apply/revenue" className="block w-full py-3 text-center border-2 border-slate-200 text-slate-700 font-bold rounded-lg hover:border-amber-500 hover:text-amber-600 transition-colors">Calculate Terms</Link>
            </div>

            {/* 5. ACCELERATED */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-300 transition-all group">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors">
                <Rocket size={24} className="text-red-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Accelerated</h3>
              <p className="text-slate-500 text-sm mb-6">Urgent Projects</p>
              
              <div className="mb-6 pb-6 border-b border-slate-100">
                <div className="text-3xl font-bold text-slate-900 mb-1">40% <span className="text-lg font-normal text-slate-500">Upfront</span></div>
                <div className="text-sm text-slate-600">30% Alpha / 30% Beta</div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <Check size={18} className="text-green-500 mt-0.5" /> Priority development
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <Rocket size={18} className="text-red-500 mt-0.5" /> Guaranteed timeline
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <Check size={18} className="text-green-500 mt-0.5" /> 5% early completion bonus
                </li>
              </ul>
              <Link href="/apply/accelerated" className="block w-full py-3 text-center border-2 border-slate-200 text-slate-700 font-bold rounded-lg hover:border-red-500 hover:text-red-600 transition-colors">Fast-Track Project</Link>
            </div>

            {/* 6. TEAM RETAINER */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan-300 transition-all group">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                <Clock size={24} className="text-cyan-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Team Retainer</h3>
              <p className="text-slate-500 text-sm mb-6">Ongoing Development</p>
              
              <div className="mb-6 pb-6 border-b border-slate-100">
                <div className="text-3xl font-bold text-slate-900 mb-1">Monthly <span className="text-lg font-normal text-slate-500">Rate</span></div>
                <div className="text-sm text-slate-600">Flexible Commitment</div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <Check size={18} className="text-green-500 mt-0.5" /> Unlimited requests
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <Check size={18} className="text-green-500 mt-0.5" /> Dedicated developers
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <Clock size={18} className="text-cyan-500 mt-0.5" /> Predictable monthly cost
                </li>
              </ul>
              <Link href="/apply/retainer" className="block w-full py-3 text-center border-2 border-slate-200 text-slate-700 font-bold rounded-lg hover:border-cyan-600 hover:text-cyan-600 transition-colors">Hire Team</Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- CALCULATOR SECTION (Enhanced) --- */}
      <section className="py-20 px-6 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Calculator Controls */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Estimate Your Payments</h2>
              <p className="text-slate-600 mb-8">
                Enter your estimated project budget to see how the numbers break down for the <span className="font-bold text-blue-600">{currentPlan.name}</span>.
              </p>
              
              {/* Slider Input */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-700 mb-2">Project Estimate</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                  <input 
                    type="number" 
                    value={projectValue}
                    onChange={(e) => setProjectValue(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl text-xl font-bold text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="100000" 
                  step="500"
                  value={projectValue}
                  onChange={(e) => setProjectValue(Number(e.target.value))}
                  className="w-full mt-4 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                  <span>$1,000</span>
                  <span>$100,000+</span>
                </div>
              </div>

              {/* Plan Selectors (RESTORED) */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-700 mb-3">Choose Plan to Calculate</label>
                <div className="flex flex-wrap gap-2">
                  {Object.values(plans).map((plan) => (
                    <button
                      key={plan.key}
                      onClick={() => setSelectedPlan(plan.key)}
                      className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                        selectedPlan === plan.key
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {plan.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Output Boxes */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-slate-500 text-sm mb-1">{currentPlan.upfrontLabel}</div>
                  <div className="text-2xl font-bold text-slate-900">${upfrontCost.toLocaleString()}</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-slate-500 text-sm mb-1">Monthly (x{currentPlan.months})</div>
                  <div className="text-2xl font-bold text-blue-600">${monthlyCost.toLocaleString()}</div>
                </div>
              </div>
            </div>

            {/* Calculator CTA Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Why this works</h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Preserve cash flow for marketing",
                  "No long-term debt or interest",
                  "Align payments with milestones",
                  "Full IP ownership upon completion"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check size={20} className="text-blue-300 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-50">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-white text-blue-700 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg">
                Get a Custom Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- SPRINT 0 SECTION --- */}
      <section className="py-20 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full border border-slate-700 mb-6">
            <Shield size={16} className="text-blue-400" />
            <span className="text-sm font-semibold text-blue-200">Risk-Free Start</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Start with Sprint 0</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            We invest 2 weeks understanding your needs and creating a detailed blueprint before you pay a cent.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
            <div className="bg-white/10 p-6 rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-blue-400 mb-2">01</div>
              <div className="font-bold text-lg mb-1">Discovery</div>
              <div className="text-slate-400 text-sm">We map your requirements</div>
            </div>
            <div className="bg-white/10 p-6 rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-blue-400 mb-2">02</div>
              <div className="font-bold text-lg mb-1">Blueprint</div>
              <div className="text-slate-400 text-sm">We design the architecture</div>
            </div>
            <div className="bg-white/10 p-6 rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-blue-400 mb-2">03</div>
              <div className="font-bold text-lg mb-1">Proposal</div>
              <div className="text-slate-400 text-sm">You decide to proceed</div>
            </div>
          </div>
          
          <Link href="/start-sprint-0" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-500 transition-all">
            Start Your Free Sprint 0 <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* --- ROI / CTA FOOTER --- */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Your Investment Pays for Itself</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <Users size={32} className="text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Client Acquisition</h3>
              <p className="text-slate-600 text-sm">Automated systems convert 40% more leads</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <Clock size={32} className="text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Time Savings</h3>
              <p className="text-slate-600 text-sm">Reduce manual work by 30+ hours weekly</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <TrendingUp size={32} className="text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Revenue Growth</h3>
              <p className="text-slate-600 text-sm">Systems that scale with your business</p>
            </div>
          </div>

          <p className="text-slate-500 text-sm mb-6">Ready to discuss your options?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation" className="px-8 py-3 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-colors">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}