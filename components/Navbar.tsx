"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Menu, X, ChevronDown, ChevronRight, ArrowRight,
  Smartphone, Globe, Bot, Database,
  Stethoscope, Home, Scale, GraduationCap, Plane, Utensils, ShoppingBag,
  HardHat, Heart, Truck, Dumbbell, Scissors, Landmark, Rocket, Briefcase,
  Users, BookOpen, CreditCard, BarChart, MessageSquare
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
const industriesData = [
  { name: "Healthcare", icon: Stethoscope, href: "/industries/healthcare" },
  { name: "Real Estate", icon: Home, href: "/industries/real-estate" }, 
  { name: "Legal", icon: Scale, href: "/industries/legal" },
  { name: "Education", icon: GraduationCap, href: "/industries/education" },
  { name: "Hospitality", icon: Plane, href: "/industries/hospitality" },
  { name: "Food & Restaurant", icon: Utensils, href: "/industries/restaurant" },
  { name: "Retail & E-Com", icon: ShoppingBag, href: "/industries/retail" },
  { name: "Construction", icon: HardHat, href: "/industries/construction" },
  { name: "Non-Profit", icon: Heart, href: "/industries/non-profit" },
  { name: "Logistics", icon: Truck, href: "/industries/logistics" },
  { name: "Fitness", icon: Dumbbell, href: "/industries/fitness" },
  { name: "Beauty", icon: Scissors, href: "/industries/beauty-lifestyle" },
  { name: "Fintech", icon: Landmark, href: "/industries/fintech" },
  { name: "Startups", icon: Rocket, href: "/industries/startups" },
  { name: "Supply Chain & POS", icon: BarChart, href: "/industries/supply-chain-pos" },
];

// --- DATA: COMPANY MENU ---
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
        <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative">
          
          <Link href="/" className="text-xl md:text-2xl font-bold flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity z-50">
            <span className="text-blue-600">Vidi</span>
            <span className="text-gray-900">Agency</span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 xl:gap-6 text-sm font-semibold text-gray-600 h-full">
            
            <Link href="/" className="hover:text-blue-600 transition-colors h-full flex items-center px-2 py-1 rounded-lg hover:bg-gray-50 text-xs lg:text-sm xl:text-base whitespace-nowrap">
              Home
            </Link>
            <Link href="/solutions" className="hover:text-blue-600 transition-colors h-full flex items-center font-bold px-2 py-1 rounded-lg hover:bg-gray-50 text-xs lg:text-sm xl:text-base whitespace-nowrap">
              Solutions
            </Link>

            {/* 1. SERVICES MEGA MENU */}
            <div className="h-full flex items-center relative">
              <button 
                onClick={() => toggleMenu('services')}
                className={`flex items-center gap-1 hover:text-blue-600 transition-all duration-300 px-3 py-1.5 rounded-full ${activeMenu === 'services' ? 'text-blue-600 bg-blue-50' : 'hover:bg-gray-50'} text-xs lg:text-sm xl:text-base whitespace-nowrap`}
              >
                Services
                <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === 'services' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`
                absolute top-[60px] md:top-[70px] left-1/2 -translate-x-1/2 
                w-[calc(100vw-2rem)] md:w-[calc(100vw-4rem)] lg:w-[calc(100vw-8rem)] xl:w-[calc(100vw-16rem)] max-w-[1200px]
                bg-white/95 backdrop-blur-2xl shadow-2xl rounded-xl md:rounded-3xl 
                border border-white/50 p-2 transition-all duration-300 origin-top transform 
                ${activeMenu === 'services' ? 'opacity-100 visible scale-100 translate-y-0' : 'opacity-0 invisible scale-95 -translate-y-4'}
              `}>
                <div className="flex flex-col lg:flex-row h-auto lg:h-[400px] overflow-hidden rounded-xl md:rounded-2xl">
                  {/* Left Panel - Service Selection */}
                  <div className="w-full lg:w-1/3 bg-gray-50/50 p-3 md:p-4 flex flex-col gap-1 md:gap-2 border-b lg:border-r border-gray-100">
                    {servicesData.map((service) => {
                      const Icon = service.icon;
                      const isActive = activeService.id === service.id;
                      return (
                        <button 
                          key={service.id} 
                          onMouseEnter={() => setActiveService(service)}
                          className={`
                            flex items-center gap-2 md:gap-3 px-3 md:px-4 py-3 md:py-4 rounded-xl md:rounded-2xl 
                            text-left transition-all duration-200 group min-h-[60px]
                            ${isActive ? 'bg-white text-blue-600 shadow-md ring-1 ring-blue-100' : 'text-gray-500 hover:bg-white/60 hover:text-gray-900'}
                          `}
                        >
                          <div className={`
                            p-1.5 md:p-2 rounded-lg transition-colors flex-shrink-0
                            ${isActive ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400 group-hover:bg-white'}
                          `}>
                            <Icon size={16} className="md:size-[18px]" />
                          </div>
                          <span className="font-bold text-xs md:text-sm truncate">{service.label}</span>
                          {isActive && <ChevronRight size={14} className="ml-auto opacity-50 flex-shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                  
                  {/* Right Panel - Subservices */}
                  <div className="w-full lg:w-2/3 p-4 md:p-6 lg:p-8 bg-white/40">
                    <div className="mb-4 md:mb-6 pb-4 md:pb-6 border-b border-gray-100">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 flex items-center gap-2">
                        {activeService.label}
                        <ArrowRight size={14} className="md:size-[16px] text-blue-400" />
                      </h3>
                      <p className="text-gray-500 text-xs md:text-sm">{activeService.headerDesc}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-6 md:gap-y-6">
                      {activeService.subServices.map((sub, idx) => (
                        <div 
                          key={idx} 
                          className="group cursor-pointer p-2 md:p-3 rounded-lg md:rounded-xl hover:bg-blue-50/50 transition-colors"
                        >
                          <h4 className="font-bold text-gray-800 text-sm mb-1 group-hover:text-blue-600 transition-colors">
                            {sub.title}
                          </h4>
                          <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{sub.desc}</p>
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
                className={`flex items-center gap-1 hover:text-blue-600 transition-all duration-300 px-3 py-1.5 rounded-full ${activeMenu === 'industries' ? 'text-blue-600 bg-blue-50' : 'hover:bg-gray-50'} text-xs lg:text-sm xl:text-base whitespace-nowrap`}
              >
                Industries
                <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === 'industries' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`
                absolute top-[60px] md:top-[70px] left-1/2 -translate-x-1/2 
                w-[calc(100vw-2rem)] md:w-[calc(100vw-4rem)] lg:w-[calc(100vw-8rem)] xl:w-[calc(100vw-16rem)] max-w-[1200px]
                bg-white/95 backdrop-blur-2xl shadow-2xl rounded-xl md:rounded-[32px] 
                border border-white/50 overflow-hidden transition-all duration-300 origin-top transform
                ${activeMenu === 'industries' ? 'opacity-100 visible scale-100 translate-y-0' : 'opacity-0 invisible scale-95 -translate-y-4'}
              `}>
                <div className="p-4 md:p-6 lg:p-8 bg-gray-50/30">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 md:mb-6 px-2">
                    Industries We Serve
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
                    {industriesData.map((industry, idx) => (
                      <Link 
                        key={idx} 
                        href={industry.href} 
                        onClick={() => setActiveMenu(null)}
                        className="group flex flex-col items-center justify-center p-3 md:p-4 lg:p-6 
                        rounded-xl md:rounded-2xl lg:rounded-3xl transition-all duration-300 
                        bg-gradient-to-br from-blue-50 via-white to-blue-50 border border-blue-100/50 
                        shadow-sm hover:shadow-md md:hover:shadow-xl hover:shadow-blue-200/40 
                        hover:-translate-y-0.5 md:hover:-translate-y-1 hover:border-blue-200 
                        hover:from-white hover:to-blue-50 text-center min-h-[100px]"
                      >
                        <div className="mb-2 md:mb-3 text-blue-400 group-hover:text-blue-600 transition-colors drop-shadow-sm">
                          {React.createElement(industry.icon, { size: 24, className: "md:size-[30px]" })}
                        </div>
                        <span className="text-xs md:text-sm font-bold text-gray-700 group-hover:text-blue-700 transition-colors line-clamp-2 px-1">
                          {industry.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="bg-white border-t border-gray-100 p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                      <Rocket size={24} className="md:size-[32px]" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-gray-900">
                        We Power Industries With Smart Solutions
                      </h4>
                      <p className="text-xs md:text-sm text-gray-600 mt-1">
                        Custom software services to digitally transform every industry.
                      </p>
                    </div>
                  </div>
                  <Link 
                    href="/case-studies" 
                    onClick={() => setActiveMenu(null)}
                    className="px-4 md:px-6 py-2.5 md:py-3 bg-blue-600 text-white rounded-xl md:rounded-2xl 
                    font-bold text-xs md:text-sm hover:bg-blue-700 transition-all 
                    shadow-lg shadow-blue-200/50 hover:shadow-blue-300 w-full md:w-auto text-center whitespace-nowrap"
                  >
                    View All Industries
                  </Link>
                </div>
              </div>
            </div>

            {/* PRICING LINK */}
            <Link href="/pricing" className="hover:text-blue-600 transition-colors h-full flex items-center font-bold px-2 py-1 rounded-lg hover:bg-gray-50 text-xs lg:text-sm xl:text-base whitespace-nowrap">
              Pricing
            </Link>

            {/* 3. COMPANY MENU */}
            <div className="h-full flex items-center relative">
              <button 
                onClick={() => toggleMenu('company')}
                className={`flex items-center gap-1 hover:text-blue-600 transition-all duration-300 px-3 py-1.5 rounded-full ${activeMenu === 'company' ? 'text-blue-600 bg-blue-50' : 'hover:bg-gray-50'} text-xs lg:text-sm xl:text-base whitespace-nowrap`}
              >
                Company
                <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === 'company' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`
                absolute top-[60px] md:top-[70px] left-1/2 -translate-x-1/2 
                w-[250px] bg-white/95 backdrop-blur-2xl shadow-2xl rounded-xl md:rounded-2xl 
                border border-white/50 p-2 transition-all duration-300 origin-top transform 
                ${activeMenu === 'company' ? 'opacity-100 visible scale-100 translate-y-0' : 'opacity-0 invisible scale-95 -translate-y-4'}
              `}>
                {companyData.map((item, idx) => (
                  <Link 
                    key={idx} 
                    href={item.href} 
                    onClick={() => setActiveMenu(null)}
                    className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl 
                    hover:bg-gray-50 transition-colors group min-h-[50px]"
                  >
                    <div className="text-gray-400 group-hover:text-blue-600">
                      {React.createElement(item.icon, { size: 16, className: "md:size-[18px]" })}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-bold text-gray-800 text-xs md:text-sm block group-hover:text-blue-600 truncate">
                        {item.name}
                      </span>
                      <span className="text-[10px] md:text-[10px] text-gray-400 block truncate">
                        {item.desc}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* DESKTOP CTA BUTTON - FIXED FOR RESPONSIVENESS */}
          <div className="hidden md:flex items-center gap-3">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 px-3 py-2 lg:px-4 lg:py-2.5 xl:px-6 xl:py-3 rounded-full text-white font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 whitespace-nowrap min-w-[120px] text-xs lg:text-sm xl:text-base"
            >
              
              <span className="hidden lg:inline">Speak to an Expert</span>
              <span className="lg:hidden">Contact</span>
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors z-50"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* MOBILE FULL SCREEN MENU */}
      <div className={`
        fixed inset-0 z-[100] bg-white transition-all duration-300 ease-in-out 
        ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `}>
        {/* Mobile Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 h-16 border-b border-gray-100">
          <Link 
            href="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-xl font-bold flex items-center gap-1"
          >
            <span className="text-blue-600">Vidi</span>
            <span className="text-gray-900">Agency</span>
          </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex flex-col px-4 sm:px-6 py-4 overflow-y-auto h-[calc(100vh-64px)]">
          {/* Home Link */}
          <Link 
            href="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="py-3 text-base font-medium text-gray-800 border-b border-gray-100 flex items-center min-h-[56px]"
          >
            Home
          </Link>

          {/* Solutions Link */}
          <Link 
            href="/solutions" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="py-3 text-base font-bold text-blue-600 border-b border-gray-100 flex items-center min-h-[56px]"
          >
            Solutions
          </Link>

          {/* Services Accordion */}
          <div className="border-b border-gray-100">
            <button 
              onClick={() => toggleMobileSection('services')}
              className="flex items-center justify-between w-full py-3 text-base font-medium text-gray-800 min-h-[56px]"
            >
              Services 
              <ChevronDown 
                size={20} 
                className={`transition-transform duration-300 ${expandedMobileSection === 'services' ? 'rotate-180 text-blue-600' : ''}`} 
              />
            </button>
            <div className={`
              overflow-hidden transition-all duration-300 ease-in-out 
              ${expandedMobileSection === 'services' ? 'max-h-[600px] opacity-100 pb-4' : 'max-h-0 opacity-0'}
            `}>
              {servicesData.map((service, idx) => (
                <div key={idx} className="mb-4 pl-4">
                  <div className="flex items-center gap-2 mb-2 text-blue-600 font-semibold text-sm">
                    {React.createElement(service.icon, { size: 16 })}
                    <span>{service.label}</span>
                  </div>
                  <div className="pl-4 space-y-2 border-l-2 border-gray-100">
                    {service.subServices.map((sub, sIdx) => (
                      <div 
                        key={sIdx} 
                        className="text-xs text-gray-500 py-1.5 px-2 rounded hover:bg-gray-50"
                      >
                        {sub.title}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industries Accordion */}
          <div className="border-b border-gray-100">
            <button 
              onClick={() => toggleMobileSection('industries')}
              className="flex items-center justify-between w-full py-3 text-base font-medium text-gray-800 min-h-[56px]"
            >
              Industries 
              <ChevronDown 
                size={20} 
                className={`transition-transform duration-300 ${expandedMobileSection === 'industries' ? 'rotate-180 text-blue-600' : ''}`} 
              />
            </button>
            <div className={`
              overflow-hidden transition-all duration-300 ease-in-out 
              ${expandedMobileSection === 'industries' ? 'max-h-[600px] opacity-100 pb-4' : 'max-h-0 opacity-0'}
            `}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-3">
                {industriesData.map((industry, idx) => {
                  const isSupplyChain = industry.name === "Supply Chain & POS";
                  return (
                    <Link 
                      key={idx} 
                      href={industry.href} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`
                        flex flex-col items-center justify-center p-2 rounded-lg 
                        bg-gray-50 border border-gray-100 text-center 
                        ${isSupplyChain ? 'min-h-[100px]' : 'min-h-[90px]'}
                      `}
                    >
                      <div className="text-blue-600 mb-1">
                        {React.createElement(industry.icon, { 
                          size: isSupplyChain ? 16 : 18 
                        })}
                      </div>
                      <span className={`
                        font-semibold text-gray-700 
                        ${isSupplyChain ? 'text-[11px] leading-tight' : 'text-xs'}
                        line-clamp-2 px-1
                      `}>
                        {industry.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Pricing Link */}
          <Link 
            href="/pricing" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="py-3 text-base font-medium text-gray-800 border-b border-gray-100 flex items-center gap-2 min-h-[56px]"
          >
            <CreditCard size={18} className="text-blue-600 flex-shrink-0" />
            <span>Pricing</span>
          </Link>

          {/* Company Accordion */}
          <div className="border-b border-gray-100">
            <button 
              onClick={() => toggleMobileSection('company')}
              className="flex items-center justify-between w-full py-3 text-base font-medium text-gray-800 min-h-[56px]"
            >
              Company 
              <ChevronDown 
                size={20} 
                className={`transition-transform duration-300 ${expandedMobileSection === 'company' ? 'rotate-180 text-blue-600' : ''}`} 
              />
            </button>
            <div className={`
              overflow-hidden transition-all duration-300 ease-in-out 
              ${expandedMobileSection === 'company' ? 'max-h-[150px] opacity-100 pb-4' : 'max-h-0 opacity-0'}
            `}>
              <div className="flex flex-col gap-1 pl-4 pt-2">
                {companyData.map((item, idx) => (
                  <Link 
                    key={idx} 
                    href={item.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 py-2.5 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg px-2"
                  >
                    <span className="text-blue-600">
                      {React.createElement(item.icon, { size: 16 })}
                    </span>
                    <span className="text-sm">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile CTA Button */}
          <Link 
            href="/contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full mt-8 py-3.5 rounded-full text-white font-bold 
            bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-200 text-center text-sm flex items-center justify-center gap-2"
          >
            
            Speak to an Expert
          </Link>
        </div>
      </div>
    </>
  );
}