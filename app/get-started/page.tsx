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
  GitBranch, Cpu, Search, HardHat, Truck, Cog, Anchor, FlaskConical,
  Package, Camera, MapPin
} from 'lucide-react';

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
  category: string;
}

// ============================================================================
// INDUSTRIAL MANUFACTURING SERVICES – only these
// ============================================================================
const services: Service[] = [
  {
    id: "ai-engineering-knowledge",
    name: "Engineering Knowledge Assistant",
    description: "AI trained on your manuals, drawings, and CMMS records – engineers get instant answers.",
    icon: Database,
    basePrice: 1500,
    gradient: "from-blue-600 to-indigo-600",
    category: "AI Automation Systems",
    features: [
      { id: "eng-knowledge-base", name: "Private Knowledge Base", description: "Ingest PDFs, CAD files, SOPs", price: 800, icon: FileText, popular: true },
      { id: "drawing-search", name: "Drawing & Spec Search", description: "Natural language search over P&IDs", price: 600, icon: Search },
      { id: "cmms-integration", name: "CMMS Integration", description: "Connect to your maintenance system", price: 500, icon: Database },
      { id: "multi-language", name: "Multi‑Language Support", description: "Answers in multiple languages", price: 400, icon: Languages },
    ]
  },
  {
    id: "ai-quoting-engine",
    name: "AI Quoting Engine",
    description: "Sales engineers describe requirements; AI drafts quotes with specs, pricing, and lead times.",
    icon: TrendingUp,
    basePrice: 2000,
    gradient: "from-purple-600 to-pink-600",
    category: "AI Automation Systems",
    features: [
      { id: "quote-generation", name: "Automated Quote Generation", description: "Draft quotes in minutes", price: 700, icon: FileText, popular: true },
      { id: "product-database", name: "Product & Pricing DB", description: "Train on your catalog", price: 600, icon: Database },
      { id: "crm-sync", name: "CRM Sync", description: "Push quotes to your CRM", price: 500, icon: Workflow },
      { id: "pdf-export", name: "PDF Export", description: "Professional branded quotes", price: 300, icon: FileText },
    ]
  },
  {
    id: "predictive-maintenance",
    name: "Predictive Maintenance AI",
    description: "Monitor equipment with IoT sensors; AI predicts failures before they happen.",
    icon: Activity,
    basePrice: 2500,
    gradient: "from-emerald-500 to-teal-500",
    category: "AI Automation Systems",
    features: [
      { id: "sensor-integration", name: "IoT Sensor Integration", description: "Connect to PLCs and sensors", price: 800, icon: Cpu, popular: true },
      { id: "anomaly-detection", name: "Anomaly Detection", description: "AI identifies abnormal patterns", price: 700, icon: Activity },
      { id: "alert-system", name: "Alert System", description: "SMS/email alerts for pending failures", price: 400, icon: Bell },
      { id: "dashboard", name: "Maintenance Dashboard", description: "Real‑time equipment health", price: 500, icon: LayoutDashboard },
    ]
  },
  {
    id: "ehs-compliance-ai",
    name: "EHS Compliance Assistant",
    description: "Instant retrieval of safety data sheets, inspection records, and regulatory documents.",
    icon: ShieldCheck,
    basePrice: 1500,
    gradient: "from-amber-500 to-orange-600",
    category: "AI Automation Systems",
    features: [
      { id: "ehs-doc-ingest", name: "EHS Document Ingestion", description: "Upload SDS, manuals, audit logs", price: 600, icon: FileText, popular: true },
      { id: "regulatory-alerts", name: "Regulatory Update Alerts", description: "Stay compliant with changes", price: 500, icon: Bell },
      { id: "incident-reporting", name: "Incident Reporting", description: "Report near‑misses, track trends", price: 400, icon: MessageSquare },
      { id: "audit-ready", name: "Audit‑Ready Reports", description: "Generate compliance reports", price: 300, icon: CheckCircle2 },
    ]
  },
  {
    id: "dock-scheduler",
    name: "Dock Scheduling System",
    description: "Coordinate dock appointments, truck arrivals, and equipment availability.",
    icon: Truck,
    basePrice: 2000,
    gradient: "from-cyan-500 to-blue-600",
    category: "Industrial Software & Web Apps",
    features: [
      { id: "appointment-booking", name: "Appointment Booking", description: "Carriers book slots online", price: 500, icon: CalendarCheck, popular: true },
      { id: "automated-notifications", name: "Automated Notifications", description: "SMS/email reminders", price: 300, icon: Bell },
      { id: "dashboard", name: "Operations Dashboard", description: "Real‑time dock status", price: 600, icon: LayoutDashboard },
      { id: "erp-integration", name: "ERP/WMS Integration", description: "Sync with your systems", price: 700, icon: Database },
    ]
  },
  {
    id: "inventory-optimization",
    name: "Inventory Optimization AI",
    description: "Predict spare parts demand, prevent stockouts, and automate reordering.",
    icon: Package,
    basePrice: 1800,
    gradient: "from-indigo-500 to-violet-500",
    category: "Industrial Software & Web Apps",
    features: [
      { id: "demand-forecast", name: "Demand Forecasting", description: "Predict parts needed", price: 600, icon: TrendingUp, popular: true },
      { id: "auto-reorder", name: "Auto‑Reorder", description: "Generate purchase orders", price: 500, icon: ShoppingCart },
      { id: "supplier-integration", name: "Supplier Portal", description: "Share forecasts with vendors", price: 500, icon: Users },
      { id: "inventory-dashboard", name: "Inventory Dashboard", description: "Track stock levels", price: 400, icon: BarChart },
    ]
  },
  {
    id: "field-service-app",
    name: "Field Service Mobile App",
    description: "Technicians access manuals, log work orders, and capture data from the field.",
    icon: Smartphone,
    basePrice: 2500,
    gradient: "from-pink-500 to-rose-500",
    category: "Industrial Software & Web Apps",
    features: [
      { id: "mobile-forms", name: "Mobile Work Orders", description: "Create and update orders", price: 500, icon: FileText, popular: true },
      { id: "offline-mode", name: "Offline Mode", description: "Work without internet sync", price: 600, icon: Cloud },
      { id: "photo-capture", name: "Photo & Signature Capture", description: "Document work", price: 300, icon: Camera },
      { id: "gps-tracking", name: "GPS Location", description: "Track technician location", price: 400, icon: MapPin },
    ]
  },
  {
    id: "production-analytics",
    name: "Production Line Analytics",
    description: "Monitor OEE, throughput, and downtime with real‑time dashboards.",
    icon: LineChart,
    basePrice: 2000,
    gradient: "from-green-500 to-emerald-600",
    category: "Analytics & Intelligence",
    features: [
      { id: "oee-tracking", name: "OEE Dashboard", description: "Availability, performance, quality", price: 600, icon: LayoutDashboard, popular: true },
      { id: "downtime-analysis", name: "Downtime Analysis", description: "Root cause identification", price: 500, icon: Activity },
      { id: "scada-integration", name: "SCADA/PLC Integration", description: "Pull real‑time data", price: 800, icon: Database },
      { id: "custom-reports", name: "Custom Reporting", description: "Export for leadership", price: 400, icon: FileText },
    ]
  },
  {
    id: "bi-dashboards",
    name: "Business Intelligence Dashboards",
    description: "Custom dashboards for KPIs, financials, and operational metrics.",
    icon: PieChart,
    basePrice: 2500,
    gradient: "from-blue-500 to-indigo-600",
    category: "Analytics & Intelligence",
    features: [
      { id: "data-visualization", name: "Custom Visualizations", description: "Charts and graphs", price: 800, icon: BarChart },
      { id: "kpi-tracker", name: "KPI Tracking", description: "Monitor key metrics", price: 600, icon: Target, popular: true },
      { id: "executive-reports", name: "Executive Reports", description: "Summaries for leadership", price: 500, icon: Award },
      { id: "data-warehouse", name: "Data Warehouse Setup", description: "Consolidate data sources", price: 1000, icon: Database },
    ]
  },
  {
    id: "ai-consulting",
    name: "AI Strategy Consulting",
    description: "Identify high‑impact AI opportunities for your plant or manufacturing operations.",
    icon: Target,
    basePrice: 1000,
    gradient: "from-purple-500 to-pink-600",
    category: "Consulting & Strategy",
    features: [
      { id: "ai-audit", name: "AI Opportunity Audit", description: "Find where AI delivers most value", price: 800, icon: Search, popular: true },
      { id: "workflow-review", name: "Workflow Efficiency Review", description: "Analyze current processes", price: 600, icon: Workflow },
      { id: "automation-roadmap", name: "Automation Roadmap", description: "Step‑by‑step plan", price: 700, icon: GitBranch },
      { id: "integration-plan", name: "Integration Planning", description: "How to connect AI to your systems", price: 500, icon: Plug },
    ]
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation Roadmap",
    description: "Strategic plan to digitize operations and improve efficiency.",
    icon: Rocket,
    basePrice: 2000,
    gradient: "from-amber-500 to-orange-600",
    category: "Consulting & Strategy",
    features: [
      { id: "current-state", name: "Current State Assessment", description: "Document systems and pain points", price: 600, icon: FileText },
      { id: "future-state", name: "Future State Design", description: "Target architecture", price: 700, icon: Target, popular: true },
      { id: "implementation-plan", name: "Implementation Plan", description: "Phased rollout", price: 800, icon: GitBranch },
      { id: "change-management", name: "Change Management", description: "Training and adoption", price: 500, icon: Users },
    ]
  }
];

const timelines = [
  { id: "relaxed", name: "Relaxed", description: "8-12 weeks", multiplier: 1.0, icon: Clock },
  { id: "standard", name: "Standard", description: "4-6 weeks", multiplier: 1.15, icon: Zap },
  { id: "rush", name: "Rush", description: "2-3 weeks", multiplier: 1.4, icon: Rocket },
];

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
      features: selectedFeatures.map(id => selectedService?.features.find(f => f.id === id)?.name).filter(Boolean).join(', '),
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
            industry: `Features: ${selectedFeatures.map(id => selectedService?.features.find(f => f.id === id)?.name).join(', ')}. Timeline: ${selectedTimeline.name}`
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

  const groupedServices = services.reduce<Record<string, Service[]>>((acc, service) => {
    if (!acc[service.category]) acc[service.category] = [];
    acc[service.category].push(service);
    return acc;
  }, {});

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

  const renderStep1 = () => (
    <div className="animate-fadeIn">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 font-space-grotesk">
          What would you like to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-sky-300">build?</span>
        </h2>
        <p className="text-gray-400 text-lg">Select the industrial AI solution that best fits your project needs</p>
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
                    const popular = service.features.filter(f => f.popular).map(f => f.id);
                    if (popular.length > 0) {
                      setSelectedFeatures(popular);
                    } else if (service.features.length > 0) {
                      setSelectedFeatures([service.features[0].id]);
                    } else {
                      setSelectedFeatures([]);
                    }
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

  const renderStep2 = () => {
    if (!selectedService) return null;
    return (
      <div className="animate-fadeIn">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 font-space-grotesk">
            Customize your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-sky-300">{selectedService.name}</span>
          </h2>
          <p className="text-gray-400 text-lg">Select the features you need (you can always add more later)</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {selectedService.features.map((feature) => {
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
                  {feature.price === 0 ? 'Included' : `+$${feature.price}`}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  };

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