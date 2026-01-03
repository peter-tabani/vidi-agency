"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building, Calendar, Globe, Users, TrendingUp, 
  Shield, Zap, Clock, CheckCircle, ArrowRight, 
  Award, Star, MapPin, Utensils, 
  CreditCard, BarChart, Smartphone,
  RefreshCw, X // Added X for the close button
} from 'lucide-react';

export default function HospitalityWelcomePage() {
  const [selectedBusiness, setSelectedBusiness] = useState('hotel');
  const [demoActive, setDemoActive] = useState(false);

  const businessTypes = [
    { id: 'hotel', label: 'Hotel/Resort', icon: Building, color: 'from-blue-500 to-cyan-500' },
    { id: 'tour', label: 'Tour Operator', icon: Globe, color: 'from-emerald-500 to-green-500' },
    { id: 'restaurant', label: 'Restaurant Group', icon: Utensils, color: 'from-amber-500 to-orange-500' },
    { id: 'vacation', label: 'Vacation Rental', icon: MapPin, color: 'from-purple-500 to-pink-500' },
    { id: 'airline', label: 'Airline/Travel', icon: Users, color: 'from-red-500 to-rose-500' }
  ];

  const bookingFeatures = [
    { icon: Calendar, title: 'Real-time Availability', description: 'Sync across all channels instantly' },
    { icon: CreditCard, title: 'Secure Payments', description: 'PCI-compliant with 40+ payment methods' },
    { icon: Smartphone, title: 'Mobile-First Design', description: 'Optimized for on-the-go bookings' },
    { icon: BarChart, title: 'Dynamic Pricing', description: 'AI-driven rate optimization' },
    { icon: Shield, title: 'Fraud Protection', description: 'Advanced detection algorithms' },
    { icon: Users, title: 'Guest Management', description: 'Complete CRM with guest profiles' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 font-sans">
      
      {/* --- PREMIUM HEADER --- */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <Building size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">LuxTech Hospitality</h1>
                <p className="text-sm text-slate-500">Premium Booking Solutions</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="tel:+1-888-123-4567" className="text-slate-600 hover:text-blue-600 transition-colors">
                📞 1-888-123-4567
              </a>
              {/* FIXED: Changed Link to Button to prevent navigation away from page */}
              <button 
                onClick={() => setDemoActive(true)}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-xl transition-all shadow-lg shadow-blue-200"
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="pt-20 pb-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        {/* Luxury background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23e2e8f0\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-blue-200 mb-8">
                <Star size={16} className="text-amber-500" />
                <span className="text-sm font-semibold text-blue-600">5-Star Hospitality Technology</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Increase Direct Bookings by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">300%</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Custom booking engines that capture more direct revenue, reduce OTA dependency, and elevate the guest experience from discovery to checkout.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/strategy-session" 
                  className="group px-8 py-4 rounded-xl text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-2xl transition-all shadow-xl shadow-blue-300/50 inline-flex items-center justify-center gap-3"
                >
                  <Calendar size={22} />
                  Book Strategy Session
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <button 
                  onClick={() => setDemoActive(true)}
                  className="px-8 py-4 rounded-xl text-lg font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all inline-flex items-center justify-center gap-3"
                >
                  <Smartphone size={22} />
                  Interactive Demo
                </button>
              </div>
              
              {/* Trust badges */}
              <div className="mt-12 flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-2">
                  <Shield size={20} className="text-emerald-500" />
                  <span className="text-sm text-slate-600">PCI-DSS Level 1 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={20} className="text-blue-500" />
                  <span className="text-sm text-slate-600">500+ Hospitality Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp size={20} className="text-amber-500" />
                  <span className="text-sm text-slate-600">$2B+ in Bookings Processed</span>
                </div>
              </div>
            </div>
            
            {/* Interactive Demo Preview */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <div className="text-sm text-slate-400">LIVE DEMO</div>
                </div>
                
                <div className="bg-slate-800 rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm text-slate-400">Booking Engine</div>
                      <div className="text-xl font-bold text-white">Grand Horizon Resort</div>
                    </div>
                    <div className="text-emerald-400 text-2xl font-bold">$499<span className="text-sm">/night</span></div>
                  </div>
                  
                  {/* Date selector */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <div className="text-xs text-slate-400">CHECK-IN</div>
                      <div className="text-white font-semibold">May 15, 2024</div>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <div className="text-xs text-slate-400">CHECK-OUT</div>
                      <div className="text-white font-semibold">May 20, 2024</div>
                    </div>
                  </div>
                  
                  {/* Room selection */}
                  <div className="space-y-3">
                    {['Ocean View Suite', 'Presidential Villa', 'Executive King Room'].map((room, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                            <Building size={16} className="text-blue-300" />
                          </div>
                          <div>
                            <div className="text-white font-medium">{room}</div>
                            <div className="text-xs text-slate-400">5 nights • Free cancellation</div>
                          </div>
                        </div>
                        <div className="text-white font-bold">${[799, 1299, 549][idx]}</div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full mt-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg text-white font-bold hover:shadow-lg transition-all">
                    Book Now — Save 15%
                  </button>
                </div>
                
                <div className="text-center text-slate-400 text-sm">
                  Real-time demo. Try adjusting dates or selecting different room types.
                </div>
              </div>
              
              {/* Floating elements - FIXED: Added animate-float class */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-2xl animate-float">
                <div className="flex items-center gap-2">
                  <TrendingUp size={20} className="text-emerald-500" />
                  <div>
                    <div className="text-xs text-slate-500">Conversion Rate</div>
                    <div className="text-xl font-bold text-slate-900">8.7%</div>
                  </div>
                </div>
              </div>
              
              {/* FIXED: Added animate-float with delay */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2">
                  <CreditCard size={20} className="text-blue-500" />
                  <div>
                    <div className="text-xs text-slate-500">Avg. Booking Value</div>
                    <div className="text-xl font-bold text-slate-900">$2,450</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BUSINESS TYPE SELECTOR --- */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Custom Solutions For Your Business Type
            </h3>
            <p className="text-slate-600">
              Select your business to see tailored features
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {businessTypes.map((business) => {
              const Icon = business.icon;
              const isSelected = selectedBusiness === business.id;
              return (
                <button
                  key={business.id}
                  onClick={() => setSelectedBusiness(business.id)}
                  className={`flex flex-col items-center gap-3 px-6 py-5 rounded-2xl border-2 transition-all ${isSelected 
                    ? `border-blue-500 bg-gradient-to-br ${business.color} bg-opacity-10` 
                    : 'border-slate-200 bg-white hover:border-slate-300'}`}
                >
                  <div className={`w-14 h-14 rounded-xl ${isSelected ? `bg-gradient-to-br ${business.color}` : 'bg-slate-100'} flex items-center justify-center`}>
                    <Icon size={28} className={isSelected ? 'text-white' : 'text-slate-600'} />
                  </div>
                  <span className={`font-semibold ${isSelected ? 'text-slate-900' : 'text-slate-700'}`}>
                    {business.label}
                  </span>
                </button>
              );
            })}
          </div>
          
          {/* Dynamic Content Based on Selection */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-10 border border-slate-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold text-slate-900 mb-6">
                  {businessTypes.find(b => b.id === selectedBusiness)?.label} Features
                </h4>
                
                {selectedBusiness === 'hotel' && (
                  <ul className="space-y-4">
                    {[
                      "Real-time room availability across all OTAs",
                      "Dynamic pricing with competitor rate intelligence",
                      "Upsell engine for room upgrades & packages",
                      "Mobile check-in/out with digital keys",
                      "Integration with property management systems",
                      "Guest messaging & request management"
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-emerald-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {selectedBusiness === 'tour' && (
                  <ul className="space-y-4">
                    {[
                      "Multi-day tour booking with date flexibility",
                      "Inventory management for guides & equipment",
                      "Weather-based availability and rescheduling",
                      "Digital waivers & document signing",
                      "Group booking with tiered pricing",
                      "Integration with transportation providers"
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-emerald-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {selectedBusiness === 'restaurant' && (
                  <ul className="space-y-4">
                    {[
                      "Table management with floor plan visualization",
                      "Waitlist management with SMS notifications",
                      "Pre-order & prepayment for busy periods",
                      "Integration with POS and kitchen systems",
                      "Loyalty program & gift card management",
                      "Private dining & event booking"
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-emerald-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Added Fallback for others to prevent empty space */}
                {['vacation', 'airline'].includes(selectedBusiness) && (
                   <ul className="space-y-4">
                   {[
                     "Global inventory distribution system",
                     "Automated booking confirmations & itineraries",
                     "Secure payment gateway integration",
                     "Customer loyalty & rewards dashboard",
                     "Multi-currency & multi-language support",
                     "Advanced reporting & analytics"
                   ].map((feature, idx) => (
                     <li key={idx} className="flex items-start gap-3">
                       <CheckCircle size={20} className="text-emerald-500 mt-1 flex-shrink-0" />
                       <span className="text-slate-700">{feature}</span>
                     </li>
                   ))}
                 </ul>
                )}
              </div>
              
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Zap size={24} className="text-amber-500" />
                  <h5 className="text-xl font-bold text-slate-900">Expected Results</h5>
                </div>
                
                <div className="space-y-6">
                  {[
                    { metric: "Direct Booking Increase", value: "300%", change: "+" },
                    { metric: "OTA Commission Saved", value: "25%", change: "-" },
                    { metric: "Conversion Rate", value: "8.7%", change: "+" },
                    { metric: "Average Booking Value", value: "42%", change: "+" }
                  ].map((result, idx) => (
                    <div key={idx} className="flex items-center justify-between pb-4 border-b border-slate-100">
                      <span className="text-slate-700">{result.metric}</span>
                      <div className="flex items-center gap-2">
                        <span className={`text-2xl font-bold ${result.change === '+' ? 'text-emerald-600' : 'text-blue-600'}`}>
                          {result.value}
                        </span>
                        <div className={`px-2 py-1 rounded text-xs font-bold ${result.change === '+' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
                          {result.change}{result.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                  <p className="text-sm text-blue-700">
                    💡 <strong>Typical ROI:</strong> 3-6 months. Most clients recover development costs through increased direct bookings within the first quarter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BOOKING ENGINE FEATURES --- */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Enterprise-Grade Booking Platform
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to capture more direct revenue
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {bookingFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Integration Partners */}
          <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Seamless Ecosystem Integration
              </h3>
              <p className="text-slate-600">
                Connect with 300+ hospitality tools and platforms
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {[
                { name: 'Opera PMS', category: 'Property Management' },
                { name: 'Stripe', category: 'Payments' },
                { name: 'Mailchimp', category: 'Marketing' },
                { name: 'Google Analytics', category: 'Analytics' },
                { name: 'Salesforce', category: 'CRM' },
                { name: 'QuickBooks', category: 'Accounting' },
                { name: 'Slack', category: 'Communication' },
                { name: 'Zendesk', category: 'Support' },
                { name: 'HubSpot', category: 'Marketing' },
                { name: 'Expedia', category: 'OTA' }
              ].map((partner, idx) => (
                <div key={idx} className="flex flex-col items-center p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center mb-3">
                    <div className="font-bold text-slate-700">{partner.name.charAt(0)}</div>
                  </div>
                  <div className="font-semibold text-slate-900 text-center">{partner.name}</div>
                  <div className="text-xs text-slate-500 mt-1">{partner.category}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CASE STUDY: LUXURY RESORT --- */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
                <Award size={16} className="text-amber-300" />
                <span className="text-sm font-semibold">Case Study: Luxury Resort</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-6">
                The Santorini Blue Experience
              </h2>
              
              <div className="space-y-6 mb-10">
                <div>
                  <h4 className="text-lg font-bold mb-2">Before Our Platform:</h4>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-500/30 flex items-center justify-center mt-1">
                        <span className="text-xs">✕</span>
                      </div>
                      <span>72% of bookings through OTAs (25% commission)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-500/30 flex items-center justify-center mt-1">
                        <span className="text-xs">✕</span>
                      </div>
                      <span>5.2% direct booking conversion rate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-500/30 flex items-center justify-center mt-1">
                        <span className="text-xs">✕</span>
                      </div>
                      <span>Manual room allocation causing overbookings</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-2">After Implementation:</h4>
                  <ul className="space-y-2 text-emerald-100">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/30 flex items-center justify-center mt-1">
                        <CheckCircle size={12} />
                      </div>
                      <span>Direct bookings increased to 68% of total revenue</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/30 flex items-center justify-center mt-1">
                        <CheckCircle size={12} />
                      </div>
                      <span>11.4% conversion rate on direct channels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/30 flex items-center justify-center mt-1">
                        <CheckCircle size={12} />
                      </div>
                      <span>$2.1M saved in OTA commissions annually</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Link 
                href="/case-studies/santorini" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-all"
              >
                Read Full Case Study
                <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="text-center mb-8">
                <div className="text-5xl font-bold mb-2">$2.1M</div>
                <div className="text-blue-200">Annual OTA Commission Savings</div>
              </div>
              
              <div className="space-y-6">
                {[
                  { label: 'Direct Booking Revenue', value: '68%', change: '+41%' },
                  { label: 'Average Daily Rate', value: '$899', change: '+22%' },
                  { label: 'Booking Conversion', value: '11.4%', change: '+119%' },
                  { label: 'Guest Satisfaction', value: '4.9/5', change: '+0.7' }
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <span className="text-blue-100">{stat.label}</span>
                    <div className="text-right">
                      <div className="text-xl font-bold">{stat.value}</div>
                      <div className="text-sm text-emerald-300">{stat.change}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20 text-center text-sm text-blue-200">
                Results measured over 12 months post-launch
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING & ROI --- */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Investment & Return
            </h2>
            <p className="text-xl text-slate-600">
              Transparent pricing with guaranteed ROI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                plan: 'Starter',
                price: '$25,000',
                description: 'For boutique properties up to 50 rooms',
                features: [
                  'Custom booking engine',
                  'Basic PMS integration',
                  'Mobile-responsive design',
                  'Payment processing',
                  '6 months support',
                  'Up to 5,000 bookings/month'
                ],
                cta: 'Get Quote',
                popular: false
              },
              {
                plan: 'Professional',
                price: '$65,000',
                description: 'For hotels & resorts up to 200 rooms',
                features: [
                  'Everything in Starter +',
                  'Advanced revenue management',
                  'Multi-language support',
                  'API integrations',
                  '12 months support',
                  'Dynamic pricing engine',
                  'Unlimited bookings',
                  'Dedicated account manager'
                ],
                cta: 'Most Popular',
                popular: true
              },
              {
                plan: 'Enterprise',
                price: 'Custom',
                description: 'For chains, groups & high-volume',
                features: [
                  'Everything in Professional +',
                  'White-label solution',
                  'Custom development',
                  '24/7 premium support',
                  'Advanced analytics suite',
                  'Multi-property management',
                  'SLA guarantees',
                  'Custom API development'
                ],
                cta: 'Contact Sales',
                popular: false
              }
            ].map((pricing, idx) => (
              <div key={idx} className={`rounded-3xl p-8 border-2 ${pricing.popular ? 'border-blue-500 shadow-2xl' : 'border-slate-200'} relative`}>
                {pricing.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full text-sm font-bold">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{pricing.plan}</h3>
                <p className="text-slate-600 mb-6">{pricing.description}</p>
                
                <div className="mb-8">
                  <div className="text-4xl font-bold text-slate-900 mb-1">{pricing.price}</div>
                  <div className="text-slate-500 text-sm">One-time development fee</div>
                </div>
                
                <ul className="space-y-3 mb-10">
                  {pricing.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={pricing.plan === 'Enterprise' ? '/contact' : '/quote'}
                  className={`block w-full py-4 text-center rounded-xl font-bold ${pricing.popular 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-xl' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'} transition-all`}
                >
                  {pricing.cta}
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                <TrendingUp size={24} className="text-emerald-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">ROI Guarantee</h4>
                <p className="text-slate-600">We're so confident in our platform that we offer a unique guarantee</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Performance Metrics',
                  items: ['Minimum 6% conversion rate', 'Mobile booking increase by 40%', 'Direct revenue boost by 25%']
                },
                {
                  title: 'Support Commitment',
                  items: ['90-day optimization period', 'Monthly performance reviews', '24/7 technical support']
                },
                {
                  title: 'Success Partnership',
                  items: ['Quarterly strategy sessions', 'Market trend analysis', 'Competitor benchmarking']
                }
              ].map((guarantee, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-slate-200">
                  <h5 className="font-bold text-slate-900 mb-4">{guarantee.title}</h5>
                  <ul className="space-y-2">
                    {guarantee.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                          <CheckCircle size={12} className="text-emerald-600" />
                        </div>
                        <span className="text-sm text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
            <Calendar size={18} className="text-amber-300" />
            <span className="text-sm font-semibold">Limited Availability</span>
          </div>
          
          <h2 className="text-4xl font-bold mb-6">
            Ready to Take Control of Your Bookings?
          </h2>
          
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join 500+ hospitality businesses that have increased direct revenue and reduced OTA dependency with our custom booking solutions.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
            {[
              {
                title: 'Free Revenue Analysis',
                description: 'We analyze your current booking performance and identify opportunities'
              },
              {
                title: 'Custom Roadmap',
                description: 'Get a step-by-step plan tailored to your specific business needs'
              },
              {
                title: 'No-Obligation Quote',
                description: 'Transparent pricing with detailed breakdown of costs and ROI'
              },
              {
                title: 'Implementation Timeline',
                description: 'Clear project plan with milestones and delivery dates'
              }
            ].map((offer, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="font-bold text-lg mb-2">{offer.title}</h4>
                <p className="text-blue-100 text-sm">{offer.description}</p>
              </div>
            ))}
          </div>
          
          <Link 
            href="/book-strategy" 
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all shadow-xl shadow-blue-500/30"
          >
            <Calendar size={22} />
            Book Your Free Strategy Session
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <p className="mt-8 text-blue-200 text-sm">
            ⏰ 60-minute session • No sales pitch • Get actionable insights
          </p>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 px-6 bg-slate-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                  <Building size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">LuxTech Hospitality</h3>
                  <p className="text-slate-400 text-sm">Premium Booking Solutions</p>
                </div>
              </div>
              <p className="text-slate-400">
                Building world-class booking engines for luxury hospitality businesses since 2015.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Solutions</h4>
              <ul className="space-y-3 text-slate-400">
                <li><Link href="/hotels" className="hover:text-white transition-colors">Hotels & Resorts</Link></li>
                <li><Link href="/tours" className="hover:text-white transition-colors">Tour Operators</Link></li>
                <li><Link href="/restaurants" className="hover:text-white transition-colors">Restaurants</Link></li>
                <li><Link href="/vacation-rentals" className="hover:text-white transition-colors">Vacation Rentals</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-3 text-slate-400">
                <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Contact</h4>
              <div className="space-y-3 text-slate-400">
                <p>📞 1-888-123-4567</p>
                <p>✉️ hello@luxtechhospitality.com</p>
                <p>📍 Global – Offices in NYC, London, Dubai</p>
                <div className="flex gap-4 mt-4">
                  <div className="px-3 py-1 bg-slate-800 rounded text-sm">PCI DSS Level 1</div>
                  <div className="px-3 py-1 bg-slate-800 rounded text-sm">GDPR Compliant</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} LuxTech Hospitality. All rights reserved.</p>
            <p className="mt-2">Processed over $2.1B in bookings for luxury hospitality clients worldwide.</p>
          </div>
        </div>
      </footer>

      {/* Demo Modal */}
      {demoActive && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900">Interactive Booking Engine Demo</h3>
                <button 
                  onClick={() => setDemoActive(false)}
                  className="text-slate-400 hover:text-slate-700"
                >
                  <X size={24} />
                </button>
              </div>
              {/* Demo content would go here */}
              <div className="text-center py-12">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Live Demo Experience</h4>
                <p className="text-slate-600 mb-8">Experience our booking engine with interactive features</p>
                <Link 
                  href="/full-demo"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold hover:shadow-xl transition-all"
                >
                  Launch Full Demo
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}