"use client";

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import { 
  ArrowRight, CheckCircle2, TrendingUp, Clock, Users, Zap, Sparkles,
  Stethoscope, Home, Scale, GraduationCap, Plane, Utensils, ShoppingBag, 
  HardHat, Truck, Heart, Dumbbell, Scissors, Briefcase, Landmark, Rocket,
  Leaf, Smartphone, Globe, Cpu, Activity
} from 'lucide-react';

// --- 1. THE MASSIVE "PREMIUM" PORTFOLIO DATA (45 Projects) ---

const industries = [
  // 1. HEALTHCARE
  {
    title: "Healthcare & Medical",
    icon: Stethoscope,
    color: "teal",
    description: "Digital transformation for clinics, private practices, and pharmacies.",
    projects: [
      {
        title: "Vitality Medical Center",
        type: "Multi-Specialty Clinic",
        desc: "Transformed a paper-based clinic into a fully digital operation. Patients now book via app, and doctors access records instantly on tablets.",
        tech: ["Next.js", "WebRTC", "PostgreSQL", "Twilio"],
        metrics: [
          { label: "Patient Retention", value: "+40%", icon: Users },
          { label: "Admin Time/Day", value: "-3 Hours", icon: Clock },
          { label: "No-Show Rate", value: "< 5%", icon: CheckCircle2 }
        ],
        gradient: "from-teal-400 via-teal-500 to-emerald-500",
        accentColor: "teal",
        client: "Vitality Health Group"
      },
      {
        title: "Dr. Stevens Orthodontics",
        type: "Private Practice",
        desc: "A telemedicine & booking platform allowing remote consultations. AI automatically sorts urgency of cases based on uploaded photos.",
        tech: ["React", "TensorFlow", "Stripe", "AWS"],
        metrics: [
          { label: "Remote Consults", value: "200/mo", icon: Zap },
          { label: "Revenue Growth", value: "+25%", icon: TrendingUp },
          { label: "Patient Satisf.", value: "4.9/5", icon: Heart }
        ],
        gradient: "from-cyan-400 via-blue-500 to-blue-600",
        accentColor: "blue",
        client: "Stevens Ortho"
      },
      {
        title: "PharmaDirect Delivery",
        type: "Pharmacy Chain",
        desc: "Automated inventory management and delivery logistics for a chain of 15 pharmacies. Drivers use a native app for routing.",
        tech: ["Flutter", "Node.js", "Google Maps"],
        metrics: [
          { label: "Delivery Speed", value: "20 min", icon: Zap },
          { label: "Stockouts", value: "0%", icon: CheckCircle2 },
          { label: "Order Vol", value: "+150%", icon: TrendingUp }
        ],
        gradient: "from-emerald-500 via-green-500 to-teal-600",
        accentColor: "emerald",
        client: "PharmaDirect Inc."
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
        title: "Summit Skyline Realty",
        type: "Real Estate Agency",
        desc: "Replaced manual viewings with a high-end web platform featuring 3D Matterport tours and automated WhatsApp lead qualification.",
        tech: ["Next.js", "Matterport API", "WhatsApp Bot"],
        metrics: [
          { label: "Site Visits", value: "+300%", icon: Users },
          { label: "Lead Conversion", value: "18%", icon: TrendingUp },
          { label: "Time/Sale", value: "-2 Wks", icon: Clock }
        ],
        gradient: "from-indigo-500 via-purple-500 to-violet-600",
        accentColor: "indigo",
        client: "Summit Skyline"
      },
      {
        title: "Metro Property Managers",
        type: "Management Firm",
        desc: "Tenant portal for 500+ units. Tenants pay rent, request maintenance, and view leases online, reducing office calls by 90%.",
        tech: ["React", "Stripe Connect", "Firebase"],
        metrics: [
          { label: "On-Time Rent", value: "99%", icon: CheckCircle2 },
          { label: "Support Calls", value: "-90%", icon: Zap },
          { label: "Admin Saved", value: "20hr/wk", icon: Clock }
        ],
        gradient: "from-blue-600 via-indigo-600 to-slate-700",
        accentColor: "blue",
        client: "Metro Properties"
      },
      {
        title: "Haven Vacation Rentals",
        type: "Rental Business",
        desc: "Direct booking engine for luxury villas, allowing the owner to bypass Airbnb fees. Synchronized calendars across all platforms.",
        tech: ["Next.js", "Airbnb API", "PayPal"],
        metrics: [
          { label: "Commission Saved", value: "$45k", icon: TrendingUp },
          { label: "Direct Bookings", value: "70%", icon: Users },
          { label: "Occupancy", value: "94%", icon: Home }
        ],
        gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
        accentColor: "violet",
        client: "Haven Luxury"
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
        title: "Justice Partners",
        type: "Law Firm",
        desc: "Bank-grade secure client portal for document sharing and case status tracking. Clients upload evidence directly to encrypted cloud storage.",
        tech: ["Next.js", "Azure", "AES-256"],
        metrics: [
          { label: "Data Security", value: "100%", icon: CheckCircle2 },
          { label: "Admin Work", value: "-40%", icon: Clock },
          { label: "Client Trust", value: "High", icon: Users }
        ],
        gradient: "from-slate-700 via-gray-800 to-black",
        accentColor: "slate",
        client: "Justice Partners LLP"
      },
      {
        title: "Apex Strategy Group",
        type: "Consultancy",
        desc: "Interactive data visualization dashboard. Consultants present live ROI data to clients instead of static PDF reports.",
        tech: ["React", "D3.js", "AWS"],
        metrics: [
          { label: "Client Retent.", value: "95%", icon: Heart },
          { label: "Report Time", value: "Instant", icon: Zap },
          { label: "Engagement", value: "High", icon: Users }
        ],
        gradient: "from-gray-600 via-slate-600 to-zinc-700",
        accentColor: "gray",
        client: "Apex Strategy"
      },
      {
        title: "Prime Auditors",
        type: "Accounting Firm",
        desc: "Automated tax document collection system. Clients snap photos of receipts, and AI extracts the data into QuickBooks.",
        tech: ["Python", "OCR API", "QuickBooks"],
        metrics: [
          { label: "Data Entry", value: "Auto", icon: Zap },
          { label: "Errors", value: "0%", icon: CheckCircle2 },
          { label: "Season Cap.", value: "2x", icon: TrendingUp }
        ],
        gradient: "from-zinc-700 via-stone-700 to-neutral-800",
        accentColor: "zinc",
        client: "Prime Auditors"
      }
    ]
  },
  // 4. EDUCATION
  {
    title: "Education & Training",
    icon: GraduationCap,
    color: "blue",
    description: "E-learning for schools, tutors, and colleges.",
    projects: [
      {
        title: "Future Leaders Academy",
        type: "K-12 School",
        desc: "Comprehensive portal for grades, attendance, and homework. Parents receive push notifications for important updates.",
        tech: ["PHP", "Laravel", "MySQL"],
        metrics: [
          { label: "Parent Login", value: "98%", icon: Users },
          { label: "Paper Saved", value: "100%", icon: Leaf },
          { label: "Homework", value: "Digital", icon: CheckCircle2 }
        ],
        gradient: "from-blue-500 via-cyan-500 to-teal-500",
        accentColor: "blue",
        client: "Future Leaders"
      },
      {
        title: "SkillUp Online",
        type: "Training Center",
        desc: "Video course platform with quizzes, progress tracking, and automated PDF certificate generation upon completion.",
        tech: ["AWS S3", "React", "Node.js"],
        metrics: [
          { label: "Students", value: "5K+", icon: Users },
          { label: "Completion", value: "85%", icon: TrendingUp },
          { label: "Uptime", value: "99.9%", icon: Zap }
        ],
        gradient: "from-sky-500 via-blue-600 to-indigo-600",
        accentColor: "sky",
        client: "SkillUp Tech"
      },
      {
        title: "MathMaster Tutors",
        type: "Tutoring Agency",
        desc: "Booking system for 1-on-1 sessions with integrated Zoom links and recurring Stripe payments.",
        tech: ["Zoom API", "Next.js", "Stripe"],
        metrics: [
          { label: "Bookings", value: "Full", icon: CheckCircle2 },
          { label: "Scheduling", value: "Auto", icon: Clock },
          { label: "No-Shows", value: "-50%", icon: Zap }
        ],
        gradient: "from-cyan-400 via-blue-500 to-indigo-500",
        accentColor: "cyan",
        client: "MathMaster"
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
        title: "Grand Horizon Hotel",
        type: "Luxury Hotel",
        desc: "Direct booking engine with dynamic pricing based on demand. Guests can select specific rooms from a digital floorplan.",
        tech: ["React", "Sanity CMS", "PayPal"],
        metrics: [
          { label: "Direct Book", value: "+60%", icon: TrendingUp },
          { label: "OTA Fees", value: "-20%", icon: CheckCircle2 },
          { label: "Occupancy", value: "92%", icon: Users }
        ],
        gradient: "from-orange-400 via-amber-500 to-yellow-600",
        accentColor: "orange",
        client: "Grand Horizon"
      },
      {
        title: "Safari Adventures",
        type: "Tour Operator",
        desc: "Custom itinerary builder. Agents drag-and-drop destinations to create beautiful PDF quotes for clients in seconds.",
        tech: ["Node.js", "PDF Kit", "React"],
        metrics: [
          { label: "Quote Speed", value: "2 min", icon: Clock },
          { label: "Conversion", value: "+30%", icon: TrendingUp },
          { label: "Sales", value: "High", icon: ShoppingBag }
        ],
        gradient: "from-amber-500 via-yellow-500 to-orange-600",
        accentColor: "amber",
        client: "Safari Adventures"
      },
      {
        title: "City Lodge",
        type: "Boutique Lodge",
        desc: "Mobile check-in web app. Guests upload ID and sign forms before arrival, receiving a digital room key.",
        tech: ["PWA", "React", "IoT Lock API"],
        metrics: [
          { label: "Check-In", value: "30 sec", icon: Zap },
          { label: "Staff Time", value: "-10h", icon: Clock },
          { label: "Reviews", value: "5 Star", icon: Sparkles }
        ],
        gradient: "from-yellow-500 via-orange-600 to-red-600",
        accentColor: "yellow",
        client: "City Lodge"
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
        title: "The Golden Bistro",
        type: "Fine Dining",
        desc: "Table QR ordering system. Customers view a rich media menu, order, and split the bill from their phones.",
        tech: ["Flutter", "Stripe", "Firebase"],
        metrics: [
          { label: "Table Turnover", value: "+20%", icon: Zap },
          { label: "Avg Order", value: "+15%", icon: TrendingUp },
          { label: "Staff Errors", value: "0%", icon: CheckCircle2 }
        ],
        gradient: "from-red-500 via-orange-500 to-yellow-500",
        accentColor: "red",
        client: "Golden Bistro"
      },
      {
        title: "Slice Pizza Co.",
        type: "Food Delivery",
        desc: "Custom delivery app with real-time pizza tracking (Oven -> Box -> Driver). Built to rival Domino's tech.",
        tech: ["Google Maps", "React", "Twilio"],
        metrics: [
          { label: "Orders", value: "500/day", icon: ShoppingBag },
          { label: "Driver Eff.", value: "+25%", icon: Truck },
          { label: "App Rating", value: "4.8", icon: Heart }
        ],
        gradient: "from-orange-500 via-red-500 to-red-600",
        accentColor: "orange",
        client: "Slice Pizza"
      },
      {
        title: "Fresh Catering Events",
        type: "Catering Biz",
        desc: "Interactive menu builder for corporate clients. Calculates costs per head and generates invoices automatically.",
        tech: ["Next.js", "EmailJS", "Xero"],
        metrics: [
          { label: "Lead Gen", value: "High", icon: Users },
          { label: "Admin Work", value: "-80%", icon: Clock },
          { label: "Sales", value: "+40%", icon: TrendingUp }
        ],
        gradient: "from-red-600 via-rose-600 to-pink-600",
        accentColor: "red",
        client: "Fresh Catering"
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
        title: "Urban Mode Fashion",
        type: "International Brand",
        desc: "Headless Shopify storefront with AI size recommendations and localized currency support for global shipping.",
        tech: ["Shopify Plus", "Next.js", "Sanity"],
        metrics: [
          { label: "Conversion Rate", value: "4.2%", icon: TrendingUp },
          { label: "Returns", value: "-20%", icon: CheckCircle2 },
          { label: "Intl Sales", value: "+50%", icon: Plane }
        ],
        gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
        accentColor: "rose",
        client: "Urban Mode"
      },
      {
        title: "BulkMart Wholesale",
        type: "B2B Supplier",
        desc: "Wholesale portal with tiered pricing, bulk reordering, and ERP integration for automated invoicing.",
        tech: ["Magento", "SAP API", "React"],
        metrics: [
          { label: "Order Proc.", value: "Instant", icon: Zap },
          { label: "Admin Cost", value: "-40%", icon: TrendingUp },
          { label: "Avg Order Val", value: "$5K+", icon: ShoppingBag }
        ],
        gradient: "from-pink-500 via-red-500 to-orange-500",
        accentColor: "pink",
        client: "BulkMart Global"
      },
      {
        title: "Corner Market",
        type: "Local Shop chain",
        desc: "Mobile inventory app for 5 locations. Managers scan barcodes to track stock levels and auto-order from suppliers.",
        tech: ["React Native", "Firebase", "Barcode API"],
        metrics: [
          { label: "Stockouts", value: "0%", icon: CheckCircle2 },
          { label: "Waste", value: "-15%", icon: Leaf },
          { label: "Efficiency", value: "High", icon: Zap }
        ],
        gradient: "from-red-500 via-rose-500 to-pink-600",
        accentColor: "red",
        client: "Corner Market"
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
        title: "Apex Constructors",
        type: "Construction Co",
        desc: "Project management dashboard. Site managers upload photos and progress reports, clients view timelines remotely.",
        tech: ["React", "AWS S3", "PostgreSQL"],
        metrics: [
          { label: "On-Time", value: "98%", icon: Clock },
          { label: "Budget", value: "Tracked", icon: TrendingUp },
          { label: "Disputes", value: "Low", icon: CheckCircle2 }
        ],
        gradient: "from-yellow-500 via-orange-600 to-amber-700",
        accentColor: "yellow",
        client: "Apex Constructors"
      },
      {
        title: "Modern Architects",
        type: "Architecture Firm",
        desc: "High-performance visual portfolio showcasing 3D WebGL renders. Fast loading despite heavy image assets.",
        tech: ["Three.js", "Next.js", "Vercel"],
        metrics: [
          { label: "Awards", value: "Winner", icon: Sparkles },
          { label: "Load Time", value: "0.5s", icon: Zap },
          { label: "Inquiries", value: "+200%", icon: Users }
        ],
        gradient: "from-amber-400 via-yellow-500 to-orange-500",
        accentColor: "amber",
        client: "Modern Architects"
      },
      {
        title: "Site Contractors",
        type: "General Contractor",
        desc: "Bid management system. Organizes subcontractor quotes and material costs to generate accurate client proposals.",
        tech: ["Python", "Excel Integ", "React"],
        metrics: [
          { label: "Bids Won", value: "+20%", icon: TrendingUp },
          { label: "Admin", value: "-15h", icon: Clock },
          { label: "Accuracy", value: "100%", icon: CheckCircle2 }
        ],
        gradient: "from-orange-400 via-amber-600 to-yellow-600",
        accentColor: "orange",
        client: "Site Contractors"
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
        title: "Grace Community",
        type: "Mega Church",
        desc: "Custom mobile app for sermon streaming, event calendar, and recurring tithing via credit card or bank transfer.",
        tech: ["React Native", "Stripe", "YouTube API"],
        metrics: [
          { label: "Donations", value: "+60%", icon: TrendingUp },
          { label: "Engagement", value: "Daily", icon: Users },
          { label: "App Installs", value: "10K+", icon: Smartphone }
        ],
        gradient: "from-purple-500 via-violet-600 to-indigo-600",
        accentColor: "purple",
        client: "Grace Community"
      },
      {
        title: "Hope Foundation",
        type: "Intl. NGO",
        desc: "Impact tracking dashboard. Donors can see exactly where their money is spent via interactive maps and live feeds.",
        tech: ["D3.js", "React", "Mapbox"],
        metrics: [
          { label: "Donor Trust", value: "High", icon: Heart },
          { label: "Funding", value: "+30%", icon: TrendingUp },
          { label: "Transparency", value: "100%", icon: CheckCircle2 }
        ],
        gradient: "from-violet-500 via-fuchsia-600 to-purple-700",
        accentColor: "violet",
        client: "Hope Foundation"
      },
      {
        title: "Global Relief",
        type: "Charity",
        desc: "Emergency response coordination platform. Connects volunteers with resources during crisis situations.",
        tech: ["Next.js", "Twilio", "Geo-Location"],
        metrics: [
          { label: "Response", value: "Fast", icon: Zap },
          { label: "Coordination", value: "Seamless", icon: Users },
          { label: "Lives Impacted", value: "High", icon: Heart }
        ],
        gradient: "from-fuchsia-500 via-purple-600 to-pink-600",
        accentColor: "fuchsia",
        client: "Global Relief"
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
        title: "Global Fleet Tracking",
        type: "Logistics Co",
        desc: "Real-time IoT dashboard tracking 200+ trucks. Monitors fuel levels, driver behavior, and geo-fencing for security.",
        tech: ["React", "IoT Sensors", "AWS"],
        metrics: [
          { label: "Fuel Cost", value: "-15%", icon: TrendingUp },
          { label: "Theft Incidents", value: "0", icon: CheckCircle2 },
          { label: "Maintenance", value: "Auto", icon: Zap }
        ],
        gradient: "from-cyan-500 via-blue-600 to-indigo-600",
        accentColor: "cyan",
        client: "Global Fleet"
      },
      {
        title: "Flash Courier App",
        type: "Last-Mile Delivery",
        desc: "Uber-style app for bike couriers. Customers book deliveries, track drivers on a map, and pay via secure link.",
        tech: ["Flutter", "Google Maps", "Node.js"],
        metrics: [
          { label: "Daily Deliveries", value: "1.2K", icon: Truck },
          { label: "Avg Pickup", value: "4 min", icon: Clock },
          { label: "Driver Payout", value: "Daily", icon: Zap }
        ],
        gradient: "from-blue-500 via-cyan-600 to-teal-600",
        accentColor: "blue",
        client: "Flash Logistics"
      },
      {
        title: "Port Authority Manager",
        type: "Freight Forwarder",
        desc: "Digital documentation system for clearing containers. Replaced excel sheets with a cloud database accessible by clients.",
        tech: ["Angular", "Azure SQL", "Python"],
        metrics: [
          { label: "Clearance Time", value: "-2 Days", icon: Clock },
          { label: "Paper Saved", value: "100%", icon: CheckCircle2 },
          { label: "Client Trust", value: "High", icon: Users }
        ],
        gradient: "from-sky-500 via-blue-500 to-indigo-500",
        accentColor: "sky",
        client: "Oceanic Freight"
      }
    ]
  },
  // 11. FITNESS
  {
    title: "Fitness & Wellness",
    icon: Dumbbell,
    color: "green",
    description: "Booking and tracking for gyms and spas.",
    projects: [
      {
        title: "Iron Temple Gym",
        type: "Gym Franchise",
        desc: "Member app with QR code entry. Replaced keycards, allowing 24/7 access management via smartphone.",
        tech: ["PWA", "QR Gen", "Node.js"],
        metrics: [
          { label: "Access", value: "Auto", icon: Zap },
          { label: "Classes", value: "Full", icon: Users },
          { label: "Admin Cost", value: "-30%", icon: TrendingUp }
        ],
        gradient: "from-green-500 via-emerald-600 to-teal-600",
        accentColor: "green",
        client: "Iron Temple"
      },
      {
        title: "Coach Mike Online",
        type: "Personal Trainer",
        desc: "Custom workout & nutrition tracking app. Clients log reps, upload meal photos, and get feedback.",
        tech: ["Supabase", "React Native", "Video"],
        metrics: [
          { label: "Client Results", value: "Proven", icon: CheckCircle2 },
          { label: "Retention", value: "+60%", icon: Users },
          { label: "Capacity", value: "3x", icon: TrendingUp }
        ],
        gradient: "from-emerald-500 via-teal-500 to-cyan-500",
        accentColor: "emerald",
        client: "Coach Mike"
      },
      {
        title: "Zen Wellness Spa",
        type: "Luxury Spa",
        desc: "Appointment booking system. Customers select therapists, treatments, and pay deposits online.",
        tech: ["Calendly API", "WordPress", "Stripe"],
        metrics: [
          { label: "Bookings", value: "+40%", icon: TrendingUp },
          { label: "No-Shows", value: "Low", icon: CheckCircle2 },
          { label: "Revenue", value: "High", icon: ShoppingBag }
        ],
        gradient: "from-teal-400 via-green-500 to-emerald-600",
        accentColor: "teal",
        client: "Zen Wellness"
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
        title: "Luxe Salon",
        type: "Hair Salon",
        desc: "Booking app with style gallery. Clients browse previous work and book specific stylists.",
        tech: ["Instagram API", "React", "Firebase"],
        metrics: [
          { label: "New Clients", value: "+25%", icon: Users },
          { label: "Phone Calls", value: "-80%", icon: Zap },
          { label: "Avg Spend", value: "+15%", icon: ShoppingBag }
        ],
        gradient: "from-pink-400 via-rose-500 to-red-500",
        accentColor: "pink",
        client: "Luxe Salon"
      },
      {
        title: "Glow Cosmetics",
        type: "Beauty Brand",
        desc: "E-commerce store with AR makeup try-on feature allowing users to see lipstick shades on their camera.",
        tech: ["AR Kit", "Shopify", "React"],
        metrics: [
          { label: "Conversion", value: "+3.5%", icon: TrendingUp },
          { label: "Returns", value: "Low", icon: CheckCircle2 },
          { label: "Engagement", value: "High", icon: Heart }
        ],
        gradient: "from-rose-400 via-pink-500 to-fuchsia-500",
        accentColor: "rose",
        client: "Glow Cosmetics"
      },
      {
        title: "Style Influencer",
        type: "Personal Brand",
        desc: "Blog and affiliate marketing hub. Integrates LTK links and newsletter signups.",
        tech: ["Ghost CMS", "Next.js", "ConvertKit"],
        metrics: [
          { label: "Traffic", value: "100K", icon: Globe },
          { label: "Ad Rev", value: "High", icon: TrendingUp },
          { label: "Subscribers", value: "50K", icon: Users }
        ],
        gradient: "from-fuchsia-400 via-pink-500 to-purple-500",
        accentColor: "fuchsia",
        client: "Sarah Styles"
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
        title: "SafeGuard Brokers",
        type: "Insurance Agency",
        desc: "Lead generation funnel that calculates premium estimates instantly and emails a PDF quote.",
        tech: ["Vue.js", "Laravel", "SendGrid"],
        metrics: [
          { label: "Leads", value: "3x", icon: Users },
          { label: "Work", value: "Auto", icon: Zap },
          { label: "Conv. Rate", value: "18%", icon: TrendingUp }
        ],
        gradient: "from-emerald-600 via-green-700 to-teal-700",
        accentColor: "emerald",
        client: "SafeGuard"
      },
      {
        title: "Capital Wealth",
        type: "Investment Firm",
        desc: "Secure client dashboard. Investors log in to view portfolio performance and download tax documents.",
        tech: ["React", "FinTech API", "AWS"],
        metrics: [
          { label: "Security", value: "Bank Lv", icon: CheckCircle2 },
          { label: "Trust", value: "High", icon: Heart },
          { label: "Assets", value: "$50M+", icon: Landmark }
        ],
        gradient: "from-green-600 via-emerald-800 to-teal-900",
        accentColor: "green",
        client: "Capital Wealth"
      },
      {
        title: "MicroLend",
        type: "Microfinance",
        desc: "Loan application app with AI credit scoring algorithm. Replaces manual background checks.",
        tech: ["Python", "AI Model", "React"],
        metrics: [
          { label: "Approval", value: "5min", icon: Clock },
          { label: "Risk", value: "Low", icon: CheckCircle2 },
          { label: "Loans/Day", value: "500", icon: TrendingUp }
        ],
        gradient: "from-teal-600 via-green-700 to-emerald-800",
        accentColor: "teal",
        client: "MicroLend Inc."
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
        title: "LaunchPad SaaS",
        type: "Tech Startup",
        desc: "MVP (Minimum Viable Product) development for a B2B software platform. Scaled from 0 to 1000 users.",
        tech: ["Next.js", "Supabase", "Stripe"],
        metrics: [
          { label: "Launch", value: "4 Wks", icon: Rocket },
          { label: "Users", value: "Growing", icon: TrendingUp },
          { label: "Churn", value: "< 2%", icon: CheckCircle2 }
        ],
        gradient: "from-violet-500 via-purple-500 to-indigo-500",
        accentColor: "violet",
        client: "LaunchPad"
      },
      {
        title: "Disrupt App",
        type: "Mobile Startup",
        desc: "Social networking app with real-time chat and geolocation features.",
        tech: ["React Native", "Firebase", "Redis"],
        metrics: [
          { label: "Downloads", value: "10K+", icon: Smartphone },
          { label: "Uptime", value: "99%", icon: Zap },
          { label: "Rating", value: "4.7", icon: Heart }
        ],
        gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
        accentColor: "purple",
        client: "Disrupt Inc."
      },
      {
        title: "EcoTech Data",
        type: "Green Startup",
        desc: "Data platform for tracking carbon footprint for enterprises.",
        tech: ["Python", "React", "BigQuery"],
        metrics: [
          { label: "Data", value: "Accurate", icon: CheckCircle2 },
          { label: "Impact", value: "High", icon: Globe },
          { label: "Clients", value: "Fortune 500", icon: Briefcase }
        ],
        gradient: "from-fuchsia-500 via-pink-500 to-purple-600",
        accentColor: "fuchsia",
        client: "EcoTech"
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
        title: "Local Bistro Site",
        type: "Local Business",
        desc: "SEO-optimized website designed to rank #1 on Google Maps in the local area.",
        tech: ["Astro", "Tailwind", "SEO"],
        metrics: [
          { label: "Rank", value: "#1", icon: TrendingUp },
          { label: "Calls", value: "+50%", icon: Smartphone },
          { label: "Visits", value: "+30%", icon: Users }
        ],
        gradient: "from-gray-500 via-slate-600 to-zinc-600",
        accentColor: "gray",
        client: "The Local Bistro"
      },
      {
        title: "City Cleaners",
        type: "Service Business",
        desc: "Online booking form for home cleaning services. Replaced phone scheduling.",
        tech: ["WordPress", "Stripe", "Zapier"],
        metrics: [
          { label: "Bookings", value: "Auto", icon: Zap },
          { label: "Admin", value: "Low", icon: Clock },
          { label: "Revenue", value: "Stable", icon: CheckCircle2 }
        ],
        gradient: "from-slate-500 via-gray-600 to-zinc-700",
        accentColor: "slate",
        client: "City Cleaners"
      },
      {
        title: "HandyMan Pro",
        type: "Contractor",
        desc: "Professional portfolio site showcasing past projects, reviews, and services.",
        tech: ["Next.js", "Sanity"],
        metrics: [
          { label: "Trust", value: "High", icon: CheckCircle2 },
          { label: "Jobs Won", value: "+20%", icon: TrendingUp },
          { label: "Inquiries", value: "Quality", icon: Users }
        ],
        gradient: "from-zinc-500 via-stone-600 to-neutral-700",
        accentColor: "zinc",
        client: "HandyMan Pro"
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
             Client: {study.client}
           </div>
           <button className={`flex items-center gap-2 text-sm font-bold ${styles.badge} group-hover:translate-x-1 transition-transform`}>
             View Case Study <ArrowRight size={16} />
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
              Global Portfolio
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            We Transform <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient">
              Entire Industries
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            From Healthcare in Europe to Logistics in America. Explore how our engineering solves complex business problems at scale.
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
                     View All {industry.title} Projects <ArrowRight size={20}/>
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
            We have also built solutions for Non-Profits and Automotive. Our engineering principles work universally.
          </p>
          <button className="bg-white text-gray-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl inline-flex items-center gap-3">
            Start Your Custom Project <ArrowRight size={20}/>
          </button>
        </div>
      </section>

      {/* SIMPLE FOOTER */}
      <footer className="bg-white py-10 border-t border-gray-100 text-center text-gray-500">
        <p>© 2024 Vidi Agency. International Engineering Standard.</p>
      </footer>

    </main>
  );
}