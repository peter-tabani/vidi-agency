"use client";

import { useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import {
  ArrowRight, ArrowLeft, Check, Zap, Clock,
  Bot, Database, Workflow,
  Rocket, Users, Mail, Phone, User,
  Building2, MessageSquare, CheckCircle2, PartyPopper, RefreshCw,
  Shield, FileText, TrendingUp,
  Target, ShieldCheck,
  Send, Loader2,
  GitBranch, Search,
  Plug,
} from 'lucide-react';

interface Feature {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  popular?: boolean;
}

interface Service {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  features: Feature[];
  category: string;
}

// ============================================================================
// SERVICES — only what Vidi actually delivers
// ============================================================================
const services: Service[] = [
  {
    id: "ai-engineering-knowledge",
    name: "Engineering Knowledge Assistant",
    description: "AI trained on your manuals, drawings, and documents — engineers and staff get instant answers without hunting through binders.",
    icon: Database,
    gradient: "from-blue-600 to-indigo-600",
    category: "AI Systems",
    features: [
      { id: "eng-knowledge-base",  name: "Private Knowledge Base",   description: "Upload your PDFs, SOPs, and technical documents into a secure private AI", icon: FileText,  popular: true },
      { id: "drawing-search",      name: "Drawing & Spec Search",     description: "Natural language search across your engineering documents and drawings",     icon: Search },
      { id: "cmms-integration",    name: "CMMS Integration",          description: "Connect the AI to your existing maintenance management system",             icon: Database },
      { id: "image-analysis",      name: "Image & Photo Analysis",    description: "Upload a photo of a part or system; AI identifies and retrieves specs",     icon: Workflow },
    ],
  },
  {
    id: "ai-lead-capture",
    name: "AI Lead Capture & CRM Sync",
    description: "An AI assistant on your website that captures visitor details, qualifies them, and sends leads straight to your CRM or email — automatically.",
    icon: TrendingUp,
    gradient: "from-purple-600 to-pink-600",
    category: "AI Systems",
    features: [
      { id: "lead-capture",    name: "Automated Lead Capture",    description: "Collect name, email, company, and project details from every visitor",    icon: FileText,  popular: true },
      { id: "qualification",   name: "Smart Qualification",       description: "AI asks the right follow-up questions to identify hot vs cold leads",     icon: Search },
      { id: "crm-sync",        name: "CRM & Email Sync",          description: "Push captured leads to HubSpot, Salesforce, Zoho, or your email inbox",   icon: Workflow },
      { id: "follow-up",       name: "Instant Follow-up Emails",  description: "AI sends a tailored follow-up email to the lead within minutes",           icon: Mail },
    ],
  },
  {
    id: "ai-customer-support",
    name: "AI Customer Support Assistant",
    description: "24/7 AI that answers your customers' questions from your own FAQs, manuals, and support docs — and hands off to your team when needed.",
    icon: Bot,
    gradient: "from-green-600 to-teal-600",
    category: "AI Systems",
    features: [
      { id: "faq-automation",  name: "FAQ & Doc Automation",      description: "Train AI on your FAQs, product docs, and support materials",               icon: FileText,  popular: true },
      { id: "multi-channel",   name: "Multi-Channel Deployment",  description: "Live on your website, WhatsApp, or email — wherever your clients are",     icon: MessageSquare },
      { id: "human-handoff",   name: "Human Handoff",             description: "AI flags and escalates complex queries to your team seamlessly",            icon: Users },
      { id: "ticket-logging",  name: "Conversation Logging",      description: "Every chat saved and organised so nothing falls through the cracks",        icon: Database },
    ],
  },
  {
    id: "ehs-compliance-ai",
    name: "EHS Compliance Assistant",
    description: "Instant retrieval of safety procedures, inspection records, and compliance documents — the right answer when your team needs it most.",
    icon: ShieldCheck,
    gradient: "from-amber-500 to-orange-600",
    category: "AI Systems",
    features: [
      { id: "ehs-doc-ingest",    name: "Safety Document Ingestion", description: "Upload safety data sheets, audit logs, and compliance docs",               icon: FileText,  popular: true },
      { id: "incident-reporting", name: "Incident Logging",         description: "Log near-misses and track corrective actions through the AI",               icon: MessageSquare },
      { id: "audit-ready",       name: "Audit-Ready Reports",       description: "Generate compliance summaries ready for inspections",                       icon: CheckCircle2 },
      { id: "regulatory-alerts", name: "Regulatory Alerts",         description: "Get notified when relevant safety standards or regulations change",         icon: ShieldCheck },
    ],
  },
  {
    id: "ai-consulting",
    name: "AI Strategy & Consulting",
    description: "We map your current operations and show you exactly where AI will save time and money — before you spend anything building it.",
    icon: Target,
    gradient: "from-purple-500 to-pink-600",
    category: "Consulting",
    features: [
      { id: "ai-audit",           name: "AI Opportunity Audit",      description: "Find the highest-value AI use cases across your operations",               icon: Search,    popular: true },
      { id: "workflow-review",    name: "Workflow Review",            description: "We analyse your current processes and identify where time is being lost",  icon: Workflow },
      { id: "automation-roadmap", name: "Automation Roadmap",        description: "A clear, phased plan for implementing AI — starting with quick wins",      icon: GitBranch },
      { id: "integration-plan",   name: "Integration Planning",      description: "How to connect AI to your existing CRM, email, CMMS, and documents",       icon: Plug },
    ],
  },
];

const timelines = [
  { id: "relaxed",  name: "Relaxed",  description: "8–12 weeks", icon: Clock  },
  { id: "standard", name: "Standard", description: "4–6 weeks",  icon: Zap    },
  { id: "rush",     name: "Rush",     description: "2–3 weeks",  icon: Rocket },
];

// ============================================================================
// EMAIL SENDER — uses your EmailJS service (free, no backend needed)
// Replace the three values below with your actual EmailJS credentials
// ============================================================================
const EMAILJS_SERVICE_ID  = "service_npei2gf";   // ← your service ID
const EMAILJS_TEMPLATE_ID = "template_2u2lhr9";  // ← your template ID  
const EMAILJS_PUBLIC_KEY  = "-IObU0502rQ2VlNHa"; // ← your public key

// ── HOW TO FIX EMAIL DELIVERY ─────────────────────────────────────────────
// The issue is almost always in your EmailJS template, not the code.
// Go to https://dashboard.emailjs.com → Email Templates → your template
// Make sure your template uses these EXACT variable names:
//
//   To:      your real email address (e.g. peter@vidiagencyltd.com)
//   Subject: New Project Request from {{from_name}} — {{service}}
//   Body:    include {{from_name}}, {{from_email}}, {{phone}}, {{company}},
//            {{service}}, {{features}}, {{timeline}}, {{message}}
//
// Also check: EmailJS → Email Services → your Gmail/Outlook is still connected
// Free plan allows 200 emails/month — more than enough to start.
// ─────────────────────────────────────────────────────────────────────────

export default function GetStartedPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep]         = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedTimeline, setSelectedTimeline] = useState(timelines[1]);
  const [contactInfo, setContactInfo]         = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting]       = useState(false);
  const [isSubmitted, setIsSubmitted]         = useState(false);
  const [emailError, setEmailError]           = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSteps = 5;

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev =>
      prev.includes(featureId) ? prev.filter(id => id !== featureId) : [...prev, featureId]
    );
  };

  // ── SUBMIT: sends email via EmailJS + saves to Supabase ──────────────────
  const handleSubmit = async () => {
    setIsSubmitting(true);
    setEmailError('');

    const featureNames = selectedFeatures
      .map(id => selectedService?.features.find(f => f.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    // Data object — variable names must match your EmailJS template exactly
    const emailData = {
      from_name:  contactInfo.name,
      from_email: contactInfo.email,
      phone:      contactInfo.phone,
      company:    contactInfo.company || 'Not provided',
      service:    selectedService?.name || 'Unknown',
      features:   featureNames || 'None selected',
      timeline:   `${selectedTimeline.name} (${selectedTimeline.description})`,
      message:    contactInfo.message || 'No additional details provided.',
      // reply_to lets you hit Reply in your inbox and it goes straight to the client
      reply_to:   contactInfo.email,
    };

    try {
      // Dynamically import EmailJS (avoids SSR issues in Next.js)
      const emailjs = (await import('@emailjs/browser')).default;
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailData, EMAILJS_PUBLIC_KEY);

      // Also save to Supabase so you have a record in your dashboard
      try {
        await supabase.from('leads').insert([{
          name:     contactInfo.name,
          email:    contactInfo.email,
          phone:    contactInfo.phone,
          company:  contactInfo.company || 'Not provided',
          service:  selectedService?.name,
          features: featureNames,
          timeline: selectedTimeline.name,
          message:  contactInfo.message,
          status:   'New',
        }]);
      } catch (dbErr) {
        // Non-fatal: email already sent, Supabase save is a bonus
        console.warn('Supabase save skipped:', dbErr);
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      setCurrentStep(5);

    } catch (error: any) {
      console.error('EmailJS error:', error);
      setEmailError(
        error?.text ||
        'Could not send your request. Please email us directly at peter@vidiagencyltd.com'
      );
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
      case 4: return !!(contactInfo.name && contactInfo.email && contactInfo.phone);
      default: return true;
    }
  };

  const groupedServices = services.reduce<Record<string, Service[]>>((acc, service) => {
    if (!acc[service.category]) acc[service.category] = [];
    acc[service.category].push(service);
    return acc;
  }, {});

  // ── PROGRESS BAR ──────────────────────────────────────────────────────────
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
        <span>Done</span>
      </div>
    </div>
  );

  // ── STEP 1: SELECT SERVICE ────────────────────────────────────────────────
  const renderStep1 = () => (
    <div className="animate-fadeIn">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 font-space-grotesk">
          What would you like to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-sky-300">build?</span>
        </h2>
        <p className="text-gray-400 text-lg">Pick the solution that fits your business</p>
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
                    setSelectedFeatures(popular.length > 0 ? popular : [service.features[0].id]);
                  }}
                  className={`relative p-6 rounded-3xl text-left transition-all duration-300 group
                    ${isSelected
                      ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-500/20 scale-[1.02] border-0'
                      : 'bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 backdrop-blur-sm'}`}
                >
                  <div className={`absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center transition-all
                    ${isSelected ? 'bg-white text-blue-600' : 'bg-white/10 text-transparent'}`}>
                    <Check size={14} />
                  </div>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all
                    ${isSelected ? 'bg-white/20' : `bg-gradient-to-br ${service.gradient} text-white`}`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{service.name}</h3>
                  <p className={`text-sm mb-4 ${isSelected ? 'text-blue-100' : 'text-gray-400'}`}>{service.description}</p>
                  <div className={`text-sm font-bold flex items-center gap-1 ${isSelected ? 'text-white' : 'text-blue-400'}`}>
                    <span>Select</span>
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

  // ── STEP 2: SELECT FEATURES ───────────────────────────────────────────────
  const renderStep2 = () => {
    if (!selectedService) return null;
    return (
      <div className="animate-fadeIn">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 font-space-grotesk">
            Customise your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-sky-300">
              {selectedService.name}
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Select the features you need — you can always add more later</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {selectedService.features.map((feature) => {
            const isSelected = selectedFeatures.includes(feature.id);
            const Icon = feature.icon;
            return (
              <button
                key={feature.id}
                onClick={() => toggleFeature(feature.id)}
                className={`relative p-5 rounded-2xl text-left transition-all duration-300 flex items-start gap-4
                  ${isSelected
                    ? 'bg-blue-600/10 border-2 border-blue-500 shadow-lg shadow-blue-500/10'
                    : 'bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 backdrop-blur-sm'}`}
              >
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-all mt-0.5
                  ${isSelected ? 'bg-blue-600 text-white' : 'bg-white/10 text-transparent'}`}>
                  <Check size={14} />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-white">{feature.name}</h4>
                    {feature.popular && (
                      <span className="px-2 py-0.5 bg-orange-500/20 text-orange-400 text-xs font-bold rounded-full">Popular</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <Icon size={18} className={isSelected ? 'text-blue-400' : 'text-gray-600'} />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  // ── STEP 3: TIMELINE ──────────────────────────────────────────────────────
  const renderStep3 = () => (
    <div className="animate-fadeIn">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 font-space-grotesk">
          When do you need it{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-sky-300">delivered?</span>
        </h2>
        <p className="text-gray-400 text-lg">We'll prioritise your project based on your timeline</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {timelines.map((timeline) => {
          const Icon = timeline.icon;
          const isSelected = selectedTimeline.id === timeline.id;
          return (
            <button
              key={timeline.id}
              onClick={() => setSelectedTimeline(timeline)}
              className={`relative p-8 rounded-3xl text-center transition-all duration-300
                ${isSelected
                  ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-500/20 scale-105'
                  : 'bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 backdrop-blur-sm'}`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all
                ${isSelected ? 'bg-white/20' : 'bg-white/10'}`}>
                <Icon size={32} className={isSelected ? 'text-white' : 'text-blue-400'} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">{timeline.name}</h3>
              <p className={`text-lg mb-4 ${isSelected ? 'text-blue-100' : 'text-gray-400'}`}>{timeline.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );

  // ── STEP 4: CONTACT INFO ──────────────────────────────────────────────────
  const renderStep4 = () => (
    <div className="animate-fadeIn">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 font-space-grotesk">
          Almost there!{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-sky-300">Tell us about you</span>
        </h2>
        <p className="text-gray-400 text-lg">We'll review your scope and get back to you within 24 hours</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold text-gray-300 mb-2">
                <User size={14} className="inline mr-2" />Full Name *
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
                <Building2 size={14} className="inline mr-2" />Company (Optional)
              </label>
              <input
                type="text"
                value={contactInfo.company}
                onChange={(e) => setContactInfo({ ...contactInfo, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-white/10 bg-white/5 text-white placeholder-gray-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all outline-none"
                placeholder="e.g. SafeRack Inc."
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold text-gray-300 mb-2">
                <Mail size={14} className="inline mr-2" />Email Address *
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
                <Phone size={14} className="inline mr-2" />Phone Number *
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
              <MessageSquare size={14} className="inline mr-2" />Tell us about your project (Optional)
            </label>
            <textarea
              value={contactInfo.message}
              onChange={(e) => setContactInfo({ ...contactInfo, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border-2 border-white/10 bg-white/5 text-white placeholder-gray-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all outline-none resize-none"
              placeholder="E.g. We manufacture loading platforms and need an AI assistant trained on our product manuals..."
            />
          </div>

          {/* Show error if email fails */}
          {emailError && (
            <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              ⚠️ {emailError}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // ── STEP 5: CONFIRMATION ──────────────────────────────────────────────────
  const renderStep5 = () => (
    <div className="animate-fadeIn text-center py-12">
      <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-500/30">
        <PartyPopper size={48} className="text-white" />
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 font-space-grotesk">
        Request Received!
      </h2>
      <p className="text-xl text-gray-400 mb-4 max-w-2xl mx-auto">
        Thank you, <span className="font-bold text-blue-400">{contactInfo.name}</span>! We've received your project details and will be in touch within{' '}
        <span className="font-bold text-white">24 hours</span>.
      </p>
      <p className="text-gray-500 mb-10">
        A confirmation has been sent to <span className="font-bold text-gray-300">{contactInfo.email}</span>
      </p>

      <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 max-w-xl mx-auto mb-10 border border-white/10 text-left">
        <h3 className="font-bold text-blue-400 mb-4 text-center">What happens next?</h3>
        <div className="space-y-4">
          {[
            "Our team reviews your requirements in detail",
            "We prepare a clear proposal with scope and timeline",
            "You receive a custom quote — no surprises, no pressure",
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">{i + 1}</div>
              <p className="text-gray-300 pt-1">{step}</p>
            </div>
          ))}
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
  );

  // ── RENDER ────────────────────────────────────────────────────────────────
  return (
    <main className="min-h-screen bg-[#05060b] text-white">

      <header className="fixed top-0 left-0 right-0 z-50 bg-[#05060b]/80 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold flex items-center gap-1">
            <span className="text-blue-400">Vidi</span>
            <span className="text-white">Agency</span>
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
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

      {/* Bottom nav — hidden on final step */}
      {currentStep < 5 && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#05060b]/80 backdrop-blur-xl border-t border-white/10 py-3 px-4 z-40 safe-bottom">
          <div className="container mx-auto max-w-6xl flex items-center justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full font-bold text-sm md:text-base transition-all
                ${currentStep === 1 ? 'text-gray-600 cursor-not-allowed' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
            >
              <ArrowLeft size={18} />
              Back
            </button>

            <button
              onClick={currentStep === 4 ? handleSubmit : nextStep}
              disabled={!canProceed() || isSubmitting}
              className={`flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 rounded-full font-bold text-sm md:text-base transition-all
                ${canProceed()
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl'
                  : 'bg-white/5 text-gray-500 cursor-not-allowed border border-white/10'}`}
            >
              {isSubmitting ? (
                <><Loader2 size={18} className="animate-spin" />Sending...</>
              ) : currentStep === 4 ? (
                <><Send size={18} />Submit Request</>
              ) : (
                <>Continue<ArrowRight size={18} /></>
              )}
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out; }
        .safe-bottom { padding-bottom: env(safe-area-inset-bottom); }
      `}</style>
    </main>
  );
}