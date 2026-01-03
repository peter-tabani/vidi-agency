"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Utensils, Clock, Users, TrendingUp, Shield, Zap, 
  CheckCircle, ArrowRight, Award, Star, MapPin, Coffee,
  MessageSquare, CreditCard, BarChart, Smartphone, Lock,
  Cloud, Wifi, Headphones, Palette, Settings, RefreshCw,
  BatteryCharging, ChefHat, ShoppingBag, 
  Percent, Receipt, Menu, Wine, Bell, TabletSmartphone,
  Truck, Calendar, X // Added Truck, Calendar, and X (for close button)
} from 'lucide-react';

export default function RestaurantWelcomePage() {
  const [restaurantType, setRestaurantType] = useState('fine-dining');
  const [demoActive, setDemoActive] = useState(false);

  const restaurantTypes = [
    { id: 'fine-dining', label: 'Fine Dining', icon: Wine, color: 'from-purple-500 to-pink-500' },
    { id: 'casual', label: 'Casual Dining', icon: Utensils, color: 'from-blue-500 to-cyan-500' },
    { id: 'fast-casual', label: 'Fast Casual', icon: Coffee, color: 'from-emerald-500 to-green-500' },
    { id: 'catering', label: 'Catering', icon: ChefHat, color: 'from-amber-500 to-orange-500' },
    { id: 'food-truck', label: 'Food Truck', icon: Truck, color: 'from-red-500 to-rose-500' }
  ];

  const orderingFeatures = [
    { icon: TabletSmartphone, title: 'Multi-Platform Ordering', description: 'Website, mobile app, kiosk, and tablet ordering' },
    { icon: Clock, title: 'Real-time Wait Times', description: 'Dynamic wait times based on kitchen capacity' },
    { icon: CreditCard, title: 'Contactless Payments', description: 'Secure digital payments with 30+ options' },
    { icon: BarChart, title: 'Inventory Management', description: 'Auto-updating inventory across all channels' },
    { icon: Shield, title: 'Fraud Protection', description: 'Advanced detection for online orders' },
    { icon: Users, title: 'Customer CRM', description: 'Complete guest profiles and preferences' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white font-sans">
      
      {/* --- PREMIUM HEADER --- */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-amber-100 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600 to-orange-500 flex items-center justify-center">
                <Utensils size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Gastrotech Solutions</h1>
                <p className="text-sm text-gray-500">Premium Restaurant Technology</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="tel:+1-888-123-4567" className="text-gray-600 hover:text-amber-600 transition-colors">
                📞 1-888-123-4567
              </a>
              {/* FIXED: Changed Link to button to allow modal to open without navigating away */}
              <button 
                onClick={() => setDemoActive(true)}
                className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-lg font-semibold hover:shadow-xl transition-all shadow-lg shadow-amber-200"
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="pt-20 pb-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        {/* Food pattern background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23fbbf24\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full border border-amber-200 mb-8">
                <Star size={16} className="text-amber-500" />
                <span className="text-sm font-semibold text-amber-600">Michelin-Star Restaurant Technology</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Increase Average Check by <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">42%</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Custom ordering systems that streamline operations, enhance guest experiences, and maximize revenue through intelligent upselling and loyalty.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/strategy-session" 
                  className="group px-8 py-4 rounded-xl text-lg font-bold text-white bg-gradient-to-r from-amber-600 to-orange-500 hover:shadow-2xl transition-all shadow-xl shadow-amber-300/50 inline-flex items-center justify-center gap-3"
                >
                  <Calendar size={22} />
                  Book Strategy Session
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                {/* FIXED: Changed Link to button */}
                <button 
                  onClick={() => setDemoActive(true)}
                  className="px-8 py-4 rounded-xl text-lg font-bold text-gray-700 bg-white border-2 border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-all inline-flex items-center justify-center gap-3"
                >
                  <Smartphone size={22} />
                  Interactive Demo
                </button>
              </div>
              
              {/* Trust badges */}
              <div className="mt-12 flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-2">
                  <Shield size={20} className="text-emerald-500" />
                  <span className="text-sm text-gray-600">PCI-DSS Level 1 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={20} className="text-blue-500" />
                  <span className="text-sm text-gray-600">3,500+ Restaurant Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp size={20} className="text-amber-500" />
                  <span className="text-sm text-gray-600">$1.8B+ in Orders Processed</span>
                </div>
              </div>
            </div>
            
            {/* Interactive Demo Preview */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-amber-900 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <div className="text-sm text-gray-400">LIVE DEMO</div>
                </div>
                
                <div className="bg-gray-800 rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm text-gray-400">Digital Menu</div>
                      <div className="text-xl font-bold text-white">The Golden Fork</div>
                    </div>
                    <div className="text-emerald-400 text-2xl font-bold">Order<span className="text-sm"> Now</span></div>
                  </div>
                  
                  {/* Order Type Selector */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {['Dine-in', 'Takeout', 'Delivery'].map((type, idx) => (
                      <button key={idx} className="py-2 bg-gray-700/50 rounded-lg text-white font-medium hover:bg-gray-700 transition-colors">
                        {type}
                      </button>
                    ))}
                  </div>
                  
                  {/* Menu Items */}
                  <div className="space-y-3">
                    {[
                      { name: 'Truffle Pasta', price: '$34', addons: '+ Add wine pairing' },
                      { name: 'Dry-Aged Steak', price: '$58', addons: '+ Add side' },
                      { name: 'Sea Bass', price: '$42', addons: '+ Add sauce' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                            <Utensils size={16} className="text-amber-300" />
                          </div>
                          <div>
                            <div className="text-white font-medium">{item.name}</div>
                            <div className="text-xs text-gray-400">{item.addons}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-bold">{item.price}</div>
                          <button className="mt-1 px-3 py-1 bg-amber-500 hover:bg-amber-600 rounded text-xs text-white transition-colors">
                            Add to Order
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-gray-400">2 items • $92</div>
                    <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-400 rounded-lg text-white font-bold hover:shadow-lg transition-all">
                      Checkout Now
                    </button>
                  </div>
                </div>
                
                <div className="text-center text-gray-400 text-sm">
                  Real-time demo. Try adding items or switching order types.
                </div>
              </div>
              
              {/* Floating elements - FIXED: Added animate-float class */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-2xl animate-float">
                <div className="flex items-center gap-2">
                  <TrendingUp size={20} className="text-emerald-500" />
                  <div>
                    <div className="text-xs text-gray-500">Avg. Check Increase</div>
                    <div className="text-xl font-bold text-gray-900">42%</div>
                  </div>
                </div>
              </div>
              
              {/* FIXED: Added animate-float class with delay */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2">
                  <Users size={20} className="text-blue-500" />
                  <div>
                    <div className="text-xs text-gray-500">Table Turn Time</div>
                    <div className="text-xl font-bold text-gray-900">-18%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- RESTAURANT TYPE SELECTOR --- */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Custom Solutions For Your Restaurant Type
            </h3>
            <p className="text-gray-600">
              Select your restaurant type to see tailored features
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {restaurantTypes.map((type) => {
              const Icon = type.icon;
              const isSelected = restaurantType === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => setRestaurantType(type.id)}
                  className={`flex flex-col items-center gap-3 px-6 py-5 rounded-2xl border-2 transition-all ${isSelected 
                    ? `border-amber-500 bg-gradient-to-br ${type.color} bg-opacity-10` 
                    : 'border-gray-200 bg-white hover:border-gray-300'}`}
                >
                  <div className={`w-14 h-14 rounded-xl ${isSelected ? `bg-gradient-to-br ${type.color}` : 'bg-gray-100'} flex items-center justify-center`}>
                    <Icon size={28} className={isSelected ? 'text-white' : 'text-gray-600'} />
                  </div>
                  <span className={`font-semibold ${isSelected ? 'text-gray-900' : 'text-gray-700'}`}>
                    {type.label}
                  </span>
                </button>
              );
            })}
          </div>
          
          {/* Dynamic Content Based on Selection */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-10 border border-amber-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6">
                  {restaurantTypes.find(t => t.id === restaurantType)?.label} Features
                </h4>
                
                {restaurantType === 'fine-dining' && (
                  <ul className="space-y-4">
                    {[
                      "Table management with floor plan visualization",
                      "Wine pairing suggestions integrated with menu",
                      "Reservation management with guest preferences",
                      "Course timing synchronization with kitchen",
                      "Sommelier and server communication tools",
                      "Private dining and event booking system"
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-emerald-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {restaurantType === 'casual' && (
                  <ul className="space-y-4">
                    {[
                      "Online ordering with real-time kitchen capacity",
                      "Waitlist management with SMS notifications",
                      "Loyalty program integration",
                      "Table-side ordering via QR codes",
                      "Group booking and party management",
                      "Integration with delivery platforms"
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-emerald-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {restaurantType === 'catering' && (
                  <ul className="space-y-4">
                    {[
                      "Custom quote generator with dietary restrictions",
                      "Event planning and timeline management",
                      "Equipment and staffing allocation",
                      "Delivery route optimization",
                      "Client portal for event planning",
                      "Inventory forecasting for large events"
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-emerald-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Added Fallback for Fast Casual & Food Truck */}
                {['fast-casual', 'food-truck'].includes(restaurantType) && (
                  <ul className="space-y-4">
                    {[
                      "Mobile-first ordering for line busting",
                      "Kitchen display system (KDS) integration",
                      "Automated SMS order status updates",
                      "Geofenced marketing and notifications",
                      "Inventory tracking down to the ingredient",
                      "Quick-service payment processing"
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-emerald-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Zap size={24} className="text-amber-500" />
                  <h5 className="text-xl font-bold text-gray-900">Expected Results</h5>
                </div>
                
                <div className="space-y-6">
                  {[
                    { metric: "Average Check Size", value: "42%", change: "+" },
                    { metric: "Table Turn Time", value: "18%", change: "-" },
                    { metric: "Online Order Volume", value: "300%", change: "+" },
                    { metric: "Labor Cost", value: "15%", change: "-" }
                  ].map((result, idx) => (
                    <div key={idx} className="flex items-center justify-between pb-4 border-b border-gray-100">
                      <span className="text-gray-700">{result.metric}</span>
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
                
                <div className="mt-8 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                  <p className="text-sm text-amber-700">
                    💡 <strong>Typical ROI:</strong> 2-4 months. Most restaurants recover costs through increased check sizes and operational efficiencies within the first quarter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ORDERING SYSTEM FEATURES --- */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Restaurant Management Platform
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to streamline operations and boost revenue
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {orderingFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-amber-300 hover:shadow-xl transition-all">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Integration Partners */}
          <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-sm">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Seamless Ecosystem Integration
              </h3>
              <p className="text-gray-600">
                Connect with 200+ restaurant tools and platforms
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {[
                { name: 'Toast POS', category: 'Point of Sale' },
                { name: 'Square', category: 'Payments' },
                { name: 'Uber Eats', category: 'Delivery' },
                { name: 'OpenTable', category: 'Reservations' },
                { name: 'QuickBooks', category: 'Accounting' },
                { name: 'Slack', category: 'Communication' },
                { name: 'Mailchimp', category: 'Marketing' },
                { name: 'Google Analytics', category: 'Analytics' },
                { name: 'Shopify', category: 'Merchandise' },
                { name: '7shifts', category: 'Scheduling' }
              ].map((partner, idx) => (
                <div key={idx} className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center mb-3">
                    <div className="font-bold text-gray-700">{partner.name.charAt(0)}</div>
                  </div>
                  <div className="font-semibold text-gray-900 text-center">{partner.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{partner.category}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CASE STUDY: FINE DINING --- */}
      <section className="py-20 px-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
                <Award size={16} className="text-amber-300" />
                <span className="text-sm font-semibold">Case Study: Michelin-Star Restaurant</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-6">
                Le Ciel Bleu Experience
              </h2>
              
              <div className="space-y-6 mb-10">
                <div>
                  <h4 className="text-lg font-bold mb-2">Before Our System:</h4>
                  <ul className="space-y-2 text-amber-100">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-500/30 flex items-center justify-center mt-1">
                        <span className="text-xs">✕</span>
                      </div>
                      <span>Manual reservations causing 20% no-shows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-500/30 flex items-center justify-center mt-1">
                        <span className="text-xs">✕</span>
                      </div>
                      <span>Average check size of $85 per person</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-500/30 flex items-center justify-center mt-1">
                        <span className="text-xs">✕</span>
                      </div>
                      <span>2-hour table turns limiting revenue</span>
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
                      <span>No-shows reduced to 3% with automated reminders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/30 flex items-center justify-center mt-1">
                        <CheckCircle size={12} />
                      </div>
                      <span>Average check increased to $142 per person</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/30 flex items-center justify-center mt-1">
                        <CheckCircle size={12} />
                      </div>
                      <span>Table turns optimized to 1.5 hours</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Link 
                href="/case-studies/ciel-bleu" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-amber-600 rounded-lg font-bold hover:bg-amber-50 transition-all"
              >
                Read Full Case Study
                <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="text-center mb-8">
                <div className="text-5xl font-bold mb-2">$1.4M</div>
                <div className="text-amber-200">Additional Annual Revenue</div>
              </div>
              
              <div className="space-y-6">
                {[
                  { label: 'Average Check Size', value: '$142', change: '+67%' },
                  { label: 'Table Turn Time', value: '1.5h', change: '-25%' },
                  { label: 'Online Reservations', value: '89%', change: '+45%' },
                  { label: 'Wine Pairing Upsell', value: '72%', change: '+180%' }
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <span className="text-amber-100">{stat.label}</span>
                    <div className="text-right">
                      <div className="text-xl font-bold">{stat.value}</div>
                      <div className="text-sm text-emerald-300">{stat.change}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20 text-center text-sm text-amber-200">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Investment & Return
            </h2>
            <p className="text-xl text-gray-600">
              Transparent pricing with guaranteed ROI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                plan: 'Bistro',
                price: '$15,000',
                description: 'For single-location restaurants up to 50 seats',
                features: [
                  'Custom ordering system',
                  'Basic POS integration',
                  'Mobile-responsive menu',
                  'Online payments',
                  '6 months support',
                  'Up to 1,000 orders/month'
                ],
                cta: 'Get Quote',
                popular: false
              },
              {
                plan: 'Restaurant',
                price: '$35,000',
                description: 'For full-service restaurants up to 150 seats',
                features: [
                  'Everything in Bistro +',
                  'Advanced reservation system',
                  'Kitchen display system',
                  'API integrations',
                  '12 months support',
                  'Inventory management',
                  'Unlimited orders',
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
                  'Everything in Restaurant +',
                  'Multi-location management',
                  'Custom development',
                  '24/7 premium support',
                  'Advanced analytics suite',
                  'White-label solution',
                  'SLA guarantees',
                  'Custom API development'
                ],
                cta: 'Contact Sales',
                popular: false
              }
            ].map((pricing, idx) => (
              <div key={idx} className={`rounded-3xl p-8 border-2 ${pricing.popular ? 'border-amber-500 shadow-2xl' : 'border-gray-200'} relative`}>
                {pricing.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-1 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-full text-sm font-bold">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pricing.plan}</h3>
                <p className="text-gray-600 mb-6">{pricing.description}</p>
                
                <div className="mb-8">
                  <div className="text-4xl font-bold text-gray-900 mb-1">{pricing.price}</div>
                  <div className="text-gray-500 text-sm">One-time development fee</div>
                </div>
                
                <ul className="space-y-3 mb-10">
                  {pricing.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={pricing.plan === 'Enterprise' ? '/contact' : '/quote'}
                  className={`block w-full py-4 text-center rounded-xl font-bold ${pricing.popular 
                    ? 'bg-gradient-to-r from-amber-600 to-orange-500 text-white hover:shadow-xl' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-all`}
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
                <h4 className="text-xl font-bold text-gray-900">ROI Guarantee</h4>
                <p className="text-gray-600">We're so confident in our system that we offer a unique guarantee</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Performance Metrics',
                  items: ['Minimum 25% increase in average check', '15% reduction in table turn time', '40% increase in online orders']
                },
                {
                  title: 'Support Commitment',
                  items: ['90-day optimization period', 'Monthly performance reviews', '24/7 technical support']
                },
                {
                  title: 'Success Partnership',
                  items: ['Quarterly menu analysis', 'Seasonal trend recommendations', 'Competitor benchmarking']
                }
              ].map((guarantee, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h5 className="font-bold text-gray-900 mb-4">{guarantee.title}</h5>
                  <ul className="space-y-2">
                    {guarantee.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                          <CheckCircle size={12} className="text-emerald-600" />
                        </div>
                        <span className="text-sm text-gray-700">{item}</span>
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
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-amber-900">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
            <Calendar size={18} className="text-amber-300" />
            <span className="text-sm font-semibold">Limited Availability</span>
          </div>
          
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Restaurant?
          </h2>
          
          <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto">
            Join 3,500+ restaurants that have increased revenue and streamlined operations with our custom ordering solutions.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
            {[
              {
                title: 'Free Revenue Analysis',
                description: 'We analyze your current operations and identify opportunities'
              },
              {
                title: 'Custom Roadmap',
                description: 'Get a step-by-step plan tailored to your specific needs'
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
                <p className="text-amber-100 text-sm">{offer.description}</p>
              </div>
            ))}
          </div>
          
          <Link 
            href="/book-strategy" 
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-400 text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all shadow-xl shadow-amber-500/30"
          >
            <Calendar size={22} />
            Book Your Free Strategy Session
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <p className="mt-8 text-amber-200 text-sm">
            ⏰ 60-minute session • No sales pitch • Get actionable insights
          </p>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-400 flex items-center justify-center">
                  <Utensils size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Gastrotech Solutions</h3>
                  <p className="text-gray-400 text-sm">Premium Restaurant Technology</p>
                </div>
              </div>
              <p className="text-gray-400">
                Building world-class ordering systems for restaurants since 2016.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Solutions</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/fine-dining" className="hover:text-white transition-colors">Fine Dining</Link></li>
                <li><Link href="/casual" className="hover:text-white transition-colors">Casual Dining</Link></li>
                <li><Link href="/catering" className="hover:text-white transition-colors">Catering</Link></li>
                <li><Link href="/food-trucks" className="hover:text-white transition-colors">Food Trucks</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <p>📞 1-888-123-4567</p>
                <p>✉️ hello@gastrotechsolutions.com</p>
                <p>📍 Global – Offices in NYC, Paris, Tokyo</p>
                <div className="flex gap-4 mt-4">
                  <div className="px-3 py-1 bg-gray-800 rounded text-sm">PCI DSS Level 1</div>
                  <div className="px-3 py-1 bg-gray-800 rounded text-sm">GDPR Compliant</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Gastrotech Solutions. All rights reserved.</p>
            <p className="mt-2">Processed over $1.8B in orders for restaurant clients worldwide.</p>
          </div>
        </div>
      </footer>

      {/* Demo Modal */}
      {demoActive && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Interactive Ordering Demo</h3>
                <button 
                  onClick={() => setDemoActive(false)}
                  className="text-gray-400 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              {/* Demo content would go here */}
              <div className="text-center py-12">
                <div className="text-4xl mb-4">🍽️</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Live Demo Experience</h4>
                <p className="text-gray-600 mb-8">Experience our ordering system with interactive features</p>
                <Link 
                  href="/full-demo"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-xl font-bold hover:shadow-xl transition-all"
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