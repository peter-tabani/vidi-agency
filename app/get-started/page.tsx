"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // <--- FIXED: Added missing import
import { supabase } from '@/lib/supabase';   // <--- FIXED: Added missing import
import { sendQuoteEmail } from '@/lib/emailService';
import { 
  ArrowRight, ArrowLeft, Check,  Zap, Clock, 
  Code2, Smartphone, Bot, LayoutDashboard, Workflow, Database,
  Globe, Palette, ShoppingCart, Rocket, Users, Mail, Phone, User,
  Building2, MessageSquare, CheckCircle2, PartyPopper, RefreshCw,PaintBucket,
  Shield, Cpu, Send, Loader2, Star,Cloud, FileText, Video, LifeBuoy,BarChart,
  PenTool,
  Code,
  Server,
  TrendingUp,
  Target,
  Wrench,
  Fingerprint,  // For Biometrics
  Key,          // For 2FA
  Lock,         // For Encryption
  Sparkles,     // For AI
  Share2,       // For Social Integration
  Trophy,       // For Gamification
  Moon,         // For Dark Mode
  Watch,        // For Wearables
  Mic,          // For Voice Command
  UploadCloud,  // For App Store Submission
  Split,
  Headphones,   // For Human Takeover
  Layers,       // For Multi-platform
  LineChart,    // For Detailed Analytics
  Languages,    // For Multi-language
  ShieldCheck,  // For AI Safety
  Bell,         // For Hot Lead Alertsy
  CalendarCheck,// Appointment Booking
  UserMinus,    // Spam Blocking
  Forward,      // Call Transfer
  Voicemail,    // Voicemail management
  Activity      // Dashboard/Status
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
  description: "Custom-built, high-performance websites tailored for the US market.",
  icon: Code2,
  basePrice: 700, // FIXED: Starting price as requested
  gradient: "from-blue-600 to-indigo-600",
  features: [
  // --- CORE STRUCTURE ---
  { id: "pages-5", name: "Up to 5 Pages", description: "Standard site (Home, About, Services, Contact, etc.)", price: 0, icon: Globe },
  { id: "pages-10", name: "Up to 10 Pages", description: "More space for extra services or detailed info", price: 600, icon: Globe },
  { id: "pages-unlimited", name: "Unlimited Pages", description: "A massive site with no limits on content", price: 1800, icon: Globe },
  
  // --- SECURITY & COMPLIANCE ---
  { id: "ssl", name: "SSL Security Certificate", description: "The 'Secure' padlock icon that builds trust", price: 0, icon: Shield },
  { id: "privacy", name: "Legal & Privacy Compliance", description: "Required cookie pop-ups and legal pages", price: 300, icon: Shield, popular: true },
  { id: "backups", name: "Daily Auto-Backups", description: "We save your site daily so you never lose data", price: 200, icon: Database },

  // --- PERFORMANCE ---
  { id: "mobile", name: "Mobile Friendly", description: "Looks perfect on all iPhones and Androids", price: 0, icon: Smartphone },
  { id: "hosting", name: "Domain & Server Setup", description: "We connect your www.name.com to the internet", price: 150, icon: Cloud },
  { id: "speed", name: "Speed Boost Package", description: "Makes your site load instantly (under 2 seconds)", price: 450, icon: Zap, popular: true },

  // --- FUNCTIONALITY ---
  { id: "cms", name: "Easy-Edit Admin Panel", description: "Change text and photos yourself easily", price: 500, icon: LayoutDashboard },
  { id: "forms", name: "Smart Application Forms", description: "Forms that can take resumes or surveys", price: 350, icon: FileText },
  { id: "booking", name: "Booking System", description: "Clients can schedule appointments online", price: 400, icon: Clock },
  { id: "chat", name: "Live Chat Widget", description: "Chat with visitors via WhatsApp or Messenger", price: 200, icon: MessageSquare },
  { id: "ecommerce-lite", name: "Online Store Setup", description: "Sell products and accept payments online", price: 1200, icon: ShoppingCart },

  // --- GROWTH ---
  { id: "seo", name: "Google Ranking (SEO)", description: "Helps your website show up on Google Search", price: 600, icon: Rocket, popular: true },
  { id: "analytics", name: "Visitor Tracking", description: "See who visits your site and where they come from", price: 250, icon: BarChart },
  { id: "maintenance", name: "3-Month Support", description: "We fix bugs and update software for 3 months", price: 500, icon: LifeBuoy },
]
},
  {
  id: "website-redesign",
  name: "Website Redesign",
  description: "Modernize your outdated site with better performance & conversion.",
  icon: PaintBucket, // Assuming you have an icon like this, or use 'Layout'
  basePrice: 600, // FIXED: Slightly lower entry than "New Build" to hook them
  gradient: "from-purple-600 to-pink-600",
  features: [
    // --- VISUAL & EXPERIENCE (The "Facelift") ---
    { id: "ui-refresh", name: "UI/UX Modernization", description: "Fresh, modern look with 2025 design trends", price: 0, icon: Palette }, // Included standard
    { id: "mobile-fix", name: "Mobile Responsiveness Fix", description: "Fixing layout issues on phones & tablets", price: 200, icon: Smartphone },
    { id: "branding", name: "Brand Style Guide", description: "New color palette, typography & logo polish", price: 350, icon: PenTool },

    // --- TECHNICAL IMPROVEMENTS (The "Fix") ---
    { id: "speed-audit", name: "Speed & Performance Overhaul", description: "Fixing slow load times (Core Web Vitals)", price: 400, icon: Zap, popular: true },
    { id: "code-cleanup", name: "Code Structure Cleanup", description: "Removing bloat & unused scripts", price: 250, icon: Code },
    { id: "security-patch", name: "Security Hardening", description: "Fixing vulnerabilities & updating SSL", price: 200, icon: Shield },

    // --- MIGRATION & DATA (The Hard Work) ---
    { id: "migration-content", name: "Content Migration", description: "Safely moving blogs, images & text (up to 20 pages)", price: 400, icon: Database },
    { id: "platform-switch", name: "Platform Migration", description: "Moving from Wix/WordPress to Custom/React", price: 800, icon: Server, popular: true },
    { id: "seo-retain", name: "SEO Rank Protection", description: "301 redirects & sitemap updates to keep rankings", price: 500, icon: TrendingUp },

    // --- CONVERSION FOCUS (Making Money) ---
    { id: "cro", name: "Conversion Rate Optimization", description: "Redesigning CTAs & flows to get more leads", price: 450, icon: Target },
    { id: "analytics-audit", name: "Analytics Re-setup", description: "Fixing broken tracking & events", price: 200, icon: BarChart },
    { id: "integration-fix", name: "Integration Repair", description: "Fixing broken forms, maps, or API connections", price: 300, icon: Wrench },
  ]
},
  {
  id: "app-development",
  name: "Mobile App Development",
  description: "Native & Cross-platform apps for iOS and Android.",
  icon: Smartphone, // Already imported
  basePrice: 2000, // FIXED: A "steal" in the US, but high enough to be credible
  gradient: "from-green-500 to-emerald-600",
  features: [
  // --- SECURITY ---
  { id: "biometrics", name: "Face ID / Fingerprint Login", description: "Let users log in quickly and securely", price: 300, icon: Fingerprint },
  { id: "2fa", name: "2-Step Verification", description: "Extra safety via SMS codes (like banks use)", price: 400, icon: Key },
  { id: "encryption", name: "Secure Data Encryption", description: "Makes chat and user data impossible to hack", price: 600, icon: Lock, popular: true },
  { id: "app-privacy", name: "Privacy & Data Tools", description: "Tools that let users manage their own data", price: 300, icon: Shield },

  // --- ENGAGEMENT ---
  { id: "ai-personal", name: "Smart Recommendations", description: "App learns what users like and shows it to them", price: 900, icon: Sparkles, popular: true },
  { id: "gamification", name: "Rewards & Badges", description: "Fun features to keep users coming back daily", price: 500, icon: Trophy },
  { id: "social-share", name: "Social Sharing", description: "Users can share content to Instagram/TikTok", price: 250, icon: Share2 },
  { id: "in-app-support", name: "Automated Support Bot", description: "An AI assistant to answer user questions 24/7", price: 450, icon: MessageSquare },

  // --- FEATURES ---
  { id: "dark-mode", name: "Dark Mode", description: "A dark theme option that is easy on the eyes", price: 300, icon: Moon },
  { id: "voice-cmd", name: "Voice Controls", description: "Users can talk to the app to get things done", price: 400, icon: Mic },
  { id: "wearables", name: "Smart Watch Connection", description: "App works on Apple Watch and other devices", price: 800, icon: Watch },
  { id: "deep-linking", name: "Smart Ad Links", description: "Ads click straight into the right screen in the app", price: 200, icon: Link },

  // --- LAUNCH & SUPPORT ---
  { id: "store-submission", name: "App Store Publishing", description: "We handle the hard work of getting into Apple/Google", price: 500, icon: UploadCloud, popular: true },
  { id: "cloud-backend", name: "Database Hosting", description: "Setup of the secure server where data lives", price: 600, icon: Cloud },
  { id: "ab-testing", name: "Feature Testing Tools", description: "Test two versions to see which makes more money", price: 350, icon: Split },
  { id: "app-maintenance", name: "3-Month Bug Fixes", description: "We keep the app running smoothly after launch", price: 700, icon: LifeBuoy },
]
},
  {
  id: "ai-automation",
  name: "AI & Chatbot Automation",
  description: "Smart assistants that sell to customers 24/7.",
  icon: Bot, 
  basePrice: 1500, // FIXED: A competitive entry price for Custom AI
  gradient: "from-purple-500 to-indigo-500",
  features: [
    // --- INTEGRATIONS (Connecting to their tools) ---
    { id: "crm-connect", name: "Auto-Save Leads (CRM)", description: "Send customer info directly to Salesforce/HubSpot", price: 600, icon: Users, popular: true },
    { id: "human-takeover", name: "Human Takeover Switch", description: "You can jump into the chat whenever needed", price: 400, icon: Headphones },
    { id: "omnichannel", name: "Works on WhatsApp/FB", description: "One bot that works on Website, Insta & WhatsApp", price: 500, icon: Layers },
    
    // --- DATA & RESULTS (Showing it works) ---
    { id: "analytics-pro", name: "Success Dashboard", description: "See exactly how many leads the AI captured", price: 300, icon: LineChart },
    { id: "transcripts", name: "Read Customer Chats", description: "Review full conversation history for quality", price: 200, icon: FileText }, // Uses existing FileText icon
    { id: "ab-testing-ai", name: "Response Testing", description: "Test different answers to see which sells better", price: 350, icon: Split }, // Uses existing Split icon

    // --- INTELLIGENCE & SAFETY (Trust) ---
    { id: "ai-training", name: "Smart Learning Loop", description: "We train the AI weekly to get smarter answers", price: 500, icon: Sparkles }, // Uses existing Sparkles
    { id: "ai-safety", name: "Brand Safety Guard", description: "Prevents the AI from saying anything incorrect/rude", price: 400, icon: ShieldCheck, popular: true },
    { id: "multi-lang", name: "Auto-Translate", description: "Chat with customers in English, Spanish, French, etc.", price: 400, icon: Languages },

    // --- LOOK & FEEL (Branding) ---
    { id: "custom-ui", name: "Custom Brand Colors", description: "Chat bubble matches your logo and website colors", price: 200, icon: Palette },
    { id: "hot-lead-alert", name: "Hot Lead Alerts", description: "Get a text/email instantly when a client wants to buy", price: 150, icon: Bell },
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
  {
  id: "ai-receptionist",
  name: "AI Phone Receptionist",
  description: "A human-like voice assistant that answers calls & books appointments 24/7.",
  icon: Phone,
  basePrice: 1200, // FIXED: Setup fee. Cheaper than 2 weeks of a human receptionist.
  gradient: "from-pink-500 to-rose-500",
  features: [
    // --- CORE CALL HANDLING ---
    { id: "24-7-answer", name: "24/7 Call Answering", description: "Never miss a customer call, even at night or weekends", price: 0, icon: Clock }, // Standard Inclusion
    { id: "human-voice", name: "Ultra-Realistic Voice", description: "Sounds exactly like a human (pauses, 'umms', & emotion)", price: 0, icon: Mic }, // Standard Inclusion
    { id: "call-routing", name: "Smart Call Routing", description: "AI sends sales calls to Sales, support calls to Support", price: 300, icon: Forward },

    // --- BUSINESS ACTIONS (The Value) ---
    { id: "booking-voice", name: "Auto-Appointment Booking", description: "AI checks your calendar and books times while on the phone", price: 500, icon: CalendarCheck, popular: true },
    { id: "spam-blocker", name: "Spam & Robo-Call Blocker", description: "AI screens callers so you never talk to a spammer again", price: 250, icon: UserMinus },
    { id: "sms-followup", name: "Instant SMS Follow-up", description: "Sends a text with links/info immediately after hanging up", price: 300, icon: MessageSquare },

    // --- INTEGRATION & SETUP ---
    { id: "crm-sync-voice", name: "CRM Auto-Entry", description: "Types out the call summary and saves it to your database", price: 450, icon: Database },
    { id: "live-transfer", name: "Live Human Transfer", description: "AI patches the call through to your cell if it's urgent", price: 350, icon: Phone },
    { id: "custom-number", name: "Local US Phone Number", description: "Setup of a dedicated business line for the AI", price: 150, icon: Globe },

    // --- ADVANCED ---
    { id: "voice-clone", name: "Voice Cloning", description: "Train the AI to sound exactly like YOU or your staff", price: 600, icon: Fingerprint },
    { id: "analytics-voice", name: "Call Recording & Analysis", description: "Dashboard to listen to calls and see success rates", price: 250, icon: Activity },
    { id: "maintenance-voice", name: "Monthly Tuning", description: "We update the script and improve the voice monthly", price: 400, icon: LifeBuoy },
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