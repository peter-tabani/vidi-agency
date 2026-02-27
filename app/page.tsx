import Footer from "@/components/Footer";
import Link from "next/link";
import ReceptionistAI from '@/components/ReceptionistAI';
import TechIcons from '@/components/TechIcons';
import { 
  ArrowRight, CheckCircle2, Bot, LayoutDashboard, Code2, Inbox, Lock, UploadCloud,
  Smartphone, Phone, BarChart3, Workflow, Database, Cpu, Check, XCircle, Plus, Star, Rocket, CreditCard, Mail, FileText, Play, Users
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
          The{' '}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-sky-300">
            Leading
          </span>
          <br />
          AI Automation Company
        </h1>

        {/* CTA Buttons – sleek and modern */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link
            href="/get-started"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl text-base font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30"
          >
            <span className="relative z-10">Book a Demo</span>
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


      {/* ADVANCED CAPABILITIES SECTION - Fixed responsiveness */}
      <section id="services" className="py-16 md:py-20 lg:py-24 relative overflow-hidden bg-[#07080e]">
        
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
        
        {/* Soft Background Glows */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600/10 rounded-full filter blur-[120px]"></div>
          <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600/10 rounded-full filter blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-blue-400 font-bold tracking-wide uppercase text-xs md:text-sm mb-2 md:mb-3">
              What We Build
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 md:mb-6 leading-tight font-space-grotesk">
              AI Automation That <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-sky-300">
                Works While You Sleep
              </span>
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
              From lead capture to customer support to internal workflows — we build AI systems that save time, reduce costs, and drive revenue.
            </p>
          </div>

          {/* Feature Grid - Fixed responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
            {advancedFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-white/[0.04] p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 relative overflow-hidden"
              >
                
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] to-purple-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Card Content */}
                <div className="relative z-10">
                  <div className="mb-4 md:mb-6 inline-block p-3 md:p-4 rounded-lg md:rounded-xl bg-white/[0.06] group-hover:bg-white/[0.1] transition-colors">
                    <div className="scale-75 md:scale-100">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h4>
                  
                  <p className="text-gray-400 leading-relaxed text-xs md:text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - Fixed responsiveness */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#05060b] relative overflow-hidden border-t border-white/[0.04]">
        {/* Decorative Background Glows */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600 rounded-full filter blur-[120px] opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-indigo-600 rounded-full filter blur-[120px] opacity-10"></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10 text-center">
          
          <h2 className="text-blue-400 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4">
            Ready to Automate?
          </h2>
          
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-4 md:mb-6 leading-tight">
            Stop Losing Leads. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Start Automating Growth.
            </span>
          </h3>

          <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you need AI lead capture, automated customer engagement, or workflow automation — we build systems that deliver measurable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <Link href="/get-started" className="px-6 sm:px-8 md:px-10 py-3 md:py-4 lg:py-5 bg-blue-600 text-white rounded-full text-sm md:text-base lg:text-lg font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20 flex items-center gap-2 w-full sm:w-auto text-center">
              Book a Demo
            </Link>
            <Link href="/contact" className="px-6 sm:px-8 md:px-10 py-3 md:py-4 lg:py-5 bg-transparent border border-white/[0.12] text-white rounded-full text-sm md:text-base lg:text-lg font-bold hover:bg-white/[0.06] transition-all w-full sm:w-auto text-center">
              Talk to Our Team
            </Link>
          </div>

          <p className="mt-6 md:mt-8 text-xs md:text-sm text-gray-500">
            Fast deployment. Measurable results. No forced subscriptions.
          </p>
        </div>
      </section>

      {/* COMPARISON SECTION - Fixed responsiveness */}
      <section className="relative py-16 md:py-20 lg:py-24 z-10 overflow-hidden">
        
        <div className="absolute inset-0 bg-[#0a0b12] -z-20"></div>
        <div className="absolute top-0 left-0 w-full h-32 md:h-64 bg-gradient-to-b from-[#05060b] to-transparent -z-10"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] md:w-[800px] md:h-[400px] bg-blue-600/5 rounded-full blur-[120px] -z-10"></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative pt-8 md:pt-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h2 className="text-blue-400 font-bold tracking-wide uppercase text-xs md:text-sm mb-2 md:mb-3">
              The Vidi Advantage
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-space-grotesk">
              Why Rent a Generic Tool <br className="hidden sm:block" /> When You Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-sky-300">Own a Custom AI System?</span>
            </h3>
          </div>

          {/* THE VISUAL COMPARISON BATTLE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-stretch max-w-6xl mx-auto">
            
            {/* LEFT SIDE: STANDARD SaaS */}
            <div className="relative group">
              <div className="h-full bg-white/[0.03] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-white/[0.06] relative overflow-hidden group-hover:border-white/[0.1] transition-all duration-500">
                 <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                 
                 <div className="relative z-10">
                   <div className="w-12 h-12 md:w-16 md:h-16 bg-white/[0.06] rounded-xl md:rounded-2xl flex items-center justify-center text-gray-500 mb-6 md:mb-8">
                     <Lock size={24} className="md:size-[32px]" />
                   </div>
                   <h4 className="text-xl md:text-2xl font-bold text-gray-300 mb-3 md:mb-4">Generic SaaS Tools</h4>
                   <p className="text-gray-500 mb-6 md:mb-8 font-medium text-sm md:text-base">You pay monthly forever for features everyone else has. No customization. No real AI. Limited by their roadmap, not yours.</p>
                   
                   {/* The "Restrictions" List */}
                   <ul className="space-y-4 md:space-y-6">
                     <li className="flex items-start gap-3 md:gap-4 opacity-70">
                       <XCircle size={20} className="text-red-500/70 flex-shrink-0 mt-0.5 md:mt-1"/>
                       <div>
                         <strong className="block text-gray-400 text-sm md:text-base">Monthly Fees Forever</strong>
                         <span className="text-xs md:text-sm text-gray-600">Stop paying, and your automation disappears overnight.</span>
                       </div>
                     </li>
                     <li className="flex items-start gap-3 md:gap-4 opacity-70">
                       <XCircle size={20} className="text-red-500/70 flex-shrink-0 mt-0.5 md:mt-1"/>
                       <div>
                         <strong className="block text-gray-400 text-sm md:text-base">One-Size-Fits-All</strong>
                         <span className="text-xs md:text-sm text-gray-600">Need a custom workflow? Too bad. You get what everyone else gets.</span>
                       </div>
                     </li>
                     <li className="flex items-start gap-3 md:gap-4 opacity-70">
                        <XCircle size={20} className="text-red-500/70 flex-shrink-0 mt-0.5 md:mt-1"/>
                       <div>
                         <strong className="block text-gray-400 text-sm md:text-base">Your Data, Their Servers</strong>
                         <span className="text-xs md:text-sm text-gray-600">Your leads and customer data live on their platform, not yours.</span>
                       </div>
                     </li>
                   </ul>
                 </div>
              </div>
            </div>

            {/* RIGHT SIDE: VIDI CUSTOM ENGINE */}
            <div className="relative">
              <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-blue-500 to-blue-400 rounded-[30px] md:rounded-[35px] blur-2xl opacity-20 animate-pulse-slow"></div>
              
              <div className="h-full bg-white/[0.05] backdrop-blur-xl md:backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-blue-500/20 shadow-xl md:shadow-2xl relative overflow-hidden z-10">
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-indigo-500/[0.05]"></div>
                 
                 <div className="relative z-10">
                   <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-6 md:mb-8 shadow-lg shadow-blue-500/30">
                     <Rocket size={24} className="md:size-[32px]" />
                   </div>
                   <h4 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Your Custom AI System</h4>
                   <p className="text-gray-400 mb-6 md:mb-8 font-medium text-sm md:text-base">We build it. You own it. A custom AI system trained on your data, integrated with your tools, and designed to grow with your business.</p>
                   
                   {/* The "Benefits" List */}
                   <ul className="space-y-4 md:space-y-6">
                     <li className="flex items-start gap-3 md:gap-4">
                       <CheckCircle2 size={20} className="text-blue-400 flex-shrink-0 mt-0.5 md:mt-1"/>
                       <div>
                         <strong className="block text-white text-sm md:text-base">One-Time Build, You Own It</strong>
                         <span className="text-xs md:text-sm text-gray-400">No forced subscriptions. The AI system is your company asset.</span>
                       </div>
                     </li>
                     <li className="flex items-start gap-3 md:gap-4">
                       <CheckCircle2 size={20} className="text-blue-400 flex-shrink-0 mt-0.5 md:mt-1"/>
                       <div>
                         <strong className="block text-white text-sm md:text-base">Built for Your Business</strong>
                         <span className="text-xs md:text-sm text-gray-400">Custom AI agents, workflows, and integrations designed around how you actually work.</span>
                       </div>
                     </li>
                     <li className="flex items-start gap-3 md:gap-4">
                       <CheckCircle2 size={20} className="text-blue-400 flex-shrink-0 mt-0.5 md:mt-1"/>
                       <div>
                         <strong className="block text-white text-sm md:text-base">Total Data Ownership</strong>
                         <span className="text-xs md:text-sm text-gray-400">Your leads, conversations, and customer data stay on your infrastructure.</span>
                       </div>
                     </li>
                   </ul>
                 </div>
                 
                 {/* Decorative Glass Reflection */}
                 <div className="absolute top-0 right-0 -mt-8 -mr-8 md:-mt-12 md:-mr-12 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-blue-400/10 to-transparent blur-2xl rotate-45 pointer-events-none"></div>
              </div>
            </div>
          </div>
          
          {/* Final Statement */}
          <div className="text-center mt-12 md:mt-16 max-w-2xl mx-auto">
            <p className="text-base md:text-lg font-medium text-gray-400">
              Stop renting generic tools. <br className="hidden sm:block" /> Let's build an AI system tailored to <span className="text-blue-400 font-bold">your business.</span>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION - Fixed responsiveness */}
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

      {/* ONBOARDING FLOW - Fixed responsiveness */}
      <section id="process" className="py-12 md:py-16 lg:py-20 bg-[#05060b] border-t border-white/[0.04] scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 md:mb-3">Our Process</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 md:mb-4 font-space-grotesk">
              Discover. Build. Integrate. Improve.
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              No rebuild required. We plug into your existing systems, deploy fast, and measure results from day one.
            </p>
          </div>

          {/* THE 4-STEP CONSULTATIVE FLOW */}
          <div className="relative max-w-5xl mx-auto">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-white/[0.06] -z-10"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              
              {/* Step 1: CONNECT */}
              <div className="relative flex flex-col items-center text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-[#0c0d14] border-2 border-white/[0.08] shadow-lg shadow-blue-500/5 rounded-full flex items-center justify-center mb-4 md:mb-6 z-10 group-hover:border-blue-500/40 transition-colors">
                  <Users size={24} className="md:size-[32px] text-blue-400" />
                </div>
                <h4 className="font-bold text-white text-base md:text-lg mb-2">1. Discover</h4>
                <p className="text-xs md:text-sm text-gray-500 px-2">We learn your business, identify automation opportunities, and map out where AI creates the most impact.</p>
              </div>

              {/* Step 2: UNDERSTAND */}
              <div className="relative flex flex-col items-center text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-[#0c0d14] border-2 border-white/[0.08] shadow-lg shadow-blue-500/5 rounded-full flex items-center justify-center mb-4 md:mb-6 z-10 group-hover:border-blue-500/40 transition-colors">
                  <Bot size={24} className="md:size-[32px] text-blue-400" />
                </div>
                <h4 className="font-bold text-white text-base md:text-lg mb-2">2. Build</h4>
                <p className="text-xs md:text-sm text-gray-500 px-2">We design and build your AI agents, workflows, and dashboards — trained on your business data.</p>
              </div>

              {/* Step 3: PROPOSAL */}
              <div className="relative flex flex-col items-center text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-[#0c0d14] border-2 border-white/[0.08] shadow-lg shadow-blue-500/5 rounded-full flex items-center justify-center mb-4 md:mb-6 z-10 group-hover:border-blue-500/40 transition-colors">
                  <FileText size={24} className="md:size-[32px] text-blue-400" />
                </div>
                <h4 className="font-bold text-white text-base md:text-lg mb-2">3. Integrate</h4>
                <p className="text-xs md:text-sm text-gray-500 px-2">We connect everything to your existing tools — CRM, website, email, payments — with zero disruption.</p>
              </div>

              {/* Step 4: EXECUTION */}
              <div className="relative flex flex-col items-center text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-blue-600 border-2 border-blue-500 shadow-xl shadow-blue-500/20 rounded-full flex items-center justify-center mb-4 md:mb-6 z-10">
                  <Rocket size={24} className="md:size-[32px] text-white fill-current" />
                </div>
                <h4 className="font-bold text-white text-base md:text-lg mb-2">4. Improve</h4>
                <p className="text-xs md:text-sm text-gray-500 px-2">We monitor performance, optimize AI responses, and refine workflows for measurable, ongoing results.</p>
              </div>
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