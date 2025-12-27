// ============================================================================
// CASE STUDIES DATA & UTILITIES
// Centralized data for case study pages
// ============================================================================

import { 
  Stethoscope, Home, Scale, GraduationCap, Plane, Utensils, ShoppingBag, 
  HardHat, Truck, Heart, Dumbbell, Scissors, Briefcase, Landmark, Rocket,
  Leaf, Smartphone, Globe, Cpu, Activity, Users, Clock, CheckCircle2, 
  TrendingUp, Zap, LucideIcon
} from 'lucide-react';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface Metric {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface Project {
  slug: string;
  title: string;
  type: string;
  desc: string;
  fullDescription?: string;
  challenge?: string;
  solution?: string;
  results?: string;
  tech: string[];
  metrics: Metric[];
  gradient: string;
  accentColor: string;
  client: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  images?: string[];
  duration?: string;
  year?: string;
}

export interface Industry {
  id: string;
  title: string;
  icon: LucideIcon;
  color: string;
  description: string;
  projects: Project[];
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Generate URL-friendly slug from title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Get all case study slugs for static generation
 */
export function getAllCaseStudySlugs(): { params: { slug: string } }[] {
  const slugs: { params: { slug: string } }[] = [];
  
  industries.forEach(industry => {
    industry.projects.forEach(project => {
      slugs.push({ params: { slug: project.slug } });
    });
  });
  
  return slugs;
}

/**
 * Get a single case study by slug
 */
export function getCaseStudyBySlug(slug: string): { project: Project; industry: Industry } | null {
  for (const industry of industries) {
    const project = industry.projects.find(p => p.slug === slug);
    if (project) {
      return { project, industry };
    }
  }
  return null;
}

/**
 * Get related case studies (same industry, excluding current)
 */
export function getRelatedCaseStudies(slug: string, limit: number = 3): Project[] {
  const current = getCaseStudyBySlug(slug);
  if (!current) return [];
  
  const related = current.industry.projects
    .filter(p => p.slug !== slug)
    .slice(0, limit);
  
  // If not enough in same industry, get from other industries
  if (related.length < limit) {
    const remaining = limit - related.length;
    const otherProjects = industries
      .filter(i => i.id !== current.industry.id)
      .flatMap(i => i.projects)
      .slice(0, remaining);
    related.push(...otherProjects);
  }
  
  return related;
}

/**
 * Get all industries
 */
export function getAllIndustries(): Industry[] {
  return industries;
}

/**
 * Get industry by ID
 */
export function getIndustryById(id: string): Industry | undefined {
  return industries.find(i => i.id === id);
}

// ============================================================================
// CASE STUDIES DATA (45 Projects across 15 Industries)
// ============================================================================

export const industries: Industry[] = [
  // 1. HEALTHCARE
  {
    id: "healthcare",
    title: "Healthcare & Medical",
    icon: Stethoscope,
    color: "teal",
    description: "Digital transformation for clinics, private practices, and pharmacies.",
    projects: [
      {
        slug: "vitality-medical-center",
        title: "Vitality Medical Center",
        type: "Multi-Specialty Clinic",
        desc: "Transformed a paper-based clinic into a fully digital operation. Patients now book via app, and doctors access records instantly on tablets.",
        fullDescription: "Vitality Medical Center was struggling with outdated paper-based systems that led to long wait times, lost records, and frustrated patients. We built a comprehensive digital platform that revolutionized their operations.",
        challenge: "The clinic was losing patients due to 45-minute average wait times and frequent appointment mix-ups. Staff spent 3+ hours daily on manual data entry.",
        solution: "We developed a custom patient portal with online booking, automated reminders, and a tablet-based system for doctors to access records instantly. The system includes AI-powered scheduling to optimize appointment slots.",
        results: "Within 6 months, patient retention increased by 40%, wait times dropped to under 10 minutes, and the clinic expanded to handle 50% more patients with the same staff.",
        tech: ["Next.js", "WebRTC", "PostgreSQL", "Twilio"],
        metrics: [
          { label: "Patient Retention", value: "+40%", icon: Users },
          { label: "Admin Time/Day", value: "-3 Hours", icon: Clock },
          { label: "No-Show Rate", value: "< 5%", icon: CheckCircle2 }
        ],
        gradient: "from-teal-400 via-teal-500 to-emerald-500",
        accentColor: "teal",
        client: "Vitality Health Group",
        testimonial: {
          quote: "Vidi Agency transformed our clinic. We went from chaos to a well-oiled machine. Our patients love the new booking system!",
          author: "Dr. Sarah Mitchell",
          role: "Medical Director"
        },
        duration: "4 months",
        year: "2024"
      },
      {
        slug: "dr-stevens-orthodontics",
        title: "Dr. Stevens Orthodontics",
        type: "Private Practice",
        desc: "A telemedicine & booking platform allowing remote consultations. AI automatically sorts urgency of cases based on uploaded photos.",
        fullDescription: "Dr. Stevens needed to expand his practice beyond physical visits while maintaining quality care. We built a telemedicine platform with AI-powered triage.",
        challenge: "Limited appointment slots meant turning away potential patients. Emergency cases were mixed with routine check-ups, causing scheduling chaos.",
        solution: "Custom telemedicine platform with AI image analysis that automatically categorizes case urgency. Patients upload photos, and the system prioritizes appointments accordingly.",
        results: "Revenue grew 25% as the practice could now serve remote patients. The AI triage system reduced emergency wait times by 60%.",
        tech: ["React", "TensorFlow", "Stripe", "AWS"],
        metrics: [
          { label: "Remote Consults", value: "200/mo", icon: Zap },
          { label: "Revenue Growth", value: "+25%", icon: TrendingUp },
          { label: "Patient Satisf.", value: "4.9/5", icon: Heart }
        ],
        gradient: "from-cyan-400 via-blue-500 to-blue-600",
        accentColor: "blue",
        client: "Stevens Ortho",
        testimonial: {
          quote: "The AI triage system is a game-changer. I can now focus on urgent cases while routine check-ups are handled efficiently.",
          author: "Dr. James Stevens",
          role: "Lead Orthodontist"
        },
        duration: "3 months",
        year: "2024"
      },
      {
        slug: "pharmadirect-delivery",
        title: "PharmaDirect Delivery",
        type: "Pharmacy Chain",
        desc: "Automated inventory management and delivery logistics for a chain of 15 pharmacies. Drivers use a native app for routing.",
        fullDescription: "PharmaDirect was losing customers to competitors with faster delivery. We built an end-to-end logistics system that transformed their operations.",
        challenge: "Manual inventory tracking led to frequent stockouts. Delivery times averaged 2 hours, and drivers often got lost without proper routing.",
        solution: "Integrated inventory management system with predictive restocking, plus a native driver app with optimized routing using Google Maps API.",
        results: "Delivery times dropped to 20 minutes average. Zero stockouts in 6 months. Order volume increased 150% due to improved reliability.",
        tech: ["Flutter", "Node.js", "Google Maps"],
        metrics: [
          { label: "Delivery Speed", value: "20 min", icon: Zap },
          { label: "Stockouts", value: "0%", icon: CheckCircle2 },
          { label: "Order Vol", value: "+150%", icon: TrendingUp }
        ],
        gradient: "from-emerald-500 via-green-500 to-teal-600",
        accentColor: "emerald",
        client: "PharmaDirect Inc.",
        duration: "5 months",
        year: "2024"
      }
    ]
  },
  // 2. REAL ESTATE
  {
    id: "real-estate",
    title: "Real Estate & Property",
    icon: Home,
    color: "indigo",
    description: "Platforms for agents, property managers, and developers.",
    projects: [
      {
        slug: "summit-skyline-realty",
        title: "Summit Skyline Realty",
        type: "Real Estate Agency",
        desc: "Replaced manual viewings with a high-end web platform featuring 3D Matterport tours and automated WhatsApp lead qualification.",
        fullDescription: "Summit Skyline was losing deals because buyers couldn't visit properties in person. We created an immersive virtual experience that closed deals remotely.",
        challenge: "International buyers couldn't visit properties. Agents spent hours on unqualified leads. Property listings looked identical to competitors.",
        solution: "Premium website with 3D Matterport integration, AI-powered WhatsApp chatbot for lead qualification, and automated scheduling for serious buyers only.",
        results: "Site visits increased 300%. Lead conversion jumped to 18% (industry average is 2-3%). Average time to sale reduced by 2 weeks.",
        tech: ["Next.js", "Matterport API", "WhatsApp Bot"],
        metrics: [
          { label: "Site Visits", value: "+300%", icon: Users },
          { label: "Lead Conversion", value: "18%", icon: TrendingUp },
          { label: "Time/Sale", value: "-2 Wks", icon: Clock }
        ],
        gradient: "from-indigo-500 via-purple-500 to-violet-600",
        accentColor: "indigo",
        client: "Summit Skyline",
        testimonial: {
          quote: "We sold a $2M penthouse to a buyer in Dubai who never set foot in the building. The 3D tours are incredible.",
          author: "Michael Chen",
          role: "Senior Agent"
        },
        duration: "6 weeks",
        year: "2024"
      },
      {
        slug: "metro-property-managers",
        title: "Metro Property Managers",
        type: "Management Firm",
        desc: "Tenant portal for 500+ units. Tenants pay rent, request maintenance, and view leases online, reducing office calls by 90%.",
        fullDescription: "Metro was drowning in phone calls and paper checks. We built a self-service portal that freed up their team for higher-value work.",
        challenge: "Staff answered 200+ calls daily for basic questions. Rent collection was manual. Maintenance requests got lost in email chains.",
        solution: "Comprehensive tenant portal with online rent payment, maintenance ticketing system, document storage, and automated notifications.",
        results: "Support calls dropped 90%. On-time rent payments hit 99%. Staff now manages 50% more properties with the same team size.",
        tech: ["React", "Stripe Connect", "Firebase"],
        metrics: [
          { label: "On-Time Rent", value: "99%", icon: CheckCircle2 },
          { label: "Support Calls", value: "-90%", icon: Zap },
          { label: "Admin Saved", value: "20hr/wk", icon: Clock }
        ],
        gradient: "from-blue-600 via-indigo-600 to-slate-700",
        accentColor: "blue",
        client: "Metro Properties",
        duration: "8 weeks",
        year: "2024"
      },
      {
        slug: "haven-vacation-rentals",
        title: "Haven Vacation Rentals",
        type: "Rental Business",
        desc: "Direct booking engine for luxury villas, allowing the owner to bypass Airbnb fees. Synchronized calendars across all platforms.",
        fullDescription: "Haven was paying $50k+ annually in Airbnb fees. We built a direct booking system that kept more revenue in their pocket.",
        challenge: "15% Airbnb commission on $300k annual bookings. Double-bookings when managing multiple platforms. No direct relationship with guests.",
        solution: "Custom booking website with real-time calendar sync across Airbnb, VRBO, and direct bookings. Built-in CRM for guest relationships.",
        results: "Saved $45k in first year. Direct bookings now account for 70% of revenue. Occupancy rate increased to 94%.",
        tech: ["Next.js", "Airbnb API", "PayPal"],
        metrics: [
          { label: "Commission Saved", value: "$45k", icon: TrendingUp },
          { label: "Direct Bookings", value: "70%", icon: Users },
          { label: "Occupancy", value: "94%", icon: Home }
        ],
        gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
        accentColor: "violet",
        client: "Haven Luxury",
        duration: "10 weeks",
        year: "2024"
      }
    ]
  },
  // 3. LEGAL
  {
    id: "legal",
    title: "Legal & Professional",
    icon: Scale,
    color: "slate",
    description: "Secure systems for law firms, consultants, and auditors.",
    projects: [
      {
        slug: "justice-partners",
        title: "Justice Partners",
        type: "Law Firm",
        desc: "Bank-grade secure client portal for document sharing and case status tracking. Clients upload evidence directly to encrypted cloud storage.",
        fullDescription: "Justice Partners needed enterprise-level security for sensitive case documents while making it easy for clients to collaborate.",
        challenge: "Clients emailed sensitive documents unsecurely. Case status updates required phone calls. Document version control was a nightmare.",
        solution: "AES-256 encrypted client portal with role-based access, real-time case tracking, secure document upload, and audit logging for compliance.",
        results: "100% security compliance achieved. Administrative work reduced 40%. Client trust and satisfaction significantly improved.",
        tech: ["Next.js", "Azure", "AES-256"],
        metrics: [
          { label: "Data Security", value: "100%", icon: CheckCircle2 },
          { label: "Admin Work", value: "-40%", icon: Clock },
          { label: "Client Trust", value: "High", icon: Users }
        ],
        gradient: "from-slate-700 via-gray-800 to-black",
        accentColor: "slate",
        client: "Justice Partners LLP",
        testimonial: {
          quote: "Our clients feel confident sharing sensitive documents now. The security features exceed what most banks offer.",
          author: "Sarah Williams",
          role: "Managing Partner"
        },
        duration: "12 weeks",
        year: "2024"
      },
      {
        slug: "apex-strategy-group",
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
        client: "Apex Strategy",
        duration: "6 weeks",
        year: "2024"
      },
      {
        slug: "prime-auditors",
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
        client: "Prime Auditors",
        duration: "8 weeks",
        year: "2024"
      }
    ]
  },
  // Additional industries with simplified data for brevity
  // 4-15 follow the same pattern...
  {
    id: "education",
    title: "Education & Training",
    icon: GraduationCap,
    color: "blue",
    description: "E-learning for schools, tutors, and colleges.",
    projects: [
      { slug: "future-leaders-academy", title: "Future Leaders Academy", type: "K-12 School", desc: "Comprehensive portal for grades, attendance, and homework.", tech: ["PHP", "Laravel", "MySQL"], metrics: [{ label: "Parent Login", value: "98%", icon: Users }, { label: "Paper Saved", value: "100%", icon: Leaf }, { label: "Homework", value: "Digital", icon: CheckCircle2 }], gradient: "from-blue-500 via-cyan-500 to-teal-500", accentColor: "blue", client: "Future Leaders", duration: "10 weeks", year: "2024" },
      { slug: "skillup-online", title: "SkillUp Online", type: "Training Center", desc: "Video course platform with quizzes and certificates.", tech: ["AWS S3", "React", "Node.js"], metrics: [{ label: "Students", value: "5K+", icon: Users }, { label: "Completion", value: "85%", icon: TrendingUp }, { label: "Uptime", value: "99.9%", icon: Zap }], gradient: "from-sky-500 via-blue-600 to-indigo-600", accentColor: "sky", client: "SkillUp Inc.", duration: "12 weeks", year: "2024" },
      { slug: "bright-minds-tutoring", title: "Bright Minds Tutoring", type: "Tutoring Service", desc: "Marketplace connecting students with tutors.", tech: ["Next.js", "WebRTC", "Stripe"], metrics: [{ label: "Tutors", value: "500+", icon: Users }, { label: "Sessions/Mo", value: "2K+", icon: Activity }, { label: "Rating", value: "4.8/5", icon: Heart }], gradient: "from-indigo-500 via-purple-500 to-pink-500", accentColor: "indigo", client: "Bright Minds", duration: "8 weeks", year: "2024" }
    ]
  },
  {
    id: "hospitality",
    title: "Hospitality & Travel",
    icon: Plane,
    color: "orange",
    description: "Booking systems for hotels, tours, and travel agencies.",
    projects: [
      { slug: "coastal-resorts", title: "Coastal Resorts", type: "Hotel Chain", desc: "Direct booking engine with dynamic pricing.", tech: ["Next.js", "Redis", "Stripe"], metrics: [{ label: "Direct Bookings", value: "+60%", icon: TrendingUp }, { label: "OTA Fees Saved", value: "$80k", icon: CheckCircle2 }, { label: "Avg. Stay", value: "+1 Night", icon: Clock }], gradient: "from-orange-400 via-amber-500 to-yellow-500", accentColor: "orange", client: "Coastal Resorts Group", duration: "10 weeks", year: "2024" },
      { slug: "adventure-tours-co", title: "Adventure Tours Co", type: "Tour Operator", desc: "Online booking for adventure tours.", tech: ["React", "Node.js", "DocuSign API"], metrics: [{ label: "Online Bookings", value: "90%", icon: Globe }, { label: "No-Shows", value: "-70%", icon: CheckCircle2 }, { label: "Revenue", value: "+35%", icon: TrendingUp }], gradient: "from-amber-500 via-orange-500 to-red-500", accentColor: "amber", client: "Adventure Tours", duration: "6 weeks", year: "2024" },
      { slug: "wanderlust-travel", title: "Wanderlust Travel", type: "Travel Agency", desc: "Custom CRM for travel agents.", tech: ["Vue.js", "Laravel", "Amadeus API"], metrics: [{ label: "Bookings/Agent", value: "+40%", icon: TrendingUp }, { label: "Response Time", value: "-50%", icon: Clock }, { label: "Repeat Clients", value: "65%", icon: Heart }], gradient: "from-rose-400 via-pink-500 to-purple-500", accentColor: "rose", client: "Wanderlust Travel", duration: "8 weeks", year: "2024" }
    ]
  },
  {
    id: "restaurants",
    title: "Restaurants & Food",
    icon: Utensils,
    color: "red",
    description: "Ordering systems, reservations, and delivery platforms.",
    projects: [
      { slug: "gourmet-kitchen", title: "Gourmet Kitchen", type: "Fine Dining", desc: "Reservation system with table management.", tech: ["React", "Node.js", "PostgreSQL"], metrics: [{ label: "No-Shows", value: "-80%", icon: CheckCircle2 }, { label: "Table Turnover", value: "+25%", icon: TrendingUp }, { label: "VIP Retention", value: "95%", icon: Heart }], gradient: "from-red-500 via-rose-500 to-pink-500", accentColor: "red", client: "Gourmet Kitchen", duration: "5 weeks", year: "2024" },
      { slug: "quick-bites-delivery", title: "Quick Bites Delivery", type: "Ghost Kitchen", desc: "Multi-brand ordering platform.", tech: ["Next.js", "Stripe", "Firebase"], metrics: [{ label: "Orders/Day", value: "500+", icon: Zap }, { label: "Avg. Order", value: "+$8", icon: TrendingUp }, { label: "Delivery Time", value: "25 min", icon: Clock }], gradient: "from-orange-500 via-red-500 to-rose-500", accentColor: "orange", client: "Quick Bites Inc.", duration: "8 weeks", year: "2024" },
      { slug: "farm-fresh-market", title: "Farm Fresh Market", type: "Grocery Delivery", desc: "Subscription-based grocery delivery.", tech: ["Flutter", "Django", "Google Maps"], metrics: [{ label: "Subscribers", value: "2K+", icon: Users }, { label: "Churn Rate", value: "< 5%", icon: CheckCircle2 }, { label: "Delivery Cost", value: "-30%", icon: TrendingUp }], gradient: "from-green-500 via-emerald-500 to-teal-500", accentColor: "green", client: "Farm Fresh", duration: "10 weeks", year: "2024" }
    ]
  },
  {
    id: "retail",
    title: "Retail & E-Commerce",
    icon: ShoppingBag,
    color: "purple",
    description: "Online stores and omnichannel solutions.",
    projects: [
      { slug: "luxe-fashion-house", title: "Luxe Fashion House", type: "Fashion Retailer", desc: "Headless e-commerce with AR try-on.", tech: ["Next.js", "Shopify", "AR.js"], metrics: [{ label: "Returns", value: "-40%", icon: CheckCircle2 }, { label: "Conversion", value: "+25%", icon: TrendingUp }, { label: "Avg. Order", value: "+$50", icon: Zap }], gradient: "from-purple-500 via-violet-500 to-indigo-500", accentColor: "purple", client: "Luxe Fashion", duration: "12 weeks", year: "2024" },
      { slug: "tech-gadgets-plus", title: "Tech Gadgets Plus", type: "Electronics Store", desc: "B2B and B2C platform with tiered pricing.", tech: ["React", "Node.js", "Elasticsearch"], metrics: [{ label: "SKUs", value: "10K+", icon: Globe }, { label: "B2B Sales", value: "+80%", icon: TrendingUp }, { label: "Search Speed", value: "< 100ms", icon: Zap }], gradient: "from-blue-500 via-indigo-500 to-purple-500", accentColor: "blue", client: "Tech Gadgets Plus", duration: "14 weeks", year: "2024" },
      { slug: "artisan-marketplace", title: "Artisan Marketplace", type: "Handmade Goods", desc: "Multi-vendor marketplace for artisans.", tech: ["Next.js", "Stripe Connect", "ShipStation"], metrics: [{ label: "Vendors", value: "300+", icon: Users }, { label: "GMV", value: "$2M+", icon: TrendingUp }, { label: "Payout Speed", value: "24hr", icon: Clock }], gradient: "from-amber-500 via-orange-500 to-rose-500", accentColor: "amber", client: "Artisan Market", duration: "10 weeks", year: "2024" }
    ]
  },
  {
    id: "construction",
    title: "Construction & Engineering",
    icon: HardHat,
    color: "yellow",
    description: "Project management and field operations software.",
    projects: [
      { slug: "buildright-construction", title: "BuildRight Construction", type: "General Contractor", desc: "Project management with Gantt charts.", tech: ["React", "Node.js", "PostgreSQL"], metrics: [{ label: "Projects On-Time", value: "95%", icon: CheckCircle2 }, { label: "Budget Accuracy", value: "98%", icon: TrendingUp }, { label: "Doc Retrieval", value: "Instant", icon: Zap }], gradient: "from-yellow-500 via-amber-500 to-orange-500", accentColor: "yellow", client: "BuildRight Inc.", duration: "12 weeks", year: "2024" },
      { slug: "steel-structures-ltd", title: "Steel Structures Ltd", type: "Steel Fabrication", desc: "Custom ERP for steel fabrication.", tech: ["Angular", ".NET", "SQL Server"], metrics: [{ label: "Production", value: "+30%", icon: TrendingUp }, { label: "Waste", value: "-20%", icon: CheckCircle2 }, { label: "QC Pass Rate", value: "99%", icon: Activity }], gradient: "from-slate-500 via-gray-500 to-zinc-600", accentColor: "slate", client: "Steel Structures", duration: "16 weeks", year: "2024" },
      { slug: "home-renovations-pro", title: "Home Renovations Pro", type: "Renovation Company", desc: "Client-facing project tracker.", tech: ["Next.js", "Supabase", "Stripe"], metrics: [{ label: "Client Calls", value: "-70%", icon: Clock }, { label: "Payment Speed", value: "+50%", icon: Zap }, { label: "Referrals", value: "+40%", icon: Users }], gradient: "from-orange-400 via-amber-500 to-yellow-500", accentColor: "orange", client: "Home Reno Pro", duration: "8 weeks", year: "2024" }
    ]
  },
  {
    id: "nonprofits",
    title: "Churches & Nonprofits",
    icon: Heart,
    color: "pink",
    description: "Donation platforms and community management.",
    projects: [
      { slug: "grace-community-church", title: "Grace Community Church", type: "Religious Organization", desc: "Member portal with online giving.", tech: ["Next.js", "Stripe", "Supabase"], metrics: [{ label: "Online Giving", value: "+200%", icon: TrendingUp }, { label: "Event Signups", value: "3x", icon: Users }, { label: "Volunteer Hours", value: "+50%", icon: Heart }], gradient: "from-pink-400 via-rose-500 to-red-500", accentColor: "pink", client: "Grace Community", duration: "6 weeks", year: "2024" },
      { slug: "hope-foundation", title: "Hope Foundation", type: "Charity", desc: "Donation platform with recurring giving.", tech: ["React", "Node.js", "Stripe"], metrics: [{ label: "Recurring Donors", value: "+150%", icon: Heart }, { label: "Avg. Donation", value: "+$25", icon: TrendingUp }, { label: "Donor Retention", value: "85%", icon: Users }], gradient: "from-rose-400 via-pink-500 to-purple-500", accentColor: "rose", client: "Hope Foundation", duration: "8 weeks", year: "2024" },
      { slug: "youth-mentorship-program", title: "Youth Mentorship Program", type: "Youth Organization", desc: "Mentor-mentee matching platform.", tech: ["Vue.js", "Django", "PostgreSQL"], metrics: [{ label: "Matches", value: "500+", icon: Users }, { label: "Retention", value: "90%", icon: Heart }, { label: "Impact Score", value: "High", icon: TrendingUp }], gradient: "from-purple-400 via-violet-500 to-indigo-500", accentColor: "purple", client: "Youth Mentorship", duration: "10 weeks", year: "2024" }
    ]
  },
  {
    id: "logistics",
    title: "Logistics & Transport",
    icon: Truck,
    color: "emerald",
    description: "Fleet management and supply chain solutions.",
    projects: [
      { slug: "swift-logistics", title: "Swift Logistics", type: "Freight Company", desc: "Fleet management with GPS tracking.", tech: ["React Native", "Node.js", "MongoDB"], metrics: [{ label: "Fuel Costs", value: "-15%", icon: TrendingUp }, { label: "On-Time Delivery", value: "98%", icon: CheckCircle2 }, { label: "Driver Efficiency", value: "+25%", icon: Zap }], gradient: "from-emerald-500 via-green-500 to-teal-500", accentColor: "emerald", client: "Swift Logistics", duration: "14 weeks", year: "2024" },
      { slug: "warehouse-solutions", title: "Warehouse Solutions", type: "3PL Provider", desc: "Warehouse management system.", tech: ["Angular", "Java", "Oracle"], metrics: [{ label: "Pick Accuracy", value: "99.9%", icon: CheckCircle2 }, { label: "Throughput", value: "+40%", icon: TrendingUp }, { label: "Space Util.", value: "+30%", icon: Activity }], gradient: "from-teal-500 via-cyan-500 to-blue-500", accentColor: "teal", client: "Warehouse Solutions", duration: "16 weeks", year: "2024" },
      { slug: "last-mile-express", title: "Last Mile Express", type: "Courier Service", desc: "Last-mile delivery platform.", tech: ["Flutter", "Firebase", "Google Maps"], metrics: [{ label: "Deliveries/Day", value: "1000+", icon: Zap }, { label: "Customer Rating", value: "4.9/5", icon: Heart }, { label: "Failed Delivery", value: "< 2%", icon: CheckCircle2 }], gradient: "from-blue-500 via-indigo-500 to-violet-500", accentColor: "blue", client: "Last Mile Express", duration: "10 weeks", year: "2024" }
    ]
  },
  {
    id: "fitness",
    title: "Fitness & Wellness",
    icon: Dumbbell,
    color: "lime",
    description: "Gym management and wellness apps.",
    projects: [
      { slug: "ironclad-fitness", title: "Ironclad Fitness", type: "Gym Chain", desc: "Member app with class booking.", tech: ["React Native", "Node.js", "TensorFlow"], metrics: [{ label: "App Downloads", value: "10K+", icon: Smartphone }, { label: "Class Attendance", value: "+45%", icon: TrendingUp }, { label: "Member Retention", value: "88%", icon: Heart }], gradient: "from-lime-500 via-green-500 to-emerald-500", accentColor: "lime", client: "Ironclad Fitness", duration: "12 weeks", year: "2024" },
      { slug: "zen-yoga-studio", title: "Zen Yoga Studio", type: "Yoga Studio", desc: "Booking platform with video library.", tech: ["Next.js", "Stripe", "Vimeo API"], metrics: [{ label: "Online Classes", value: "200+", icon: Globe }, { label: "Subscriptions", value: "+80%", icon: TrendingUp }, { label: "Instructor Pay", value: "Automated", icon: CheckCircle2 }], gradient: "from-purple-400 via-violet-500 to-indigo-500", accentColor: "purple", client: "Zen Yoga", duration: "8 weeks", year: "2024" },
      { slug: "personal-trainer-pro", title: "Personal Trainer Pro", type: "PT Platform", desc: "Marketplace for personal trainers.", tech: ["React", "Node.js", "MongoDB"], metrics: [{ label: "Trainers", value: "500+", icon: Users }, { label: "Sessions Booked", value: "5K/mo", icon: Activity }, { label: "Trainer Income", value: "+60%", icon: TrendingUp }], gradient: "from-orange-500 via-red-500 to-rose-500", accentColor: "orange", client: "PT Pro", duration: "10 weeks", year: "2024" }
    ]
  },
  {
    id: "beauty",
    title: "Beauty & Lifestyle",
    icon: Scissors,
    color: "fuchsia",
    description: "Salon booking and beauty service platforms.",
    projects: [
      { slug: "glamour-salon", title: "Glamour Salon", type: "Hair Salon", desc: "Online booking with stylist selection.", tech: ["Next.js", "Twilio", "Stripe"], metrics: [{ label: "No-Shows", value: "-60%", icon: CheckCircle2 }, { label: "Online Bookings", value: "85%", icon: Globe }, { label: "Revenue", value: "+30%", icon: TrendingUp }], gradient: "from-fuchsia-500 via-pink-500 to-rose-500", accentColor: "fuchsia", client: "Glamour Salon", duration: "6 weeks", year: "2024" },
      { slug: "beauty-on-demand", title: "Beauty On Demand", type: "Mobile Beauty", desc: "On-demand beauty services app.", tech: ["React Native", "Firebase", "Stripe"], metrics: [{ label: "Bookings/Mo", value: "3K+", icon: Activity }, { label: "Provider Earnings", value: "+$2K/mo", icon: TrendingUp }, { label: "Customer Rating", value: "4.9/5", icon: Heart }], gradient: "from-pink-400 via-rose-500 to-red-500", accentColor: "pink", client: "Beauty On Demand", duration: "12 weeks", year: "2024" },
      { slug: "spa-retreat", title: "Spa Retreat", type: "Day Spa", desc: "Luxury spa booking with gift cards.", tech: ["Vue.js", "Laravel", "Stripe"], metrics: [{ label: "Gift Card Sales", value: "+120%", icon: TrendingUp }, { label: "Membership", value: "500+", icon: Users }, { label: "Avg. Spend", value: "+$40", icon: Zap }], gradient: "from-violet-400 via-purple-500 to-indigo-500", accentColor: "violet", client: "Spa Retreat", duration: "8 weeks", year: "2024" }
    ]
  },
  {
    id: "fintech",
    title: "Finance & Insurance",
    icon: Landmark,
    color: "cyan",
    description: "Financial services and insurance technology.",
    projects: [
      { slug: "quickloan-finance", title: "QuickLoan Finance", type: "Lending Platform", desc: "Online loan application with instant scoring.", tech: ["React", "Python", "Plaid API"], metrics: [{ label: "Application Time", value: "5 min", icon: Clock }, { label: "Approval Rate", value: "+20%", icon: TrendingUp }, { label: "Default Rate", value: "-15%", icon: CheckCircle2 }], gradient: "from-cyan-500 via-blue-500 to-indigo-500", accentColor: "cyan", client: "QuickLoan", duration: "14 weeks", year: "2024" },
      { slug: "shield-insurance", title: "Shield Insurance", type: "Insurance Agency", desc: "Quote comparison platform.", tech: ["Next.js", "Node.js", "PostgreSQL"], metrics: [{ label: "Quote Speed", value: "30 sec", icon: Zap }, { label: "Conversion", value: "+35%", icon: TrendingUp }, { label: "Policies Managed", value: "10K+", icon: Globe }], gradient: "from-blue-500 via-cyan-500 to-teal-500", accentColor: "blue", client: "Shield Insurance", duration: "10 weeks", year: "2024" },
      { slug: "wealth-advisors", title: "Wealth Advisors", type: "Financial Planning", desc: "Client portal with portfolio tracking.", tech: ["React", "Node.js", "Yodlee API"], metrics: [{ label: "AUM Growth", value: "+25%", icon: TrendingUp }, { label: "Client Meetings", value: "-40%", icon: Clock }, { label: "Client Satisfaction", value: "98%", icon: Heart }], gradient: "from-emerald-500 via-teal-500 to-cyan-500", accentColor: "emerald", client: "Wealth Advisors", duration: "12 weeks", year: "2024" }
    ]
  },
  {
    id: "startups",
    title: "Startups & Tech",
    icon: Rocket,
    color: "violet",
    description: "MVP development and SaaS platforms.",
    projects: [
      { slug: "taskflow-saas", title: "TaskFlow SaaS", type: "Productivity App", desc: "Project management with AI prioritization.", tech: ["Next.js", "OpenAI", "PostgreSQL"], metrics: [{ label: "Users", value: "15K+", icon: Users }, { label: "MRR", value: "$50K", icon: TrendingUp }, { label: "Churn", value: "< 3%", icon: CheckCircle2 }], gradient: "from-violet-500 via-purple-500 to-indigo-500", accentColor: "violet", client: "TaskFlow Inc.", duration: "16 weeks", year: "2024" },
      { slug: "connecthub-mvp", title: "ConnectHub MVP", type: "Social Platform", desc: "MVP for professional networking.", tech: ["React Native", "Firebase", "Algolia"], metrics: [{ label: "Time to MVP", value: "8 weeks", icon: Clock }, { label: "Seed Raised", value: "$500K", icon: TrendingUp }, { label: "Beta Users", value: "2K+", icon: Users }], gradient: "from-blue-500 via-indigo-500 to-violet-500", accentColor: "blue", client: "ConnectHub", duration: "8 weeks", year: "2024" },
      { slug: "datalytics-ai", title: "Datalytics AI", type: "Analytics Platform", desc: "BI platform with natural language queries.", tech: ["Python", "React", "OpenAI"], metrics: [{ label: "Query Speed", value: "< 2 sec", icon: Zap }, { label: "Enterprise Clients", value: "50+", icon: Users }, { label: "Data Processed", value: "1TB+/day", icon: Activity }], gradient: "from-indigo-500 via-blue-500 to-cyan-500", accentColor: "indigo", client: "Datalytics", duration: "20 weeks", year: "2024" }
    ]
  },
  {
    id: "small-business",
    title: "Small Business",
    icon: Briefcase,
    color: "amber",
    description: "Websites and tools for local businesses.",
    projects: [
      { slug: "joes-auto-repair", title: "Joe's Auto Repair", type: "Auto Shop", desc: "Website with online appointment booking.", tech: ["Next.js", "Supabase", "Twilio"], metrics: [{ label: "Online Bookings", value: "70%", icon: Globe }, { label: "Repeat Customers", value: "+40%", icon: Heart }, { label: "Phone Calls", value: "-60%", icon: Clock }], gradient: "from-amber-500 via-orange-500 to-red-500", accentColor: "amber", client: "Joe's Auto", duration: "4 weeks", year: "2024" },
      { slug: "green-thumb-landscaping", title: "Green Thumb Landscaping", type: "Landscaping", desc: "Lead generation website with quote calculator.", tech: ["Next.js", "Tailwind", "EmailJS"], metrics: [{ label: "Leads/Month", value: "50+", icon: Users }, { label: "Quote Requests", value: "+80%", icon: TrendingUp }, { label: "Conversion", value: "25%", icon: CheckCircle2 }], gradient: "from-green-500 via-emerald-500 to-teal-500", accentColor: "green", client: "Green Thumb", duration: "3 weeks", year: "2024" },
      { slug: "sweet-delights-bakery", title: "Sweet Delights Bakery", type: "Bakery", desc: "E-commerce site for custom cakes.", tech: ["Shopify", "React", "Stripe"], metrics: [{ label: "Online Orders", value: "60%", icon: ShoppingBag }, { label: "Avg. Order Value", value: "+$30", icon: TrendingUp }, { label: "Repeat Orders", value: "55%", icon: Heart }], gradient: "from-pink-400 via-rose-500 to-red-500", accentColor: "pink", client: "Sweet Delights", duration: "5 weeks", year: "2024" }
    ]
  }
];

export default industries;
