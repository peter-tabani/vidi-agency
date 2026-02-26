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
    icon: <Bot className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "AI Customer Engagement & Support",
    description: "Intelligent chatbots trained on your business data to answer questions and close deals around the clock.",
    icon: <Inbox className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "AI Workflow Automation",
    description: "Eliminate repetitive tasks. Automate follow-ups, scheduling, data entry, and internal processes.",
    icon: <Workflow className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "AI-Powered Websites & Apps",
    description: "High-performance websites and apps built to support your AI systems and convert more customers.",
    icon: <Code2 className="w-6 h-6 text-blue-600" />,
  },
];

const advancedFeatures = [
  {
    icon: <Bot className="text-purple-600" size={32} />, 
    title: "24/7 AI Lead Capture",
    description: "Your AI agent greets every visitor, asks the right questions, and qualifies leads in real time. No missed opportunities, even at 2 AM."
  },
  {
    icon: <Workflow className="text-blue-600" size={32} />, 
    title: "Automated Follow-Up Engine",
    description: "New lead comes in? Your system instantly follows up via SMS, email, or WhatsApp. It nurtures prospects until they are ready to buy — without your team lifting a finger."
  },
  {
    icon: <Inbox className="text-green-600" size={32} />, 
    title: "AI Customer Support",
    description: "Resolve common questions instantly. Our AI handles FAQs, order tracking, booking changes, and more — so your team focuses on high-value conversations."
  },
  {
    icon: <Database className="text-orange-600" size={32} />, 
    title: "Smart Business Dashboard",
    description: "See every lead, every conversation, and every dollar in one place. Real-time data from your AI systems, CRM, and payment tools — all in a single view."
  },
  {
    icon: <Cpu className="text-indigo-600" size={32} />, 
    title: "Workflow Automation",
    description: "Connect your existing tools — CRM, email, payments, scheduling — into one seamless loop. Data flows automatically. Manual entry disappears."
  },
  {
    icon: <Smartphone className="text-pink-600" size={32} />, 
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
      <section className="relative overflow-hidden bg-[#0a0a0f]">
  {/* BACKGROUND LAYERS */}
  {/* Layer 1: Base radial gradient */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(59,130,246,0.25),transparent_70%)]" />
  {/* Layer 2: Secondary purple glow */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_50%,rgba(139,92,246,0.15),transparent_70%)]" />
  {/* Layer 3: Blurred glow blobs */}
  <div className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
  <div className="absolute bottom-[-5%] right-[10%] w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />
  <div className="absolute top-[30%] right-[30%] w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
  {/* Layer 4: SVG noise overlay */}
  <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '128px 128px' }} />
  {/* Layer 5: Vignette overlay */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
  {/* Layer 6: Subtle grid */}
  <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.04] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

  {/* HERO CONTENT */}
  <div className="relative z-10">
    {/* Container with proper breakpoints */}
    <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16
                    max-w-[440px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
      
      {/* Tighter padding to save vertical space */}
      <div className="pt-16 sm:pt-20 md:pt-22 lg:pt-24 xl:pt-28 pb-10 sm:pb-12 md:pb-14 lg:pb-16">
        
        {/* Grid with fluid gaps */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] xl:grid-cols-[1fr_1fr] 
                        gap-6 sm:gap-8 md:gap-10 lg:gap-14 xl:gap-18 2xl:gap-20 
                        items-start lg:items-center">
          
          {/* ========== LEFT COLUMN ========== */}
          <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Badge - Compact */}
            <div className="inline-flex items-center gap-2 sm:gap-2.5 
                            bg-white/10 border border-white/20 text-blue-300 
                            px-3 sm:px-3.5 md:px-4 
                            py-1 sm:py-1.5 
                            rounded-full 
                            text-[0.6875rem] sm:text-xs 
                            font-bold mb-3 sm:mb-4 
                            shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="whitespace-nowrap text-blue-200">AI Automation for Business • Now Booking</span>
            </div>

            {/* Headline - REDUCED SIZES for vertical space */}
            <h1 className="font-extrabold text-white tracking-tight 
                           leading-[1.15] sm:leading-[1.12] md:leading-[1.1] lg:leading-[1.08]
                           mb-3 sm:mb-4 md:mb-4
                           text-[clamp(1.875rem,4.5vw,2.25rem)] 
                           sm:text-[clamp(2.25rem,5vw,2.75rem)] 
                           md:text-[clamp(2.5rem,4.5vw,3rem)] 
                           lg:text-[clamp(2.75rem,3.5vw,3.25rem)] 
                           xl:text-[clamp(3.25rem,3.8vw,3.75rem)] 
                           2xl:text-[clamp(3.75rem,4vw,4.25rem)]
                           max-w-[20ch] lg:max-w-none">
              AI Systems That Capture Leads{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                and Grow Your Revenue
              </span>
            </h1>

            {/* Sub-section with list - COMPACT */}
            <div className="w-full max-w-xl lg:max-w-none
                            text-gray-300 font-medium leading-relaxed
                            text-[clamp(0.875rem,1.6vw,0.9375rem)] 
                            sm:text-[clamp(0.9375rem,1.8vw,1rem)] 
                            lg:text-[clamp(1rem,1.1vw,1.0625rem)]
                            mb-4 sm:mb-5">
              
              <p className="mb-2.5 sm:mb-3 text-gray-300">
                We build AI automation for B2B and e-commerce businesses:
              </p>

              <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
                {[
                  "Capture and qualify leads around the clock",
                  "Automate customer engagement and support",
                  "Reduce repetitive work across your team",
                  "Integrate with your existing systems — no rebuild",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-2.5">
                    <div className="flex-shrink-0 w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] 
                                    text-blue-400 mt-0.5">
                      <Check className="w-full h-full" strokeWidth={3} />
                    </div>
                    <span className="text-[0.8125rem] sm:text-[0.875rem] md:text-[0.9375rem] lg:text-base
                                     text-gray-200 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="font-bold text-gray-200 
                            flex items-center justify-center lg:justify-start gap-2
                            text-[0.75rem] sm:text-[0.8125rem] md:text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                <span>You own the system. One-time build, optional support.</span>
              </p>
            </div>

            {/* CTA Buttons - COMPACT SPACING */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 
                            mb-4 sm:mb-5 
                            w-full sm:w-auto">
              <Link
                href="/get-started"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                           px-6 sm:px-7 md:px-8 lg:px-9
                           py-2.5 sm:py-3 md:py-3.5
                           rounded-full 
                           text-[0.8125rem] sm:text-sm md:text-[0.9375rem] lg:text-base
                           font-bold 
                           hover:from-blue-500 hover:to-purple-500 
                           shadow-xl shadow-blue-500/25 
                           hover:shadow-2xl hover:shadow-blue-500/40
                           transition-all duration-300
                           w-full sm:w-auto text-center
                           whitespace-nowrap">
                Book a Demo
              </Link>
              <Link
                href="/case-studies"
                className="px-6 sm:px-7 md:px-8 lg:px-9
                           py-2.5 sm:py-3 md:py-3.5
                           rounded-full 
                           text-[0.8125rem] sm:text-sm md:text-[0.9375rem] lg:text-base
                           font-bold 
                           text-white bg-white/10 
                           border border-white/20 
                           hover:bg-white/20 hover:border-white/30
                           transition-all duration-300
                           backdrop-blur-sm
                           shadow-sm hover:shadow-md
                           w-full sm:w-auto text-center
                           whitespace-nowrap">
                See How It Works
              </Link>
            </div>

            {/* Tech Stack Badge - Compact */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex -space-x-2 sm:-space-x-2.5">
                <TechIcons />
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[0.625rem] sm:text-xs font-bold text-green-400 uppercase tracking-wider">
                    Production Ready
                  </span>
                </div>
                <p className="text-[0.625rem] sm:text-xs text-gray-400 font-medium">
                  Enterprise AI Stack
                </p>
              </div>
            </div>
          </div>

          {/* ========== RIGHT COLUMN: ORBIT - LARGER BUT OPTIMIZED ========== */}
          <div className="hidden lg:flex relative w-full items-center justify-center 
                          min-h-[420px] lg:min-h-[480px] xl:min-h-[540px] 2xl:min-h-[600px]">
            
            {/* Responsive scaling wrapper */}
            <div className="w-full h-full flex items-center justify-center
                            scale-90 lg:scale-95 xl:scale-100
                            transition-transform duration-500 ease-out">
              
              {/* Orbit container - Larger sizes */}
              <div className="relative 
                              w-[480px] h-[480px]
                              lg:w-[520px] lg:h-[520px]
                              xl:w-[580px] xl:h-[580px]
                              2xl:w-[640px] 2xl:h-[640px]
                              aspect-square 
                              flex items-center justify-center">

                {/* Center Core - Larger */}
                <div className="absolute z-20 
                                w-28 h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 2xl:w-40 2xl:h-40
                                bg-white/10 backdrop-blur-xl rounded-full 
                                shadow-[0_0_80px_-15px_rgba(59,130,246,0.5)] 
                                flex items-center justify-center 
                                border border-white/20
                                transition-all duration-300">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 
                                    w-14 h-14 lg:w-16 lg:h-16 xl:w-[4.5rem] xl:h-[4.5rem] 2xl:w-20 2xl:h-20
                                    mx-auto rounded-xl 
                                    flex items-center justify-center 
                                    text-white mb-2 shadow-lg">
                      <Bot className="w-7 h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10" />
                    </div>
                    <span className="text-[0.65rem] lg:text-xs xl:text-sm font-bold text-white block uppercase tracking-wide">
                      AI Core
                    </span>
                  </div>
                </div>

                {/* Orbit Rings */}
                <div className="absolute w-[90%] h-[90%] border border-dashed border-blue-500/20 rounded-full" />
                <div className="absolute w-[68%] h-[68%] border border-blue-400/15 rounded-full" />

                {/* Rotating Ring with Cards */}
                <div className="absolute inset-0 animate-orbit-ring flex items-center justify-center">

                  {/* TOP CARD */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                  w-[11rem] lg:w-52 xl:w-56 2xl:w-60
                                  animate-orbit-item">
                    <div className="bg-white/10 backdrop-blur-md 
                                    p-3 lg:p-3.5 xl:p-4 
                                    rounded-2xl border border-white/15
                                    shadow-[0_8px_30px_rgba(59,130,246,0.1)] 
                                    hover:shadow-[0_12px_40px_rgba(59,130,246,0.2)]
                                    transition-all duration-300
                                    flex items-center gap-2.5 lg:gap-3">
                      <div className="bg-blue-500/20 p-2 lg:p-2.5 rounded-lg text-blue-400 flex-shrink-0">
                        <LayoutDashboard className="w-5 h-5 lg:w-[1.375rem] lg:h-[1.375rem]" />
                      </div>
                      <div className="text-xs lg:text-sm xl:text-[0.9375rem] font-bold text-white leading-tight">
                        AI Lead Capture
                      </div>
                    </div>
                  </div>

                  {/* RIGHT CARD */}
                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 
                                  w-[11rem] lg:w-52 xl:w-56 2xl:w-60
                                  animate-orbit-item">
                    <div className="bg-white/10 backdrop-blur-md 
                                    p-3 lg:p-3.5 xl:p-4 
                                    rounded-2xl border border-white/15
                                    shadow-[0_8px_30px_rgba(139,92,246,0.1)] 
                                    hover:shadow-[0_12px_40px_rgba(139,92,246,0.2)]
                                    transition-all duration-300
                                    flex items-center gap-2.5 lg:gap-3">
                      <div className="bg-purple-500/20 p-2 lg:p-2.5 rounded-lg text-purple-400 flex-shrink-0">
                        <Smartphone className="w-5 h-5 lg:w-[1.375rem] lg:h-[1.375rem]" />
                      </div>
                      <div className="text-xs lg:text-sm xl:text-[0.9375rem] font-bold text-white leading-tight">
                        Smart Engagement
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM CARD */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 
                                  w-[11rem] lg:w-52 xl:w-56 2xl:w-60
                                  animate-orbit-item">
                    <div className="bg-white/10 backdrop-blur-md 
                                    p-3 lg:p-3.5 xl:p-4 
                                    rounded-2xl border border-white/15
                                    shadow-[0_8px_30px_rgba(34,197,94,0.1)] 
                                    hover:shadow-[0_12px_40px_rgba(34,197,94,0.2)]
                                    transition-all duration-300
                                    flex items-center gap-2.5 lg:gap-3">
                      <div className="bg-green-500/20 p-2 lg:p-2.5 rounded-lg text-green-400 flex-shrink-0">
                        <Workflow className="w-5 h-5 lg:w-[1.375rem] lg:h-[1.375rem]" />
                      </div>
                      <div className="text-xs lg:text-sm xl:text-[0.9375rem] font-bold text-white leading-tight">
                        Workflow Automation
                      </div>
                    </div>
                  </div>

                  {/* LEFT CARD */}
                  <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 
                                  w-[11rem] lg:w-52 xl:w-56 2xl:w-60
                                  animate-orbit-item">
                    <div className="bg-white/10 backdrop-blur-md 
                                    p-3 lg:p-3.5 xl:p-4 
                                    rounded-2xl border border-white/15
                                    shadow-[0_8px_30px_rgba(249,115,22,0.1)] 
                                    hover:shadow-[0_12px_40px_rgba(249,115,22,0.2)]
                                    transition-all duration-300
                                    flex items-center gap-2.5 lg:gap-3">
                      <div className="bg-orange-500/20 p-2 lg:p-2.5 rounded-lg text-orange-400 flex-shrink-0">
                        <Database className="w-5 h-5 lg:w-[1.375rem] lg:h-[1.375rem]" />
                      </div>
                      <div className="text-xs lg:text-sm xl:text-[0.9375rem] font-bold text-white leading-tight">
                        System Integration
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  {/* LOGO MARQUEE */}
  <div className="w-full bg-[#0a0a0f] py-6 sm:py-7 md:py-8 lg:py-9 relative overflow-hidden border-t border-white/10">
    <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 z-10 
                    bg-gradient-to-r from-[#0a0a0f] to-transparent pointer-events-none" />
    <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 z-10 
                    bg-gradient-to-l from-[#0a0a0f] to-transparent pointer-events-none" />

    <div className="flex w-max animate-scroll 
                    gap-12 sm:gap-16 md:gap-20 lg:gap-24 xl:gap-28 
                    items-center">
      {TECHNOLOGIES.map((tech, index) => (
        <img
          key={`tech-1-${index}`}
          src={tech.logo}
          alt={`${tech.name} logo`}
          className={`${tech.className} brightness-0 invert opacity-60`}
          loading="lazy"
        />
      ))}
      {TECHNOLOGIES.map((tech, index) => (
        <img
          key={`tech-2-${index}`}
          src={tech.logo}
          alt={`${tech.name} logo`}
          className={`${tech.className} brightness-0 invert opacity-60`}
          loading="lazy"
        />
      ))}
      {TECHNOLOGIES.map((tech, index) => (
        <img
          key={`tech-3-${index}`}
          src={tech.logo}
          alt={`${tech.name} logo`}
          className={`${tech.className} brightness-0 invert opacity-60`}
          loading="lazy"
        />
      ))}
    </div>
  </div>
</section>


      {/* ADVANCED CAPABILITIES SECTION - Fixed responsiveness */}
      <section id="services" className="py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gray-50">
        
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#0000000a_1px,transparent_1px)] bg-[size:20px_20px] opacity-50 pointer-events-none"></div>
        
        {/* Soft Background Glows */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-xs md:text-sm mb-2 md:mb-3">
              What We Build
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-tight">
              AI Automation That <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Works While You Sleep
              </span>
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              From lead capture to customer support to internal workflows — we build AI systems that save time, reduce costs, and drive revenue.
            </p>
          </div>

          {/* Feature Grid - Fixed responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
            {advancedFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-white p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 relative overflow-hidden"
              >
                
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Card Content */}
                <div className="relative z-10">
                  <div className="mb-4 md:mb-6 inline-block p-3 md:p-4 rounded-lg md:rounded-xl bg-gray-50 group-hover:bg-white transition-colors shadow-sm">
                    <div className="scale-75 md:scale-100">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - Fixed responsiveness */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-900 relative overflow-hidden">
        {/* Decorative Background Glows */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>

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
            <Link href="/get-started" className="px-6 sm:px-8 md:px-10 py-3 md:py-4 lg:py-5 bg-white text-gray-900 rounded-full text-sm md:text-base lg:text-lg font-bold hover:bg-gray-100 transition-all shadow-xl shadow-white/10 flex items-center gap-2 w-full sm:w-auto text-center">
              Book a Demo
            </Link>
            <Link href="/contact" className="px-6 sm:px-8 md:px-10 py-3 md:py-4 lg:py-5 bg-transparent border border-gray-700 text-white rounded-full text-sm md:text-base lg:text-lg font-bold hover:bg-gray-800 transition-all w-full sm:w-auto text-center">
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
        
        <div className="absolute inset-0 bg-[#FFFCF8] -z-20"></div>
        <div className="absolute top-0 left-0 w-full h-32 md:h-64 bg-gradient-to-b from-gray-900/80 via-gray-900/20 to-transparent -z-10"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] md:w-[800px] md:h-[400px] bg-orange-100/40 rounded-full blur-[120px] -z-10 mix-blend-multiply"></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative pt-8 md:pt-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-xs md:text-sm mb-2 md:mb-3">
              The Vidi Advantage
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Why Rent a Generic Tool <br className="hidden sm:block" /> When You Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Own a Custom AI System?</span>
            </h3>
          </div>

          {/* THE VISUAL COMPARISON BATTLE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-stretch max-w-6xl mx-auto">
            
            {/* LEFT SIDE: STANDARD SaaS */}
            <div className="relative group">
              <div className="h-full bg-gray-100 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border-2 border-gray-200 shadow-inner relative overflow-hidden grayscale-[30%] group-hover:grayscale-0 transition-all duration-500">
                 <div className="absolute inset-0 bg-[radial-gradient(#0000000a_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"></div>
                 
                 <div className="relative z-10">
                   <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 rounded-xl md:rounded-2xl flex items-center justify-center text-gray-500 mb-6 md:mb-8 shadow-sm">
                     <Lock size={24} className="md:size-[32px]" />
                   </div>
                   <h4 className="text-xl md:text-2xl font-bold text-gray-700 mb-3 md:mb-4">Generic SaaS Tools</h4>
                   <p className="text-gray-500 mb-6 md:mb-8 font-medium text-sm md:text-base">You pay monthly forever for features everyone else has. No customization. No real AI. Limited by their roadmap, not yours.</p>
                   
                   {/* The "Restrictions" List */}
                   <ul className="space-y-4 md:space-y-6">
                     <li className="flex items-start gap-3 md:gap-4 opacity-70">
                       <XCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5 md:mt-1"/>
                       <div>
                         <strong className="block text-gray-700 text-sm md:text-base">Monthly Fees Forever</strong>
                         <span className="text-xs md:text-sm text-gray-500">Stop paying, and your automation disappears overnight.</span>
                       </div>
                     </li>
                     <li className="flex items-start gap-3 md:gap-4 opacity-70">
                       <XCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5 md:mt-1"/>
                       <div>
                         <strong className="block text-gray-700 text-sm md:text-base">One-Size-Fits-All</strong>
                         <span className="text-xs md:text-sm text-gray-500">Need a custom workflow? Too bad. You get what everyone else gets.</span>
                       </div>
                     </li>
                     <li className="flex items-start gap-3 md:gap-4 opacity-70">
                        <XCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5 md:mt-1"/>
                       <div>
                         <strong className="block text-gray-700 text-sm md:text-base">Your Data, Their Servers</strong>
                         <span className="text-xs md:text-sm text-gray-500">Your leads and customer data live on their platform, not yours.</span>
                       </div>
                     </li>
                   </ul>
                 </div>
              </div>
            </div>

            {/* RIGHT SIDE: VIDI CUSTOM ENGINE */}
            <div className="relative">
              <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[30px] md:rounded-[35px] blur-2xl opacity-30 animate-pulse-slow"></div>
              
              <div className="h-full bg-white/60 backdrop-blur-xl md:backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-blue-100/50 shadow-xl md:shadow-2xl relative overflow-hidden z-10">
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white/0 to-purple-50/50 mix-blend-overlay"></div>
                 
                 <div className="relative z-10">
                   <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-6 md:mb-8 shadow-lg shadow-blue-500/30">
                     <Rocket size={24} className="md:size-[32px]" />
                   </div>
                   <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Your Custom AI System</h4>
                   <p className="text-gray-600 mb-6 md:mb-8 font-medium text-sm md:text-base">We build it. You own it. A custom AI system trained on your data, integrated with your tools, and designed to grow with your business.</p>
                   
                   {/* The "Benefits" List */}
                   <ul className="space-y-4 md:space-y-6">
                     <li className="flex items-start gap-3 md:gap-4">
                       <CheckCircle2 size={20} className="text-blue-600 flex-shrink-0 mt-0.5 md:mt-1 drop-shadow-sm"/>
                       <div>
                         <strong className="block text-gray-900 text-sm md:text-base">One-Time Build, You Own It</strong>
                         <span className="text-xs md:text-sm text-gray-600">No forced subscriptions. The AI system is your company asset.</span>
                       </div>
                     </li>
                     <li className="flex items-start gap-3 md:gap-4">
                       <CheckCircle2 size={20} className="text-blue-600 flex-shrink-0 mt-0.5 md:mt-1 drop-shadow-sm"/>
                       <div>
                         <strong className="block text-gray-900 text-sm md:text-base">Built for Your Business</strong>
                         <span className="text-xs md:text-sm text-gray-600">Custom AI agents, workflows, and integrations designed around how you actually work.</span>
                       </div>
                     </li>
                     <li className="flex items-start gap-3 md:gap-4">
                       <CheckCircle2 size={20} className="text-blue-600 flex-shrink-0 mt-0.5 md:mt-1 drop-shadow-sm"/>
                       <div>
                         <strong className="block text-gray-900 text-sm md:text-base">Total Data Ownership</strong>
                         <span className="text-xs md:text-sm text-gray-600">Your leads, conversations, and customer data stay on your infrastructure.</span>
                       </div>
                     </li>
                   </ul>
                 </div>
                 
                 {/* Decorative Glass Reflection */}
                 <div className="absolute top-0 right-0 -mt-8 -mr-8 md:-mt-12 md:-mr-12 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-white to-transparent opacity-50 blur-2xl rotate-45 pointer-events-none"></div>
              </div>
            </div>
          </div>
          
          {/* Final Statement */}
          <div className="text-center mt-12 md:mt-16 max-w-2xl mx-auto">
            <p className="text-base md:text-lg font-medium text-gray-700">
              Stop renting generic tools. <br className="hidden sm:block" /> Let’s build an AI system tailored to <span className="text-blue-600 font-bold">your business.</span>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION - Fixed responsiveness */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 md:mb-4">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
              Everything you need to know about our AI automation systems and how we work with your business.
            </p>
          </div>

          {/* FAQ GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
            
            {/* Question 1 */}
            <div className="group">
              <details className="group bg-white border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden hover:border-blue-300 transition-colors duration-300 open:ring-2 open:ring-blue-50 open:border-blue-200">
                <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer list-none text-base md:text-lg font-bold text-gray-800">
                  <span>Do I own the AI system you build?</span>
                  <span className="bg-gray-50 text-blue-600 rounded-full p-2 transition-transform group-open:rotate-45 group-open:bg-blue-50">
                    <Plus size={20} />
                  </span>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-600 leading-relaxed text-sm md:text-base">
                  Yes. Unlike SaaS platforms where you rent access, we build custom AI systems that belong to you. Once the project is complete, <b>you own 100% of the code, AI agents, workflows, and data.</b> It is your asset to keep, scale, or sell.
                </div>
              </details>
            </div>

            {/* Question 2 */}
            <div className="group">
              <details className="group bg-white border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden hover:border-blue-300 transition-colors duration-300 open:ring-2 open:ring-blue-50 open:border-blue-200">
                <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer list-none text-base md:text-lg font-bold text-gray-800">
                  <span>How long does a typical project take?</span>
                  <span className="bg-gray-50 text-blue-600 rounded-full p-2 transition-transform group-open:rotate-45 group-open:bg-blue-50">
                    <Plus size={20} />
                  </span>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-600 leading-relaxed text-sm md:text-base">
                  It depends on scope. A focused <b>AI lead capture or chatbot system</b> can be live in 7–14 days. A full <b>multi-channel automation suite</b> typically takes 4–8 weeks. We work in short sprints so you see progress constantly.
                </div>
              </details>
            </div>

            {/* Question 3 */}
            <div className="group">
              <details className="group bg-white border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden hover:border-blue-300 transition-colors duration-300 open:ring-2 open:ring-blue-50 open:border-blue-200">
                <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer list-none text-base md:text-lg font-bold text-gray-800">
                  <span>What happens after launch?</span>
                  <span className="bg-gray-50 text-blue-600 rounded-full p-2 transition-transform group-open:rotate-45 group-open:bg-blue-50">
                    <Plus size={20} />
                  </span>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-600 leading-relaxed text-sm md:text-base">
                  We don’t disappear after launch. Every project includes a <b>30-day warranty period</b> for bug fixes. After that, we offer optional support packages to keep your AI system optimized, updated, and performing at its best.
                </div>
              </details>
            </div>

            {/* Question 4 */}
            <div className="group">
              <details className="group bg-white border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden hover:border-blue-300 transition-colors duration-300 open:ring-2 open:ring-blue-50 open:border-blue-200">
                <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer list-none text-base md:text-lg font-bold text-gray-800">
                  <span>Can you add AI to my existing website or systems?</span>
                  <span className="bg-gray-50 text-blue-600 rounded-full p-2 transition-transform group-open:rotate-45 group-open:bg-blue-50">
                    <Plus size={20} />
                  </span>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-600 leading-relaxed text-sm md:text-base">
                  Absolutely. We specialize in integrating AI into what you already have. Whether it’s a WordPress site, a Shopify store, or a custom app — we add AI chatbots, lead capture, and automation workflows <b>without rebuilding anything.</b>
                </div>
              </details>
            </div>

            {/* Question 5 */}
            <div className="group">
              <details className="group bg-white border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden hover:border-blue-300 transition-colors duration-300 open:ring-2 open:ring-blue-50 open:border-blue-200">
                <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer list-none text-base md:text-lg font-bold text-gray-800">
                  <span>How does your pricing work?</span>
                  <span className="bg-gray-50 text-blue-600 rounded-full p-2 transition-transform group-open:rotate-45 group-open:bg-blue-50">
                    <Plus size={20} />
                  </span>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-600 leading-relaxed text-sm md:text-base">
                  Projects typically start at <b>$2,500</b> for a focused AI automation build. Pricing depends on scope and complexity. We provide a clear proposal with a fixed price before any work begins. <b>No hidden fees. No forced recurring charges.</b>
                </div>
              </details>
            </div>

            {/* Question 6 */}
            <div className="group">
              <details className="group bg-white border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden hover:border-blue-300 transition-colors duration-300 open:ring-2 open:ring-blue-50 open:border-blue-200">
                <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer list-none text-base md:text-lg font-bold text-gray-800">
                  <span>Will I work directly with your team?</span>
                  <span className="bg-gray-50 text-blue-600 rounded-full p-2 transition-transform group-open:rotate-45 group-open:bg-blue-50">
                    <Plus size={20} />
                  </span>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-600 leading-relaxed text-sm md:text-base">
                  Yes. You work directly with the people building your system — including our founder. No account managers in between. You get a direct line to the engineers and AI specialists working on your project.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* ONBOARDING FLOW - Fixed responsiveness */}
      <section id="process" className="py-12 md:py-16 lg:py-20 bg-gray-50 border-t border-gray-200 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 md:mb-3">Our Process</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 md:mb-4">
              Discover. Build. Integrate. Improve.
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
              No rebuild required. We plug into your existing systems, deploy fast, and measure results from day one.
            </p>
          </div>

          {/* THE 4-STEP CONSULTATIVE FLOW */}
          <div className="relative max-w-5xl mx-auto">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gray-200 -z-10"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              
              {/* Step 1: CONNECT */}
              <div className="relative flex flex-col items-center text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white border-4 border-white shadow-lg rounded-full flex items-center justify-center mb-4 md:mb-6 z-10 group-hover:border-blue-500 transition-colors">
                  <Users size={24} className="md:size-[32px] text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 text-base md:text-lg mb-2">1. Discover</h4>
                <p className="text-xs md:text-sm text-gray-500 px-2">We learn your business, identify automation opportunities, and map out where AI creates the most impact.</p>
              </div>

              {/* Step 2: UNDERSTAND */}
              <div className="relative flex flex-col items-center text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white border-4 border-white shadow-lg rounded-full flex items-center justify-center mb-4 md:mb-6 z-10 group-hover:border-blue-500 transition-colors">
                  <Bot size={24} className="md:size-[32px] text-purple-600" />
                </div>
                <h4 className="font-bold text-gray-900 text-base md:text-lg mb-2">2. Build</h4>
                <p className="text-xs md:text-sm text-gray-500 px-2">We design and build your AI agents, workflows, and dashboards — trained on your business data.</p>
              </div>

              {/* Step 3: PROPOSAL */}
              <div className="relative flex flex-col items-center text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white border-4 border-white shadow-lg rounded-full flex items-center justify-center mb-4 md:mb-6 z-10 group-hover:border-blue-500 transition-colors">
                  <FileText size={24} className="md:size-[32px] text-green-600" />
                </div>
                <h4 className="font-bold text-gray-900 text-base md:text-lg mb-2">3. Integrate</h4>
                <p className="text-xs md:text-sm text-gray-500 px-2">We connect everything to your existing tools — CRM, website, email, payments — with zero disruption.</p>
              </div>

              {/* Step 4: EXECUTION */}
              <div className="relative flex flex-col items-center text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gray-900 border-4 border-gray-900 shadow-xl rounded-full flex items-center justify-center mb-4 md:mb-6 z-10">
                  <Rocket size={24} className="md:size-[32px] text-white fill-current" />
                </div>
                <h4 className="font-bold text-gray-900 text-base md:text-lg mb-2">4. Improve</h4>
                <p className="text-xs md:text-sm text-gray-500 px-2">We monitor performance, optimize AI responses, and refine workflows for measurable, ongoing results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION - Fixed responsiveness */}
      <section id="contact" className="py-16 md:py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-100/40 rounded-full blur-[100px] -z-10 mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-purple-100/40 rounded-full blur-[100px] -z-10 mix-blend-multiply"></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 md:mb-6">
              Ready to see what AI automation can do for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">your business?</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg">
              Tell us about your goals. We’ll show you exactly how AI can capture more leads, engage customers, and save your team hours every week.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-24 items-start">
            
            {/* LEFT COLUMN: THE PROCESS TIMELINE */}
            <div className="relative py-4">
              {/* Vertical connecting line */}
              <div className="absolute left-6 top-6 bottom-12 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-transparent"></div>

              {/* Step 1 */}
              <div className="relative flex items-start gap-6 md:gap-8 mb-8 md:mb-12 group">
                <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center font-bold text-base md:text-lg shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <div className="pt-1 md:pt-2">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Free AI Automation Consultation</h4>
                  <p className="text-gray-500 leading-relaxed text-sm md:text-base">We discuss your business, identify automation opportunities, and outline what AI can do for you. No sales pressure.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start gap-6 md:gap-8 mb-8 md:mb-12 group">
                <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center font-bold text-base md:text-lg shadow-lg shadow-purple-200 group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <div className="pt-1 md:pt-2">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Review Your Custom Proposal</h4>
                  <p className="text-gray-500 leading-relaxed text-sm md:text-base">We deliver a clear plan with scope, timeline, and fixed pricing. You know exactly what you’re getting before we start.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-start gap-6 md:gap-8 mb-8 md:mb-12 group">
                <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center font-bold text-base md:text-lg shadow-lg shadow-purple-200 group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <div className="pt-1 md:pt-2">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Build & Integrate</h4>
                  <p className="text-gray-500 leading-relaxed text-sm md:text-base">We build your AI system and integrate it with your existing tools. You see progress every step of the way.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex items-start gap-6 md:gap-8 group">
                <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white flex items-center justify-center font-bold text-base md:text-lg shadow-lg shadow-pink-200 group-hover:scale-110 transition-transform duration-300">
                  4
                </div>
                <div className="pt-1 md:pt-2">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Launch & Optimize</h4>
                  <p className="text-gray-500 leading-relaxed text-sm md:text-base">Your AI system goes live. We monitor performance, optimize results, and ensure everything runs smoothly.</p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: THE FORM */}
            <div className="bg-white rounded-2xl md:rounded-[32px] p-6 md:p-8 lg:p-10 shadow-xl border border-gray-100 relative overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

              <form className="space-y-4 md:space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Email</label>
                    <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Phone</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Budget (Optional)</label>
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-500">
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
                  <textarea rows={4} placeholder="Tell us about your business goals, what you want to automate, and any systems you currently use..." className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"></textarea>
                </div>

                {/* File Upload Area */}
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 md:p-8 text-center hover:border-blue-400 hover:bg-blue-50/30 transition-all cursor-pointer group">
                  <UploadCloud size={24} className="md:size-[32px] mx-auto text-gray-400 group-hover:text-blue-500 transition-colors mb-2" />
                  <p className="text-xs md:text-sm text-gray-500 font-medium">
                    <span className="text-blue-600 font-bold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-400 mt-1">PDF, DOCX, or PPT (Max 10MB)</p>
                </div>

                <button className="w-full py-3 md:py-4 rounded-xl bg-gray-900 text-white font-bold text-base md:text-lg hover:bg-blue-700 shadow-xl shadow-blue-200/50 transition-all transform hover:-translate-y-1">
                  Get Your Free AI Consultation
                </button>
                
                <p className="text-center text-xs text-gray-400 mt-4">
                  Protected by reCAPTCHA and our <a href="#" className="underline">Privacy Policy</a>.
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