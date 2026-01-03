"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShoppingBag, Package, TrendingUp, Shield, Zap, CheckCircle, 
  ArrowRight, Award, Star, Users, CreditCard, BarChart, 
  Smartphone, Lock, Cloud, RefreshCw, BatteryCharging, Globe,
  Truck, Tag, Percent, Receipt, Search, Filter, ShoppingCart,
  Headphones, Palette, Settings, Clock, MessageSquare, Database
} from 'lucide-react';

export default function RetailWelcomePage() {
  const [businessType, setBusinessType] = useState('boutique');
  const [demoActive, setDemoActive] = useState(false);

  const businessTypes = [
    { id: 'boutique', label: 'Boutique Retail', icon: ShoppingBag, color: 'from-purple-500 to-pink-500' },
    { id: 'chain', label: 'Multi-Store Chain', icon: Package, color: 'from-blue-500 to-cyan-500' },
    { id: 'marketplace', label: 'Marketplace', icon: Globe, color: 'from-emerald-500 to-green-500' },
    { id: 'dropship', label: 'Dropshipping', icon: Truck, color: 'from-amber-500 to-orange-500' },
    { id: 'subscription', label: 'Subscription Box', icon: RefreshCw, color: 'from-red-500 to-rose-500' }
  ];

  const ecommerceFeatures = [
    { icon: ShoppingBag, title: 'Custom Storefronts', description: 'Beautiful, conversion-optimized designs' },
    { icon: Package, title: 'Inventory Management', description: 'Real-time sync across all sales channels' },
    { icon: TrendingUp, title: 'AI-Powered Analytics', description: 'Predictive insights and sales forecasting' },
    { icon: CreditCard, title: 'Multi-Payment Gateway', description: '40+ payment methods, global currencies' },
    { icon: Shield, title: 'Enterprise Security', description: 'PCI-DSS Level 1 certified' },
    { icon: Users, title: 'Customer CRM', description: 'Lifetime value tracking and segmentation' }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
        
        {/* --- MODERN HEADER --- */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
                  <ShoppingBag size={28} className="text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">CommerceScale</h1>
                  <p className="text-sm text-gray-500">Premium E-Commerce Solutions</p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-6">
                <a href="tel:+1-888-123-4567" className="text-gray-600 hover:text-purple-600 transition-colors">
                  📞 1-888-123-4567
                </a>
                <Link 
                  href="/demo" 
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg font-semibold hover:shadow-xl transition-all shadow-lg shadow-purple-200"
                  onClick={() => setDemoActive(true)}
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* --- HERO SECTION --- */}
        <section className="pt-20 pb-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
          {/* Grid Pattern Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-200 mb-8">
                  <TrendingUp size={16} className="text-purple-600" />
                  <span className="text-sm font-semibold text-purple-600">Revenue-Focused E-Commerce</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Scale Your Store by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">300%</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  Custom e-commerce platforms engineered for growth, with intelligent inventory management, AI-powered personalization, and enterprise-grade scalability.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/strategy-session" 
                    className="group px-8 py-4 rounded-xl text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:shadow-2xl transition-all shadow-xl shadow-purple-300/50 inline-flex items-center justify-center gap-3"
                  >
                    <Calendar size={22} />
                    Book Strategy Session
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button 
                    onClick={() => setDemoActive(true)}
                    className="px-8 py-4 rounded-xl text-lg font-bold text-gray-700 bg-white border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all inline-flex items-center justify-center gap-3"
                  >
                    <ShoppingCart size={22} />
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
                    <span className="text-sm text-gray-600">2,800+ Retail Clients</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp size={20} className="text-amber-500" />
                    <span className="text-sm text-gray-600">$3.2B+ in GMV Processed</span>
                  </div>
                </div>
              </div>
              
              {/* Interactive Store Preview */}
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    </div>
                    <div className="text-sm text-gray-400">STORE PREVIEW</div>
                  </div>
                  
                  {/* Product Grid Demo */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { name: 'Premium Headphones', price: '$299', color: 'from-blue-500 to-cyan-500' },
                      { name: 'Smart Watch Pro', price: '$449', color: 'from-purple-500 to-pink-500' },
                      { name: 'Wireless Charger', price: '$89', color: 'from-emerald-500 to-green-500' },
                      { name: 'Camera Lens Kit', price: '$599', color: 'from-amber-500 to-orange-500' }
                    ].map((product, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100 hover:border-purple-200 transition-colors">
                        <div className={`w-full h-32 rounded-lg mb-3 bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                          <ShoppingBag size={32} className="text-white/80" />
                        </div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">{product.name}</h4>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-gray-900">{product.price}</span>
                          <button className="px-3 py-1 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded text-xs font-medium transition-colors">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Cart Summary */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Cart Total (3 items)</span>
                      <span className="font-bold text-gray-900">$1,347</span>
                    </div>
                    <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg text-white font-bold hover:shadow-lg transition-all">
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
                
                {/* Floating metrics */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={20} className="text-emerald-500" />
                    <div>
                      <div className="text-xs text-gray-500">Conversion Rate</div>
                      <div className="text-xl font-bold text-gray-900">4.2%</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-2">
                    <ShoppingBag size={20} className="text-purple-500" />
                    <div>
                      <div className="text-xs text-gray-500">Avg. Order Value</div>
                      <div className="text-xl font-bold text-gray-900">$128</div>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Solutions For Your Business Model
              </h3>
              <p className="text-gray-600">
                Select your business type for tailored features
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {businessTypes.map((type) => {
                const Icon = type.icon;
                const isSelected = businessType === type.id;
                return (
                  <button
                    key={type.id}
                    onClick={() => setBusinessType(type.id)}
                    className={`flex flex-col items-center gap-3 px-6 py-5 rounded-2xl border-2 transition-all ${isSelected 
                      ? `border-purple-500 bg-gradient-to-br ${type.color} bg-opacity-10` 
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
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-10 border border-purple-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">
                    {businessTypes.find(t => t.id === businessType)?.label} Features
                  </h4>
                  
                  {businessType === 'boutique' && (
                    <ul className="space-y-4">
                      {[
                        "Custom storefront with unique brand identity",
                        "Inventory management for 100-1,000 SKUs",
                        "Email marketing automation integration",
                        "Social media shopping integrations",
                        "Local pickup and delivery options",
                        "Gift wrapping and personalization"
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-emerald-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {businessType === 'chain' && (
                    <ul className="space-y-4">
                      {[
                        "Multi-store inventory synchronization",
                        "Centralized order management across locations",
                        "Employee management and permissions",
                        "Bulk product upload and management",
                        "Regional pricing and promotions",
                        "Unified customer database"
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-emerald-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {businessType === 'marketplace' && (
                    <ul className="space-y-4">
                      {[
                        "Multi-vendor platform architecture",
                        "Commission and payout automation",
                        "Vendor onboarding and management",
                        "Escrow payment processing",
                        "Dispute resolution system",
                        "Marketplace analytics dashboard"
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
                      { metric: "Sales Growth", value: "300%", change: "+" },
                      { metric: "Conversion Rate", value: "4.2%", change: "+" },
                      { metric: "Inventory Turnover", value: "35%", change: "+" },
                      { metric: "Cart Abandonment", value: "18%", change: "-" }
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
                  
                  <div className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                    <p className="text-sm text-purple-700">
                      💡 <strong>Typical ROI:</strong> 2-5 months. Most retailers recover costs through increased sales and operational efficiencies within the first quarter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- INVENTORY MANAGEMENT SYSTEM --- */}
        <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-200 mb-4">
                <Package size={16} className="text-purple-600" />
                <span className="text-sm font-semibold text-purple-600">Intelligent Inventory System</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Real-Time Inventory Management
              </h2>
              <p className="text-xl text-gray-600">
                Never oversell. Never run out of stock.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Inventory Dashboard</h3>
                  
                  <div className="space-y-6">
                    {[
                      { label: 'Total SKUs', value: '2,847', status: 'Active' },
                      { label: 'Low Stock Items', value: '23', status: 'Warning' },
                      { label: 'Out of Stock', value: '5', status: 'Critical' },
                      { label: 'Inventory Value', value: '$284,750', status: 'Healthy' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div>
                          <div className="text-gray-600">{item.label}</div>
                          <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                          item.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
                          item.status === 'Warning' ? 'bg-amber-100 text-amber-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {item.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Inventory Features</h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: RefreshCw,
                      title: 'Automatic Reordering',
                      description: 'Set minimum stock levels and automate purchase orders'
                    },
                    {
                      icon: TrendingUp,
                      title: 'Demand Forecasting',
                      description: 'AI predicts future demand based on sales patterns'
                    },
                    {
                      icon: Package,
                      title: 'Batch & Serial Tracking',
                      description: 'Track products from manufacturer to customer'
                    },
                    {
                      icon: BarChart,
                      title: 'Profit Margin Analysis',
                      description: 'Real-time margin tracking by product and category'
                    }
                  ].map((feature, idx) => {
                    const Icon = feature.icon;
                    return (
                      <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-purple-300 transition-colors">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                          <Icon size={24} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Integration Partners */}
            <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-sm">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Seamless Ecosystem Integration
                </h3>
                <p className="text-gray-600">
                  Connect with 250+ retail tools and platforms
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                {[
                  { name: 'Shopify', category: 'E-Commerce' },
                  { name: 'QuickBooks', category: 'Accounting' },
                  { name: 'Salesforce', category: 'CRM' },
                  { name: 'ShipStation', category: 'Shipping' },
                  { name: 'Google Analytics', category: 'Analytics' },
                  { name: 'Mailchimp', category: 'Marketing' },
                  { name: 'Zendesk', category: 'Support' },
                  { name: 'Stripe', category: 'Payments' },
                  { name: 'Amazon', category: 'Marketplace' },
                  { name: 'Facebook', category: 'Social' }
                ].map((partner, idx) => (
                  <div key={idx} className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors">
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

        {/* --- SCALABILITY FEATURES --- */}
        <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Engineered for Exponential Growth
              </h2>
              <p className="text-xl text-purple-100">
                Handle traffic spikes and sales surges without breaking a sweat
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: 'Auto-Scaling Infrastructure',
                  description: 'Automatically handle 10x traffic spikes during sales',
                  metrics: '99.99% Uptime'
                },
                {
                  icon: Database,
                  title: 'High-Volume Database',
                  description: 'Process 100,000+ orders per hour without slowdown',
                  metrics: 'Millisecond Response'
                },
                {
                  icon: Globe,
                  title: 'Global CDN',
                  description: 'Lightning-fast loading worldwide',
                  metrics: '<1s Load Time'
                },
                {
                  icon: Shield,
                  title: 'DDoS Protection',
                  description: 'Enterprise-grade security against attacks',
                  metrics: '100% Protection'
                },
                {
                  icon: RefreshCw,
                  title: 'Real-Time Sync',
                  description: 'Inventory updates across all channels in milliseconds',
                  metrics: 'Instant Updates'
                },
                {
                  icon: Users,
                  title: 'Concurrent Users',
                  description: 'Support 50,000+ simultaneous shoppers',
                  metrics: 'Zero Lag'
                }
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-purple-100 mb-6">{feature.description}</p>
                    <div className="px-4 py-2 bg-white/20 rounded-lg">
                      <span className="text-sm font-medium">{feature.metrics}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- CASE STUDY: LUXURY BRAND --- */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-200 mb-6">
                  <Award size={16} className="text-purple-600" />
                  <span className="text-sm font-semibold text-purple-600">Case Study: Luxury Fashion Brand</span>
                </div>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Stella Nova Fashion
                </h2>
                
                <div className="space-y-6 mb-10">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Before Our Platform:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-1">
                          <span className="text-xs text-red-600">✕</span>
                        </div>
                        <span>Website crashed during Black Friday sales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-1">
                          <span className="text-xs text-red-600">✕</span>
                        </div>
                        <span>Manual inventory causing 15% oversells</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-1">
                          <span className="text-xs text-red-600">✕</span>
                        </div>
                        <span>3.1% conversion rate</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">After Implementation:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                          <CheckCircle size={12} className="text-emerald-600" />
                        </div>
                        <span>Handled 500,000 visitors during Black Friday with zero downtime</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                          <CheckCircle size={12} className="text-emerald-600" />
                        </div>
                        <span>Zero oversells with real-time inventory tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                          <CheckCircle size={12} className="text-emerald-600" />
                        </div>
                        <span>Conversion rate increased to 5.8%</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Link 
                  href="/case-studies/stella-nova" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg font-bold hover:shadow-xl transition-all"
                >
                  Read Full Case Study
                  <ArrowRight size={18} />
                </Link>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-200">
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-gray-900 mb-2">$4.2M</div>
                  <div className="text-purple-600">Additional Annual Revenue</div>
                </div>
                
                <div className="space-y-6">
                  {[
                    { label: 'Conversion Rate', value: '5.8%', change: '+87%' },
                    { label: 'Average Order Value', value: '$245', change: '+32%' },
                    { label: 'Mobile Revenue', value: '68%', change: '+45%' },
                    { label: 'Customer Retention', value: '42%', change: '+110%' }
                  ].map((stat, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-xl border border-purple-100">
                      <span className="text-gray-700">{stat.label}</span>
                      <div className="text-right">
                        <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-sm text-emerald-600">{stat.change}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-purple-200 text-center text-sm text-purple-600">
                  Results measured over 12 months post-launch
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- PRICING & ROI --- */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Investment & Scalable Pricing
              </h2>
              <p className="text-xl text-gray-600">
                Transparent pricing that grows with your business
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  plan: 'Startup',
                  price: '$25,000',
                  description: 'For emerging brands up to $500k/year',
                  features: [
                    'Custom storefront',
                    'Basic inventory management',
                    'Up to 10,000 products',
                    'Mobile-responsive design',
                    '6 months support',
                    'Up to 50,000 visitors/month'
                  ],
                  cta: 'Get Quote',
                  popular: false
                },
                {
                  plan: 'Growth',
                  price: '$65,000',
                  description: 'For scaling businesses up to $5M/year',
                  features: [
                    'Everything in Startup +',
                    'Advanced inventory system',
                    'AI-powered recommendations',
                    'Multi-channel integration',
                    '12 months support',
                    'Unlimited products',
                    'Up to 500k visitors/month',
                    'Dedicated account manager'
                  ],
                  cta: 'Most Popular',
                  popular: true
                },
                {
                  plan: 'Enterprise',
                  price: 'Custom',
                  description: 'For high-volume brands & marketplaces',
                  features: [
                    'Everything in Growth +',
                    'Marketplace architecture',
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
                <div key={idx} className={`bg-white rounded-3xl p-8 border-2 ${pricing.popular ? 'border-purple-500 shadow-2xl' : 'border-gray-200'} relative`}>
                  {pricing.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full text-sm font-bold">
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
                      ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:shadow-xl' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-all`}
                  >
                    {pricing.cta}
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="mt-16 bg-gradient-to-r from-white to-purple-50 rounded-2xl p-8 border border-purple-200">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Revenue Share Option',
                    description: 'Pay reduced upfront costs with revenue sharing',
                    icon: Percent
                  },
                  {
                    title: 'Performance Guarantee',
                    description: 'Minimum 3.5% conversion rate or we optimize free',
                    icon: Shield
                  },
                  {
                    title: 'Migration Support',
                    description: 'Full data migration from your current platform',
                    icon: Database
                  }
                ].map((benefit, idx) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={idx} className="text-center">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
                        <Icon size={28} className="text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* --- FINAL CTA --- */}
        <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-purple-900">
          <div className="container mx-auto max-w-4xl text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
              <Calendar size={18} className="text-purple-300" />
              <span className="text-sm font-semibold">Limited Availability</span>
            </div>
            
            <h2 className="text-4xl font-bold mb-6">
              Ready to Scale Your Retail Business?
            </h2>
            
            <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
              Join 2,800+ retailers that have increased revenue and streamlined operations with our custom e-commerce solutions.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
              {[
                {
                  title: 'Free Revenue Analysis',
                  description: 'We analyze your current store performance and identify opportunities'
                },
                {
                  title: 'Custom Growth Roadmap',
                  description: 'Get a step-by-step plan tailored to your specific goals'
                },
                {
                  title: 'No-Obligation Quote',
                  description: 'Transparent pricing with detailed breakdown of costs and ROI'
                },
                {
                  title: 'Migration Strategy',
                  description: 'Seamless transition plan from your current platform'
                }
              ].map((offer, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h4 className="font-bold text-lg mb-2">{offer.title}</h4>
                  <p className="text-purple-100 text-sm">{offer.description}</p>
                </div>
              ))}
            </div>
            
            <Link 
              href="/book-strategy" 
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-400 text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all shadow-xl shadow-purple-500/30"
            >
              <Calendar size={22} />
              Book Your Free Strategy Session
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <p className="mt-8 text-purple-200 text-sm">
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center">
                    <ShoppingBag size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">CommerceScale</h3>
                    <p className="text-gray-400 text-sm">Premium E-Commerce Solutions</p>
                  </div>
                </div>
                <p className="text-gray-400">
                  Building scalable e-commerce platforms for ambitious retailers since 2017.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-6">Solutions</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><Link href="/boutique" className="hover:text-white transition-colors">Boutique Retail</Link></li>
                  <li><Link href="/chain" className="hover:text-white transition-colors">Multi-Store Chains</Link></li>
                  <li><Link href="/marketplace" className="hover:text-white transition-colors">Marketplaces</Link></li>
                  <li><Link href="/subscription" className="hover:text-white transition-colors">Subscription Boxes</Link></li>
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
                  <p>✉️ hello@commercescale.com</p>
                  <p>📍 Global – Offices in NYC, London, Singapore</p>
                  <div className="flex gap-4 mt-4">
                    <div className="px-3 py-1 bg-gray-800 rounded text-sm">PCI DSS Level 1</div>
                    <div className="px-3 py-1 bg-gray-800 rounded text-sm">GDPR Compliant</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
              <p>© {new Date().getFullYear()} CommerceScale. All rights reserved.</p>
              <p className="mt-2">Processed over $3.2B in GMV for retail clients worldwide.</p>
            </div>
          </div>
        </footer>

        <style jsx>{`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
        `}</style>
      </div>

      {/* Demo Modal */}
      {demoActive && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Interactive Store Demo</h3>
                <button 
                  onClick={() => setDemoActive(false)}
                  className="text-gray-400 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              {/* Demo content would go here */}
              <div className="text-center py-12">
                <div className="text-4xl mb-4">🛍️</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Live Demo Experience</h4>
                <p className="text-gray-600 mb-8">Experience our e-commerce platform with interactive features</p>
                <Link 
                  href="/full-demo"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-bold hover:shadow-xl transition-all"
                >
                  Launch Full Demo
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Add missing icon import
import { Calendar } from 'lucide-react';