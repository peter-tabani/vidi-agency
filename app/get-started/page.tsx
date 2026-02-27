"use client";

import { useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { 
  ArrowRight, ArrowLeft, Check, Zap, Clock, 
  Code2, Smartphone, Bot, LayoutDashboard, Workflow, Database,
  Globe, Palette, ShoppingCart, Rocket, Users, Mail, Phone, User,
  Building2, MessageSquare, CheckCircle2, PartyPopper, RefreshCw, PaintBucket,
  Shield, Cloud, FileText, LifeBuoy, BarChart, TrendingUp,
  PenTool, Code, Server, Target, Wrench,
  Fingerprint, Key, Lock, Sparkles, Share2, Trophy, Moon, Watch, Mic, UploadCloud,
  Split, Headphones, Layers, LineChart, Languages, ShieldCheck, Bell, CalendarCheck,
  UserMinus, Forward, Activity, Send, Loader2, Star, Plug, PieChart, Award,
  GitBranch, Cpu, Search
} from 'lucide-react';

// ============================================================================
// NEW SERVICE STRUCTURE (AI first, then others, grouped by category)
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
  category: string; // for grouping
}

const services: Service[] = [
  // ---------- CATEGORY 1: AI Automation Systems ----------
  {
    id: "ai-lead-capture",
    name: "AI Lead Capture & Qualification",
    description: "AI website assistant that qualifies leads, books appointments, and integrates with your CRM.",
    icon: Bot,
    basePrice: 1000,
    gradient: "from-blue-600 to-indigo-600",
    category: "AI Automation Systems",
    features: [
      { id: "lead-website-assistant", name: "AI Website Assistant", description: "Engages every visitor 24/7", price: 0, icon: Bot },
      { id: "lead-qualification-chatbot", name: "Lead Pre‑Qualification", description: "Asks the right questions to identify hot leads", price: 300, icon: MessageSquare },
      { id: "appointment-booking", name: "Appointment Booking Automation", description: "Syncs with your calendar and books meetings", price: 400, icon: CalendarCheck, popular: true },
      { id: "form-filtering", name: "Contact Form AI Filtering", description: "Filters spam and routes genuine inquiries", price: 200, icon: Shield },
      { id: "crm-integration", name: "CRM Integration (HubSpot, Zoho, etc.)", description: "Leads automatically saved to your CRM", price: 500, icon: Database, popular: true },
      { id: "hot-lead-alert", name: "Hot Lead SMS Alerts", description: "Instant notification when a hot lead converts", price: 150, icon: Bell },
    ]
  },
  {
    id: "ai-customer-engagement",
    name: "AI Customer Engagement",
    description: "24/7 AI assistants across website, WhatsApp, Instagram, and email.",
    icon: MessageSquare,
    basePrice: 1500,
    gradient: "from-purple-600 to-pink-600",
    category: "AI Automation Systems",
    features: [
      { id: "24-7-website-assistant", name: "24/7 Website AI Assistant", description: "Always‑on chat support", price: 450, icon: Bot }, // reused in-app-support
      { id: "whatsapp-automation", name: "WhatsApp DM Automation", description: "Automated replies and lead capture on WhatsApp", price: 500, icon: Layers, popular: true },
      { id: "instagram-automation", name: "Instagram DM Automation", description: "Engage followers automatically via DM", price: 500, icon: Share2 },
      { id: "email-autoresponder-ai", name: "AI Email Autoresponder", description: "Smart email follow‑ups based on customer behaviour", price: 400, icon: Mail, popular: true },
      { id: "faq-ai-system", name: "FAQ AI System", description: "Train AI on your FAQs for instant answers", price: 300, icon: FileText },
      { id: "multi-language", name: "Multi‑Language Support", description: "Chat in English, Spanish, French, etc.", price: 400, icon: Languages },
    ]
  },
  {
    id: "ai-workflow-automation",
    name: "AI Workflow Automation",
    description: "Automate repetitive tasks, CRM, email, sales pipelines, and internal processes.",
    icon: Workflow,
    basePrice: 2000,
    gradient: "from-indigo-500 to-violet-500",
    category: "AI Automation Systems",
    features: [
      { id: "crm-integration", name: "CRM Integration", description: "Connect HubSpot, Salesforce, etc.", price: 500, icon: Database, popular: true },
      { id: "email-automation", name: "Email Automation", description: "Drip campaigns & follow‑ups", price: 400, icon: Mail },
      { id: "invoice-automation", name: "Invoice Automation", description: "Auto‑generate & send invoices", price: 600, icon: ShoppingCart },
      { id: "data-sync", name: "Multi‑Platform Sync", description: "Keep all tools in sync", price: 700, icon: RefreshCw },
      { id: "custom-dashboard", name: "Custom Dashboard", description: "Real‑time business metrics", price: 1200, icon: LayoutDashboard, popular: true },
      { id: "api-development", name: "Custom API Development", description: "Connect any system", price: 1500, icon: Code2 },
      { id: "zapier-setup", name: "Zapier/Make Setup", description: "No‑code automation flows", price: 350, icon: Zap },
    ]
  },
  {
    id: "ai-knowledge-systems",
    name: "AI Knowledge Systems",
    description: "Internal AI knowledge base trained on your documents, providing instant answers to employees or customers.",
    icon: Database,
    basePrice: 1500,
    gradient: "from-amber-500 to-orange-600",
    category: "AI Automation Systems",
    features: [
      { id: "internal-knowledge-base", name: "Internal Knowledge Base", description: "AI assistant for employees to find company info", price: 800, icon: Layers, popular: true },
      { id: "document-search", name: "AI Document Search", description: "Search across all company documents", price: 500, icon: FileText },
      { id: "support-assistant", name: "Customer Support Assistant", description: "AI that handles common support queries", price: 450, icon: Headphones },
      { id: "document-training", name: "Train on Your Documents", description: "We train the AI on your PDFs, manuals, etc.", price: 500, icon: Cpu, popular: true },
      { id: "multi-language", name: "Multi‑Language Support", description: "Answers in multiple languages", price: 400, icon: Languages },
    ]
  },

  // ---------- CATEGORY 2: Digital Product & Web Services ----------
  {
    id: "web-development",
    name: "Website Development",
    description: "High‑performance, conversion‑optimised websites built with Next.js.",
    icon: Code2,
    basePrice: 700,
    gradient: "from-blue-600 to-indigo-600",
    category: "Digital Product & Web Services",
    features: [
      { id: "pages-5", name: "Up to 5 Pages", description: "Standard site (Home, About, Services, Contact)", price: 0, icon: Globe },
      { id: "pages-10", name: "Up to 10 Pages", description: "More space for extra services", price: 600, icon: Globe },
      { id: "pages-unlimited", name: "Unlimited Pages", description: "A massive site with no limits", price: 1800, icon: Globe },
      { id: "ssl", name: "SSL Security", description: "The 'Secure' padlock icon", price: 0, icon: Shield },
      { id: "privacy", name: "Legal & Privacy Compliance", description: "Cookie pop‑ups and legal pages", price: 300, icon: Shield, popular: true },
      { id: "mobile", name: "Mobile Friendly", description: "Looks perfect on all devices", price: 0, icon: Smartphone },
      { id: "speed", name: "Speed Boost", description: "Loads under 2 seconds", price: 450, icon: Zap, popular: true },
      { id: "cms", name: "Easy‑Edit Admin Panel", description: "Change text and photos yourself", price: 500, icon: LayoutDashboard },
      { id: "seo", name: "Google Ranking (SEO)", description: "Helps you show up on Google", price: 600, icon: Rocket, popular: true },
      { id: "analytics", name: "Visitor Tracking", description: "See who visits your site", price: 250, icon: BarChart },
    ]
  },
  {
    id: "website-redesign",
    name: "Website Redesign",
    description: "Modernise your outdated site with better performance & conversion.",
    icon: PaintBucket,
    basePrice: 600,
    gradient: "from-purple-600 to-pink-600",
    category: "Digital Product & Web Services",
    features: [
      { id: "ui-refresh", name: "UI/UX Modernisation", description: "Fresh, modern 2025 design", price: 0, icon: Palette },
      { id: "mobile-fix", name: "Mobile Responsiveness Fix", description: "Fix layout issues on phones", price: 200, icon: Smartphone },
      { id: "branding", name: "Brand Style Guide", description: "New colours, typography, logo polish", price: 350, icon: PenTool },
      { id: "speed-audit", name: "Speed & Performance Overhaul", description: "Fix slow load times", price: 400, icon: Zap, popular: true },
      { id: "security-patch", name: "Security Hardening", description: "Fix vulnerabilities", price: 200, icon: Shield },
      { id: "migration-content", name: "Content Migration", description: "Safely move blogs, images, text", price: 400, icon: Database },
      { id: "platform-switch", name: "Platform Migration", description: "Move from Wix/WordPress to React", price: 800, icon: Server, popular: true },
      { id: "seo-retain", name: "SEO Rank Protection", description: "301 redirects to keep rankings", price: 500, icon: TrendingUp },
      { id: "cro", name: "Conversion Rate Optimisation", description: "Redesign CTAs to get more leads", price: 450, icon: Target },
    ]
  },
  {
    id: "web-app-development",
    name: "Web App Development",
    description: "Custom web applications, admin dashboards, internal tools, and SaaS MVPs.",
    icon: Code2,
    basePrice: 2500,
    gradient: "from-cyan-500 to-blue-600",
    category: "Digital Product & Web Services",
    features: [
      { id: "admin-dashboards", name: "Admin Dashboard", description: "Custom dashboard for your team", price: 1200, icon: LayoutDashboard },
      { id: "internal-tools", name: "Internal Tools", description: "Tailored tools to streamline operations", price: 1500, icon: Wrench, popular: true },
      { id: "customer-portals", name: "Customer Portals", description: "Secure login areas for clients", price: 2000, icon: Users },
      { id: "saas-mvp", name: "SaaS MVP", description: "Minimum viable product for your SaaS idea", price: 3000, icon: Rocket, popular: true },
      { id: "api-integration", name: "Custom API Development", description: "Connect any system", price: 1500, icon: Code2 },
    ]
  },
  {
    id: "ai-integration",
    name: "AI Integration",
    description: "Add AI chatbots, assistants, and automation to your existing website, Shopify, WordPress, or web app.",
    icon: Plug,
    basePrice: 1000,
    gradient: "from-teal-500 to-emerald-600",
    category: "Digital Product & Web Services",
    features: [
      { id: "existing-website-ai", name: "AI for Existing Website", description: "Add an AI assistant to your current site", price: 500, icon: Bot, popular: true },
      { id: "shopify-ai", name: "Shopify AI Chatbot", description: "AI that helps customers on your Shopify store", price: 600, icon: ShoppingCart },
      { id: "wordpress-ai", name: "WordPress AI Plugin", description: "AI assistant for WordPress sites", price: 600, icon: Globe },
      { id: "webapp-ai", name: "AI Inside Web App", description: "Integrate AI into your web app via API", price: 800, icon: Code2 },
      { id: "crm-ai-connect", name: "CRM AI Connection", description: "Connect AI to your CRM", price: 500, icon: Database },
    ]
  },

  // ---------- CATEGORY 3: Revenue Optimization ----------
  {
    id: "ecommerce-ai-optimization",
    name: "E‑commerce AI Optimization",
    description: "AI‑powered cart recovery, product recommendations, and automated follow‑ups for online stores.",
    icon: ShoppingCart,
    basePrice: 1200,
    gradient: "from-pink-500 to-rose-500",
    category: "Revenue Optimization",
    features: [
      { id: "cart-recovery", name: "Abandoned Cart Recovery", description: "Automated emails/SMS to recover lost sales", price: 450, icon: Mail, popular: true },
      { id: "product-recommendations", name: "AI Product Recommendations", description: "Personalised suggestions for each visitor", price: 900, icon: Sparkles },
      { id: "follow-up-sequences", name: "Automated Follow‑up Sequences", description: "Post‑purchase emails to increase repeat sales", price: 400, icon: GitBranch },
      { id: "conversion-dashboard", name: "Conversion Dashboard", description: "Real‑time conversion tracking", price: 300, icon: BarChart },
    ]
  },
  {
    id: "sales-automation",
    name: "Sales Automation Systems",
    description: "Automate outbound follow‑ups, lead scoring, and CRM intelligence to boost sales.",
    icon: TrendingUp,
    basePrice: 1500,
    gradient: "from-green-500 to-emerald-600",
    category: "Revenue Optimization",
    features: [
      { id: "outbound-followups", name: "Automated Outbound Follow‑ups", description: "Sequences that nurture leads", price: 500, icon: Forward, popular: true },
      { id: "lead-scoring", name: "AI Lead Scoring", description: "Automatically score leads based on behaviour", price: 600, icon: Target },
      { id: "crm-intelligence", name: "CRM Intelligence", description: "Enhance CRM with AI insights", price: 500, icon: Database },
      { id: "sales-pipeline", name: "Sales Pipeline Automation", description: "Move leads through stages automatically", price: 700, icon: GitBranch },
    ]
  },

  // ---------- CATEGORY 4: Analytics & Intelligence ----------
  {
    id: "bi-dashboards",
    name: "Business Intelligence Dashboards",
    description: "Custom dashboards visualising KPIs, sales performance, and executive reports.",
    icon: PieChart,
    basePrice: 2000,
    gradient: "from-blue-500 to-indigo-600",
    category: "Analytics & Intelligence",
    features: [
      { id: "data-visualization", name: "Custom Data Visualisation", description: "Turn data into actionable charts", price: 1200, icon: BarChart },
      { id: "kpi-dashboards", name: "KPI Tracking Dashboards", description: "Monitor key metrics in real time", price: 1000, icon: LayoutDashboard, popular: true },
      { id: "sales-performance", name: "Sales Performance Tracking", description: "Dashboards for revenue and team performance", price: 800, icon: TrendingUp },
      { id: "executive-reporting", name: "Executive Reporting", description: "High‑level summaries for leadership", price: 900, icon: Award },
    ]
  },

  // ---------- CATEGORY 5: AI Infrastructure ----------
  {
    id: "ai-deployment",
    name: "AI Deployment & Hosting",
    description: "Secure cloud deployment, monitoring, and API management for your AI systems.",
    icon: Cloud,
    basePrice: 1000,
    gradient: "from-gray-500 to-slate-600",
    category: "AI Infrastructure",
    features: [
      { id: "secure-deployment", name: "Secure AI Deployment", description: "Deploy on AWS/Vercel with best practices", price: 600, icon: Lock, popular: true },
      { id: "cloud-hosting", name: "Cloud Hosting Configuration", description: "Set up and manage cloud servers", price: 600, icon: Cloud },
      { id: "usage-monitoring", name: "Usage Monitoring", description: "Track API calls, costs, and performance", price: 400, icon: Activity },
      { id: "api-management", name: "API Management", description: "Manage and version your AI APIs", price: 500, icon: GitBranch },
    ]
  },

  // ---------- CATEGORY 6: Consulting & Strategy ----------
  {
    id: "ai-consulting",
    name: "AI Strategy Consulting",
    description: "AI opportunity audits, workflow efficiency reviews, and automation roadmaps.",
    icon: Target,
    basePrice: 1000,
    gradient: "from-purple-500 to-pink-600",
    category: "Consulting & Strategy",
    features: [
      { id: "ai-audit", name: "AI Opportunity Audit", description: "Identify where AI can deliver the most value", price: 800, icon: Search, popular: true },
      { id: "workflow-review", name: "Workflow Efficiency Review", description: "Analyse and optimise existing processes", price: 600, icon: Workflow },
      { id: "automation-roadmap", name: "Automation Roadmap", description: "Step‑by‑step plan to implement AI", price: 700, icon: GitBranch },
      { id: "integration-planning", name: "AI Integration Planning", description: "How to integrate AI with your current tools", price: 500, icon: Plug },
    ]
  }
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
  const router = useRouter(); 
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedTimeline, setSelectedTimeline] = useState(timelines[1]);
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  
  const totalSteps = 5;
  const containerRef = useRef<HTMLDivElement>(null);

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

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const quoteData = {
      from_name: contactInfo.name,
      from_email: contactInfo.email,
      phone: contactInfo.phone,
      company: contactInfo.company || 'Not provided',
      service: selectedService?.name || 'Unknown',
      features: selectedFeatures.join(', '),
      timeline: selectedTimeline.name,
      total_estimated_value: `$${totalPrice.toLocaleString()}`,
      message: contactInfo.message || 'No message',
    };
    try {
      const emailjs = await import('@emailjs/browser');
      await emailjs.send(
        'service_npei2gf',       
        'template_2u2lhr9',      
        quoteData,
        '-IObU0502rQ2VlNHa'      
      );
      setIsSubmitting(false);
      setCurrentStep(5);
    } catch (error) {
      console.error('FAILED:', error);
      alert("Error sending email. Please check the console.");
      setIsSubmitting(false);
    }
  };

  const handleAccept = async () => {
    if (!selectedService) return;
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase
        .from('clients')
        .insert([
          {
            name: contactInfo.name,
            email: contactInfo.email,
            phone: contactInfo.phone,
            company: contactInfo.company || 'Not Provided',
            service: selectedService.name,
            package: 'Custom',
            amount: totalPrice,
            paid: 0,
            status: 'Not Started',
            industry: `Features: ${selectedFeatures.join(', ')}. Timeline: ${selectedTimeline.name}`
          }
        ])
        .select();
      if (error) throw error;
      if (data && data.length > 0) {
        const newClientId = data[0].id;
        setShowConfetti(true);
        setTimeout(() => router.push(`/pay/${newClientId}`), 1000);
      }
    } catch (error) {
      console.error('Error creating project:', error);
      alert("System Error: Could not start project. Please check your connection.");
      setIsSubmitting(false);
    }
  };

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
      case 3: return true;
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
            <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-xs md:text-sm transition-all
              ${currentStep >= step 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30' 
                : 'bg-white/5 text-gray-500 border border-white/10'}
              ${currentStep === step ? 'scale-110 ring-4 ring-blue-500/20' : ''}
            `}>
              {currentStep > step ? <Check size={18} /> : step}
            </div>
            {step < 5 && (
              <div className={`w-8 sm:w-20 md:w-32 h-1 mx-1 sm:mx-2 rounded-full transition-all duration-500 ${
                currentStep > step ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-white/10'
              }`} />
            )}
          </div>
        ))}
      </div>
      <div className="hidden sm:flex justify-between text-xs font-medium text-gray-500">
        <span>Service</span>
        <span>Features</span>
        <span>Timeline</span>
        <span>Contact</span>
        <span>Review</span>
      </div>
    </div>
  );

  // Group services by category for step 1
  const groupedServices = services.reduce<Record<string, Service[]>>((acc, service) => {
    if (!acc[service.category]) acc[service.category] = [];
    acc[service.category].push(service);
    return acc;
  }, {});

  const renderStep1 = () => (
    <div className="animate-fadeIn">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 font-space-grotesk">
          What would you like to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-sky-300">build?</span>
        </h2>
        <p className="text-gray-400 text-lg">Select the service that best fits your project needs</p>
      </div>
      
      {Object.entries(groupedServices).map(([category, servicesList]) => (
        <div key={category} className="mb-12 last:mb-0">
          <h3 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">{category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service) => {
              const Icon = service.icon;
              const isSelected = selectedService?.id === service.id;
              
              return (
                <button
                  key={service.id}
                  onClick={() => {
                    setSelectedService(service);
                    setSelectedFeatures([service.features[0].id]); // auto‑select first feature
                  }}
                  className={`
                    relative p-6 rounded-3xl text-left transition-all duration-300 group
                    ${isSelected 
                      ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-500/20 scale-[1.02] border-0' 
                      : 'bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 backdrop-blur-sm'}
                  `}
                >
                  <div className={`
                    absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center transition-all
                    ${isSelected ? 'bg-white text-blue-600' : 'bg-white/10 text-transparent'}
                  `}>
                    <Check size={14} />
                  </div>
                  
                  <div className={`
                    w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all
                    ${isSelected ? 'bg-white/20' : `bg-gradient-to-br ${service.gradient} text-white`}
                  `}>
                    <Icon size={28} />
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-2 ${isSelected ? 'text-white' : 'text-white'}`}>
                    {service.name}
                  </h3>
                  <p className={`text-sm mb-4 ${isSelected ? 'text-blue-100' : 'text-gray-400'}`}>
                    {service.description}
                  </p>
                  
                  <div className={`text-sm font-bold flex items-center gap-1 ${isSelected ? 'text-white' : 'text-blue-400'}`}>
                    <span>Select Service</span>
                    <ArrowRight size={14} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );

  const renderStep2 = () => (
    <div className="animate-fadeIn">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 font-space-grotesk">
          Customize your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-sky-300">{selectedService?.name}</span>
        </h2>
        <p className="text-gray-400 text-lg">Select the features you need (you can always add more later)</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {selectedService?.features.map((feature) => {
          const isSelected = selectedFeatures.includes(feature.id);
          
          return (
            <button
              key={feature.id}
              onClick={() => toggleFeature(feature.id)}
              className={`
                relative p-5 rounded-2xl text-left transition-all duration-300 flex items-start gap-4
                ${isSelected 
                  ? 'bg-blue-600/10 border-2 border-blue-500 shadow-lg shadow-blue-500/10' 
                  : 'bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 backdrop-blur-sm'}
              `}
            >
              <div className={`
                w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-all mt-0.5
                ${isSelected ? 'bg-blue-600 text-white' : 'bg-white/10 text-transparent'}
              `}>
                <Check size={14} />
              </div>
              
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className={`font-bold ${isSelected ? 'text-white' : 'text-white'}`}>
                    {feature.name}
                  </h4>
                  {feature.popular && (
                    <span className="px-2 py-0.5 bg-orange-500/20 text-orange-400 text-xs font-bold rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
              
              <div className={`text-sm font-bold flex-shrink-0 ${isSelected ? 'text-blue-400' : 'text-gray-500'}`}>
                {feature.price === 0 ? 'Included' : ''} 
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
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 font-space-grotesk">
          When do you need it <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-sky-300">delivered?</span>
        </h2>
        <p className="text-gray-400 text-lg">We prioritize projects based on your required timeline</p>
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
                  ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-500/20 scale-105' 
                  : 'bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 backdrop-blur-sm'}
              `}
            >
              <div className={`
                w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all
                ${isSelected ? 'bg-white/20' : 'bg-white/10'}
              `}>
                <Icon size={32} className={isSelected ? 'text-white' : 'text-blue-400'} />
              </div>
              
              <h3 className={`text-2xl font-bold mb-2 ${isSelected ? 'text-white' : 'text-white'}`}>
                {timeline.name}
              </h3>
              <p className={`text-lg mb-4 ${isSelected ? 'text-blue-100' : 'text-gray-400'}`}>
                {timeline.description}
              </p>
              
              <div className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-gray-500'}`}>
                {timeline.id === 'rush' ? 'Priority Queue' : 'Standard Schedule'}
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
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 font-space-grotesk">
          Almost there! <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-sky-300">Tell us about you</span>
        </h2>
        <p className="text-gray-400 text-lg">We'll review your scope and generate a custom proposal</p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold text-gray-300 mb-2">
                <User size={14} className="inline mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                value={contactInfo.name}
                onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-white/10 bg-white/5 text-white placeholder-gray-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all outline-none"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-300 mb-2">
                <Building2 size={14} className="inline mr-2" />
                Company (Optional)
              </label>
              <input
                type="text"
                value={contactInfo.company}
                onChange={(e) => setContactInfo({ ...contactInfo, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-white/10 bg-white/5 text-white placeholder-gray-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all outline-none"
                placeholder="Acme Inc."
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold text-gray-300 mb-2">
                <Mail size={14} className="inline mr-2" />
                Email Address *
              </label>
              <input
                type="email"
                value={contactInfo.email}
                onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-white/10 bg-white/5 text-white placeholder-gray-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all outline-none"
                placeholder="john@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-300 mb-2">
                <Phone size={14} className="inline mr-2" />
                Phone Number *
              </label>
              <input
                type="tel"
                value={contactInfo.phone}
                onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-white/10 bg-white/5 text-white placeholder-gray-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all outline-none"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2">
              <MessageSquare size={14} className="inline mr-2" />
              Additional Details (Optional)
            </label>
            <textarea
              value={contactInfo.message}
              onChange={(e) => setContactInfo({ ...contactInfo, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border-2 border-white/10 bg-white/5 text-white placeholder-gray-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all outline-none resize-none"
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
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
              <CheckCircle2 size={40} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 font-space-grotesk">
              Project Scope <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Ready!</span>
            </h2>
            <p className="text-gray-400 text-lg">We've saved your requirements. Please review and confirm to request your quote.</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/10 overflow-hidden mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm font-medium">Project Scope for</p>
                    <h3 className="text-2xl font-bold">{contactInfo.name}</h3>
                    {contactInfo.company && <p className="text-blue-100">{contactInfo.company}</p>}
                  </div>
                  <div className="text-right">
                    <p className="text-blue-100 text-sm font-medium">Status</p>
                    <p className="text-2xl font-extrabold">Drafting Quote</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-6 pb-6 border-b border-white/10">
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Selected Service</h4>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedService?.gradient} flex items-center justify-center text-white`}>
                      {selectedService && <selectedService.icon size={24} />}
                    </div>
                    <div>
                      <p className="font-bold text-white">{selectedService?.name}</p>
                      <p className="text-sm text-gray-400">Professional Implementation</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6 pb-6 border-b border-white/10">
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Selected Features</h4>
                  <div className="space-y-2">
                    {selectedFeatures.map(featureId => {
                      const feature = selectedService?.features.find(f => f.id === featureId);
                      if (!feature) return null;
                      return (
                        <div key={featureId} className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-2">
                            <Check size={16} className="text-green-500" />
                            <span className="text-gray-300">{feature.name}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="mb-6 pb-6 border-b border-white/10">
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Delivery Timeline</h4>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <selectedTimeline.icon size={24} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="font-bold text-white">{selectedTimeline.name} ({selectedTimeline.description})</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between py-4 bg-white/10 rounded-2xl px-6">
                  <span className="text-xl font-bold text-white">Total Investment</span>
                  <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Custom Quote
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentStep(1)}
                className="px-8 py-4 rounded-full font-bold text-gray-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all flex items-center justify-center gap-2"
              >
                <RefreshCw size={18} />
                Adjust Scope
              </button>
              <button
                onClick={handleAccept}
                disabled={isSubmitting}
                className="px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shadow-lg shadow-green-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <Check size={18} />
                )}
                Submit Request
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-500/30 animate-bounce">
            <PartyPopper size={48} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 font-space-grotesk">
            🎉 Request Received!
          </h2>
          <p className="text-xl text-gray-400 mb-4 max-w-2xl mx-auto">
            Thank you, <span className="font-bold text-blue-400">{contactInfo.name}</span>! 
            We've received your project requirements and will get back to you with a formal proposal within <span className="font-bold">24 hours</span>.
          </p>
          <p className="text-gray-500 mb-10">
            A confirmation email has been sent to <span className="font-bold">{contactInfo.email}</span>
          </p>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 max-w-xl mx-auto mb-10 border border-white/10">
            <h3 className="font-bold text-blue-400 mb-4">What happens next?</h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                <p className="text-gray-300">Our team reviews your requirements in detail</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                <p className="text-gray-300">We analyze the timeline and resource needs</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                <p className="text-gray-300">You receive a detailed proposal with pricing options</p>
              </div>
            </div>
          </div>
          
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/30 transition-all"
          >
            Back to Home
            <ArrowRight size={18} />
          </Link>
        </div>
      )}
      
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
    <main className="min-h-screen bg-[#05060b] text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#05060b]/80 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold flex items-center gap-1">
            <span className="text-blue-400">Vidi</span>
            <span className="text-white">Agency</span>
          </Link>
          
          <Link 
            href="/"
            className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
          >
            ← Back to site
          </Link>
        </div>
      </header>
      
      <div ref={containerRef} className="pt-20 pb-40 container mx-auto px-4 md:px-12 lg:px-20 max-w-6xl">
        {renderProgressBar()}
        
        <div className="min-h-[500px]">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}
          {currentStep === 5 && renderStep5()}
        </div>
      </div>
      
      {currentStep < 5 && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#05060b]/80 backdrop-blur-xl border-t border-white/10 py-3 px-4 z-40 safe-bottom">
          <div className="container mx-auto max-w-6xl flex items-center justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`
                flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full font-bold text-sm md:text-base transition-all
                ${currentStep === 1 
                  ? 'text-gray-600 cursor-not-allowed' 
                  : 'text-gray-400 hover:text-white hover:bg-white/10'}
              `}
            >
              <ArrowLeft size={18} />
              Back
            </button>
            
            <button
              onClick={currentStep === 4 ? handleSubmit : nextStep}
              disabled={!canProceed() || isSubmitting}
              className={`
                flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 rounded-full font-bold text-sm md:text-base transition-all
                ${canProceed() 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl' 
                  : 'bg-white/5 text-gray-500 cursor-not-allowed border border-white/10'}
              `}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Processing...
                </>
              ) : currentStep === 4 ? (
                <>
                  Submit Request
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
        .safe-bottom {
          padding-bottom: env(safe-area-inset-bottom);
        }
      `}</style>
    </main>
  );
}