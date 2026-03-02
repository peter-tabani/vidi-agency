import Footer from "@/components/Footer";
import Link from "next/link";
import ReceptionistAI from '@/components/ReceptionistAI';
import TechIcons from '@/components/TechIcons';
import { 
  ArrowRight, CheckCircle2, Bot, LayoutDashboard, Code2, Inbox, Lock, UploadCloud,
  Smartphone, Phone, BarChart3, Workflow, Database, Cpu, Check, XCircle, Plus, Star, Rocket, CreditCard, Mail, FileText, Play, Users,Share2, Zap, Clock, ShieldCheck, TrendingUp
} from "lucide-react";

const features = [
  {
    title: "AI Lead Capture & Qualification",
    description: "AI agents that engage every visitor, qualify leads in real time, and route them to your sales team 24/7.",
    icon: <Bot className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "AI Customer Engagement & Support",
    description: "Intelligent chatbots trained on your business data to answer questions and close deals around the clock.",
    icon: <Inbox className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "AI Workflow Automation",
    description: "Eliminate repetitive tasks. Automate follow-ups, scheduling, data entry, and internal processes.",
    icon: <Workflow className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "AI-Powered Websites & Apps",
    description: "High-performance websites and apps built to support your AI systems and convert more customers.",
    icon: <Code2 className="w-6 h-6 text-blue-400" />,
  },
];

const advancedFeatures = [
  {
    icon: <Bot className="text-blue-400" size={32} />, 
    title: "24/7 AI Lead Capture",
    description: "Your AI agent greets every visitor, asks the right questions, and qualifies leads in real time. No missed opportunities, even at 2 AM."
  },
  {
    icon: <Workflow className="text-sky-400" size={32} />, 
    title: "Automated Follow-Up Engine",
    description: "New lead comes in? Your system instantly follows up via SMS, email, or WhatsApp. It nurtures prospects until they are ready to buy — without your team lifting a finger."
  },
  {
    icon: <Inbox className="text-emerald-400" size={32} />, 
    title: "AI Customer Support",
    description: "Resolve common questions instantly. Our AI handles FAQs, order tracking, booking changes, and more — so your team focuses on high-value conversations."
  },
  {
    icon: <Database className="text-amber-400" size={32} />, 
    title: "Smart Business Dashboard",
    description: "See every lead, every conversation, and every dollar in one place. Real-time data from your AI systems, CRM, and payment tools — all in a single view."
  },
  {
    icon: <Cpu className="text-indigo-400" size={32} />, 
    title: "Workflow Automation",
    description: "Connect your existing tools — CRM, email, payments, scheduling — into one seamless loop. Data flows automatically. Manual entry disappears."
  },
  {
    icon: <Smartphone className="text-rose-400" size={32} />, 
    title: "AI-Powered Websites & Apps",
    description: "Need a website or app to support your AI systems? We build fast, modern platforms designed to convert visitors and integrate with your automation stack."
  }
];

const TECHNOLOGIES = [
  {
    name: "OpenAI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    className: "h-6 md:h-8 lg:h-10 w-auto" 
  },
  {
    name: "Next.js",
    logo: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png",
    className: "h-8 md:h-10 lg:h-12 w-auto" 
  },
  {
    name: "Kotlin",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
    className: "h-8 md:h-10 lg:h-12 w-auto"
  },
  {
    name: "Python",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    className: "h-8 md:h-10 lg:h-12 w-auto"
  },
  {
    name: "AWS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    className: "h-6 md:h-8 lg:h-10 w-auto"
  },
  {
    name: "React Native",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    className: "h-8 md:h-10 lg:h-12 w-auto"
  }
];

const pricingPlans = [
  {
    name: "Starter",
    price: "From $2,500",
    setup: "One-Time Build",
    description: "For businesses ready to automate lead capture and customer engagement.",
    features: [
      "AI Chatbot (Web + 1 Channel)",
      "Lead Capture & Qualification",
      "Basic Workflow Automation",
      "Integration With Your CRM",
      "30-Day Post-Launch Support"
    ],
    highlight: false
  },
  {
    name: "Growth",
    price: "Custom Pricing",
    setup: "One-Time Build",
    description: "Full AI automation across channels with advanced workflows and reporting.",
    features: [
      "Multi-Channel AI (Web, WA, IG, SMS)",
      "Automated Follow-Up Sequences",
      "Smart Dashboard & Analytics",
      "Deep System Integrations",
      "Priority Support & Optimization"
    ],
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Custom Pricing",
    setup: "Dedicated Partnership",
    description: "End-to-end AI infrastructure for complex operations and high volume.",
    features: [
      "Full AI Automation Suite",
      "Custom AI Agents & Tools",
      "Advanced Analytics & Reporting",
      "Unlimited Integrations",
      "Dedicated Account Manager"
    ],
    highlight: false
  }
];

const comparisonData = [
  { feature: "Basic Chatbot", us: true, competitor: true },
  { feature: "Simple Automations", us: true, competitor: true },
  { feature: "Platform Integrations", us: true, competitor: true },
  { feature: "AI Trained on Your Business Data", us: true, competitor: false },
  { feature: "AI Lead Qualification & Routing", us: true, competitor: false },
  { feature: "Custom Workflow Automation", us: true, competitor: false },
  { feature: "Integrates With Your Existing Systems", us: true, competitor: false },
  { feature: "Dedicated Account Manager", us: true, competitor: false },
  { feature: "Done-For-You Build (No Learning Curve)", us: true, competitor: false },
];

const serviceCards = [
  { icon: <Bot size={24} />, title: "AI Lead Capture", desc: "Qualify & Route Leads 24/7" },
  { icon: <Inbox size={24} />, title: "AI Customer Engagement", desc: "Automated Support & Sales" },
  { icon: <Workflow size={24} />, title: "Workflow Automation", desc: "Eliminate Repetitive Tasks" },
  { icon: <Database size={24} />, title: "System Integration", desc: "Connect Your Existing Tools" },
  { icon: <Code2 size={24} />, title: "AI-Powered Websites", desc: "Built to Convert & Automate" },
  { icon: <Smartphone size={24} />, title: "Mobile Apps", desc: "iOS & Android Support" },
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full overflow-x-hidden">
      
      {/* HERO SECTION - Fixed responsiveness */}
      <section className="relative overflow-hidden bg-[#05060b] min-h-screen flex items-center">
  {/* Background for mobile/tablet – diagonal panels */}
  <div className="absolute inset-0 pointer-events-none lg:hidden" aria-hidden="true">
    <div className="absolute inset-0 bg-[#05060b]" />
    <div className="absolute top-0 bottom-0 left-[25%] right-[25%] bg-[#0a0f1e] origin-center -skew-x-[16deg] scale-x-[1.3]" />
    <div className="absolute top-0 bottom-0 left-[55%] right-[-15%] bg-[#0c2d6b] origin-center -skew-x-[16deg] scale-x-[1.3]" />
    <div className="absolute top-0 bottom-0 left-[20%] w-[20%] bg-gradient-to-r from-[#05060b] to-transparent" />
    <div className="absolute top-0 bottom-0 left-[48%] w-[18%] bg-gradient-to-r from-[#0a0f1e]/80 to-transparent" />
    <div className="absolute top-[-20%] right-[-5%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '128px 128px' }} />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.5)_100%)]" />
  </div>

  {/* Desktop background image */}
  <div className="hidden lg:block absolute inset-0 w-full h-full">
    <img
      src="/hero-bg.jpg"
      alt="AI background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/60"></div>
    <div className="absolute top-[-20%] right-[-5%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 py-16 md:py-20 lg:py-24 w-full">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">

      {/* LEFT COLUMN – refined title and buttons */}
      <div className="text-center lg:text-left">
        {/* Headline with premium typography */}
        <h1 className="font-space-grotesk font-light text-white tracking-tight leading-[1.1] mb-8 text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl">
          Advanced{' '}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-sky-300">
            AI
          </span>
          <br />
          Automation Solutions
        </h1>

        {/* CTA Buttons – sleek and modern */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link
            href="/get-started"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl text-base font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30"
          >
            <span className="relative z-10">Start your project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          <Link
            href="/case-studies"
            className="px-8 py-4 rounded-2xl text-base font-semibold text-white bg-white/5 border border-white/20 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300"
          >
            See How It Works
          </Link>
        </div>

        {/* Subtle decorative element – optional */}
        <div className="hidden lg:block mt-16 w-24 h-px bg-gradient-to-r from-blue-500/50 to-transparent" />
      </div>

      {/* RIGHT COLUMN – ORBIT (fully restored, slightly adjusted scale) */}
      <div className="hidden lg:flex relative w-full items-center justify-center min-h-[500px] xl:min-h-[600px]">
        <div className="w-full h-full flex items-center justify-center scale-90 xl:scale-100 transition-transform duration-500">
          <div className="relative w-[500px] h-[500px] xl:w-[600px] xl:h-[600px] aspect-square flex items-center justify-center">

            {/* Center Core */}
            <div className="absolute z-20 w-32 h-32 xl:w-40 xl:h-40 bg-white/10 backdrop-blur-xl rounded-full shadow-[0_0_80px_-10px_rgba(59,130,246,0.6)] flex items-center justify-center border border-white/20">
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 xl:w-20 xl:h-20 mx-auto rounded-xl flex items-center justify-center text-white mb-2 shadow-lg">
                  <Bot className="w-8 h-8 xl:w-10 xl:h-10" />
                </div>
                <span className="text-xs xl:text-sm font-bold text-white block uppercase tracking-wider">AI Core</span>
              </div>
            </div>

            {/* Orbit Rings */}
            <div className="absolute w-[90%] h-[90%] border border-dashed border-blue-500/20 rounded-full" />
            <div className="absolute w-[68%] h-[68%] border border-blue-400/15 rounded-full" />

            {/* Rotating Cards */}
            <div className="absolute inset-0 animate-orbit-ring flex items-center justify-center">
              {/* Top Card */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 xl:w-56 animate-orbit-item">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 shadow-xl flex items-center gap-3">
                  <div className="bg-blue-500/20 p-2.5 rounded-lg text-blue-400">
                    <LayoutDashboard className="w-5 h-5 xl:w-6 xl:h-6" />
                  </div>
                  <span className="text-sm xl:text-base font-bold text-white">AI Lead Capture</span>
                </div>
              </div>
              {/* Right Card */}
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-48 xl:w-56 animate-orbit-item">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 shadow-xl flex items-center gap-3">
                  <div className="bg-purple-500/20 p-2.5 rounded-lg text-purple-400">
                    <Smartphone className="w-5 h-5 xl:w-6 xl:h-6" />
                  </div>
                  <span className="text-sm xl:text-base font-bold text-white">Smart Engagement</span>
                </div>
              </div>
              {/* Bottom Card */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-48 xl:w-56 animate-orbit-item">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 shadow-xl flex items-center gap-3">
                  <div className="bg-green-500/20 p-2.5 rounded-lg text-green-400">
                    <Workflow className="w-5 h-5 xl:w-6 xl:h-6" />
                  </div>
                  <span className="text-sm xl:text-base font-bold text-white">Workflow Automation</span>
                </div>
              </div>
              {/* Left Card */}
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-48 xl:w-56 animate-orbit-item">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 shadow-xl flex items-center gap-3">
                  <div className="bg-orange-500/20 p-2.5 rounded-lg text-orange-400">
                    <Database className="w-5 h-5 xl:w-6 xl:h-6" />
                  </div>
                  <span className="text-sm xl:text-base font-bold text-white">System Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


     

      
      {/* NATIVE ENVIRONMENT COMPATIBILITY STRIP */}
      {/* NATIVE ENVIRONMENT COMPATIBILITY STRIP */}
      {/* NATIVE ENVIRONMENT COMPATIBILITY STRIP */}
      <section className="w-full bg-[#05060b] border-t border-b border-white/[0.04] py-8 md:py-10 relative z-20 overflow-hidden">
        
        {/* CSS for Infinite Marquee */}
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
            width: max-content;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative">
          <h2 className="text-center text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-8 md:mb-10">
            Native Environment Compatibility
          </h2>
        </div>

        {/* Marquee Container with Edge Fades */}
        <div className="relative w-full overflow-hidden flex items-center">
          
          {/* Left Edge Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#05060b] to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Track */}
          <div className="flex animate-scroll items-center">
            
            {/* --- LOGO SET (Rendered twice for seamless looping) --- */}
            {[1, 2].map((setIndex) => (
              <div key={setIndex} className="flex items-center">
                
                {/* Salesforce */}
                <div className="flex items-center gap-1.5 text-[#00A1E0] mx-8 md:mx-12">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 md:w-8 md:h-8">
                     <path d="M17.5 8c-.46 0-.91.1-1.33.28C15.42 5.2 13.04 4 10.5 4 6.36 4 3 7.36 3 11.5c0 4.14 3.36 7.5 7.5 7.5h7c3.03 0 5.5-2.47 5.5-5.5S20.53 8 17.5 8z" />
                  </svg>
                  <span className="text-xl md:text-2xl font-bold tracking-tighter lowercase text-white">salesforce</span>
                </div>

                {/* HubSpot */}
                <div className="flex items-center gap-1.5 text-[#FF7A59] mx-8 md:mx-12">
                   <Share2 className="w-6 h-6 md:w-7 md:h-7 stroke-[2.5]" />
                   <span className="text-xl md:text-2xl font-bold tracking-tight text-white">HubSpot</span>
                </div>

                {/* Microsoft Dynamics 365 */}
                <div className="flex items-center gap-2 text-[#0078D4] mx-8 md:mx-12">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                    <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z"/>
                  </svg>
                  <span className="text-lg md:text-xl font-semibold tracking-tight text-white">Dynamics 365</span>
                </div>

                {/* Microsoft Outlook */}
                <div className="flex items-center gap-1.5 text-[#0078D4] mx-8 md:mx-12">
                   <Mail className="w-6 h-6 md:w-7 md:h-7 stroke-[2]" />
                   <span className="text-lg md:text-xl font-semibold tracking-tight text-white">Outlook</span>
                </div>

                {/* Google Workspace */}
                <div className="flex items-center gap-2 text-[#4285F4] mx-8 md:mx-12">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-7 md:h-7">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                  </svg>
                  <span className="text-lg md:text-xl font-medium tracking-tight text-white">Workspace</span>
                </div>

                {/* Zapier */}
                <div className="flex items-center gap-1 text-[#FF4A00] mx-8 md:mx-12">
                   <Zap className="w-5 h-5 md:w-6 md:h-6 fill-current stroke-none" />
                   <span className="text-xl md:text-2xl font-black tracking-tighter text-white">_zapier</span>
                </div>

              </div>
            ))}
            
          </div>

          {/* Right Edge Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#05060b] to-transparent z-10 pointer-events-none"></div>
          
        </div>
      </section>

      

      
      {/* HIGH-IMPACT STATS SECTION (Replaces old CTA) */}
      <section className="py-24 md:py-32 lg:py-40 bg-[#05060b] relative overflow-hidden border-t border-white/[0.04]">
        {/* Center glowing orb to draw the eye directly to the text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 rounded-full filter blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10 text-center max-w-5xl">
        

          {/* The Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-10 md:mb-14 tracking-tight font-space-grotesk">
            Recovering <br className="block sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-sky-300">
              Sales Capacity.
            </span>
          </h2>

          {/* The High-Impact Copy */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-400 leading-relaxed font-light">
          Manual data entry currently accounts for <strong className="text-white font-medium">32 hours per rep, per month</strong> in the industrial sector. AI-integrated workflows recapture this time, redirecting it toward <strong className="text-white font-medium">high-value client acquisition.</strong>
          </p>
          
        </div>
      </section>

      {/* COMPARISON SECTION - Fixed responsiveness */}
      {/* SECTION 3: OPERATIONAL CAPABILITIES */}
      <section className="relative py-24 md:py-32 z-10 overflow-hidden bg-[#07080e] border-t border-white/[0.04]">
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl relative">
          
          {/* Centered Section Header */}
          <div className="mb-20 md:mb-24 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight font-space-grotesk">
              Operational <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Capabilities.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-20 md:gap-32">
            
            {/* FEATURE 1: Image Left, Text Right */}
            <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
              <div className="w-full md:w-1/2 order-1">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl group">
                  <img 
                    src="/hero-bg.jpg" 
                    alt="High-Fidelity Knowledge Ingestion" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05060b] via-[#05060b]/40 to-transparent"></div>
                  {/* Title overlay */}
                  <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-wide font-space-grotesk leading-tight">
                      1. High-Fidelity Knowledge Ingestion
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 order-2 md:pl-8 lg:pl-12">
                <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                  Proprietary safety manuals and technical specifications are ingested into a private vector database. This ensures the AI provides 100% accurate, safety-critical data in every interaction, removing the risk of "model drift" or generic responses.
                </p>
              </div>
            </div>

            {/* FEATURE 2: Image Right, Text Left */}
            <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl group">
                  <img 
                    src="/hero-bg.jpg" 
                    alt="Bi-Directional CRM Synchronization" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05060b] via-[#05060b]/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-wide font-space-grotesk leading-tight">
                      2. Bi-Directional CRM Synchronization
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 order-2 md:order-1 md:pr-8 lg:pr-12">
                <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                  Real-time connectivity between customer dialogue and CRM environments. Lead qualification, contact details, and intent signals are mapped directly to existing sales pipelines without manual entry, recovering 70% of administrative time.
                </p>
              </div>
            </div>

            {/* FEATURE 3: Image Left, Text Right */}
            <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
              <div className="w-full md:w-1/2 order-1">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl group">
                  <img 
                    src="/hero-bg.jpg" 
                    alt="Conversational Email Architecture" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05060b] via-[#05060b]/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-wide font-space-grotesk leading-tight">
                      3. Conversational Email Architecture
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 order-2 md:pl-8 lg:pl-12">
                <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                  Post-interaction, the system generates context-aware follow-up drafts within the representative's inbox. This maintains the "Speed to Lead" advantage, ensuring high-intent prospects receive technical specs within minutes, not days.
                </p>
              </div>
            </div>

            {/* FEATURE 4: Image Right, Text Left */}
            <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl group">
                  <img 
                    src="/hero-bg.jpg" 
                    alt="Autonomous Qualification & Routing" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05060b] via-[#05060b]/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-wide font-space-grotesk leading-tight">
                      4. Autonomous Qualification & Routing
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 order-2 md:order-1 md:pr-8 lg:pr-12">
                <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                  The system identifies and qualifies prospects based on their specific industrial safety needs. Low-intent inquiries are handled autonomously, while high-value accounts are prioritized for immediate human intervention.
                </p>
              </div>
            </div>

          </div>

          {/* Learn More Button */}
          <div className="mt-20 md:mt-24 text-center">
            <Link 
              href="/capabilities" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-white/[0.15] text-white rounded-full text-base lg:text-lg font-bold hover:bg-white/[0.05] hover:border-white/[0.3] transition-all duration-300"
            >
              Learn More
              <ArrowRight className="w-5 h-5 text-blue-400" />
            </Link>
          </div>

        </div>
      </section>
      {/* SECTION 4: THE BUSINESS CASE (Clean Data Table) */}
      <section className="relative py-24 md:py-32 z-10 bg-[#05060b] border-t border-white/[0.04] overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-5xl relative z-10">
          
          {/* Section Header */}
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-blue-400 font-bold tracking-widest uppercase text-xs md:text-sm mb-4">
              Empirical Impact
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight font-space-grotesk">
              The Cost of <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Inaction.</span>
            </h3>
          </div>

          {/* Premium Data Table */}
          <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                
                {/* Table Header */}
                <thead>
                  <tr className="bg-white/[0.04] border-b border-white/[0.08]">
                    <th className="py-5 px-6 md:px-8 text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest w-1/3 md:w-1/4">
                      Impact Area
                    </th>
                    <th className="py-5 px-6 md:px-8 text-xs md:text-sm font-bold text-blue-400 uppercase tracking-widest w-2/3 md:w-3/4">
                      Data Profile
                    </th>
                  </tr>
                </thead>
                
                {/* Table Body */}
                <tbody className="divide-y divide-white/[0.04]">
                  
                  {/* Row 1 */}
                  <tr className="hover:bg-white/[0.02] transition-colors duration-300">
                    <td className="py-6 px-6 md:px-8 font-semibold text-white text-base md:text-lg align-top">
                      The Data Entry Tax
                    </td>
                    <td className="py-6 px-6 md:px-8 text-gray-300 font-light text-sm md:text-base leading-relaxed">
                      Sales representatives spend nearly <strong className="text-blue-400 font-bold">32.7 hours per month</strong> on manual data entry and CRM management; AI automation recovers <strong className="text-blue-400 font-bold">70%</strong> of this time, effectively adding <strong className="text-blue-400 font-bold">23 selling days</strong> per year to every rep's schedule.
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="hover:bg-white/[0.02] transition-colors duration-300">
                    <td className="py-6 px-6 md:px-8 font-semibold text-white text-base md:text-lg align-top">
                      The Cost of Inaction
                    </td>
                    <td className="py-6 px-6 md:px-8 text-gray-300 font-light text-sm md:text-base leading-relaxed">
                      The average cost to process a single purchase order manually can reach as high as <strong className="text-blue-400 font-bold">$506.52</strong>, compared to just a fraction of that with AI-driven automation.
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="hover:bg-white/[0.02] transition-colors duration-300">
                    <td className="py-6 px-6 md:px-8 font-semibold text-white text-base md:text-lg align-top">
                      Speed to Lead
                    </td>
                    <td className="py-6 px-6 md:px-8 text-gray-300 font-light text-sm md:text-base leading-relaxed">
                      Contacting a new lead within <strong className="text-blue-400 font-bold">five minutes</strong> of their inquiry increases the likelihood of conversion by <strong className="text-blue-400 font-bold">9x</strong> compared to waiting just 30 minutes.
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr className="hover:bg-white/[0.02] transition-colors duration-300">
                    <td className="py-6 px-6 md:px-8 font-semibold text-white text-base md:text-lg align-top">
                      Response Acceleration
                    </td>
                    <td className="py-6 px-6 md:px-8 text-gray-300 font-light text-sm md:text-base leading-relaxed">
                      AI-generated client proposals are created <strong className="text-blue-400 font-bold">14 times faster</strong> than traditional methods, drastically shortening the time a lead stays "cold".
                    </td>
                  </tr>

                  {/* Row 5 */}
                  <tr className="hover:bg-white/[0.02] transition-colors duration-300">
                    <td className="py-6 px-6 md:px-8 font-semibold text-white text-base md:text-lg align-top">
                      Asset Uptime
                    </td>
                    <td className="py-6 px-6 md:px-8 text-gray-300 font-light text-sm md:text-base leading-relaxed">
                      AI-powered predictive maintenance can increase asset uptime by an average of <strong className="text-blue-400 font-bold">20%</strong> and reduce overall factory maintenance costs by up to <strong className="text-blue-400 font-bold">40%</strong>.
                    </td>
                  </tr>

                  {/* Row 6 */}
                  <tr className="hover:bg-white/[0.02] transition-colors duration-300">
                    <td className="py-6 px-6 md:px-8 font-semibold text-white text-base md:text-lg align-top">
                      Precision Quality
                    </td>
                    <td className="py-6 px-6 md:px-8 text-gray-300 font-light text-sm md:text-base leading-relaxed">
                      AI-driven computer vision can detect manufacturing defects with <strong className="text-blue-400 font-bold">99% accuracy</strong>, reducing waste and preventing costly product recalls.
                    </td>
                  </tr>

                  {/* Row 7 */}
                  <tr className="hover:bg-white/[0.02] transition-colors duration-300">
                    <td className="py-6 px-6 md:px-8 font-semibold text-white text-base md:text-lg align-top">
                      Profitability Boost
                    </td>
                    <td className="py-6 px-6 md:px-8 text-gray-300 font-light text-sm md:text-base leading-relaxed">
                      Businesses adopting AI in their sales processes see an average <strong className="text-blue-400 font-bold">23% increase</strong> in net profit margins.
                    </td>
                  </tr>

                  {/* Row 8 */}
                  <tr className="hover:bg-white/[0.02] transition-colors duration-300">
                    <td className="py-6 px-6 md:px-8 font-semibold text-white text-base md:text-lg align-top">
                      Rapid Payback (ROI)
                    </td>
                    <td className="py-6 px-6 md:px-8 text-gray-300 font-light text-sm md:text-base leading-relaxed">
                      The median ROI on AI investments for sales is achieved within just <strong className="text-blue-400 font-bold">5.2 months</strong>, with sustained annual returns averaging <strong className="text-blue-400 font-bold">317%</strong> thereafter.
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
          
        </div>
      </section>

      
      

      {/* ONBOARDING FLOW - Fixed responsiveness */}
      {/* SECTION 5: DEPLOYMENT ARCHITECTURE (Enterprise Pipeline Design) */}
      {/* SECTION 5: DEPLOYMENT ARCHITECTURE (Enterprise Pipeline Design) */}
      <section id="process" className="py-24 md:py-32 lg:py-40 bg-[#07080e] border-t border-white/[0.04] relative z-10 overflow-hidden">
        
        {/* Subtle grid background to look like engineering blueprint */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl relative">
          
          {/* Section Header */}
          <div className="text-center md:text-left mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight font-space-grotesk">
                Deployment <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">Architecture.</span>
              </h3>
            </div>
            
          </div>

          {/* THE ENTERPRISE PIPELINE GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              
            {/* Phase 01: Ingestion */}
            <div className="relative p-8 md:p-12 bg-[#0a0b12] border border-white/[0.04] hover:border-white/[0.1] rounded-2xl md:rounded-[32px] overflow-hidden group transition-all duration-500 flex flex-col justify-between">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Massive Watermark Number */}
              <div className="absolute -right-4 -bottom-10 text-[120px] md:text-[160px] font-black text-white/[0.02] group-hover:text-blue-500/[0.04] transition-colors duration-700 pointer-events-none font-space-grotesk leading-none">
                01
              </div>

              <div className="relative z-10 mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-md mb-8 md:mb-12">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                  <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">Phase_01</span>
                </div>
                
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight font-space-grotesk">
                  Secure Data <br/> Ingestion
                </h4>
                
                <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed">
                  We train a private AI model on your safety manuals, product specs, and technical PDFs.
                </p>
              </div>

              {/* Learn More Link */}
              <div className="relative z-10 mt-auto pt-6 border-t border-white/[0.04] group-hover:border-white/[0.1] transition-colors duration-500">
                <Link href="/deployment/ingestion" className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-gray-500 group-hover:text-white transition-colors duration-300">
                  Learn More 
                  <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transform transition-all duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Phase 02: Integration */}
            <div className="relative p-8 md:p-12 bg-[#0a0b12] border border-white/[0.04] hover:border-white/[0.1] rounded-2xl md:rounded-[32px] overflow-hidden group transition-all duration-500 flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute -right-4 -bottom-10 text-[120px] md:text-[160px] font-black text-white/[0.02] group-hover:text-blue-500/[0.04] transition-colors duration-700 pointer-events-none font-space-grotesk leading-none">
                02
              </div>

              <div className="relative z-10 mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-md mb-8 md:mb-12">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: "300ms" }}></div>
                  <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">Phase_02</span>
                </div>
                
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight font-space-grotesk">
                  System <br/> Integration
                </h4>
                
                <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed">
                  We connect the AI to your CRM and Email via secure API—no manual entry required.
                </p>
              </div>

              {/* Learn More Link */}
              <div className="relative z-10 mt-auto pt-6 border-t border-white/[0.04] group-hover:border-white/[0.1] transition-colors duration-500">
                <Link href="/deployment/integration" className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-gray-500 group-hover:text-white transition-colors duration-300">
                  Learn More 
                  <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transform transition-all duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Phase 03: Growth */}
            <div className="relative p-8 md:p-12 bg-[#0a0b12] border border-white/[0.04] hover:border-white/[0.1] rounded-2xl md:rounded-[32px] overflow-hidden group transition-all duration-500 flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute -right-4 -bottom-10 text-[120px] md:text-[160px] font-black text-white/[0.02] group-hover:text-blue-500/[0.04] transition-colors duration-700 pointer-events-none font-space-grotesk leading-none">
                03
              </div>

              <div className="relative z-10 mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-md mb-8 md:mb-12">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" style={{ animationDelay: "600ms" }}></div>
                  <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">Phase_03</span>
                </div>
                
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight font-space-grotesk">
                  Autonomous <br/> Growth
                </h4>
                
                <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed">
                  Your sales team receives pre-qualified leads and drafted follow-up emails, ready for a 1-click send.
                </p>
              </div>

              {/* Learn More Link */}
              <div className="relative z-10 mt-auto pt-6 border-t border-white/[0.04] group-hover:border-white/[0.1] transition-colors duration-500">
                <Link href="/deployment/growth" className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-gray-500 group-hover:text-white transition-colors duration-300">
                  Learn More 
                  <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-sky-400 transform transition-all duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 lg:py-24 bg-[#07080e]">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 md:mb-4 font-space-grotesk">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Questions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Everything you need to know about our AI automation systems and how we work with your business.
            </p>
          </div>

          {/* FAQ GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
            
            {/* Question 1 */}
            <div className="group">
              <details className="group bg-white/[0.03] border border-white/[0.06] rounded-xl md:rounded-2xl overflow-hidden hover:border-white/[0.12] transition-colors duration-300 open:ring-1 open:ring-blue-500/20 open:border-blue-500/20">
                <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer list-none text-base md:text-lg font-bold text-gray-200">
                  <span>Do I own the AI system you build?</span>
                  <span className="bg-white/[0.06] text-blue-400 rounded-full p-2 transition-transform group-open:rotate-45 group-open:bg-blue-500/20">
                    <Plus size={20} />
                  </span>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-400 leading-relaxed text-sm md:text-base">
                  Yes. Unlike SaaS platforms where you rent access, we build custom AI systems that belong to you. Once the project is complete, <b>you own 100% of the code, AI agents, workflows, and data.</b> It is your asset to keep, scale, or sell.
                </div>
              </details>
            </div>

            {/* Question 2 */}
            <div className="group">
              <details className="group bg-white/[0.03] border border-white/[0.06] rounded-xl md:rounded-2xl overflow-hidden hover:border-white/[0.12] transition-colors duration-300 open:ring-1 open:ring-blue-500/20 open:border-blue-500/20">
                <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer list-none text-base md:text-lg font-bold text-gray-200">
                  <span>How long does a typical project take?</span>
                  <span className="bg-white/[0.06] text-blue-400 rounded-full p-2 transition-transform group-open:rotate-45 group-open:bg-blue-500/20">
                    <Plus size={20} />
                  </span>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-400 leading-relaxed text-sm md:text-base">
                  It depends on scope. A focused <b>AI lead capture or chatbot system</b> can be live in 7–14 days. A full <b>multi-channel automation suite</b> typically takes 4–8 weeks. We work in short sprints so you see progress constantly.
                </div>
              </details>
            </div>

            {/* Question 3 */}
            <div className="group">
              <details className="group bg-white/[0.03] border border-white/[0.06] rounded-xl md:rounded-2xl overflow-hidden hover:border-white/[0.12] transition-colors duration-300 open:ring-1 open:ring-blue-500/20 open:border-blue-500/20">
                <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer list-none text-base md:text-lg font-bold text-gray-200">
                  <span>What happens after launch?</span>
                  <span className="bg-white/[0.06] text-blue-400 rounded-full p-2 transition-transform group-open:rotate-45 group-open:bg-blue-500/20">
                    <Plus size={20} />
                  </span>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-400 leading-relaxed text-sm md:text-base">
                  We don’t disappear after launch. Every project includes a <b>30-day warranty period</b> for bug fixes. After that, we offer optional support packages to keep your AI system optimized, updated, and performing at its best.
                </div>
              </details>
            </div>

            {/* Question 4 */}
            <div className="group">
              <details className="group bg-white/[0.03] border border-white/[0.06] rounded-xl md:rounded-2xl overflow-hidden hover:border-white/[0.12] transition-colors duration-300 open:ring-1 open:ring-blue-500/20 open:border-blue-500/20">
                <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer list-none text-base md:text-lg font-bold text-gray-200">
                  <span>Can you add AI to my existing website or systems?</span>
                  <span className="bg-white/[0.06] text-blue-400 rounded-full p-2 transition-transform group-open:rotate-45 group-open:bg-blue-500/20">
                    <Plus size={20} />
                  </span>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-400 leading-relaxed text-sm md:text-base">
                  Absolutely. We specialize in integrating AI into what you already have. Whether it’s a WordPress site, a Shopify store, or a custom app — we add AI chatbots, lead capture, and automation workflows <b>without rebuilding anything.</b>
                </div>
              </details>
            </div>

            {/* Question 5 */}
            <div className="group">
              <details className="group bg-white/[0.03] border border-white/[0.06] rounded-xl md:rounded-2xl overflow-hidden hover:border-white/[0.12] transition-colors duration-300 open:ring-1 open:ring-blue-500/20 open:border-blue-500/20">
                <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer list-none text-base md:text-lg font-bold text-gray-200">
                  <span>How does your pricing work?</span>
                  <span className="bg-white/[0.06] text-blue-400 rounded-full p-2 transition-transform group-open:rotate-45 group-open:bg-blue-500/20">
                    <Plus size={20} />
                  </span>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-400 leading-relaxed text-sm md:text-base">
                  Projects typically start at <b>$2,500</b> for a focused AI automation build. Pricing depends on scope and complexity. We provide a clear proposal with a fixed price before any work begins. <b>No hidden fees. No forced recurring charges.</b>
                </div>
              </details>
            </div>

            {/* Question 6 */}
            <div className="group">
              <details className="group bg-white/[0.03] border border-white/[0.06] rounded-xl md:rounded-2xl overflow-hidden hover:border-white/[0.12] transition-colors duration-300 open:ring-1 open:ring-blue-500/20 open:border-blue-500/20">
                <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer list-none text-base md:text-lg font-bold text-gray-200">
                  <span>Will I work directly with your team?</span>
                  <span className="bg-white/[0.06] text-blue-400 rounded-full p-2 transition-transform group-open:rotate-45 group-open:bg-blue-500/20">
                    <Plus size={20} />
                  </span>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-400 leading-relaxed text-sm md:text-base">
                  Yes. You work directly with the people building your system — including our founder. No account managers in between. You get a direct line to the engineers and AI specialists working on your project.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION - Fixed responsiveness */}
      <section id="contact" className="py-16 md:py-20 lg:py-24 bg-[#07080e] relative overflow-hidden">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-600/5 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-indigo-600/5 rounded-full blur-[100px] -z-10"></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 md:mb-6 font-space-grotesk">
              Ready to see what AI automation can do for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-sky-300">your business?</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Tell us about your goals. We’ll show you exactly how AI can capture more leads, engage customers, and save your team hours every week.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-24 items-start">
            
            {/* LEFT COLUMN: THE PROCESS TIMELINE */}
            <div className="relative py-4">
              {/* Vertical connecting line */}
              <div className="absolute left-6 top-6 bottom-12 w-0.5 bg-gradient-to-b from-blue-500/40 via-blue-400/20 to-transparent"></div>

              {/* Step 1 */}
              <div className="relative flex items-start gap-6 md:gap-8 mb-8 md:mb-12 group">
                <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center font-bold text-base md:text-lg shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <div className="pt-1 md:pt-2">
                  <h4 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Free AI Automation Consultation</h4>
                  <p className="text-gray-500 leading-relaxed text-sm md:text-base">We discuss your business, identify automation opportunities, and outline what AI can do for you. No sales pressure.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start gap-6 md:gap-8 mb-8 md:mb-12 group">
                <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-400 text-white flex items-center justify-center font-bold text-base md:text-lg shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <div className="pt-1 md:pt-2">
                  <h4 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Review Your Custom Proposal</h4>
                  <p className="text-gray-500 leading-relaxed text-sm md:text-base">We deliver a clear plan with scope, timeline, and fixed pricing. You know exactly what you're getting before we start.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-start gap-6 md:gap-8 mb-8 md:mb-12 group">
                <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white flex items-center justify-center font-bold text-base md:text-lg shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <div className="pt-1 md:pt-2">
                  <h4 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Build & Integrate</h4>
                  <p className="text-gray-500 leading-relaxed text-sm md:text-base">We build your AI system and integrate it with your existing tools. You see progress every step of the way.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex items-start gap-6 md:gap-8 group">
                <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-600 to-sky-500 text-white flex items-center justify-center font-bold text-base md:text-lg shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                  4
                </div>
                <div className="pt-1 md:pt-2">
                  <h4 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Launch & Optimize</h4>
                  <p className="text-gray-500 leading-relaxed text-sm md:text-base">Your AI system goes live. We monitor performance, optimize results, and ensure everything runs smoothly.</p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: THE FORM */}
            <div className="bg-white/[0.04] rounded-2xl md:rounded-[32px] p-6 md:p-8 lg:p-10 shadow-xl border border-white/[0.08] relative overflow-hidden backdrop-blur-sm">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-sky-400"></div>

              <form className="space-y-4 md:space-y-6 relative z-10">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
    <div className="space-y-2">
      <label className="text-sm font-bold text-gray-300 ml-1">Name</label>
      <input 
        type="text" 
        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40 transition-all" 
        suppressHydrationWarning   // ← ADD THIS
      />
    </div>
    <div className="space-y-2">
      <label className="text-sm font-bold text-gray-300 ml-1">Email</label>
      <input 
        type="email" 
        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40 transition-all" 
        suppressHydrationWarning   // ← ADD THIS
      />
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
    <div className="space-y-2">
      <label className="text-sm font-bold text-gray-300 ml-1">Phone</label>
      <input 
        type="tel" 
        placeholder="+1 (555) 000-0000" 
        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40 transition-all" 
        suppressHydrationWarning   // ← ADD THIS
      />
    </div>
    <div className="space-y-2">
      <label className="text-sm font-bold text-gray-300 ml-1">Budget (Optional)</label>
      <select 
        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40 transition-all text-gray-400"
        suppressHydrationWarning   // ← ADD THIS
      >
        <option>Select Range</option>
        <option>$1k - $5k</option>
        <option>$5k - $20k</option>
        <option>$20k - $50k</option>
        <option>$50k+</option>
      </select>
    </div>
  </div>

  <div className="space-y-2">
    <label className="text-sm font-bold text-gray-300 ml-1">Project Description</label>
    <textarea 
      rows={4} 
      placeholder="Tell us about your business goals, what you want to automate, and any systems you currently use..." 
      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40 transition-all resize-none"
      suppressHydrationWarning   // ← ADD THIS
    ></textarea>
  </div>

  {/* File Upload Area (no change needed) */}
  <div className="border-2 border-dashed border-white/[0.08] rounded-xl p-6 md:p-8 text-center hover:border-blue-500/30 hover:bg-blue-500/[0.03] transition-all cursor-pointer group">
    <UploadCloud size={24} className="md:size-[32px] mx-auto text-gray-500 group-hover:text-blue-400 transition-colors mb-2" />
    <p className="text-xs md:text-sm text-gray-500 font-medium">
      <span className="text-blue-400 font-bold">Click to upload</span> or drag and drop
    </p>
    <p className="text-xs text-gray-600 mt-1">PDF, DOCX, or PPT (Max 10MB)</p>
  </div>

  <button className="w-full py-3 md:py-4 rounded-xl bg-blue-600 text-white font-bold text-base md:text-lg hover:bg-blue-500 shadow-xl shadow-blue-500/20 transition-all transform hover:-translate-y-1">
    Get Your Free AI Consultation
  </button>

  <p className="text-center text-xs text-gray-600 mt-4">
    Protected by reCAPTCHA and our <a href="#" className="underline text-gray-500 hover:text-gray-300">Privacy Policy</a>.
  </p>
</form>
            </div>
          </div>
        </div>
      </section>
      
      {/* FOOTER */}
      <Footer />
      <ReceptionistAI />
    </main>
  );
}