"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // <--- FIXED: Added missing import
import { supabase } from '@/lib/supabase';   // <--- FIXED: Added missing import
import { sendQuoteEmail } from '@/lib/emailService';
import { 
  ArrowRight, ArrowLeft, Check, Sparkles, Zap, Clock, 
  Code2, Smartphone, Bot, LayoutDashboard, Workflow, Database,
  Globe, Palette, ShoppingCart, Rocket, Users, Mail, Phone, User,
  Building2, MessageSquare, CheckCircle2, PartyPopper, RefreshCw,
  Shield, Cpu, Send, Loader2, Star
} from 'lucide-react';

// ============================================================================
// PRICING DATA STRUCTURE 
// ============================================================================

interface Feature {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: React.ElementType;
  popular?: boolean;
}

interface Service {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  basePrice: number;
  gradient: string;
  features: Feature[];
}

const services: Service[] = [
  {
    id: "web-development",
    name: "Website Development",
    description: "Custom-built, high-performance websites from scratch",
    icon: Code2,
    basePrice: 2500,
    gradient: "from-blue-500 to-cyan-500",
    features: [
      { id: "pages-5", name: "Up to 5 Pages", description: "Home, About, Services, Contact, etc.", price: 0, icon: Globe },
      { id: "pages-10", name: "Up to 10 Pages", description: "Extended site with more content", price: 800, icon: Globe },
      { id: "pages-unlimited", name: "Unlimited Pages", description: "Large-scale website with no limits", price: 2000, icon: Globe },
      { id: "cms", name: "Content Management System", description: "Edit your content without coding", price: 600, icon: Database, popular: true },
      { id: "blog", name: "Blog System", description: "Publish articles and news updates", price: 400, icon: MessageSquare },
      { id: "seo", name: "SEO Optimization", description: "Rank higher on Google searches", price: 500, icon: Rocket, popular: true },
      { id: "analytics", name: "Analytics Dashboard", description: "Track visitors and conversions", price: 300, icon: LayoutDashboard },
      { id: "multilingual", name: "Multi-language Support", description: "Reach global audiences", price: 700, icon: Globe },
      { id: "animations", name: "Premium Animations", description: "Stunning micro-interactions", price: 450, icon: Sparkles },
    ]
  },
  {
    id: "web-redesign",
    name: "Website Redesign",
    description: "Transform your existing site into a modern masterpiece",
    icon: Palette,
    basePrice: 1800,
    gradient: "from-purple-500 to-pink-500",
    features: [
      { id: "ui-overhaul", name: "Complete UI Overhaul", description: "Fresh, modern visual design", price: 0, icon: Palette },
      { id: "ux-audit", name: "UX Audit & Improvements", description: "Optimize user journeys", price: 400, icon: Users, popular: true },
      { id: "mobile-first", name: "Mobile-First Redesign", description: "Perfect on all devices", price: 500, icon: Smartphone },
      { id: "speed-optimization", name: "Speed Optimization", description: "Lightning-fast load times", price: 350, icon: Zap, popular: true },
      { id: "accessibility", name: "Accessibility Compliance", description: "WCAG 2.1 standards", price: 450, icon: Shield },
      { id: "content-migration", name: "Content Migration", description: "Transfer all existing content", price: 300, icon: Database },
      { id: "brand-refresh", name: "Brand Refresh", description: "Updated colors, fonts, imagery", price: 600, icon: Sparkles },
    ]
  },
  {
    id: "mobile-app",
    name: "Mobile App Development",
    description: "Native iOS & Android apps that users love",
    icon: Smartphone,
    basePrice: 8000,
    gradient: "from-green-500 to-emerald-500",
    features: [
      { id: "ios", name: "iOS App", description: "Native Swift for Apple devices", price: 0, icon: Smartphone },
      { id: "android", name: "Android App", description: "Native Kotlin for Android", price: 2000, icon: Smartphone },
      { id: "cross-platform", name: "Cross-Platform (Both)", description: "React Native / Flutter", price: 3500, icon: Smartphone, popular: true },
      { id: "push-notifications", name: "Push Notifications", description: "Engage users with alerts", price: 500, icon: MessageSquare },
      { id: "offline-mode", name: "Offline Mode", description: "Works without internet", price: 800, icon: Database },
      { id: "in-app-payments", name: "In-App Payments", description: "Monetize with subscriptions", price: 1200, icon: ShoppingCart, popular: true },
      { id: "social-login", name: "Social Login", description: "Sign in with Google, Apple, etc.", price: 400, icon: Users },
      { id: "analytics-mobile", name: "Mobile Analytics", description: "Track user behavior", price: 350, icon: LayoutDashboard },
    ]
  },
  {
    id: "ai-integration",
    name: "AI & Chatbot Integration",
    description: "Intelligent automation that works 24/7",
    icon: Bot,
    basePrice: 1500,
    gradient: "from-orange-500 to-red-500",
    features: [
      { id: "chatbot-basic", name: "Basic AI Chatbot", description: "FAQ & lead capture", price: 0, icon: Bot },
      { id: "chatbot-advanced", name: "Advanced AI Agent", description: "Trained on your business data", price: 1200, icon: Cpu, popular: true },
      { id: "voice-agent", name: "AI Voice Agent", description: "Phone call automation", price: 2000, icon: Phone },
      { id: "whatsapp-bot", name: "WhatsApp Integration", description: "Chat on WhatsApp 24/7", price: 600, icon: MessageSquare, popular: true },
      { id: "instagram-bot", name: "Instagram DM Bot", description: "Auto-reply to DMs", price: 500, icon: MessageSquare },
      { id: "appointment-booking", name: "Appointment Booking", description: "AI schedules meetings", price: 700, icon: Clock },
      { id: "lead-qualification", name: "Lead Qualification", description: "Score and route leads", price: 800, icon: Users },
    ]
  },
  {
    id: "automation",
    name: "Business Automation",
    description: "Streamline workflows and eliminate manual tasks",
    icon: Workflow,
    basePrice: 2000,
    gradient: "from-indigo-500 to-violet-500",
    features: [
      { id: "crm-integration", name: "CRM Integration", description: "Connect HubSpot, Salesforce, etc.", price: 500, icon: Database, popular: true },
      { id: "email-automation", name: "Email Automation", description: "Drip campaigns & follow-ups", price: 400, icon: Mail },
      { id: "invoice-automation", name: "Invoice Automation", description: "Auto-generate & send invoices", price: 600, icon: ShoppingCart },
      { id: "data-sync", name: "Multi-Platform Sync", description: "Keep all tools in sync", price: 700, icon: RefreshCw },
      { id: "custom-dashboard", name: "Custom Dashboard", description: "Real-time business metrics", price: 1200, icon: LayoutDashboard, popular: true },
      { id: "api-development", name: "Custom API Development", description: "Connect any system", price: 1500, icon: Code2 },
      { id: "zapier-setup", name: "Zapier/Make Setup", description: "No-code automation flows", price: 350, icon: Zap },
    ]
  },
  {
    id: "ecommerce",
    name: "E-Commerce Store",
    description: "Sell products online with a powerful storefront",
    icon: ShoppingCart,
    basePrice: 4000,
    gradient: "from-pink-500 to-rose-500",
    features: [
      { id: "products-50", name: "Up to 50 Products", description: "Small catalog store", price: 0, icon: ShoppingCart },
      { id: "products-500", name: "Up to 500 Products", description: "Medium-sized store", price: 800, icon: ShoppingCart },
      { id: "products-unlimited", name: "Unlimited Products", description: "Enterprise catalog", price: 1500, icon: ShoppingCart },
      { id: "payment-gateway", name: "Payment Gateway", description: "Stripe, PayPal integration", price: 400, icon: ShoppingCart, popular: true },
      { id: "inventory-management", name: "Inventory Management", description: "Track stock levels", price: 600, icon: Database },
      { id: "shipping-integration", name: "Shipping Integration", description: "Real-time shipping rates", price: 500, icon: Rocket },
      { id: "abandoned-cart", name: "Abandoned Cart Recovery", description: "Win back lost sales", price: 450, icon: Mail, popular: true },
      { id: "reviews", name: "Product Reviews", description: "Build social proof", price: 300, icon: Star },
    ]
  },
];

const timelines = [
  { id: "relaxed", name: "Relaxed", description: "8-12 weeks", multiplier: 1.0, icon: Clock },
  { id: "standard", name: "Standard", description: "4-6 weeks", multiplier: 1.15, icon: Zap },
  { id: "rush", name: "Rush", description: "2-3 weeks", multiplier: 1.4, icon: Rocket },
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function GetStartedPage() {
  const router = useRouter(); // <--- FIXED: Initialized Router
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedTimeline, setSelectedTimeline] = useState(timelines[1]); // Default: Standard
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [animatedPrice, setAnimatedPrice] = useState(0);
  
  const totalSteps = 5;
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate total price
  const calculatePrice = () => {
    if (!selectedService) return 0;
    
    let total = selectedService.basePrice;
    
    selectedFeatures.forEach(featureId => {
      const feature = selectedService.features.find(f => f.id === featureId);
      if (feature) total += feature.price;
    });
    
    total *= selectedTimeline.multiplier;
    
    return Math.round(total);
  };

  const totalPrice = calculatePrice();

  // Animate price counter
  useEffect(() => {
    const duration = 500;
    const steps = 20;
    let current = animatedPrice;
    const increment = (totalPrice - current) / steps;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      current += increment;
      setAnimatedPrice(Math.round(current));
      
      if (stepCount >= steps) {
        setAnimatedPrice(totalPrice);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPrice]);

  // Handle feature toggle
  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // 1. Prepare Data
    const quoteData = {
      from_name: contactInfo.name,
      from_email: contactInfo.email,
      phone: contactInfo.phone,
      company: contactInfo.company || 'Not provided',
      service: selectedService?.name || 'Unknown',
      features: selectedFeatures.join(', '),
      timeline: selectedTimeline.name,
      total_price: `$${totalPrice.toLocaleString()}`,
      message: contactInfo.message || 'No message',
    };

    try {
      const emailjs = await import('@emailjs/browser');

      // 2. SEND WITH THE CORRECT COMBINATION
      await emailjs.send(
        'service_npei2gf',       // <--- Your REAL Service ID 
        'template_2u2lhr9',      // <--- Your Verified New Template ID
        quoteData,
        '-IObU0502rQ2VlNHa'      // <--- Your Public Key 
      );

      console.log('SUCCESS! Email sent.');
      setIsSubmitting(false);
      setCurrentStep(5); // Show Success Screen

    } catch (error) {
      console.error('FAILED:', error);
      alert("Error sending email. Please check the console.");
      setIsSubmitting(false);
    }
  };

  // --- FIXED HANDLE ACCEPT FUNCTION (Cleaned up the mess) ---
  const handleAccept = async () => {
    // 1. Validate
    if (!selectedService) return;
    setIsSubmitting(true);
    
    try {
      // 2. Save Client to Database
      const { data, error } = await supabase
        .from('clients')
        .insert([
          {
            name: contactInfo.name,
            email: contactInfo.email,
            phone: contactInfo.phone,
            company: contactInfo.company || 'Not Provided',
            service: selectedService.name,
            package: totalPrice > 2000 ? 'Grow' : 'Launch', // Simple logic to pick package
            amount: totalPrice, 
            paid: 0,
            status: 'Not Started',
            industry: `Features: ${selectedFeatures.join(', ')}. Timeline: ${selectedTimeline.name}`
          }
        ])
        .select();

      if (error) throw error;

      // 3. Redirect to Payment Portal
      if (data && data.length > 0) {
        const newClientId = data[0].id;
        
        // Show confetti briefly
        setShowConfetti(true); 
        
        // Wait 1 second then go to payment
        setTimeout(() => {
          router.push(`/pay/${newClientId}`);
        }, 1000);
      }

    } catch (error) {
      console.error('Error creating project:', error);
      alert("System Error: Could not start project. Please check your connection.");
      setIsSubmitting(false);
    }
  };

  // Navigation
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
      containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return selectedService !== null;
      case 2: return selectedFeatures.length > 0;
      case 3: return true; // Timeline always has default
      case 4: return contactInfo.name && contactInfo.email && contactInfo.phone;
      default: return true;
    }
  };

  // ============================================================================
  // RENDER FUNCTIONS
  // ============================================================================

  const renderProgressBar = () => (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between mb-4">
        {[1, 2, 3, 4, 5].map((step) => (
          <div key={step} className="flex items-center">
            <div className={`
              w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500
              ${currentStep >= step 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-200' 
                : 'bg-gray-100 text-gray-400'}
              ${currentStep === step ? 'scale-110 ring-4 ring-blue-100' : ''}
            `}>
              {currentStep > step ? <Check size={18} /> : step}
            </div>
            {step < 5 && (
              <div className={`w-12 sm:w-20 md:w-32 h-1 mx-2 rounded-full transition-all duration-500 ${
                currentStep > step ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-200'
              }`} />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between text-xs font-medium text-gray-500">
        <span>Service</span>
        <span>Features</span>
        <span>Timeline</span>
        <span>Contact</span>
        <span>Quote</span>
      </div>
    </div>
  );

  const renderStep1 = () => (
    <div className="animate-fadeIn">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          What would you like to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">build?</span>
        </h2>
        <p className="text-gray-500 text-lg">Select the service that best fits your project needs</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          const isSelected = selectedService?.id === service.id;
          
          return (
            <button
              key={service.id}
              onClick={() => {
                setSelectedService(service);
                setSelectedFeatures([service.features[0].id]); // Auto-select first feature
              }}
              className={`
                relative p-6 rounded-3xl text-left transition-all duration-300 group
                ${isSelected 
                  ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-200 scale-[1.02]' 
                  : 'bg-white border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl'}
              `}
            >
              {/* Selection indicator */}
              <div className={`
                absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center transition-all
                ${isSelected ? 'bg-white text-blue-600' : 'bg-gray-100 text-transparent'}
              `}>
                <Check size={14} />
              </div>
              
              {/* Icon */}
              <div className={`
                w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all
                ${isSelected 
                  ? 'bg-white/20' 
                  : `bg-gradient-to-br ${service.gradient} text-white`}
              `}>
                <Icon size={28} />
              </div>
              
              {/* Content */}
              <h3 className={`text-xl font-bold mb-2 ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                {service.name}
              </h3>
              <p className={`text-sm mb-4 ${isSelected ? 'text-blue-100' : 'text-gray-500'}`}>
                {service.description}
              </p>
              
              {/* Price indicator */}
              <div className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-blue-600'}`}>
                Starting at ${service.basePrice.toLocaleString()}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="animate-fadeIn">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Customize your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{selectedService?.name}</span>
        </h2>
        <p className="text-gray-500 text-lg">Select the features you need (you can always add more later)</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {selectedService?.features.map((feature) => {
          const Icon = feature.icon;
          const isSelected = selectedFeatures.includes(feature.id);
          
          return (
            <button
              key={feature.id}
              onClick={() => toggleFeature(feature.id)}
              className={`
                relative p-5 rounded-2xl text-left transition-all duration-300 flex items-start gap-4
                ${isSelected 
                  ? 'bg-blue-50 border-2 border-blue-500 shadow-lg shadow-blue-100' 
                  : 'bg-white border-2 border-gray-100 hover:border-gray-200 hover:shadow-md'}
              `}
            >
              {/* Checkbox */}
              <div className={`
                w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-all mt-0.5
                ${isSelected 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-transparent'}
              `}>
                <Check size={14} />
              </div>
              
              {/* Content */}
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className={`font-bold ${isSelected ? 'text-blue-900' : 'text-gray-900'}`}>
                    {feature.name}
                  </h4>
                  {feature.popular && (
                    <span className="px-2 py-0.5 bg-orange-100 text-orange-600 text-xs font-bold rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
              
              {/* Price */}
              <div className={`text-sm font-bold flex-shrink-0 ${isSelected ? 'text-blue-600' : 'text-gray-400'}`}>
                {feature.price === 0 ? 'Included' : `+$${feature.price.toLocaleString()}`}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="animate-fadeIn">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          When do you need it <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">delivered?</span>
        </h2>
        <p className="text-gray-500 text-lg">Faster delivery requires more resources and has adjusted pricing</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {timelines.map((timeline) => {
          const Icon = timeline.icon;
          const isSelected = selectedTimeline.id === timeline.id;
          
          return (
            <button
              key={timeline.id}
              onClick={() => setSelectedTimeline(timeline)}
              className={`
                relative p-8 rounded-3xl text-center transition-all duration-300
                ${isSelected 
                  ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-200 scale-105' 
                  : 'bg-white border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl'}
              `}
            >
              {/* Icon */}
              <div className={`
                w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all
                ${isSelected ? 'bg-white/20' : 'bg-gray-100'}
              `}>
                <Icon size={32} className={isSelected ? 'text-white' : 'text-gray-600'} />
              </div>
              
              {/* Content */}
              <h3 className={`text-2xl font-bold mb-2 ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                {timeline.name}
              </h3>
              <p className={`text-lg mb-4 ${isSelected ? 'text-blue-100' : 'text-gray-500'}`}>
                {timeline.description}
              </p>
              
              {/* Multiplier */}
              <div className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-gray-400'}`}>
                {timeline.multiplier === 1 ? 'Standard Rate' : `+${Math.round((timeline.multiplier - 1) * 100)}% Rush Fee`}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="animate-fadeIn">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Almost there! <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Tell us about you</span>
        </h2>
        <p className="text-gray-500 text-lg">We'll prepare your personalized quote and get back to you shortly</p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                <User size={14} className="inline mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                value={contactInfo.name}
                onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                <Building2 size={14} className="inline mr-2" />
                Company (Optional)
              </label>
              <input
                type="text"
                value={contactInfo.company}
                onChange={(e) => setContactInfo({ ...contactInfo, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                placeholder="Acme Inc."
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                <Mail size={14} className="inline mr-2" />
                Email Address *
              </label>
              <input
                type="email"
                value={contactInfo.email}
                onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                placeholder="john@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                <Phone size={14} className="inline mr-2" />
                Phone Number *
              </label>
              <input
                type="tel"
                value={contactInfo.phone}
                onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              <MessageSquare size={14} className="inline mr-2" />
              Additional Details (Optional)
            </label>
            <textarea
              value={contactInfo.message}
              onChange={(e) => setContactInfo({ ...contactInfo, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none resize-none"
              placeholder="Tell us more about your project, timeline, or any specific requirements..."
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="animate-fadeIn">
      {!isAccepted ? (
        <>
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-200">
              <CheckCircle2 size={40} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Your Quote is <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">Ready!</span>
            </h2>
            <p className="text-gray-500 text-lg">We've sent a copy to {contactInfo.email}. Review your project details below.</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {/* Quote Card */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden mb-8">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm font-medium">Project Quote for</p>
                    <h3 className="text-2xl font-bold">{contactInfo.name}</h3>
                    {contactInfo.company && <p className="text-blue-100">{contactInfo.company}</p>}
                  </div>
                  <div className="text-right">
                    <p className="text-blue-100 text-sm font-medium">Estimated Total</p>
                    <p className="text-4xl font-extrabold">${animatedPrice.toLocaleString()}</p>
                  </div>
                </div>
              </div>
              
              {/* Details */}
              <div className="p-6">
                {/* Service */}
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Selected Service</h4>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedService?.gradient} flex items-center justify-center text-white`}>
                      {selectedService && <selectedService.icon size={24} />}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{selectedService?.name}</p>
                      <p className="text-sm text-gray-500">Base: ${selectedService?.basePrice.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
                
                {/* Features */}
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Selected Features</h4>
                  <div className="space-y-2">
                    {selectedFeatures.map(featureId => {
                      const feature = selectedService?.features.find(f => f.id === featureId);
                      if (!feature) return null;
                      return (
                        <div key={featureId} className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-2">
                            <Check size={16} className="text-green-500" />
                            <span className="text-gray-700">{feature.name}</span>
                          </div>
                          <span className="text-gray-500 text-sm">
                            {feature.price === 0 ? 'Included' : `+$${feature.price.toLocaleString()}`}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Timeline */}
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Delivery Timeline</h4>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                      <selectedTimeline.icon size={24} className="text-gray-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{selectedTimeline.name} ({selectedTimeline.description})</p>
                      <p className="text-sm text-gray-500">
                        {selectedTimeline.multiplier === 1 ? 'Standard rate applied' : `${Math.round((selectedTimeline.multiplier - 1) * 100)}% rush fee applied`}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Total */}
                <div className="flex items-center justify-between py-4 bg-gray-50 rounded-2xl px-6">
                  <span className="text-xl font-bold text-gray-900">Total Investment</span>
                  <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    ${totalPrice.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentStep(1)}
                className="px-8 py-4 rounded-full font-bold text-gray-700 bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
              >
                <RefreshCw size={18} />
                Adjust Quote
              </button>
              <button
                onClick={handleAccept}
                disabled={isSubmitting}
                className="px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shadow-lg shadow-green-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <Check size={18} />
                )}
                Accept & Proceed
              </button>
            </div>
          </div>
        </>
      ) : (
        /* Accepted State */
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-200 animate-bounce">
            <PartyPopper size={48} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            🎉 You're All Set!
          </h2>
          <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
            Thank you, <span className="font-bold text-blue-600">{contactInfo.name}</span>! 
            We've received your project request and will get back to you within <span className="font-bold">24 hours</span>.
          </p>
          <p className="text-gray-500 mb-10">
            A confirmation email has been sent to <span className="font-bold">{contactInfo.email}</span>
          </p>
          
          <div className="bg-blue-50 rounded-3xl p-8 max-w-xl mx-auto mb-10">
            <h3 className="font-bold text-blue-900 mb-4">What happens next?</h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                <p className="text-blue-800">Our team reviews your requirements in detail</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                <p className="text-blue-800">We schedule a free discovery call to discuss your project</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                <p className="text-blue-800">You receive a detailed proposal with timeline and milestones</p>
              </div>
            </div>
          </div>
          
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white bg-gray-900 hover:bg-blue-700 transition-all"
          >
            Back to Home
            <ArrowRight size={18} />
          </Link>
        </div>
      )}
      
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10%',
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              <div 
                className="w-3 h-3 rounded-sm"
                style={{
                  backgroundColor: ['#3B82F6', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B'][Math.floor(Math.random() * 5)],
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );

  // ============================================================================
  // MAIN RENDER
  // ============================================================================

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold flex items-center gap-1">
            <span className="text-blue-600">Vidi</span>
            <span className="text-gray-900">Agency</span>
          </Link>
          
          {/* Live Price Display */}
          {currentStep > 1 && currentStep < 5 && (
            <div className="hidden sm:flex items-center gap-3 bg-gray-900 text-white px-6 py-2 rounded-full">
              <span className="text-gray-400 text-sm">Estimated:</span>
              <span className="text-xl font-bold">${animatedPrice.toLocaleString()}</span>
            </div>
          )}
          
          <Link 
            href="/"
            className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors"
          >
            ← Back to site
          </Link>
        </div>
      </header>
      
      {/* Main Content */}
      <div ref={containerRef} className="pt-24 pb-32 container mx-auto px-6 md:px-12 lg:px-20 max-w-6xl">
        {renderProgressBar()}
        
        <div className="min-h-[500px]">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}
          {currentStep === 5 && renderStep5()}
        </div>
      </div>
      
      {/* Fixed Bottom Navigation */}
      {currentStep < 5 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 py-4 px-6 z-40">
          <div className="container mx-auto max-w-6xl flex items-center justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all
                ${currentStep === 1 
                  ? 'text-gray-300 cursor-not-allowed' 
                  : 'text-gray-700 hover:bg-gray-100'}
              `}
            >
              <ArrowLeft size={18} />
              Back
            </button>
            
            {/* Mobile Price Display */}
            {currentStep > 1 && (
              <div className="sm:hidden text-center">
                <p className="text-xs text-gray-400">Estimated</p>
                <p className="text-lg font-bold text-gray-900">${animatedPrice.toLocaleString()}</p>
              </div>
            )}
            
            <button
              onClick={currentStep === 4 ? handleSubmit : nextStep}
              disabled={!canProceed() || isSubmitting}
              className={`
                flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all
                ${canProceed() 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-200 hover:shadow-xl' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'}
              `}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Processing...
                </>
              ) : currentStep === 4 ? (
                <>
                  Get My Quote
                  <Send size={18} />
                </>
              ) : (
                <>
                  Continue
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </div>
        </div>
      )}
      
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .animate-confetti {
          animation: confetti 3s ease-out forwards;
        }
      `}</style>
    </main>
  );
}