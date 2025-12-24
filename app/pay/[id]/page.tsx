'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { 
  Shield, Check, CreditCard, Zap, ArrowRight, Lock, 
  Globe, Calendar, Building2, User, FileText, CheckCircle2,
  Download, Copy, Mail, Phone, HelpCircle, Clock, TrendingUp,
  Percent, Award, Users, Smartphone, MessageSquare, Wallet,
  AlertCircle, ChevronRight, Calculator, Receipt, BadgeCheck,
  ExternalLink, Key, Heart, Star
} from 'lucide-react';

export default function PremiumPaymentPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [selectedPlanId, setSelectedPlanId] = useState<string>('milestone');
  const [isProcessing, setIsProcessing] = useState(false);
  const [client, setClient] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subscribeUpdates, setSubscribeUpdates] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [showCalculator, setShowCalculator] = useState(false);
  const [customAmount, setCustomAmount] = useState('');
  const [showPaymentConfirmation, setShowPaymentConfirmation] = useState(false);
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [aiMessage, setAiMessage] = useState('');

  // --- 1. SIMULATED DATA (Preview Mode) ---
  const demoClient = {
    id: 'demo',
    company: 'Nexus Industries',
    name: 'Dr. James Richards',
    email: 'james@nexus.com',
    phone: '+1 (555) 123-4567',
    package: 'Enterprise',
    amount: 3000, 
    service: 'Website Development',
    date: new Date().toLocaleDateString(),
    project_description: 'A comprehensive e-commerce platform with AI-powered recommendations and mobile app integration.'
  };

  useEffect(() => {
    const fetchClientData = async () => {
      const { data } = await supabase
        .from('clients')
        .select('*')
        .eq('id', params.id)
        .single();

      if (data) {
        setClient(data);
        setEmail(data.email || '');
        setPhone(data.phone || '');
      } else {
        // Fallback for previewing without DB
        setClient(demoClient);
        setEmail(demoClient.email);
        setPhone(demoClient.phone);
      }
    };
    fetchClientData();
  }, [params.id]);

  // Auto-calculate custom payment options
  useEffect(() => {
    if (client?.amount && customAmount) {
      const custom = parseFloat(customAmount);
      if (!isNaN(custom)) {
        const total = client.amount;
        const percent = Math.round((custom / total) * 100);
        // Update AI assistant message based on custom amount
        if (custom < total * 0.3) {
          setAiMessage(`A ${percent}% deposit will get your project started. We'll work on initial designs while you secure remaining funds.`);
        } else if (custom > total) {
          setAiMessage(`Generous ${percent}% prepayment! We'll prioritize your project and add bonus features.`);
        }
      }
    }
  }, [customAmount, client?.amount]);

  if (!client) return <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
    <div className="text-center space-y-4">
      <div className="w-16 h-16 mx-auto border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-600 font-medium">Loading Secure Portal...</p>
      <p className="text-sm text-gray-400">Encrypting your connection</p>
    </div>
  </div>;

  const totalAmount = client.amount || 0;

  // --- ENHANCED SMART PAYMENT PLANS ---
  const plans = [
    {
      id: 'upfront',
      title: 'Single Payment',
      description: 'Pay securely in full. Instant receipt generation.',
      totalDisplay: `$${totalAmount.toLocaleString()}`,
      payNow: totalAmount,
      frequency: 'once',
      badge: 'Best Value',
      icon: CheckCircle2,
      benefits: [
        '10% discount on total',
        'Project prioritized',
        'Lifetime support included',
        'Free maintenance for 6 months'
      ],
      aiAdvice: 'Most cost-effective option. Saves $' + (totalAmount * 0.1) + ' instantly.'
    },
    {
      id: 'milestone',
      title: '50/50 Structure',
      description: '50% deposit to start, 50% upon final delivery.',
      totalDisplay: `$${(totalAmount / 2).toLocaleString()} / milestone`,
      payNow: totalAmount / 2,
      frequency: 'once',
      badge: 'Most Popular',
      icon: FileText,
      benefits: [
        'Low-risk approach',
        'Work begins immediately',
        'Final review before second payment',
        'Flexible delivery timeline'
      ],
      aiAdvice: 'Balances risk and cash flow. Start today with half payment.'
    },
    {
      id: 'financing',
      title: '6-Month Financing',
      description: 'Spread the cost over 6 months with 0% interest.',
      totalDisplay: `$${Math.round(totalAmount / 6).toLocaleString()} / month`,
      payNow: Math.round(totalAmount / 6),
      frequency: 'subscription',
      badge: 'Cash Flow Friendly',
      icon: Calendar,
      benefits: [
        '0% interest financing',
        'Automated monthly payments',
        'No credit check required',
        'Cancel anytime'
      ],
      aiAdvice: 'Preserve working capital. Only $' + Math.round(totalAmount / 6) + '/month.'
    }
  ];

  // Add micro-payment plan for smaller projects
  if (totalAmount <= 3500) {
    plans.push({
      id: 'daily',
      title: 'Micro-Payment Plan',
      description: 'Automated daily billing until project completion.',
      totalDisplay: '$25.00 / day',
      payNow: 25,
      frequency: 'subscription',
      badge: 'Start Small',
      icon: Zap,
      benefits: [
        'Start for just $25/day',
        'Pause anytime',
        'Transparent daily tracking',
        'Perfect for bootstrapping'
      ],
      aiAdvice: 'Lowest barrier to entry. Start immediately, scale as you grow.'
    });
  }

  // Add custom payment option
  plans.push({
    id: 'custom',
    title: 'Custom Schedule',
    description: 'Design your own payment plan.',
    totalDisplay: 'Flexible',
    payNow: 0,
    frequency: 'custom',
    badge: 'Flexible',
    icon: TrendingUp,
    benefits: [
      'Complete flexibility',
      'Tailored to your cash flow',
      'Renegotiate anytime',
      'Personal finance advisor'
    ],
    aiAdvice: 'Perfect for unique business situations. Let\'s build your ideal plan.'
  });

  const activePlan = plans.find(p => p.id === selectedPlanId) || plans[1];

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Save client preferences
    if (email && subscribeUpdates) {
      await supabase.from('client_preferences').upsert({
        client_id: client.id,
        email,
        phone,
        subscribe_updates: subscribeUpdates,
        preferred_payment_method: paymentMethod
      });
    }

    // Simulate payment processing with better UX
    setTimeout(() => {
      setIsProcessing(false);
      setShowPaymentConfirmation(true);
      
      // Auto-redirect after showing confirmation
      setTimeout(() => {
        router.push('/success');
      }, 3000);
    }, 2000);
  };

  const handleDownloadInvoice = () => {
    const invoiceData = {
      client,
      plan: activePlan,
      date: new Date().toISOString(),
      invoiceId: `INV-${Date.now()}`
    };
    
    const blob = new Blob([JSON.stringify(invoiceData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Vidi-Invoice-${client.id}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyInvoiceNumber = () => {
    navigator.clipboard.writeText(`INV-${client.id}`);
    alert('Invoice number copied to clipboard!');
  };

  const calculateCustomPayment = () => {
    if (!customAmount || !client?.amount) return null;
    const amount = parseFloat(customAmount);
    if (isNaN(amount)) return null;
    
    const total = client.amount;
    const remaining = total - amount;
    const months = Math.ceil(remaining / (total / 6)); // Estimate months
    const weekly = remaining / (months * 4);
    
    return { amount, remaining, months, weekly };
  };

  const customPlan = calculateCustomPayment();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans text-gray-900 pb-20">
      {/* AI Assistant Floating Button */}
      <button 
        onClick={() => setShowAIAssistant(!showAIAssistant)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full border-2 border-white animate-pulse flex items-center justify-center">
          <span className="text-xs">AI</span>
        </span>
      </button>

      {/* AI Assistant Panel */}
      {showAIAssistant && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 animate-in slide-in-from-bottom-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <h3 className="font-bold text-gray-900">Payment Assistant</h3>
            </div>
            <button onClick={() => setShowAIAssistant(false)} className="text-gray-400 hover:text-gray-600">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="bg-blue-50 rounded-lg p-3 mb-3">
            <p className="text-sm text-gray-700">{activePlan.aiAdvice || "I'm here to help you choose the best payment option for your business."}</p>
          </div>
          <div className="space-y-2">
            <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              Calculate ROI of this project
            </button>
            <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              What happens if I need to pause?
            </button>
            <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg flex items-center gap-2">
              <Wallet className="w-4 h-4" />
              Compare with traditional agencies
            </button>
          </div>
        </div>
      )}

      {/* Top Professional Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-blue-900">Vidi<span className="text-gray-900">Agency</span></span>
            <div className="h-6 w-px bg-gray-300 mx-2"></div>
            <div className="flex items-center gap-2 text-gray-500 text-sm font-medium bg-gray-100 px-3 py-1 rounded-full">
              <Lock size={12} />
              <span>Secure Payment Portal</span>
              <BadgeCheck className="w-4 h-4 text-green-500" />
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+15551234567" className="hover:text-blue-600">Need help? (555) 123-4567</a>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={16} />
              <span>Global Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={16} />
              <span>Verified Merchant</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: Project Invoice Summary */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-gray-400 text-xs font-bold uppercase tracking-widest">Project Summary</h2>
              <div className="flex gap-2">
                <button 
                  onClick={handleDownloadInvoice}
                  className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 px-3 py-1 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Export
                </button>
                <button 
                  onClick={handleCopyInvoiceNumber}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 px-3 py-1 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Copy className="w-4 h-4" />
                  Copy
                </button>
              </div>
            </div>
            
            <div className="mb-8">
              <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{client.service}</h1>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Ref ID: #{client.id.toString().padStart(6, '0')}</span>
                <div className="px-2 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">
                  Active Project
                </div>
              </div>
            </div>

            {client.project_description && (
              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="text-sm font-bold text-blue-900 mb-2">Project Scope</h3>
                <p className="text-sm text-blue-800">{client.project_description}</p>
              </div>
            )}

            <div className="space-y-6 border-t border-gray-100 pt-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                  <Building2 size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-900">Client</p>
                  <p className="text-gray-600">{client.company}</p>
                  <div className="flex gap-4 mt-1">
                    <a href={`mailto:${client.email}`} className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1">
                      <Mail className="w-3 h-3" />
                      Email
                    </a>
                    <a href={`tel:${client.phone}`} className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      Call
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Contact</p>
                  <p className="text-gray-600">{client.name}</p>
                  <p className="text-xs text-gray-500 mt-1">Project Manager Assigned</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                  <CreditCard size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Total Value</p>
                  <p className="text-xl font-bold text-gray-900">${totalAmount.toLocaleString()}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-500">Estimated delivery: 4-6 weeks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project ROI Calculator */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-blue-600" />
              ROI Calculator
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Estimated Monthly Revenue</span>
                <span className="font-bold text-green-600">+${Math.round(totalAmount * 1.5)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Time to ROI</span>
                <span className="font-bold text-blue-600">~3 months</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">3-Year Value</span>
                <span className="font-bold text-purple-600">${(totalAmount * 12).toLocaleString()}</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <button 
                onClick={() => setShowCalculator(!showCalculator)}
                className="w-full text-center text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                {showCalculator ? 'Hide' : 'Show'} Detailed Calculator
              </button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
            <p className="text-sm text-blue-800 font-medium mb-3 text-center">We accept all major secure payment methods</p>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {['VISA', 'AMEX', 'Master', 'PayPal'].map((method) => (
                <div key={method} className="h-10 bg-white rounded-lg border border-blue-200 flex items-center justify-center text-xs font-bold text-blue-900 hover:shadow-md transition-shadow">
                  {method}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <Shield className="w-3 h-3" />
              <span>256-bit SSL Encryption</span>
              <span className="mx-1">•</span>
              <Lock className="w-3 h-3" />
              <span>PCI DSS Compliant</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Payment Options */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8 pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Select Payment Plan</h2>
                  <p className="text-gray-500 mt-1">Choose the schedule that fits your financial workflow.</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Need help?</span>
                  <button className="text-sm text-blue-600 font-medium hover:text-blue-800 flex items-center gap-1">
                    <HelpCircle className="w-4 h-4" />
                    Chat Now
                  </button>
                </div>
              </div>
            </div>

            {/* Plan Cards */}
            <div className="p-8 pt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {plans.map((plan) => {
                const Icon = plan.icon;
                const isSelected = selectedPlanId === plan.id;
                return (
                  <button
                    key={plan.id}
                    onClick={() => setSelectedPlanId(plan.id)}
                    className={`
                      relative flex flex-col p-6 rounded-xl border-2 text-left transition-all duration-300 h-full
                      ${isSelected 
                        ? 'border-blue-600 bg-gradient-to-br from-blue-50 to-white shadow-lg scale-[1.01] z-10 ring-1 ring-blue-100' 
                        : 'border-gray-100 hover:border-blue-200 hover:bg-gray-50 hover:shadow-md'}
                    `}
                  >
                    {/* Badge */}
                    <div className={`absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded-full ${isSelected ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                      {plan.badge}
                    </div>

                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${isSelected ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                      <Icon size={24} />
                    </div>

                    <h3 className={`font-bold text-lg mb-1 ${isSelected ? 'text-blue-900' : 'text-gray-900'}`}>{plan.title}</h3>
                    <p className="text-sm text-gray-500 mb-4 h-12">{plan.description}</p>
                    
                    {/* Benefits List */}
                    {plan.benefits && (
                      <div className="space-y-2 mb-4">
                        {plan.benefits.slice(0, 2).map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="mt-auto pt-4 border-t border-gray-100/50 w-full">
                      <p className="text-xs text-gray-400 font-semibold uppercase">Amount Due Today</p>
                      <p className={`text-2xl font-extrabold ${isSelected ? 'text-blue-700' : 'text-gray-900'}`}>
                        ${plan.id === 'custom' ? 'Flexible' : plan.payNow.toLocaleString()}
                      </p>
                      {plan.id !== 'upfront' && plan.id !== 'custom' && (
                        <p className="text-xs text-gray-500 mt-1">
                          {plan.id === 'daily' ? 'billed daily' : plan.id === 'financing' ? 'billed monthly' : 'final payment on delivery'}
                        </p>
                      )}
                      {plan.id === 'custom' && (
                        <p className="text-xs text-blue-600 font-medium mt-1">Click to customize</p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Custom Payment Calculator */}
            {selectedPlanId === 'custom' && (
              <div className="px-8 pb-6 animate-in slide-in-from-bottom-4">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    Customize Your Payment Plan
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Initial Deposit Amount
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                        <input
                          type="number"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          placeholder={String(totalAmount / 2)}
                          className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div className="flex gap-2 mt-3">
                        {[25, 50, 75].map((percent) => (
                          <button
                            key={percent}
                            onClick={() => setCustomAmount(String((totalAmount * percent) / 100))}
                            className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600"
                          >
                            {percent}%
                          </button>
                        ))}
                      </div>
                    </div>
                    {customPlan && (
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-bold text-gray-900 mb-2">Your Custom Plan</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Today:</span>
                            <span className="font-bold">${customPlan.amount.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Remaining:</span>
                            <span>${customPlan.remaining.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Estimated timeline:</span>
                            <span>{customPlan.months} months</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Weekly payment:</span>
                            <span>${customPlan.weekly.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Contact & Preferences */}
            <div className="px-8 py-6 border-t border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Contact & Preferences</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email for Receipt
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <input
                  type="checkbox"
                  id="subscribe"
                  checked={subscribeUpdates}
                  onChange={(e) => setSubscribeUpdates(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="subscribe" className="text-sm text-gray-700">
                  Send me project updates and payment reminders
                </label>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="px-8 py-6 border-t border-gray-100 bg-gray-50">
              <h3 className="font-bold text-gray-900 mb-4">Select Payment Method</h3>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { id: 'card', label: 'Credit Card', icon: CreditCard },
                  { id: 'paypal', label: 'PayPal', icon: Wallet },
                  { id: 'bank', label: 'Bank Transfer', icon: Building2 },
                  { id: 'crypto', label: 'Crypto', icon: Key }
                ].map((method) => {
                  const Icon = method.icon;
                  return (
                    <button
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id)}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
                        paymentMethod === method.id
                          ? 'border-blue-600 bg-white shadow-sm'
                          : 'border-gray-200 bg-white hover:border-blue-200'
                      }`}
                    >
                      <Icon className={`w-6 h-6 mb-2 ${
                        paymentMethod === method.id ? 'text-blue-600' : 'text-gray-400'
                      }`} />
                      <span className="text-sm font-medium">{method.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Checkout Action Area */}
            <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 p-8 border-t border-gray-100">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                      <Receipt className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">
                        You are selecting the <span className="font-bold text-gray-900">{activePlan.title}</span>.
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {activePlan.frequency === 'subscription' 
                          ? 'This will set up an automatic recurring payment securely via Stripe.' 
                          : 'This is a one-time transaction for the current milestone.'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Award className="w-4 h-4 text-yellow-500" />
                      30-day money back
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-blue-500" />
                      Dedicated support
                    </span>
                    <span className="flex items-center gap-1">
                      <Smartphone className="w-4 h-4 text-purple-500" />
                      Mobile app access
                    </span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    ${selectedPlanId === 'custom' && customPlan ? customPlan.amount.toLocaleString() : activePlan.payNow.toLocaleString()}
                  </div>
                  <button
                    onClick={handlePayment}
                    disabled={isProcessing || (selectedPlanId === 'custom' && !customAmount)}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg shadow-blue-200/50 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.02] hover:shadow-xl"
                  >
                    {isProcessing ? (
                      <>
                        <Zap className="w-5 h-5 animate-spin" />
                        Processing Payment...
                      </>
                    ) : (
                      <>
                        <span>Complete Secure Payment</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    By clicking, you agree to our <a href="#" className="text-blue-600 hover:text-blue-800">Terms</a> and <a href="#" className="text-blue-600 hover:text-blue-800">Privacy Policy</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Need Help Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Need help deciding?</h3>
                <p className="text-blue-100">Our financial advisors are here to help you choose the perfect plan.</p>
              </div>
              <div className="flex gap-3">
                <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Schedule Call
                </button>
                <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Confirmation Modal */}
      {showPaymentConfirmation && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl animate-in slide-in-from-bottom-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
              <p className="text-gray-600 mb-6">
                Your payment of <span className="font-bold">${activePlan.payNow.toLocaleString()}</span> has been processed.
                Redirecting to your project dashboard...
              </p>
              <div className="flex justify-center gap-3">
                <span className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></span>
                <span className="w-3 h-3 bg-blue-600 rounded-full animate-pulse delay-100"></span>
                <span className="w-3 h-3 bg-blue-600 rounded-full animate-pulse delay-200"></span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}