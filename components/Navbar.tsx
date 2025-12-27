"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Menu, X, ChevronDown, ChevronRight, ArrowRight,
  Smartphone, Globe, Bot, Database,
  Stethoscope, Home, Scale, GraduationCap, Plane, Utensils, ShoppingBag,
  HardHat, Heart, Truck, Dumbbell, Scissors, Landmark, Rocket, Briefcase,
  Users, BookOpen // New Icons for Company Menu
} from 'lucide-react';

// --- DATA: SERVICES MENU ---
const servicesData = [
  {
    id: "app-dev",
    label: "Application Development",
    icon: Smartphone,
    headerDesc: "Scalable, high-performance apps for every device.",
    subServices: [
      { title: "iOS App Development", desc: "Native Swift apps for Apple ecosystem." },
      { title: "Android Development", desc: "Kotlin apps for diverse verticals." },
      { title: "Flutter Cross-Platform", desc: "One codebase, iOS & Android." },
      { title: "React Native", desc: "Flexible, efficient mobile apps." }
    ]
  },
  {
    id: "web-dev",
    label: "Website Development",
    icon: Globe,
    headerDesc: "Stunning, fast, SEO-optimized web experiences.",
    subServices: [
      { title: "Custom Web Dev", desc: "Tailor-made Next.js sites." },
      { title: "E-Commerce", desc: "Shopify & Custom Stores." },
      { title: "SaaS Platforms", desc: "Subscription software products." },
      { title: "CMS Solutions", desc: "Sanity, Strapi, WordPress." }
    ]
  },
  {
    id: "ai-automation",
    label: "AI & Automation",
    icon: Bot,
    headerDesc: "Intelligent agents to automate your workflow.",
    subServices: [
      { title: "AI Chatbots", desc: "24/7 Support Agents (GPT-4)." },
      { title: "Workflow Auto", desc: "Connect CRM, Email, & Finance." },
      { title: "Predictive Analytics", desc: "Forecast trends with data." },
      { title: "Custom Models", desc: "Fine-tuned AI for your niche." }
    ]
  },
  {
    id: "systems",
    label: "Systems & Cloud",
    icon: Database,
    headerDesc: "Robust infrastructure powering your growth.",
    subServices: [
      { title: "API Integration", desc: "Connect Stripe, Maps, Twilio." },
      { title: "Cloud Architecture", desc: "Scalable AWS/Azure hosting." },
      { title: "Internal Dashboards", desc: "Admin panels for operations." },
      { title: "Legacy Migration", desc: "Modernize old software." }
    ]
  }
];

// --- DATA: INDUSTRIES MENU ---
// Inside components/Navbar.tsx, replace the first two items in industriesData
const industriesData = [
  { name: "Healthcare", icon: Stethoscope, href: "/industries/healthcare" }, // <-- NEW LINK
  { name: "Real Estate", icon: Home, href: "/industries/real-estate" }, 
  { name: "Legal", icon: Scale, href: "/industries/legal" },
  { name: "Education", icon: GraduationCap, href: "/case-studies#education-&-training" },
  { name: "Hospitality", icon: Plane, href: "/case-studies#hospitality-&-travel" },
  { name: "Food & Restaurant", icon: Utensils, href: "/case-studies#restaurants-&-food" },
  { name: "Retail & E-Com", icon: ShoppingBag, href: "/case-studies#retail-&-e-commerce" },
  { name: "Construction", icon: HardHat, href: "/case-studies#construction-&-engineering" },
  { name: "Non-Profit", icon: Heart, href: "/case-studies#churches-&-nonprofits" },
  { name: "Logistics", icon: Truck, href: "/case-studies#logistics-&-transport" },
  { name: "Fitness", icon: Dumbbell, href: "/case-studies#fitness-&-wellness" },
  { name: "Beauty", icon: Scissors, href: "/case-studies#beauty-&-lifestyle" },
  { name: "Fintech", icon: Landmark, href: "/case-studies#finance-&-insurance" },
  { name: "Startups", icon: Rocket, href: "/case-studies#startups-&-tech" },
  { name: "Small Biz", icon: Briefcase, href: "/case-studies#small-business" },
];

// --- DATA: COMPANY MENU (New!) ---
const companyData = [
  { name: "About Us", href: "/about", icon: Users, desc: "Our mission & team." },
  { name: "Blog", href: "/blog", icon: BookOpen, desc: "Latest tech insights." },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null); 
  const [activeService, setActiveService] = useState(servicesData[0]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null); 

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const toggleMobileSection = (sectionName: string) => {
    setExpandedMobileSection(expandedMobileSection === sectionName ? null : sectionName);
  };

  return (
    <>
      <nav ref={navRef} className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm transition-all duration-300">
        <div className="container mx-auto flex h-20 items-center justify-between px-6 md:px-12 relative">
          
          <Link href="/" className="text-2xl font-bold flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity z-50">
            <span className="text-blue-600">Vidi</span>
            <span className="text-gray-900">Agency</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-600 h-full">
            
            <Link href="/" className="hover:text-blue-600 transition-colors h-full flex items-center">
              Home
            </Link>
            <Link href="/solutions" className="hover:text-blue-600 transition-colors h-full flex items-center font-bold">
              Solutions
            </Link>

            {/* 1. SERVICES MEGA MENU */}
            <div className="h-full flex items-center relative">
              <button 
                onClick={() => toggleMenu('services')}
                className={`flex items-center gap-1 hover:text-blue-600 transition-all duration-300 ${activeMenu === 'services' ? 'text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full' : ''}`}
              >
                Services
                <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === 'services' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute top-[70px] left-1/2 -translate-x-1/2 w-[900px] bg-white/95 backdrop-blur-2xl shadow-2xl rounded-3xl border border-white/50 p-2 transition-all duration-300 origin-top transform ${activeMenu === 'services' ? 'opacity-100 visible scale-100 translate-y-0' : 'opacity-0 invisible scale-95 -translate-y-4'}`}>
                <div className="flex h-[400px] overflow-hidden rounded-2xl">
                  <div className="w-1/3 bg-gray-50/50 p-4 flex flex-col gap-2 border-r border-gray-100">
                    {servicesData.map((service) => {
                      const Icon = service.icon;
                      const isActive = activeService.id === service.id;
                      return (
                        <button key={service.id} onMouseEnter={() => setActiveService(service)} className={`flex items-center gap-3 px-4 py-4 rounded-2xl text-left transition-all duration-200 group ${isActive ? 'bg-white text-blue-600 shadow-md ring-1 ring-blue-100' : 'text-gray-500 hover:bg-white/60 hover:text-gray-900'}`}>
                          <div className={`p-2 rounded-lg transition-colors ${isActive ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400 group-hover:bg-white'}`}><Icon size={18} /></div>
                          <span className="font-bold text-sm">{service.label}</span>
                          {isActive && <ChevronRight size={14} className="ml-auto opacity-50" />}
                        </button>
                      );
                    })}
                  </div>
                  <div className="w-2/3 p-8 bg-white/40">
                    <div className="mb-6 pb-6 border-b border-gray-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-1 flex items-center gap-2">{activeService.label}<ArrowRight size={16} className="text-blue-400" /></h3>
                      <p className="text-gray-500 text-sm">{activeService.headerDesc}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                      {activeService.subServices.map((sub, idx) => (
                        <div key={idx} className="group cursor-pointer p-3 rounded-xl hover:bg-blue-50/50 transition-colors -ml-3">
                          <h4 className="font-bold text-gray-800 text-sm mb-1 group-hover:text-blue-600 transition-colors">{sub.title}</h4>
                          <p className="text-xs text-gray-500 leading-relaxed">{sub.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. INDUSTRIES MEGA MENU */}
            <div className="h-full flex items-center relative">
              <button 
                onClick={() => toggleMenu('industries')}
                className={`flex items-center gap-1 hover:text-blue-600 transition-all duration-300 ${activeMenu === 'industries' ? 'text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full' : ''}`}
              >
                Industries
                <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === 'industries' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute top-[70px] left-1/2 -translate-x-1/2 w-[950px] bg-white/95 backdrop-blur-2xl shadow-2xl rounded-[32px] border border-white/50 overflow-hidden transition-all duration-300 origin-top transform ${activeMenu === 'industries' ? 'opacity-100 visible scale-100 translate-y-0' : 'opacity-0 invisible scale-95 -translate-y-4'}`}>
                <div className="p-8 bg-gray-50/30">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 px-2">Industries We Serve</h3>
                  <div className="grid grid-cols-5 gap-4">
                    {industriesData.map((industry, idx) => (
                      <Link key={idx} href={industry.href} onClick={() => setActiveMenu(null)} className="group flex flex-col items-center justify-center p-6 rounded-3xl transition-all duration-300 bg-gradient-to-br from-blue-50 via-white to-blue-50 border border-blue-100/50 shadow-sm hover:shadow-xl hover:shadow-blue-200/40 hover:-translate-y-1 hover:border-blue-200 hover:from-white hover:to-blue-50 text-center">
                        <div className="mb-3 text-blue-400 group-hover:text-blue-600 transition-colors drop-shadow-sm">{React.createElement(industry.icon, { size: 30 })}</div>
                        <span className="text-sm font-bold text-gray-700 group-hover:text-blue-700 transition-colors">{industry.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="bg-white border-t border-gray-100 p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg"><Rocket size={32} /></div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">We Power Industries With Smart Solutions</h4>
                      <p className="text-sm text-gray-600">Custom software services to digitally transform every industry.</p>
                    </div>
                  </div>
                  <Link href="/case-studies" onClick={() => setActiveMenu(null)} className="px-6 py-3 bg-blue-600 text-white rounded-2xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-200/50 hover:shadow-blue-300">View All Industries</Link>
                </div>
              </div>
            </div>

            <Link href="/case-studies" className="hover:text-blue-600 transition-colors">Case Studies</Link>

            {/* 3. COMPANY MENU (New Dropdown) */}
            <div className="h-full flex items-center relative">
              <button 
                onClick={() => toggleMenu('company')}
                className={`flex items-center gap-1 hover:text-blue-600 transition-all duration-300 ${activeMenu === 'company' ? 'text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full' : ''}`}
              >
                Company
                <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === 'company' ? 'rotate-180' : ''}`} />
              </button>
              {/* Company Dropdown (Simpler list) */}
              <div className={`absolute top-[70px] left-1/2 -translate-x-1/2 w-[250px] bg-white/95 backdrop-blur-2xl shadow-2xl rounded-2xl border border-white/50 p-2 transition-all duration-300 origin-top transform ${activeMenu === 'company' ? 'opacity-100 visible scale-100 translate-y-0' : 'opacity-0 invisible scale-95 -translate-y-4'}`}>
                {companyData.map((item, idx) => (
                  <Link key={idx} href={item.href} onClick={() => setActiveMenu(null)} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="text-gray-400 group-hover:text-blue-600">{React.createElement(item.icon, { size: 18 })}</div>
                    <div>
                       <span className="font-bold text-gray-800 text-sm block group-hover:text-blue-600">{item.name}</span>
                       <span className="text-[10px] text-gray-400 block">{item.desc}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            
          </div>

          <div className="hidden md:block">
            <Link href="/get-started" className="px-6 py-2.5 rounded-full text-white font-bold text-sm bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-opacity shadow-lg shadow-blue-200">
              Start Project
            </Link>
          </div>

          <button className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors z-50" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* --- MOBILE FULL SCREEN MENU --- */}
      <div className={`fixed inset-0 z-[100] bg-white transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
         <div className="flex items-center justify-between px-6 h-20 border-b border-gray-100">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold flex items-center gap-1">
              <span className="text-blue-600">Vidi</span><span className="text-gray-900">Agency</span>
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"><X size={28} /></button>
         </div>
                  <div className="flex flex-col px-6 py-4 overflow-y-auto h-[calc(100vh-80px)]">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="py-4 text-lg font-medium text-gray-800 border-b border-gray-100">Home</Link>
            <Link href="/solutions" onClick={() => setIsMobileMenuOpen(false)} className="py-4 text-lg font-bold text-blue-600 border-b border-gray-100">Solutions</Link>
            
            <div className="border-b border-gray-100">

              <button onClick={() => toggleMobileSection('services')} className="flex items-center justify-between w-full py-4 text-lg font-medium text-gray-800">
                Services <ChevronDown size={20} className={`transition-transform duration-300 ${expandedMobileSection === 'services' ? 'rotate-180 text-blue-600' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedMobileSection === 'services' ? 'max-h-[600px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
                  {servicesData.map((service, idx) => (
                    <div key={idx} className="mb-4 pl-4">
                      <div className="flex items-center gap-2 mb-2 text-blue-600 font-semibold">{React.createElement(service.icon, { size: 18 })}{service.label}</div>
                      <div className="pl-6 space-y-2 border-l-2 border-gray-100">
                        {service.subServices.map((sub, sIdx) => <div key={sIdx} className="text-sm text-gray-500 py-1">{sub.title}</div>)}
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="border-b border-gray-100">
              <button onClick={() => toggleMobileSection('industries')} className="flex items-center justify-between w-full py-4 text-lg font-medium text-gray-800">
                Industries <ChevronDown size={20} className={`transition-transform duration-300 ${expandedMobileSection === 'industries' ? 'rotate-180 text-blue-600' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedMobileSection === 'industries' ? 'max-h-[800px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
                 <div className="grid grid-cols-2 gap-3 pt-2">
                   {industriesData.map((industry, idx) => (
                     <Link key={idx} href={industry.href} onClick={() => setIsMobileMenuOpen(false)} className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-50 border border-gray-100 text-center">
                       <div className="text-blue-600 mb-2">{React.createElement(industry.icon, { size: 20 })}</div>
                       <span className="text-xs font-semibold text-gray-700">{industry.name}</span>
                     </Link>
                   ))}
                 </div>
              </div>
            </div>

            <Link href="/case-studies" onClick={() => setIsMobileMenuOpen(false)} className="py-4 text-lg font-medium text-gray-800 border-b border-gray-100">Case Studies</Link>

            {/* Mobile Company Accordion */}
            <div className="border-b border-gray-100">
              <button onClick={() => toggleMobileSection('company')} className="flex items-center justify-between w-full py-4 text-lg font-medium text-gray-800">
                Company <ChevronDown size={20} className={`transition-transform duration-300 ${expandedMobileSection === 'company' ? 'rotate-180 text-blue-600' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedMobileSection === 'company' ? 'max-h-[200px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
                 <div className="flex flex-col gap-2 pl-4">
                   {companyData.map((item, idx) => (
                     <Link key={idx} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 py-2 text-gray-600">
                       <span className="text-blue-600">{React.createElement(item.icon, { size: 16 })}</span>
                       <span>{item.name}</span>
                     </Link>
                   ))}
                 </div>
              </div>
            </div>

            <Link href="/get-started" onClick={() => setIsMobileMenuOpen(false)} className="block w-full mt-8 py-3.5 rounded-full text-white font-bold bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-200 text-center">Start Project</Link>
         </div>
      </div>
    </>
  );
}