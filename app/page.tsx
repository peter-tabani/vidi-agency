import Footer from "@/components/Footer";
import Link from "next/link";
import ReceptionistAI from '@/components/ReceptionistAI';
import TechIcons from '@/components/TechIcons';
import { 
  ArrowRight, CheckCircle2, Bot, LayoutDashboard, Code2, Inbox, Lock, UploadCloud,
  Smartphone, Phone, BarChart3, Workflow, Database, Cpu, Check, XCircle, Plus, Star, Rocket, CreditCard, Mail, FileText, Play, Users// <--- Added Star
} from "lucide-react";
import { SiNextdotjs, SiTypescript, SiReact, SiOpenai } from 'react-icons/si';

const features = [
  {
    title: "Website Development",
    description: "Fully custom, responsive websites with professional UI/UX and SEO optimization.",
    icon: <Code2 className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "AI Communication",
    description: "Chatbots trained on your business data to answer FAQs and handle customers 24/7.",
    icon: <Bot className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Live Dashboard",
    description: "View conversations, track leads, and manage your inbox from one simple location.",
    icon: <LayoutDashboard className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "AI Inbox Assistant",
    description: "Drafts replies automatically and helps you respond to customers faster.",
    icon: <Inbox className="w-6 h-6 text-blue-600" />,
  },
];
const advancedFeatures = [
  {
    icon: <Bot className="text-purple-600" size={32} />, 
    title: "24/7 AI Sales & Support Hub",
    description: "Instead of just answering calls, our 'Always-On' agents manage your entire front desk. They book appointments, qualify leads in real-time, and handle FAQs with human-level nuance."
  },
  {
    icon: <Workflow className="text-blue-600" size={32} />, 
    title: "The 'Auto-Pilot' Lead Pipeline",
    description: "Eliminate manual follow-ups. We architect systems that automatically engage new leads via SMS and Email the second they arrive, nurturing them until they are ready to buy."
  },
  {
    icon: <Database className="text-orange-600" size={32} />, 
    title: "Business Command Center",
    description: "Ditch the spreadsheets. We build a single, secure dashboard where you see every dollar made and every lead captured today. Your entire business at a glance, powered by private data."
  },
  {
    icon: <Smartphone className="text-pink-600" size={32} />, 
    title: "Dedicated Mobile Ecosystem",
    description: "Your brand belongs in their pocket, not just on their browser. We launch custom iOS and Android apps that give your customers a direct, high-speed line to your services."
  },
  {
    icon: <Inbox className="text-green-600" size={32} />, 
    title: "Unified Communication Stream",
    description: "Stop tab-switching. We consolidate WhatsApp, Instagram, Email, and SMS into one single, high-clarity stream so you never miss a deal or a client request."
  },
  {
    icon: <Cpu className="text-indigo-600" size={32} />, 
    title: "Zero-Touch Data Automation",
    description: "Manual data entry is a relic of the past. We connect your payment, booking, and CRM tools into a seamless loop. Data flows automatically, freeing your team for high-value work."
  }
];
const TECHNOLOGIES = [
  {
    name: "OpenAI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    className: "h-8 w-auto" 
  },
  {
    name: "Next.js",
    logo: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png",
    className: "h-10 w-auto" 
  },
  {
    name: "Kotlin",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
    className: "h-10 w-auto"
  },
  {
    name: "Python",
    // REPLACED SUPABASE with Python (The King of AI/Backend)
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    className: "h-10 w-auto"
  },
  {
    name: "AWS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    className: "h-8 w-auto"
  },
  {
    name: "React Native",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    className: "h-10 w-auto"
  }
];
const pricingPlans = [
  {
    name: "Tier 1",
    price: "$399",
    setup: "$500 Setup Fee",
    description: "Perfect for small businesses starting with automation.",
    features: [
      "AI Chatbot (1-2 Platforms)",
      "Basic Website Maintenance",
      "Basic AI Inbox",
      "Monthly Updates",
      "Standard Support"
    ],
    highlight: false
  },
  {
    name: "Tier 2",
    price: "$699",
    setup: "$999 Setup Fee",
    description: "The standard for growing businesses needing full coverage.",
    features: [
      "Multi-platform AI (Web, WA, IG, FB)",
      "AI Call Answering Agent",
      "Automation Workflows",
      "Weekly Updates",
      "Priority Support"
    ],
    highlight: true // We will make this card pop out
  },
  {
    name: "Tier 3",
    price: "$1200",
    setup: "$1999 Setup Fee",
    description: "Full agency partnership with custom internal tools.",
    features: [
      "Full Business AI Suite",
      "Custom AI Tools & Apps",
      "Deep Analytics & Reporting",
      "Unlimited Integrations",
      "Dedicated Account Manager"
    ],
    highlight: false
  }
];
const comparisonData = [
  { feature: "Messaging Inbox", us: true, competitor: true },
  { feature: "Basic Automations", us: true, competitor: true },
  { feature: "Platform Integrations", us: true, competitor: true },
  { feature: "Custom Website Built For You", us: true, competitor: false },
  { feature: "AI Trained on YOUR Business Data", us: true, competitor: false },
  { feature: "AI Voice/Call Receptionist", us: true, competitor: false },
  { feature: "Custom Internal AI Tools", us: true, competitor: false },
  { feature: "Dedicated Account Manager", us: true, competitor: false },
  { feature: "Done-For-You Setup (No Learning Curve)", us: true, competitor: false },
];
const serviceCards = [
  { icon: <Code2 size={24} />, title: "Website Development", desc: "React, Next.js, High-Performance" },
  { icon: <LayoutDashboard size={24} />, title: "Website Redesign", desc: "Modern UI/UX Overhaul" },
  { icon: <Smartphone size={24} />, title: "Mobile App Building", desc: "iOS & Android (Kotlin/Flutter)" },
  { icon: <Bot size={24} />, title: "AI Integration", desc: "Custom Chatbots & Agents" },
  { icon: <Workflow size={24} />, title: "Business Automation", desc: "Streamline Workflows 24/7" },
  { icon: <Database size={24} />, title: "Systems & Dashboards", desc: "Internal Tools & Analytics" },
];
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      
      {/* MOBILE-READY HERO SECTION (Performance Optimized) */}
      <section className="relative pt-24 lg:pt-24 pb-12 overflow-hidden min-h-screen flex flex-col justify-center bg-gradient-to-br from-white via-white to-blue-50">
        
    {/* 1. BACKGROUND */}
    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

    {/* Main Content */}
    <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex-grow grid lg:grid-cols-2 gap-8 items-center">
      
      {/* LEFT SIDE: TEXT */}
      <div className="w-full flex flex-col items-start text-left z-20">
        
        {/* Badge - Reduced bottom margin */}
        <div className="inline-flex items-center gap-2 bg-white border border-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold mb-4 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Accepting New Projects: NOW
        </div>

        {/* Headline - Reduced size slightly (7xl -> 6xl) for better fit */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-4 leading-[1.1]">
          We Build Custom Software <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transform-gpu">
            That Works Around the Clock
          </span>
        </h1>

        {/* Sub-Headline & List */}
        <div className="text-lg text-gray-700 mb-6 leading-relaxed font-medium max-w-2xl">
          <p className="mb-4 text-base lg:text-lg">Web applications and AI systems designed for:</p>
          
          {/* List - Tighter spacing (space-y-1) */}
          <ul className="space-y-2 mb-6">
            {[
              "Automated customer communication (24/7)",
              "Smart scheduling and booking systems",
              "Real-time business dashboards",
              "Mobile apps for iOS and Android"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="min-w-[18px] text-blue-600">
                  <Check size={18} strokeWidth={3} />
                </div>
                <span className="text-base lg:text-lg">{item}</span>
              </li>
            ))}
          </ul>

          {/* Ownership Hook */}
          <p className="font-bold text-gray-900 flex items-center gap-2 text-sm lg:text-base">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            You own 100% of the code. No recurring license fees.
          </p>
        </div>

        {/* Buttons - Reduced bottom margin */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8 w-full sm:w-auto">
          <Link href="/get-started" className="bg-gray-900 text-white px-8 py-3.5 rounded-full text-base font-bold hover:bg-blue-700 shadow-xl shadow-blue-200/50 transition-all w-full sm:w-auto text-center">
            Start Your Project
          </Link>
          <Link href="/case-studies" className="px-8 py-3.5 rounded-full text-base font-bold text-gray-800 bg-white border border-gray-300 hover:bg-gray-50 transition-all shadow-sm w-full sm:w-auto text-center">
            See Our Work
          </Link>
        </div>

        {/* TECH STACK BADGE (Honest & Premium) */}
        <div className="flex flex-row items-center gap-4 mt-2">
            <div className="flex -space-x-3">
  <TechIcons />
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-bold text-green-700 uppercase tracking-wider">Enterprise Grade</span>
              </div>
              <p className="text-xs text-gray-500 font-medium">Premium V.3</p>
            </div>
        </div>
      </div>

      {/* RIGHT SIDE: ORBIT SYSTEM */}
      <div className="hidden lg:flex relative h-full w-full items-center justify-center scale-75 xl:scale-90">
          <div className="relative w-[600px] h-[600px] flex items-center justify-center transform-gpu will-change-transform">
            
            {/* Center Core */}
            <div className="absolute z-20 w-32 h-32 bg-white rounded-full shadow-[0_0_60px_-15px_rgba(37,99,235,0.5)] flex items-center justify-center border border-blue-100">
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 mx-auto rounded-xl flex items-center justify-center text-white mb-2 shadow-lg">
                  <Bot size={32} />
                </div>
                <span className="text-xs font-bold text-gray-900 block">AI CORE</span>
              </div>
            </div>

            {/* Orbit Rings */}
            <div className="absolute w-[90%] h-[90%] border border-dashed border-blue-200 rounded-full opacity-50 animate-spin-slow will-change-transform"></div>
            <div className="absolute w-[65%] h-[65%] border border-blue-100 rounded-full opacity-50"></div>

            {/* Revolving Items */}
            <div className="absolute w-full h-full animate-orbit-ring flex items-center justify-center will-change-transform">
              {/* ITEM 1 */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 animate-orbit-item will-change-transform">
                <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-white shadow-xl flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><LayoutDashboard size={18}/></div>
                  <div className="text-sm font-bold text-gray-900">Custom Web Dev</div>
                </div>
              </div>
              {/* ITEM 2 */}
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-56 animate-orbit-item will-change-transform">
                <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-white shadow-xl flex items-center gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg text-purple-600"><Smartphone size={18}/></div>
                  <div className="text-sm font-bold text-gray-900">iOS & Android Apps</div>
                </div>
              </div>
              {/* ITEM 3 */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-56 animate-orbit-item will-change-transform">
                  <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-white shadow-xl flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg text-green-600"><Workflow size={18}/></div>
                  <div className="text-sm font-bold text-gray-900">Business Automation</div>
                </div>
              </div>
              {/* ITEM 4 */}
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-56 animate-orbit-item will-change-transform">
                <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-white shadow-xl flex items-center gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg text-orange-600"><Database size={18}/></div>
                  <div className="text-sm font-bold text-gray-900">Internal Dashboards</div>
                </div>
              </div>
            </div>
          </div>
      </div>

    </div>

    {/* LOGO MARQUEE */}
    <div className="w-full bg-white py-8 relative overflow-hidden flex-shrink-0 mt-8">
      
      {/* Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

      {/* The Scrolling Track */}
      <div className="flex w-max animate-scroll gap-32 items-center">
        
        {/* Set 1 */}
        {TECHNOLOGIES.map((tech, index) => (
          <img 
            key={`tech-1-${index}`}
            src={tech.logo} 
            alt={`${tech.name} logo`} 
            className={`${tech.className} object-contain`}
          />
        ))}
        
        {/* Set 2 (Duplicate) */}
        {TECHNOLOGIES.map((tech, index) => (
          <img 
            key={`tech-2-${index}`}
            src={tech.logo} 
            alt={`${tech.name} logo`} 
            className={`${tech.className} object-contain`}
          />
        ))}

        {/* Set 3 (Triple ensures no gaps on wide screens) */}
        {TECHNOLOGIES.map((tech, index) => (
          <img 
            key={`tech-3-${index}`}
            src={tech.logo} 
            alt={`${tech.name} logo`} 
            className={`${tech.className} object-contain`}
          />
        ))}
      </div>
    </div>
</section>
      {/* ADVANCED CAPABILITIES SECTION */}
      <section id="services" className="py-24 relative overflow-hidden bg-gray-50">
        
        {/* Background Texture (The "Blueprint" look) */}
        <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none"></div>
        
        {/* Soft Background Glows */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">
              Beyond Basic Websites
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              We Build Systems That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Run Your Business
              </span>
            </h3>
            <p className="text-lg text-gray-600">
              We design and build web applications that streamline operations, simplify management, and support long-term growth.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              >
                
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Card Content */}
                <div className="relative z-10">
                  <div className="mb-6 inline-block p-4 rounded-xl bg-gray-50 group-hover:bg-white transition-colors shadow-sm">
                    {feature.icon}
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
      {/* --- CTA / START PROJECT SECTION --- */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        {/* Decorative Background Glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 text-center">
          
          <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">
            Ready to Dominate?
          </h2>
          
          <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Let's Engineer Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Digital Breakthrough.
            </span>
          </h3>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you need a high-performance website, a custom mobile app, or an AI system to automate your operations—we build it to scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/get-started" className="px-10 py-5 bg-white text-gray-900 rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-xl shadow-white/10 flex items-center gap-2">
                Start Your Project
              </Link>
            <Link href="/contact" className="px-10 py-5 bg-transparent border border-gray-700 text-white rounded-full text-lg font-bold hover:bg-gray-800 transition-all">
              Speak to an Expert
            </Link>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Fast response times. Solutions tailored to your budget.
          </p>

        </div>
      </section>
      {/* --- WHY CHOOSE US (The "Mind-Blowing" Comparison) --- */}
      <section className="relative py-24 z-10 overflow-hidden">
        
        {/* 1. THE PREMIUM BACKGROUND BASE (Light Cream) */}
        <div className="absolute inset-0 bg-[#FFFCF8] -z-20"></div>

        {/* 2. THE "SHADOW SPILL" TRANSITION OVERLAY 
             This creates the deep shadow falling from the dark section above onto the cream. */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-900/80 via-gray-900/20 to-transparent -z-10"></div>
        
        {/* Optional: Subtle warm glow from the bottom up */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-100/40 rounded-full blur-[120px] -z-10 mix-blend-multiply"></div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative pt-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3 drop-shadow-sm">
              The Ownership Advantage
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Why Rent A Generic Tool <br/> When You Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Own The Engine?</span>
            </h3>
          </div>

          {/* THE VISUAL COMPARISON BATTLE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch max-w-6xl mx-auto">
            
            {/* LEFT SIDE: STANDARD SaaS (The "Trap") */}
            <div className="relative group">
              {/* The "Concrete" Card Design */}
              <div className="h-full bg-gray-100 rounded-3xl p-10 border-2 border-gray-200 shadow-inner relative overflow-hidden grayscale-[30%] group-hover:grayscale-0 transition-all duration-500">
                 {/* Background Pattern to look restrictive */}
                 <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                 
                 <div className="relative z-10">
                   <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 mb-8 shadow-sm">
                     <Lock size={32} />
                   </div>
                   <h4 className="text-2xl font-bold text-gray-700 mb-4">Standard SaaS "Rental"</h4>
                   <p className="text-gray-500 mb-8 font-medium">You pay monthly forever, but you never own anything. You are trapped in their ecosystem and limited by their features.</p>
                   
                   {/* The "Restrictions" List */}
                   <ul className="space-y-6">
                     <li className="flex items-start gap-4 opacity-70">
                       <XCircle size={24} className="text-red-400 flex-shrink-0mt-1"/>
                       <div>
                         <strong className="block text-gray-700">Monthly "Tax" Forever</strong>
                         <span className="text-sm text-gray-500">Stop paying, and your business system disappears overnight.</span>
                       </div>
                     </li>
                     <li className="flex items-start gap-4 opacity-70">
                       <XCircle size={24} className="text-red-400 flex-shrink-0 mt-1"/>
                       <div>
                         <strong className="block text-gray-700">Feature Lock-in</strong>
                         <span className="text-sm text-gray-500">Need a custom feature? Too bad. You get what everyone else gets.</span>
                       </div>
                     </li>
                     <li className="flex items-start gap-4 opacity-70">
                        <XCircle size={24} className="text-red-400 flex-shrink-0 mt-1"/>
                       <div>
                         <strong className="block text-gray-700">Data Hostage</strong>
                         <span className="text-sm text-gray-500">Your valuable customer data lives on their servers, not yours.</span>
                       </div>
                     </li>
                   </ul>
                 </div>
              </div>
            </div>

            {/* RIGHT SIDE: VIDI CUSTOM ENGINE (The "Freedom" - Liquid Glass Style) */}
            <div className="relative">
              {/* Glowing Underlay */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[35px] blur-2xl opacity-30 animate-pulse-slow"></div>
              
              {/* The "Liquid Glass" Card Design */}
              <div className="h-full bg-white/60 backdrop-blur-2xl rounded-3xl p-10 border border-blue-100/50 shadow-2xl relative overflow-hidden z-10">
                 {/* Fluid Gradient Background */}
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white/0 to-purple-50/50 mix-blend-overlay"></div>
                 
                 <div className="relative z-10">
                   <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-500/30">
                     <Rocket size={32} />
                   </div>
                   <h4 className="text-2xl font-bold text-gray-900 mb-4">Your Custom Growth Engine</h4>
                   <p className="text-gray-600 mb-8 font-medium">We build it, you own it. 100%. A tailored asset that scales infinitely with your business without recurring license fees.</p>
                   
                   {/* The "Benefits" List */}
                   <ul className="space-y-6">
                     <li className="flex items-start gap-4">
                       <CheckCircle2 size={24} className="text-blue-600 flex-shrink-0 mt-1 drop-shadow-sm"/>
                       <div>
                         <strong className="block text-gray-900">One-Time Investment, Lifetime Asset</strong>
                         <span className="text-sm text-gray-600">No monthly licensing fees. The software is your company property.</span>
                       </div>
                     </li>
                     <li className="flex items-start gap-4">
                       <CheckCircle2 size={24} className="text-blue-600 flex-shrink-0 mt-1 drop-shadow-sm"/>
                       <div>
                         <strong className="block text-gray-900">Limitless Customization</strong>
                         <span className="text-sm text-gray-600">If you can dream it, we can code it. No feature is impossible.</span>
                       </div>
                     </li>
                     <li className="flex items-start gap-4">
                       <CheckCircle2 size={24} className="text-blue-600 flex-shrink-0 mt-1 drop-shadow-sm"/>
                       <div>
                         <strong className="block text-gray-900">Total Data Sovereignty</strong>
                         <span className="text-sm text-gray-600">You own your data completely. Hosted securely where you want it.</span>
                       </div>
                     </li>
                   </ul>
                 </div>
                 
                 {/* Decorative Glass Reflection */}
                 <div className="absolute top-0 right-0 -mt-12 -mr-12 w-48 h-48 bg-gradient-to-br from-white to-transparent opacity-50 blur-2xl rotate-45 pointer-events-none"></div>
              </div>
            </div>

          </div>
          
          {/* Final Statement */}
          <div className="text-center mt-16 max-w-2xl mx-auto">
            <p className="text-lg font-medium text-gray-700">
              Stop renting your business's potential. <br/> Let's build an engine tailored to <span className="text-blue-600 font-bold">your speed.</span>
            </p>
          </div>

        </div>
      </section>
      {/* --- FAQ SECTION (DianApps Style) --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Everything you need to know about how we build, how we work, and how we help you scale.
            </p>
          </div>

          {/* FAQ GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            
            {/* Question 1 */}
            <div className="group">
              <details className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 transition-colors duration-300 open:ring-2 open:ring-blue-50 open:border-blue-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none text-lg font-bold text-gray-800">
                  <span>Do I own the code and intellectual property?</span>
                  <span className="bg-gray-50 text-blue-600 rounded-full p-2 transition-transform group-open:rotate-45 group-open:bg-blue-50">
                    <Plus size={20} />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed animate-fadeIn">
                  Absolutely. Unlike SaaS platforms where you "rent" software, Vidi Agency builds custom assets for you. Once the final payment is made, <b>you own 100% of the source code, design assets, and database.</b> It is your property to keep, scale, or sell.
                </div>
              </details>
            </div>

            {/* Question 2 */}
            <div className="group">
              <details className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 transition-colors duration-300 open:ring-2 open:ring-blue-50 open:border-blue-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none text-lg font-bold text-gray-800">
                  <span>How long does a typical project take?</span>
                  <span className="bg-gray-50 text-blue-600 rounded-full p-2 transition-transform group-open:rotate-45 group-open:bg-blue-50">
                    <Plus size={20} />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed animate-fadeIn">
                  It depends on complexity. A standard <b>AI Integration or Automation</b> can be live in 7-14 days. A fully custom <b>Website or Web App</b> typically takes 4-8 weeks. We work in 2-week "sprints" so you see progress constantly, not just at the end.
                </div>
              </details>
            </div>

            {/* Question 3 */}
            <div className="group">
              <details className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 transition-colors duration-300 open:ring-2 open:ring-blue-50 open:border-blue-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none text-lg font-bold text-gray-800">
                  <span>What is your "Post-Launch" support?</span>
                  <span className="bg-gray-50 text-blue-600 rounded-full p-2 transition-transform group-open:rotate-45 group-open:bg-blue-50">
                    <Plus size={20} />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed animate-fadeIn">
                  We don't disappear after launch. We offer a <b>30-day warranty period</b> where we fix any bugs for free. After that, we offer flexible "Growth Partner" maintenance packages to keep your system secure, updated, and optimized.
                </div>
              </details>
            </div>

            {/* Question 4 */}
            <div className="group">
              <details className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 transition-colors duration-300 open:ring-2 open:ring-blue-50 open:border-blue-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none text-lg font-bold text-gray-800">
                  <span>Can you integrate AI into my existing website?</span>
                  <span className="bg-gray-50 text-blue-600 rounded-full p-2 transition-transform group-open:rotate-45 group-open:bg-blue-50">
                    <Plus size={20} />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed animate-fadeIn">
                  Yes! We specialize in "retrofitting" AI. Whether you have a WordPress site, a Shopify store, or a custom React app, we can inject AI chatbots, lead capture agents, and automation workflows without rebuilding your entire site.
                </div>
              </details>
            </div>

            {/* Question 5 */}
            <div className="group">
              <details className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 transition-colors duration-300 open:ring-2 open:ring-blue-50 open:border-blue-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none text-lg font-bold text-gray-800">
                  <span>How does your pricing work?</span>
                  <span className="bg-gray-50 text-blue-600 rounded-full p-2 transition-transform group-open:rotate-45 group-open:bg-blue-50">
                    <Plus size={20} />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed animate-fadeIn">
                  We believe in transparency. For small AI setups, we often have flat-fee packages. For larger custom builds, we provide a detailed proposal based on features. <b>Our minimum engagement typically starts at $600</b>, ensuring we can deliver premium quality.
                </div>
              </details>
            </div>

            {/* Question 6 */}
            <div className="group">
              <details className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 transition-colors duration-300 open:ring-2 open:ring-blue-50 open:border-blue-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none text-lg font-bold text-gray-800">
                  <span>Will I work directly with the team?</span>
                  <span className="bg-gray-50 text-blue-600 rounded-full p-2 transition-transform group-open:rotate-45 group-open:bg-blue-50">
                    <Plus size={20} />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed animate-fadeIn">
                  You will work directly with Peter (our Founder) and a dedicated project lead. We do not use "account managers" to gatekeep you. You get a direct line to the people actually building your product via Slack or WhatsApp.
                </div>
              </details>
            </div>

          </div>
        </div>
      </section>
   

      {/* --- ONBOARDING FLOW (Consultative & Human) --- */}
      <section id="process" className="py-20 bg-gray-50 border-t border-gray-200 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Our Process</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              We Listen First, Then We Build.
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We don't believe in cookie-cutter solutions. Our process ensures we understand your business deeply before writing a single line of code.
            </p>
          </div>

          {/* THE 4-STEP CONSULTATIVE FLOW */}
          <div className="relative max-w-5xl mx-auto">
             {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-200 -z-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              
              {/* Step 1: CONNECT */}
              <div className="relative flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white border-4 border-white shadow-lg rounded-full flex items-center justify-center mb-6 z-10 group-hover:border-blue-500 transition-colors">
                  <Users size={32} className="text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">1. Let's Connect</h4>
                <p className="text-sm text-gray-500 px-2">Book a free discovery call. We sit down to hear your vision, challenges, and goals.</p>
              </div>

              {/* Step 2: UNDERSTAND */}
              <div className="relative flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white border-4 border-white shadow-lg rounded-full flex items-center justify-center mb-6 z-10 group-hover:border-blue-500 transition-colors">
                  <Bot size={32} className="text-purple-600" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">2. Deep Dive</h4>
                <p className="text-sm text-gray-500 px-2">We analyze your requirements and architect a custom solution tailored to your specific needs.</p>
              </div>

              {/* Step 3: PROPOSAL */}
              <div className="relative flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white border-4 border-white shadow-lg rounded-full flex items-center justify-center mb-6 z-10 group-hover:border-blue-500 transition-colors">
                  <FileText size={32} className="text-green-600" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">3. The Blueprint</h4>
                <p className="text-sm text-gray-500 px-2">We present a clear proposal with a timeline and fixed price. You confirm exactly what you want.</p>
              </div>

               {/* Step 4: EXECUTION */}
               <div className="relative flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-gray-900 border-4 border-gray-900 shadow-xl rounded-full flex items-center justify-center mb-6 z-10">
                  <Rocket size={32} className="text-white fill-current" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">4. Project Kickoff</h4>
                <p className="text-sm text-gray-500 px-2">Once approved, our team starts building immediately. You stay updated every step of the way.</p>
              </div>

            </div>
          </div>

        </div>
      </section>
      
    
      {/* --- CONTACT & PROCESS SECTION (The "Closer") --- */}
      <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] -z-10 mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[100px] -z-10 mix-blend-multiply"></div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Have a question or need a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">custom quote?</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Our in-depth understanding of technology and innovation can turn your aspiration into a business reality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            
            {/* LEFT COLUMN: THE PROCESS TIMELINE */}
            <div className="relative py-4">
              {/* Vertical connecting line */}
              <div className="absolute left-6 top-6 bottom-12 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-transparent"></div>

              {/* Step 1 */}
              <div className="relative flex items-start gap-8 mb-12 group">
                <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <div className="pt-2">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Free Technical Consultation</h4>
                  <p className="text-gray-500 leading-relaxed">We discuss your idea, feasibility, and tech stack. No sales pressure, just engineering advice.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start gap-8 mb-12 group">
                <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-purple-200 group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <div className="pt-2">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Sign Mutual NDA</h4>
                  <p className="text-gray-500 leading-relaxed">Your intellectual property is safe. We sign a Non-Disclosure Agreement before looking at any code or data.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-start gap-8 mb-12 group">
                <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-purple-200 group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <div className="pt-2">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Strategic Roadmap</h4>
                  <p className="text-gray-500 leading-relaxed">We deliver a detailed project plan, timeline, and fixed-price quote. You know exactly what you get.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex items-start gap-8 group">
                <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-pink-200 group-hover:scale-110 transition-transform duration-300">
                  4
                </div>
                <div className="pt-2">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Kickoff & Execution</h4>
                  <p className="text-gray-500 leading-relaxed">Our team onboards instantly. You get access to our Slack and Jira to track progress in real-time.</p>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: THE FORM */}
            <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-xl border border-gray-100 relative overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Name</label>
                    <input type="text"  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Email</label>
                    <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Phone</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Budget (Optional)</label>
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-500">
                      <option>Select Range</option>
                      <option>$1k - $5k</option>
                      <option>$5k - $20k</option>
                      <option>$20k - $50k</option>
                      <option>$50k+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Project Description</label>
                  <textarea rows={4} placeholder="Tell us about your project goals, timeline, and any specific features you need..." className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"></textarea>
                </div>

                {/* File Upload Area */}
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-blue-400 hover:bg-blue-50/30 transition-all cursor-pointer group">
                  <UploadCloud size={32} className="mx-auto text-gray-400 group-hover:text-blue-500 transition-colors mb-2" />
                  <p className="text-sm text-gray-500 font-medium">
                    <span className="text-blue-600 font-bold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-400 mt-1">PDF, DOCX, or PPT (Max 10MB)</p>
                </div>

                <button className="w-full py-4 rounded-xl bg-gray-900 text-white font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-200/50 transition-all transform hover:-translate-y-1">
                  Send Request
                </button>
                
                <p className="text-center text-xs text-gray-400 mt-4">
                  Protected by reCAPTCHA and our <a href="#" className="underline">Privacy Policy</a>.
                </p>

              </form>
            </div>

          </div>
        </div>
      </section>
      
      {/* --- 6. FOOTER (New Component) --- */}
      <Footer />
    <ReceptionistAI /> {/* It will only live here now */}
  </main>
  );
}