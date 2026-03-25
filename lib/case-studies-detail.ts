// lib/case-studies-detail.ts

import { HardHat, Truck, Cog, Shield, Layers, Factory, Anchor, FlaskConical, Package, LucideIcon, Clock, CheckCircle2, TrendingUp, Zap, Users, Phone } from 'lucide-react';

// ============================================================================
// TYPE DEFINITIONS (unchanged)
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
// HELPER FUNCTIONS (unchanged)
// ============================================================================

export function generateSlug(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function getAllCaseStudySlugs(): { params: { slug: string } }[] {
  const slugs: { params: { slug: string } }[] = [];
  industries.forEach(industry => {
    industry.projects.forEach(project => {
      slugs.push({ params: { slug: project.slug } });
    });
  });
  return slugs;
}

export function getCaseStudyBySlug(slug: string): { project: Project; industry: Industry } | null {
  for (const industry of industries) {
    const project = industry.projects.find(p => p.slug === slug);
    if (project) return { project, industry };
  }
  return null;
}

export function getRelatedCaseStudies(slug: string, limit: number = 3): Project[] {
  const current = getCaseStudyBySlug(slug);
  if (!current) return [];
  const related = current.industry.projects.filter(p => p.slug !== slug).slice(0, limit);
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

export function getAllIndustries(): Industry[] {
  return industries;
}

export function getIndustryById(id: string): Industry | undefined {
  return industries.find(i => i.id === id);
}

// ============================================================================
// INDUSTRIAL MANUFACTURING DATA (NEW)
// ============================================================================

export const industries: Industry[] = [
  {
    id: "fall-protection",
    title: "Fall Protection Systems",
    icon: Shield,
    color: "blue",
    description: "AI‑powered quoting, compliance, and field support for fall protection equipment.",
    projects: [
      {
        slug: "fall-protection-quoting-engine",
        title: "AI Quoting Engine",
        type: "Sales Automation",
        desc: "Engineers describe the site layout and required gear; AI drafts a complete quote with specs, drawings, and pricing in minutes.",
        fullDescription: "We build custom AI quoting systems trained on your product catalog, historical quotes, and engineering drawings. Sales reps get instant, accurate proposals without interrupting senior engineers.",
        tech: ["Next.js", "OpenAI", "PostgreSQL", "CAD Integration"],
        metrics: [
          { label: "Quote Time", value: "Hours → Minutes", icon: Clock },
          { label: "Engineer Interrupts", value: "90% less", icon: Users },
          { label: "Accuracy", value: "Sourced from docs", icon: CheckCircle2 }
        ],
        gradient: "from-blue-500 via-cyan-500 to-teal-500",
        accentColor: "blue",
        client: "Fall Protection Manufacturers",
        duration: "6-8 weeks",
        year: "2025"
      },
      {
        slug: "fall-protection-compliance-assistant",
        title: "Compliance Assistant",
        type: "EHS Support",
        desc: "Instant retrieval of OSHA/ANSI regulations, inspection records, and maintenance procedures from your own documents.",
        fullDescription: "AI that answers safety questions using your EHS manuals, inspection logs, and regulatory references. No more hunting binders—your team gets the right clause in seconds.",
        tech: ["RAG", "Vector DB", "Supabase", "Document Parser"],
        metrics: [
          { label: "Response Time", value: "Seconds", icon: Zap },
          { label: "Accuracy", value: "100% sourced", icon: CheckCircle2 },
          { label: "Audit Readiness", value: "Always", icon: Shield }
        ],
        gradient: "from-indigo-500 via-purple-500 to-violet-600",
        accentColor: "indigo",
        client: "EHS Teams",
        duration: "4-6 weeks",
        year: "2025"
      },
      {
        slug: "field-support-chatbot",
        title: "Field Support Chatbot",
        type: "Technical Support",
        desc: "A mobile‑friendly chatbot that helps field technicians install, inspect, and troubleshoot equipment using your product manuals.",
        fullDescription: "Technicians ask plain‑language questions about installation steps, torque specs, or troubleshooting, and get precise answers drawn from your technical documentation.",
        tech: ["React Native", "OpenAI", "Document Ingestion"],
        metrics: [
          { label: "Support Calls", value: "Reduced 50%+", icon: Phone },
          { label: "First‑Time Fix", value: "Improved", icon: TrendingUp },
          { label: "Training Time", value: "Faster", icon: Clock }
        ],
        gradient: "from-emerald-500 via-teal-500 to-cyan-500",
        accentColor: "emerald",
        client: "Equipment Manufacturers",
        duration: "8-10 weeks",
        year: "2025"
      }
    ]
  },
  {
    id: "loading-docks",
    title: "Loading Dock & Platform Systems",
    icon: Anchor,
    color: "orange",
    description: "Smart scheduling, maintenance, and safety systems for loading docks and mobile platforms.",
    projects: [
      {
        slug: "dock-scheduler",
        title: "Smart Dock Scheduler",
        type: "Logistics",
        desc: "AI coordinates dock appointments, truck arrivals, and equipment availability to eliminate idle time and reduce detention fees.",
        fullDescription: "We build dock scheduling systems that integrate with your ERP and communicate with carriers via SMS/email. AI predicts delays and reschedules automatically.",
        tech: ["Next.js", "Twilio", "Redis", "Google Maps"],
        metrics: [
          { label: "Idle Time", value: "-35%", icon: Clock },
          { label: "Detention Fees", value: "-50%", icon: TrendingUp },
          { label: "Throughput", value: "+25%", icon: Zap }
        ],
        gradient: "from-orange-500 via-amber-500 to-yellow-500",
        accentColor: "orange",
        client: "Distribution Centers",
        duration: "8-12 weeks",
        year: "2025"
      },
      {
        slug: "maintenance-predictor",
        title: "Predictive Maintenance",
        type: "IoT & AI",
        desc: "Monitors dock levelers, lifts, and gates with IoT sensors; AI predicts failures before they cause downtime.",
        fullDescription: "We deploy edge devices and a dashboard that alerts your maintenance team when a component is likely to fail, based on historical data and real‑time usage.",
        tech: ["IoT Sensors", "Python", "AWS IoT Core", "React"],
        metrics: [
          { label: "Unexpected Downtime", value: "-50%", icon: Clock },
          { label: "Maintenance Cost", value: "-30%", icon: TrendingUp },
          { label: "Asset Life", value: "Extended", icon: CheckCircle2 }
        ],
        gradient: "from-amber-500 via-yellow-500 to-orange-600",
        accentColor: "amber",
        client: "Warehouse Operators",
        duration: "12-16 weeks",
        year: "2025"
      },
      {
        slug: "safety-compliance-tracker",
        title: "Safety Compliance Tracker",
        type: "EHS",
        desc: "Tracks dock safety inspections, equipment certifications, and training records; AI sends reminders and auto‑generates reports.",
        fullDescription: "A centralized system for managing safety checklists, certifications, and training records. AI flags overdue items and prepares audit‑ready documentation.",
        tech: ["Next.js", "Supabase", "PDFGen", "Email Automation"],
        metrics: [
          { label: "Compliance Rate", value: "95%+", icon: CheckCircle2 },
          { label: "Audit Prep", value: "Hours → Minutes", icon: Clock },
          { label: "Incidents", value: "Reduced", icon: Shield }
        ],
        gradient: "from-yellow-500 via-orange-500 to-red-500",
        accentColor: "yellow",
        client: "Safety Managers",
        duration: "6-8 weeks",
        year: "2025"
      }
    ]
  },
  {
    id: "conveyor-material-handling",
    title: "Conveyor & Material Handling",
    icon: Layers,
    color: "cyan",
    description: "Optimization and troubleshooting for conveyors, sorters, and automation lines.",
    projects: [
      {
        slug: "conveyor-troubleshooter",
        title: "AI Troubleshooting Assistant",
        type: "Maintenance",
        desc: "Maintenance techs describe symptoms; AI returns the exact procedure from your manuals, past work orders, and schematics.",
        fullDescription: "We ingest your equipment manuals, historical work orders, and parts catalogs. Technicians use a mobile app to ask questions and get step‑by‑step fixes, reducing downtime.",
        tech: ["React Native", "OpenAI", "CMMS Integration", "OCR"],
        metrics: [
          { label: "MTTR", value: "-40%", icon: Clock },
          { label: "Escalations", value: "-70%", icon: Users },
          { label: "First‑Time Fix", value: "Improved", icon: CheckCircle2 }
        ],
        gradient: "from-cyan-500 via-blue-500 to-indigo-500",
        accentColor: "cyan",
        client: "Manufacturing Plants",
        duration: "10-14 weeks",
        year: "2025"
      },
      {
        slug: "line-optimizer",
        title: "Production Line Optimizer",
        type: "Analytics",
        desc: "AI analyzes sensor data and work orders to suggest adjustments that improve throughput and reduce jams.",
        fullDescription: "We connect to PLCs and SCADA systems, then apply machine learning to identify bottlenecks and predict downtime events before they occur.",
        tech: ["Python", "Time Series DB", "SCADA Integration", "React"],
        metrics: [
          { label: "Throughput", value: "+15–25%", icon: TrendingUp },
          { label: "Unplanned Downtime", value: "-30%", icon: Clock },
          { label: "ROI", value: "3‑6 months", icon: TrendingUp }
        ],
        gradient: "from-blue-500 via-indigo-500 to-violet-500",
        accentColor: "blue",
        client: "Production Managers",
        duration: "12-16 weeks",
        year: "2025"
      },
      {
        slug: "parts-inventory-ai",
        title: "Intelligent Parts Inventory",
        type: "Inventory",
        desc: "AI predicts which parts will be needed based on upcoming maintenance and production schedules, automatically reordering before shortages.",
        fullDescription: "Integrates with your ERP and CMMS to forecast spare parts demand. AI suggests purchase orders based on lead times and usage patterns.",
        tech: ["Next.js", "Machine Learning", "ERP APIs", "Stripe"],
        metrics: [
          { label: "Stockouts", value: "-80%", icon: CheckCircle2 },
          { label: "Inventory Cost", value: "-20%", icon: TrendingUp },
          { label: "Emergency Orders", value: "Eliminated", icon: Clock }
        ],
        gradient: "from-indigo-500 via-blue-500 to-cyan-500",
        accentColor: "indigo",
        client: "Supply Chain Teams",
        duration: "8-10 weeks",
        year: "2025"
      }
    ]
  },
  {
    id: "ehs-compliance",
    title: "EHS & Compliance",
    icon: Shield,
    color: "emerald",
    description: "Systems for safety data sheets, incident reporting, and regulatory audits.",
    projects: [
      {
        slug: "ehs-knowledge-hub",
        title: "EHS Knowledge Hub",
        type: "Document Management",
        desc: "AI‑powered search over your SDS library, inspection records, and training manuals. Employees get instant answers to safety questions.",
        fullDescription: "We create a private knowledge base that understands your company’s EHS documents. Anyone can ask a question in plain English and receive a cited answer.",
        tech: ["RAG", "Vector DB", "Supabase", "React"],
        metrics: [
          { label: "Search Time", value: "Hours → Seconds", icon: Zap },
          { label: "Correct Usage", value: "Increased", icon: CheckCircle2 },
          { label: "Audit Prep", value: "Streamlined", icon: Clock }
        ],
        gradient: "from-emerald-500 via-green-500 to-teal-500",
        accentColor: "emerald",
        client: "EHS Managers",
        duration: "6-8 weeks",
        year: "2025"
      },
      {
        slug: "incident-reporting",
        title: "Incident Reporting & Analysis",
        type: "Safety",
        desc: "Mobile app for reporting near‑misses and incidents; AI identifies patterns and suggests preventive actions.",
        fullDescription: "We build a simple, user‑friendly incident reporting system. Reports are stored and analyzed to reveal root causes and high‑risk areas.",
        tech: ["React Native", "Supabase", "Analytics Dashboard"],
        metrics: [
          { label: "Reporting Rate", value: "+50%", icon: Users },
          { label: "Preventive Actions", value: "Data‑driven", icon: CheckCircle2 },
          { label: "Incidents", value: "-25%", icon: TrendingUp }
        ],
        gradient: "from-teal-500 via-cyan-500 to-blue-500",
        accentColor: "teal",
        client: "Safety Teams",
        duration: "8-10 weeks",
        year: "2025"
      },
      {
        slug: "regulatory-update-alerts",
        title: "Regulatory Update Alerts",
        type: "Compliance",
        desc: "AI monitors regulatory changes and notifies your team when a new rule affects your equipment or processes.",
        fullDescription: "We build a system that crawls government and industry sites, compares new regulations against your existing operations, and alerts you to required changes.",
        tech: ["Web Scraping", "Python", "LLM", "Email Alerts"],
        metrics: [
          { label: "Compliance Gap", value: "Identified early", icon: Shield },
          { label: "Non‑compliance Risk", value: "Reduced", icon: CheckCircle2 },
          { label: "Manual Research", value: "Eliminated", icon: Clock }
        ],
        gradient: "from-green-500 via-emerald-500 to-teal-500",
        accentColor: "green",
        client: "Compliance Officers",
        duration: "6-8 weeks",
        year: "2025"
      }
    ]
  },
  {
    id: "engineering-docs",
    title: "Engineering & Technical Docs",
    icon: Cog,
    color: "slate",
    description: "Search and retrieval over P&IDs, schematics, and technical manuals.",
    projects: [
      {
        slug: "drawing-retrieval",
        title: "Drawing & Spec Search",
        type: "Engineering",
        desc: "Ask for a drawing by name, number, or description; AI locates the file and extracts relevant dimensions, materials, and notes.",
        fullDescription: "We index your CAD files, PDF drawings, and spec sheets. Engineers can ask natural language questions and get the exact section of a drawing with all metadata.",
        tech: ["OCR", "Vector DB", "React", "Azure Blob"],
        metrics: [
          { label: "Search Time", value: "Minutes → Seconds", icon: Clock },
          { label: "Engineering Interrupts", value: "-80%", icon: Users },
          { label: "Correct Revisions", value: "Always", icon: CheckCircle2 }
        ],
        gradient: "from-slate-500 via-gray-500 to-zinc-500",
        accentColor: "slate",
        client: "Engineering Departments",
        duration: "8-12 weeks",
        year: "2025"
      },
      {
        slug: "technical-quote-assistant",
        title: "Technical Quote Assistant",
        type: "Sales Engineering",
        desc: "Sales engineers describe the customer requirement; AI pulls the right specs, writes the proposal, and estimates lead times.",
        fullDescription: "We combine your product data, engineering rules, and past proposals into an AI assistant that drafts accurate technical quotes in minutes.",
        tech: ["Next.js", "OpenAI", "Product Database"],
        metrics: [
          { label: "Quote Turnaround", value: "Days → Hours", icon: Zap },
          { label: "Accuracy", value: "High", icon: CheckCircle2 },
          { label: "Win Rate", value: "Improved", icon: TrendingUp }
        ],
        gradient: "from-gray-500 via-slate-500 to-zinc-600",
        accentColor: "gray",
        client: "Sales Engineering Teams",
        duration: "10-14 weeks",
        year: "2025"
      },
      {
        slug: "legacy-data-search",
        title: "Legacy Data Search",
        type: "Data Recovery",
        desc: "Turn decades of scanned documents, old CMMS records, and legacy databases into a searchable knowledge base.",
        fullDescription: "We build ingestion pipelines that can handle messy, unstructured, and outdated data, making it all queryable via a modern search interface.",
        tech: ["OCR", "ETL", "Vector DB", "Python"],
        metrics: [
          { label: "Data Access", value: "From days to seconds", icon: Clock },
          { label: "Recovered Knowledge", value: "All", icon: CheckCircle2 },
          { label: "R&D Efficiency", value: "Improved", icon: TrendingUp }
        ],
        gradient: "from-zinc-500 via-stone-500 to-neutral-600",
        accentColor: "zinc",
        client: "Plant Managers",
        duration: "12-16 weeks",
        year: "2025"
      }
    ]
  }
];