"use client";

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import { 
  ArrowRight, CheckCircle2, TrendingUp, Clock, Users, Zap, Sparkles,
  Stethoscope, Home, Scale, GraduationCap, Plane, Utensils, ShoppingBag, 
  HardHat, Truck, Heart, Dumbbell, Scissors, Briefcase, Landmark, Rocket,
  Leaf, Smartphone, Globe, Cpu, Activity
} from 'lucide-react';

// --- 1. THE SERVICES & SOLUTIONS CATALOG ---

const industries = [
  // 1. HEALTHCARE
  {
    title: "Healthcare & Medical",
    icon: Stethoscope,
    color: "teal",
    description: "Digital transformation capabilities for clinics, private practices, and pharmacies.",
    projects: [
      {
        title: "Clinic Management System",
        type: "Operations System",
        desc: "We build fully digital operation suites. Enable patients to book via app and give doctors instant access to records on tablets.",
        tech: ["Next.js", "WebRTC", "PostgreSQL", "Twilio"],
        metrics: [
          { label: "Retention", value: "High", icon: Users },
          { label: "Admin Time", value: "Minimized", icon: Clock },
          { label: "No-Shows", value: "Reduced", icon: CheckCircle2 }
        ],
        gradient: "from-teal-400 via-teal-500 to-emerald-500",
        accentColor: "teal",
        client: "Clinics & Hospitals"
      },
      {
        title: "Telemedicine Platform",
        type: "Remote Care App",
        desc: "Secure video consultation platforms. Includes features like AI triage that sorts case urgency based on patient inputs.",
        tech: ["React", "TensorFlow", "Stripe", "AWS"],
        metrics: [
          { label: "Consults", value: "Unlimited", icon: Zap },
          { label: "Revenue", value: "Scalable", icon: TrendingUp },
          { label: "Feedback", value: "System", icon: Heart }
        ],
        gradient: "from-cyan-400 via-blue-500 to-blue-600",
        accentColor: "blue",
        client: "Private Practices"
      },
      {
        title: "Pharmacy Delivery Logistics",
        type: "Logistics Suite",
        desc: "Automated inventory management and delivery tracking for pharmacy chains. Includes driver apps for optimized routing.",
        tech: ["Flutter", "Node.js", "Google Maps"],
        metrics: [
          { label: "Speed", value: "Optimized", icon: Zap },
          { label: "Stockouts", value: "Prevented", icon: CheckCircle2 },
          { label: "Tracking", value: "Real-Time", icon: TrendingUp }
        ],
        gradient: "from-emerald-500 via-green-500 to-teal-600",
        accentColor: "emerald",
        client: "Pharmacy Chains"
      }
    ]
  },
  // 2. REAL ESTATE
  {
    title: "Real Estate & Property",
    icon: Home,
    color: "indigo",
    description: "Platforms for agents, property managers, and developers.",
    projects: [
      {
        title: "Virtual Property Showcases",
        type: "Sales Platform",
        desc: "Replace manual viewings with high-end web platforms featuring 3D tours and automated WhatsApp lead qualification bots.",
        tech: ["Next.js", "Matterport API", "WhatsApp Bot"],
        metrics: [
          { label: "Reach", value: "Global", icon: Users },
          { label: "Leads", value: "Qualified", icon: TrendingUp },
          { label: "Sales Cycle", value: "Faster", icon: Clock }
        ],
        gradient: "from-indigo-500 via-purple-500 to-violet-600",
        accentColor: "indigo",
        client: "Real Estate Agencies"
      },
      {
        title: "Tenant Management Portal",
        type: "Management System",
        desc: "A centralized portal for units. Tenants can pay rent, request maintenance, and view leases online, reducing office admin work.",
        tech: ["React", "Stripe Connect", "Firebase"],
        metrics: [
          { label: "Rent Col.", value: "Automated", icon: CheckCircle2 },
          { label: "Support", value: "Digital", icon: Zap },
          { label: "Admin", value: "Simplified", icon: Clock }
        ],
        gradient: "from-blue-600 via-indigo-600 to-slate-700",
        accentColor: "blue",
        client: "Property Managers"
      },
      {
        title: "Direct Booking Engine",
        type: "Rental Platform",
        desc: "Commission-free booking engines for luxury villas. Synchronize calendars across Airbnb and Booking.com automatically.",
        tech: ["Next.js", "Airbnb API", "PayPal"],
        metrics: [
          { label: "Commissions", value: "0%", icon: TrendingUp },
          { label: "Bookings", value: "Direct", icon: Users },
          { label: "Sync", value: "24/7", icon: Home }
        ],
        gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
        accentColor: "violet",
        client: "Vacation Rentals"
      }
    ]
  },
  // 3. LEGAL
  {
    title: "Legal & Professional",
    icon: Scale,
    color: "slate",
    description: "Secure systems for law firms, consultants, and auditors.",
    projects: [
      {
        title: "Secure Client Portal",
        type: "Data System",
        desc: "Bank-grade secure portals for document sharing and case tracking. Allows clients to upload evidence to encrypted storage.",
        tech: ["Next.js", "Azure", "AES-256"],
        metrics: [
          { label: "Security", value: "Max", icon: CheckCircle2 },
          { label: "Admin Work", value: "Reduced", icon: Clock },
          { label: "Privacy", value: "Encrypted", icon: Users }
        ],
        gradient: "from-slate-700 via-gray-800 to-black",
        accentColor: "slate",
        client: "Law Firms"
      },
      {
        title: "Data Visualization Dashboard",
        type: "Analytics Tool",
        desc: "Interactive dashboards for consultants. Present live ROI data to clients dynamically instead of using static PDF reports.",
        tech: ["React", "D3.js", "AWS"],
        metrics: [
          { label: "Clarity", value: "Crystal", icon: Heart },
          { label: "Updates", value: "Live", icon: Zap },
          { label: "Reports", value: "Dynamic", icon: Users }
        ],
        gradient: "from-gray-600 via-slate-600 to-zinc-700",
        accentColor: "gray",
        client: "Consultancies"
      },
      {
        title: "Auto-Accounting System",
        type: "FinTech Tool",
        desc: "Automated tax document collection. Users snap photos of receipts, and AI extracts the data directly into accounting software.",
        tech: ["Python", "OCR API", "QuickBooks"],
        metrics: [
          { label: "Data Entry", value: "Auto", icon: Zap },
          { label: "Errors", value: "Zero", icon: CheckCircle2 },
          { label: "Capacity", value: "Scaled", icon: TrendingUp }
        ],
        gradient: "from-zinc-700 via-stone-700 to-neutral-800",
        accentColor: "zinc",
        client: "Accounting Firms"
      }
    ]
  },
  // 4. EDUCATION
  {
    title: "Education & Training",
    icon: GraduationCap,
    color: "blue",
    description: "E-learning solutions for schools, tutors, and colleges.",
    projects: [
      {
        title: "School Management System",
        type: "Admin Portal",
        desc: "Comprehensive portals for grades, attendance, and homework. Send push notifications to parents for important updates.",
        tech: ["PHP", "Laravel", "MySQL"],
        metrics: [
          { label: "Access", value: "Mobile", icon: Users },
          { label: "Paper", value: "Eliminated", icon: Leaf },
          { label: "Homework", value: "Digital", icon: CheckCircle2 }
        ],
        gradient: "from-blue-500 via-cyan-500 to-teal-500",
        accentColor: "blue",
        client: "K-12 Schools"
      },
      {
        title: "Video Course Platform",
        type: "LMS System",
        desc: "Custom course platforms with quizzes, progress tracking, and automated PDF certificate generation upon completion.",
        tech: ["AWS S3", "React", "Node.js"],
        metrics: [
          { label: "Students", value: "Unlimited", icon: Users },
          { label: "Tracking", value: "Precise", icon: TrendingUp },
          { label: "Uptime", value: "99.9%", icon: Zap }
        ],
        gradient: "from-sky-500 via-blue-600 to-indigo-600",
        accentColor: "sky",
        client: "Training Centers"
      },
      {
        title: "Tutor Booking App",
        type: "Scheduling Tool",
        desc: "Booking systems for 1-on-1 sessions with integrated Zoom links and recurring payment processing.",
        tech: ["Zoom API", "Next.js", "Stripe"],
        metrics: [
          { label: "Booking", value: "24/7", icon: CheckCircle2 },
          { label: "Scheduling", value: "Auto", icon: Clock },
          { label: "Payments", value: "Secure", icon: Zap }
        ],
        gradient: "from-cyan-400 via-blue-500 to-indigo-500",
        accentColor: "cyan",
        client: "Private Tutors"
      }
    ]
  },
  // 5. HOSPITALITY
  {
    title: "Hospitality & Travel",
    icon: Plane,
    color: "orange",
    description: "Booking engines for hotels, tours, and restaurants.",
    projects: [
      {
        title: "Hotel Direct Booking",
        type: "Reservation System",
        desc: "Custom booking engines with dynamic pricing based on demand. Allows guests to select specific rooms from digital floorplans.",
        tech: ["React", "Sanity CMS", "PayPal"],
        metrics: [
          { label: "Fees", value: "Saved", icon: TrendingUp },
          { label: "Pricing", value: "Dynamic", icon: CheckCircle2 },
          { label: "UX", value: "Premium", icon: Users }
        ],
        gradient: "from-orange-400 via-amber-500 to-yellow-600",
        accentColor: "orange",
        client: "Hotels & Lodges"
      },
      {
        title: "Itinerary Builder",
        type: "Travel Tech",
        desc: "Drag-and-drop itinerary builders for agents. Create beautiful PDF quotes for clients in seconds.",
        tech: ["Node.js", "PDF Kit", "React"],
        metrics: [
          { label: "Quotes", value: "Instant", icon: Clock },
          { label: "Design", value: "Custom", icon: TrendingUp },
          { label: "Sales", value: "Boosted", icon: ShoppingBag }
        ],
        gradient: "from-amber-500 via-yellow-500 to-orange-600",
        accentColor: "amber",
        client: "Tour Operators"
      },
      {
        title: "Contactless Check-In",
        type: "Guest Web App",
        desc: "Mobile check-in web apps. Guests upload ID and sign forms before arrival, receiving a digital room key.",
        tech: ["PWA", "React", "IoT Lock API"],
        metrics: [
          { label: "Check-In", value: "Fast", icon: Zap },
          { label: "Staff", value: "Efficient", icon: Clock },
          { label: "Reviews", value: "5 Star", icon: Sparkles }
        ],
        gradient: "from-yellow-500 via-orange-600 to-red-600",
        accentColor: "yellow",
        client: "Boutique Hotels"
      }
    ]
  },
  // 6. RESTAURANTS
  {
    title: "Restaurants & Food",
    icon: Utensils,
    color: "red",
    description: "Ordering systems for restaurants and catering.",
    projects: [
      {
        title: "QR Table Ordering",
        type: "Dine-In System",
        desc: "Customers view a rich media menu, order, and split the bill from their phones without waiting for staff.",
        tech: ["Flutter", "Stripe", "Firebase"],
        metrics: [
          { label: "Turnover", value: "Faster", icon: Zap },
          { label: "Order Val", value: "Higher", icon: TrendingUp },
          { label: "Errors", value: "Zero", icon: CheckCircle2 }
        ],
        gradient: "from-red-500 via-orange-500 to-yellow-500",
        accentColor: "red",
        client: "Restaurants"
      },
      {
        title: "Food Delivery App",
        type: "Mobile App",
        desc: "Custom delivery apps with real-time tracking (Oven -> Box -> Driver). Built to rival major delivery tech standards.",
        tech: ["Google Maps", "React", "Twilio"],
        metrics: [
          { label: "Tracking", value: "GPS", icon: ShoppingBag },
          { label: "Logistics", value: "Auto", icon: Truck },
          { label: "UX", value: "Smooth", icon: Heart }
        ],
        gradient: "from-orange-500 via-red-500 to-red-600",
        accentColor: "orange",
        client: "Fast Food Chains"
      },
      {
        title: "Catering Event Calculator",
        type: "B2B Tool",
        desc: "Interactive menu builders for corporate clients. Calculates costs per head and generates invoices automatically.",
        tech: ["Next.js", "EmailJS", "Xero"],
        metrics: [
          { label: "Invoicing", value: "Auto", icon: Users },
          { label: "Admin", value: "Saved", icon: Clock },
          { label: "Conversion", value: "Higher", icon: TrendingUp }
        ],
        gradient: "from-red-600 via-rose-600 to-pink-600",
        accentColor: "red",
        client: "Catering Companies"
      }
    ]
  },
  // 7. RETAIL
  {
    title: "Retail & E-Commerce",
    icon: ShoppingBag,
    color: "rose",
    description: "Scalable online stores and inventory systems.",
    projects: [
      {
        title: "International E-Store",
        type: "E-Commerce",
        desc: "Headless Shopify storefronts with AI size recommendations and localized currency support for global shipping.",
        tech: ["Shopify Plus", "Next.js", "Sanity"],
        metrics: [
          { label: "Speed", value: "Fast", icon: TrendingUp },
          { label: "Returns", value: "Lower", icon: CheckCircle2 },
          { label: "Markets", value: "Global", icon: Plane }
        ],
        gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
        accentColor: "rose",
        client: "Fashion Brands"
      },
      {
        title: "B2B Wholesale Portal",
        type: "Ordering System",
        desc: "Wholesale portals with tiered pricing, bulk reordering, and ERP integration for automated invoicing.",
        tech: ["Magento", "SAP API", "React"],
        metrics: [
          { label: "Ordering", value: "Instant", icon: Zap },
          { label: "Admin", value: "Reduced", icon: TrendingUp },
          { label: "Volume", value: "High", icon: ShoppingBag }
        ],
        gradient: "from-pink-500 via-red-500 to-orange-500",
        accentColor: "pink",
        client: "Suppliers"
      },
      {
        title: "Inventory Scanner App",
        type: "Internal Tool",
        desc: "Mobile inventory apps. Managers scan barcodes to track stock levels and auto-order from suppliers.",
        tech: ["React Native", "Firebase", "Barcode API"],
        metrics: [
          { label: "Stockouts", value: "Zero", icon: CheckCircle2 },
          { label: "Waste", value: "Reduced", icon: Leaf },
          { label: "Efficiency", value: "Max", icon: Zap }
        ],
        gradient: "from-red-500 via-rose-500 to-pink-600",
        accentColor: "red",
        client: "Retail Chains"
      }
    ]
  },
  // 8. CONSTRUCTION
  {
    title: "Construction & Engineering",
    icon: HardHat,
    color: "yellow",
    description: "Project management for builders and architects.",
    projects: [
      {
        title: "Site Management Dashboard",
        type: "Project Tool",
        desc: "Digital site management. Managers upload photos and progress reports, allowing clients to view timelines remotely.",
        tech: ["React", "AWS S3", "PostgreSQL"],
        metrics: [
          { label: "Deadlines", value: "Met", icon: Clock },
          { label: "Budget", value: "Tracked", icon: TrendingUp },
          { label: "Disputes", value: "Reduced", icon: CheckCircle2 }
        ],
        gradient: "from-yellow-500 via-orange-600 to-amber-700",
        accentColor: "yellow",
        client: "Construction Firms"
      },
      {
        title: "3D Portfolio Showcase",
        type: "Visual Web",
        desc: "High-performance visual portfolios showcasing 3D WebGL renders. Optimized for fast loading despite heavy assets.",
        tech: ["Three.js", "Next.js", "Vercel"],
        metrics: [
          { label: "Visuals", value: "Stunning", icon: Sparkles },
          { label: "Load Time", value: "Fast", icon: Zap },
          { label: "Inquiries", value: "More", icon: Users }
        ],
        gradient: "from-amber-400 via-yellow-500 to-orange-500",
        accentColor: "amber",
        client: "Architects"
      },
      {
        title: "Bid Estimator Tool",
        type: "Costing System",
        desc: "Bid management systems. Organize subcontractor quotes and material costs to generate accurate client proposals.",
        tech: ["Python", "Excel Integ", "React"],
        metrics: [
          { label: "Win Rate", value: "Higher", icon: TrendingUp },
          { label: "Admin", value: "Less", icon: Clock },
          { label: "Accuracy", value: "100%", icon: CheckCircle2 }
        ],
        gradient: "from-orange-400 via-amber-600 to-yellow-600",
        accentColor: "orange",
        client: "Contractors"
      }
    ]
  },
  // 9. CHURCHES
  {
    title: "Churches & Nonprofits",
    icon: Heart,
    color: "purple",
    description: "Apps for member engagement and donations.",
    projects: [
      {
        title: "Congregation App",
        type: "Community App",
        desc: "Custom mobile apps for sermon streaming, event calendars, and recurring tithing via credit card or bank transfer.",
        tech: ["React Native", "Stripe", "YouTube API"],
        metrics: [
          { label: "Giving", value: "Easy", icon: TrendingUp },
          { label: "Engagement", value: "Daily", icon: Users },
          { label: "Reach", value: "Global", icon: Smartphone }
        ],
        gradient: "from-purple-500 via-violet-600 to-indigo-600",
        accentColor: "purple",
        client: "Churches"
      },
      {
        title: "Impact Tracker",
        type: "Donor Dashboard",
        desc: "Transparency dashboards. Show donors exactly where their money is spent via interactive maps and live feeds.",
        tech: ["D3.js", "React", "Mapbox"],
        metrics: [
          { label: "Trust", value: "High", icon: Heart },
          { label: "Funding", value: "Secure", icon: TrendingUp },
          { label: "Data", value: "Clear", icon: CheckCircle2 }
        ],
        gradient: "from-violet-500 via-fuchsia-600 to-purple-700",
        accentColor: "violet",
        client: "NGOs"
      },
      {
        title: "Volunteer Coordinator",
        type: "Logistics",
        desc: "Emergency response coordination platforms. Connect volunteers with resources during crisis situations efficiently.",
        tech: ["Next.js", "Twilio", "Geo-Location"],
        metrics: [
          { label: "Response", value: "Fast", icon: Zap },
          { label: "Coordination", value: "Seamless", icon: Users },
          { label: "Impact", value: "Real", icon: Heart }
        ],
        gradient: "from-fuchsia-500 via-purple-600 to-pink-600",
        accentColor: "fuchsia",
        client: "Charities"
      }
    ]
  },
  // 10. LOGISTICS
  {
    title: "Logistics & Transport",
    icon: Truck,
    color: "cyan",
    description: "Tracking systems for fleets, freight, and deliveries.",
    projects: [
      {
        title: "Fleet IoT Dashboard",
        type: "Tracking System",
        desc: "Real-time IoT dashboards. Monitor fuel levels, driver behavior, and geo-fencing for security across entire fleets.",
        tech: ["React", "IoT Sensors", "AWS"],
        metrics: [
          { label: "Fuel", value: "Saved", icon: TrendingUp },
          { label: "Security", value: "High", icon: CheckCircle2 },
          { label: "Maintenance", value: "Auto", icon: Zap }
        ],
        gradient: "from-cyan-500 via-blue-600 to-indigo-600",
        accentColor: "cyan",
        client: "Trucking Companies"
      },
      {
        title: "Courier Dispatch App",
        type: "Delivery Tech",
        desc: "Uber-style apps for couriers. Customers book deliveries, track drivers on a map, and pay via secure link.",
        tech: ["Flutter", "Google Maps", "Node.js"],
        metrics: [
          { label: "Dispatch", value: "Auto", icon: Truck },
          { label: "Pickups", value: "Fast", icon: Clock },
          { label: "Payouts", value: "Easy", icon: Zap }
        ],
        gradient: "from-blue-500 via-cyan-600 to-teal-600",
        accentColor: "blue",
        client: "Logistics Firms"
      },
      {
        title: "Freight Documentation",
        type: "Cloud System",
        desc: "Digital documentation systems for clearing containers. Replace excel sheets with a cloud database accessible by clients.",
        tech: ["Angular", "Azure SQL", "Python"],
        metrics: [
          { label: "Clearance", value: "Faster", icon: Clock },
          { label: "Paper", value: "Digitized", icon: CheckCircle2 },
          { label: "Access", value: "Cloud", icon: Users }
        ],
        gradient: "from-sky-500 via-blue-500 to-indigo-500",
        accentColor: "sky",
        client: "Freight Forwarders"
      }
    ]
  },
  // 11. FITNESS
  {
    title: "Fitness & Wellness",
    icon: Dumbbell,
    color: "green",
    description: "Booking and tracking solutions for gyms and spas.",
    projects: [
      {
        title: "Gym Access App",
        type: "Member System",
        desc: "Member apps with dynamic QR code entry. Replace keycards, allowing 24/7 access management via smartphone.",
        tech: ["PWA", "QR Gen", "Node.js"],
        metrics: [
          { label: "Access", value: "24/7", icon: Zap },
          { label: "Classes", value: "Booked", icon: Users },
          { label: "Admin", value: "Reduced", icon: TrendingUp }
        ],
        gradient: "from-green-500 via-emerald-600 to-teal-600",
        accentColor: "green",
        client: "Gym Franchises"
      },
      {
        title: "Coaching Platform",
        type: "Progress App",
        desc: "Custom workout & nutrition tracking apps. Clients log reps, upload meal photos, and get feedback from trainers.",
        tech: ["Supabase", "React Native", "Video"],
        metrics: [
          { label: "Results", value: "Tracked", icon: CheckCircle2 },
          { label: "Retention", value: "High", icon: Users },
          { label: "Scale", value: "Global", icon: TrendingUp }
        ],
        gradient: "from-emerald-500 via-teal-500 to-cyan-500",
        accentColor: "emerald",
        client: "Personal Trainers"
      },
      {
        title: "Spa Appointment System",
        type: "Booking Engine",
        desc: "Elegant appointment systems. Customers select therapists, treatments, and pay deposits online seamlessly.",
        tech: ["Calendly API", "WordPress", "Stripe"],
        metrics: [
          { label: "Bookings", value: "Easy", icon: TrendingUp },
          { label: "No-Shows", value: "Reduced", icon: CheckCircle2 },
          { label: "Revenue", value: "Steady", icon: ShoppingBag }
        ],
        gradient: "from-teal-400 via-green-500 to-emerald-600",
        accentColor: "teal",
        client: "Spas & Salons"
      }
    ]
  },
  // 12. BEAUTY
  {
    title: "Beauty & Lifestyle",
    icon: Scissors,
    color: "pink",
    description: "Apps for salons, fashion brands, and influencers.",
    projects: [
      {
        title: "Salon Booking App",
        type: "Client App",
        desc: "Booking apps with style galleries. Let clients browse your previous work and book specific stylists directly.",
        tech: ["Instagram API", "React", "Firebase"],
        metrics: [
          { label: "Clients", value: "New", icon: Users },
          { label: "Calls", value: "Reduced", icon: Zap },
          { label: "Spend", value: "Up", icon: ShoppingBag }
        ],
        gradient: "from-pink-400 via-rose-500 to-red-500",
        accentColor: "pink",
        client: "Hair Salons"
      },
      {
        title: "AR Makeup Try-On",
        type: "E-Commerce",
        desc: "E-commerce integrations with AR features, allowing users to see lipstick shades on their camera before buying.",
        tech: ["AR Kit", "Shopify", "React"],
        metrics: [
          { label: "Sales", value: "Boosted", icon: TrendingUp },
          { label: "Returns", value: "Minimal", icon: CheckCircle2 },
          { label: "Fun", value: "High", icon: Heart }
        ],
        gradient: "from-rose-400 via-pink-500 to-fuchsia-500",
        accentColor: "rose",
        client: "Cosmetic Brands"
      },
      {
        title: "Influencer Hub",
        type: "Personal Brand",
        desc: "Blog and affiliate marketing hubs. Integrate LTK links and newsletter signups to monetize audiences.",
        tech: ["Ghost CMS", "Next.js", "ConvertKit"],
        metrics: [
          { label: "Traffic", value: "Owned", icon: Globe },
          { label: "Ads", value: "Optimized", icon: TrendingUp },
          { label: "Subs", value: "Growth", icon: Users }
        ],
        gradient: "from-fuchsia-400 via-pink-500 to-purple-500",
        accentColor: "fuchsia",
        client: "Content Creators"
      }
    ]
  },
  // 13. FINANCE
  {
    title: "Finance & Insurance",
    icon: Landmark,
    color: "emerald",
    description: "Secure fintech for brokers, banks, and startups.",
    projects: [
      {
        title: "Insurance Quote Engine",
        type: "Lead Gen",
        desc: "Lead generation funnels that calculate premium estimates instantly and email PDF quotes to potential clients.",
        tech: ["Vue.js", "Laravel", "SendGrid"],
        metrics: [
          { label: "Leads", value: "More", icon: Users },
          { label: "Quotes", value: "Auto", icon: Zap },
          { label: "Conv.", value: "Higher", icon: TrendingUp }
        ],
        gradient: "from-emerald-600 via-green-700 to-teal-700",
        accentColor: "emerald",
        client: "Insurance Brokers"
      },
      {
        title: "Investor Portal",
        type: "Secure Dashboard",
        desc: "Secure client dashboards. Investors log in to view portfolio performance and download tax documents safely.",
        tech: ["React", "FinTech API", "AWS"],
        metrics: [
          { label: "Security", value: "Bank Lv", icon: CheckCircle2 },
          { label: "Trust", value: "Built", icon: Heart },
          { label: "Assets", value: "Safe", icon: Landmark }
        ],
        gradient: "from-green-600 via-emerald-800 to-teal-900",
        accentColor: "green",
        client: "Investment Firms"
      },
      {
        title: "Loan Application App",
        type: "FinTech App",
        desc: "Loan application apps with AI credit scoring algorithms. Replace manual background checks with instant decisions.",
        tech: ["Python", "AI Model", "React"],
        metrics: [
          { label: "Decision", value: "Instant", icon: Clock },
          { label: "Risk", value: "Lower", icon: CheckCircle2 },
          { label: "Volume", value: "High", icon: TrendingUp }
        ],
        gradient: "from-teal-600 via-green-700 to-emerald-800",
        accentColor: "teal",
        client: "Microfinance"
      }
    ]
  },
  // 14. STARTUPS
  {
    title: "Startups & Tech",
    icon: Rocket,
    color: "violet",
    description: "Launchpads for entrepreneurs and new ventures.",
    projects: [
      {
        title: "SaaS MVP Build",
        type: "Product Dev",
        desc: "Rapid MVP (Minimum Viable Product) development for B2B software. Get your idea to market in weeks, not months.",
        tech: ["Next.js", "Supabase", "Stripe"],
        metrics: [
          { label: "Launch", value: "Fast", icon: Rocket },
          { label: "Scale", value: "Ready", icon: TrendingUp },
          { label: "Code", value: "Clean", icon: CheckCircle2 }
        ],
        gradient: "from-violet-500 via-purple-500 to-indigo-500",
        accentColor: "violet",
        client: "Tech Founders"
      },
      {
        title: "Social Networking App",
        type: "Mobile Startup",
        desc: "Scalable social apps with real-time chat, geolocation, and notification features built for high user loads.",
        tech: ["React Native", "Firebase", "Redis"],
        metrics: [
          { label: "Chat", value: "Live", icon: Smartphone },
          { label: "Uptime", value: "Stable", icon: Zap },
          { label: "UX", value: "Addictive", icon: Heart }
        ],
        gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
        accentColor: "purple",
        client: "Social Startups"
      },
      {
        title: "Data Analytics Platform",
        type: "Big Data",
        desc: "Data platforms for tracking complex metrics. We build the architecture to handle millions of data points.",
        tech: ["Python", "React", "BigQuery"],
        metrics: [
          { label: "Data", value: "Visual", icon: CheckCircle2 },
          { label: "Speed", value: "Fast", icon: Globe },
          { label: "Clients", value: "Enterprise", icon: Briefcase }
        ],
        gradient: "from-fuchsia-500 via-pink-500 to-purple-600",
        accentColor: "fuchsia",
        client: "Data Companies"
      }
    ]
  },
  // 15. SMALL BIZ
  {
    title: "Small Business",
    icon: Briefcase,
    color: "gray",
    description: "Digital presence for local businesses and entrepreneurs.",
    projects: [
      {
        title: "Local SEO Website",
        type: "Web Presence",
        desc: "SEO-optimized websites designed to rank high on Google Maps in your local area and drive foot traffic.",
        tech: ["Astro", "Tailwind", "SEO"],
        metrics: [
          { label: "Ranking", value: "Top", icon: TrendingUp },
          { label: "Calls", value: "More", icon: Smartphone },
          { label: "Visits", value: "Increased", icon: Users }
        ],
        gradient: "from-gray-500 via-slate-600 to-zinc-600",
        accentColor: "gray",
        client: "Local Shops"
      },
      {
        title: "Service Booking Form",
        type: "Automation",
        desc: "Online booking forms for service providers. Replace phone tag with a seamless digital scheduling experience.",
        tech: ["WordPress", "Stripe", "Zapier"],
        metrics: [
          { label: "Bookings", value: "Auto", icon: Zap },
          { label: "Admin", value: "Low", icon: Clock },
          { label: "Revenue", value: "Consistent", icon: CheckCircle2 }
        ],
        gradient: "from-slate-500 via-gray-600 to-zinc-700",
        accentColor: "slate",
        client: "Cleaning Services"
      },
      {
        title: "Professional Portfolio",
        type: "Brand Site",
        desc: "High-end portfolio sites to showcase your past projects, reviews, and services to win bigger contracts.",
        tech: ["Next.js", "Sanity"],
        metrics: [
          { label: "Trust", value: "Built", icon: CheckCircle2 },
          { label: "Jobs", value: "Won", icon: TrendingUp },
          { label: "Image", value: "Pro", icon: Users }
        ],
        gradient: "from-zinc-500 via-stone-600 to-neutral-700",
        accentColor: "zinc",
        client: "Contractors"
      }
    ]
  }
];

// --- 2. HELPERS & COMPONENTS ---

// Helper to map color names to Tailwind classes
const getColorStyles = (color: string) => {
  const styles: any = {
    teal: { badge: "text-teal-600", box: "text-teal-600 bg-teal-50 border-teal-200" },
    indigo: { badge: "text-indigo-600", box: "text-indigo-600 bg-indigo-50 border-indigo-200" },
    slate: { badge: "text-slate-600", box: "text-slate-600 bg-slate-50 border-slate-200" },
    blue: { badge: "text-blue-600", box: "text-blue-600 bg-blue-50 border-blue-200" },
    orange: { badge: "text-orange-600", box: "text-orange-600 bg-orange-50 border-orange-200" },
    rose: { badge: "text-rose-600", box: "text-rose-600 bg-rose-50 border-rose-200" },
    amber: { badge: "text-amber-600", box: "text-amber-600 bg-amber-50 border-amber-200" },
    green: { badge: "text-green-600", box: "text-green-600 bg-green-50 border-green-200" },
    emerald: { badge: "text-emerald-600", box: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    violet: { badge: "text-violet-600", box: "text-violet-600 bg-violet-50 border-violet-200" },
    cyan: { badge: "text-cyan-600", box: "text-cyan-600 bg-cyan-50 border-cyan-200" },
    pink: { badge: "text-pink-600", box: "text-pink-600 bg-pink-50 border-pink-200" },
    fuchsia: { badge: "text-fuchsia-600", box: "text-fuchsia-600 bg-fuchsia-50 border-fuchsia-200" },
    red: { badge: "text-red-600", box: "text-red-600 bg-red-50 border-red-200" },
    yellow: { badge: "text-yellow-600", box: "text-yellow-600 bg-yellow-50 border-yellow-200" },
    sky: { badge: "text-sky-600", box: "text-sky-600 bg-sky-50 border-sky-200" },
    gray: { badge: "text-gray-600", box: "text-gray-600 bg-gray-50 border-gray-200" },
    zinc: { badge: "text-zinc-600", box: "text-zinc-600 bg-zinc-50 border-zinc-200" },
  };
  return styles[color] || styles.blue;
};

// Component: The Metric Box (Smaller size as requested)
const MetricCard = ({ metric, accentColor }: any) => {
  const Icon = metric.icon;
  const styles = getColorStyles(accentColor);
  
  return (
    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${styles.box}`}>
      <Icon size={16} />
      <div className="flex flex-col">
        <span className="text-[9px] uppercase tracking-wider font-semibold opacity-70 leading-none">{metric.label}</span>
        <span className="text-base font-bold leading-none mt-0.5">{metric.value}</span>
      </div>
    </div>
  );
};

// Component: The BIG Case Study Card
const BigCaseStudyCard = ({ study }: any) => {
  const styles = getColorStyles(study.accentColor);
  
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
      
      {/* 1. ABSTRACT VISUAL HEADER (The "Screen" Look) */}
      <div className="relative h-64 w-full bg-gray-50 overflow-hidden shrink-0">
        {/* Animated Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-700`}></div>
        
        {/* Floating Abstract UI Elements */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
           <div className="w-full max-w-sm bg-white rounded-xl shadow-xl border border-gray-100 p-6 relative transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500">
             {/* Fake UI Header */}
             <div className="flex items-center gap-2 mb-4">
                 <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                 <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
             </div>
             {/* Fake UI Body */}
             <div className="space-y-3">
                 <div className="flex gap-4">
                    <div className="w-1/3 h-20 rounded-lg bg-gray-50 animate-pulse"></div>
                    <div className="w-2/3 space-y-2">
                       <div className="w-full h-3 rounded bg-gray-100"></div>
                       <div className="w-3/4 h-3 rounded bg-gray-100"></div>
                       <div className="w-1/2 h-3 rounded bg-gray-100"></div>
                    </div>
                 </div>
                 <div className="w-full h-2 rounded bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>
                 {/* Mini Chart */}
                 <div className="flex items-end gap-1 h-12 pt-2">
                    <div className={`w-1/5 h-1/3 rounded-t bg-gradient-to-t ${study.gradient} opacity-40`}></div>
                    <div className={`w-1/5 h-2/3 rounded-t bg-gradient-to-t ${study.gradient} opacity-60`}></div>
                    <div className={`w-1/5 h-1/2 rounded-t bg-gradient-to-t ${study.gradient} opacity-50`}></div>
                    <div className={`w-1/5 h-full rounded-t bg-gradient-to-t ${study.gradient} opacity-80`}></div>
                    <div className={`w-1/5 h-3/4 rounded-t bg-gradient-to-t ${study.gradient} opacity-70`}></div>
                 </div>
             </div>
           </div>
        </div>

        {/* Floating Type Badge */}
        <div className="absolute top-4 left-4">
           <span className={`px-4 py-2 bg-white/95 backdrop-blur-md text-xs font-bold uppercase tracking-wider rounded-full shadow-sm border border-gray-100 ${styles.badge}`}>
             {study.type}
           </span>
        </div>
      </div>

      {/* 2. CONTENT BODY */}
      <div className="p-8 flex flex-col flex-grow">
        
        {/* Title & Desc */}
        <div className="mb-6">
           <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
             {study.title}
           </h3>
           <p className="text-gray-600 leading-relaxed">
             {study.desc}
           </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
           {study.tech.map((t: string, i: number) => (
             <span key={i} className="px-3 py-1 bg-gray-50 text-gray-700 text-xs font-semibold rounded-md border border-gray-200">
               {t}
             </span>
           ))}
        </div>

        {/* Metrics Grid (The Analysis) */}
        <div className="grid grid-cols-3 gap-2 mb-8 mt-auto">
           {study.metrics.map((m: any, i: number) => (
             <MetricCard key={i} metric={m} accentColor={study.accentColor} />
           ))}
        </div>

        {/* Footer: Client & CTA */}
        <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
           <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
             Ideal For: {study.client}
           </div>
           <button className={`flex items-center gap-2 text-sm font-bold ${styles.badge} group-hover:translate-x-1 transition-transform`}>
             View Details <ArrowRight size={16} />
           </button>
        </div>

      </div>
    </div>
  );
};


// --- 3. MAIN PAGE COMPONENT ---

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* HEADER */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-20 bg-white border-b border-gray-100">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="text-blue-600" size={24} />
            <span className="text-blue-600 font-bold tracking-wide uppercase text-sm">
              Our Capabilities
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            We Build Systems That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient">
              Transform Industries
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            From Healthcare to Logistics. Explore the engineering solutions we offer to solve complex business problems at scale.
          </p>
        </div>
      </section>

      {/* INDUSTRIES LOOP */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 space-y-32">
        
        {industries.map((industry, index) => {
          const Icon = industry.icon;
          const style = getColorStyles(industry.color);

          return (
            <section key={index} id={industry.title.toLowerCase().replace(/ /g, '-')}>
              
              {/* Industry Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-gray-200 pb-6">
                <div className="flex items-start gap-4">
                  <div className={`p-4 rounded-2xl ${style.box} shadow-sm`}>
                    <Icon size={32} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{industry.title}</h2>
                    <p className="text-lg text-gray-500 max-w-xl">
                      {industry.description}
                    </p>
                  </div>
                </div>
                <div className="hidden md:block">
                   <button className="text-gray-900 font-bold hover:text-blue-600 transition-colors flex items-center gap-2">
                     See All {industry.title} Solutions <ArrowRight size={20}/>
                   </button>
                </div>
              </div>

              {/* The 3 BIG Cards Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {industry.projects.map((project, i) => (
                  <BigCaseStudyCard key={i} study={project} />
                ))}
              </div>

            </section>
          );
        })}

      </div>

      {/* CTA FOOTER */}
      <section className="bg-gray-900 py-24 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Don't See Your Industry?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            We also build solutions for Non-Profits and Automotive. Our engineering principles work universally.
          </p>
          <button className="bg-white text-gray-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl inline-flex items-center gap-3">
            Start Your Custom Project <ArrowRight size={20}/>
          </button>
        </div>
      </section>

      {/* SIMPLE FOOTER */}
      <footer className="bg-white py-10 border-t border-gray-100 text-center text-gray-500">
        <p>© 2026 Vidi Agency. International Engineering Standard.</p>
      </footer>

    </main>
  );
}