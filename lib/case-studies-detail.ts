// lib/case-studies-detail.ts

import {
  HardHat, Truck, Cog, Shield, Layers, Factory, Anchor,
  FlaskConical, Package, LucideIcon, Clock, CheckCircle2,
  TrendingUp, Zap, Users, Phone
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
// INDUSTRY DATA
// ============================================================================

export const industries: Industry[] = [

  // ── FALL PROTECTION & SAFETY EQUIPMENT ───────────────────────────────────
  {
    id: "fall-protection",
    title: "Fall Protection & Safety Equipment",
    icon: Shield,
    color: "blue",
    description: "AI assistants for fall protection manufacturers — trained on your product catalog, drawings, and EHS documents to support sales, quoting, and compliance teams.",
    projects: [
      {
        slug: "fall-protection-quoting-assistant",
        title: "AI Quoting Assistant",
        type: "Sales Automation",
        desc: "Sales reps describe the site layout and requirements; AI drafts a complete quote with specs and pricing in minutes — sourced from your own catalog and historical proposals.",
        fullDescription: "We build a private AI assistant trained on your product catalog, datasheets, historical quotes, and engineering drawings. Sales reps get accurate proposals without interrupting senior engineers — available 24/7 directly on your website or internal portal.",
        tech: ["AI Chatbot", "Document Ingestion", "CRM Integration", "PDF Export"],
        metrics: [
          { label: "Quote Turnaround", value: "Days → Hours", icon: Clock },
          { label: "Engineer Interruptions", value: "−80%", icon: Users },
          { label: "Data Source", value: "Your docs only", icon: CheckCircle2 },
        ],
        gradient: "from-blue-500 via-cyan-500 to-teal-500",
        accentColor: "blue",
        client: "Fall Protection Manufacturers",
        duration: "4–6 weeks",
        year: "2025",
      },
      {
        slug: "fall-protection-compliance-assistant",
        title: "EHS Compliance Assistant",
        type: "EHS Support",
        desc: "Instant retrieval of OSHA/ANSI regulations, inspection records, and safety procedures — from your own EHS library, not the public internet.",
        fullDescription: "AI that answers compliance and safety questions using your EHS manuals, inspection logs, and internal regulatory references. Deployed on your website or internal tool. Every answer is sourced directly from your approved documents.",
        tech: ["AI Chatbot", "RAG / Vector Search", "Document Ingestion", "CRM Integration"],
        metrics: [
          { label: "Response Time", value: "Seconds", icon: Zap },
          { label: "Source", value: "100% your docs", icon: CheckCircle2 },
          { label: "Audit Readiness", value: "Always", icon: Shield },
        ],
        gradient: "from-indigo-500 via-purple-500 to-violet-600",
        accentColor: "indigo",
        client: "EHS & Compliance Teams",
        duration: "3–5 weeks",
        year: "2025",
      },
      {
        slug: "fall-protection-lead-capture",
        title: "Lead Capture & Qualification Bot",
        type: "Lead Generation",
        desc: "AI engages every website visitor, asks the right questions, qualifies their project requirements, and sends structured leads straight to your CRM or inbox.",
        fullDescription: "We deploy a conversational AI on your website that asks visitors about their application, site type, and budget — then logs qualified leads into Salesforce, HubSpot, or a spreadsheet automatically. No manual data entry for your team.",
        tech: ["AI Chatbot", "CRM Integration", "Email Automation", "Google Sheets"],
        metrics: [
          { label: "Lead Response", value: "Instant, 24/7", icon: Zap },
          { label: "Manual Entry", value: "Eliminated", icon: CheckCircle2 },
          { label: "Qualified Leads", value: "To CRM automatically", icon: TrendingUp },
        ],
        gradient: "from-emerald-500 via-teal-500 to-cyan-500",
        accentColor: "emerald",
        client: "Sales & Marketing Teams",
        duration: "2–3 weeks",
        year: "2025",
      },
    ],
  },

  // ── LOADING PLATFORMS & RAIL/TRUCK ACCESS ─────────────────────────────────
  {
    id: "loading-platforms",
    title: "Loading Platforms & Rail/Truck Access",
    icon: Anchor,
    color: "orange",
    description: "AI assistants for loading platform and gangway manufacturers — trained on your product specs, drawings, and safety docs to accelerate sales and support.",
    projects: [
      {
        slug: "loading-platform-product-assistant",
        title: "Product Knowledge Assistant",
        type: "Technical Support",
        desc: "Clients and distributors ask questions about gangways, loading arms, and safety cages; AI answers instantly from your own product documentation and drawings.",
        fullDescription: "We train an AI assistant on your full product range — gangways, loading arms, fall protection cages, swivel joints, spill containment — so clients get accurate answers 24/7. Clients can also upload photos or drawings of their site and get product recommendations.",
        tech: ["AI Chatbot", "Document & Image Ingestion", "CRM Integration", "Email Automation"],
        metrics: [
          { label: "Support Response", value: "24/7, instant", icon: Zap },
          { label: "Product Questions", value: "Answered from your docs", icon: CheckCircle2 },
          { label: "Sales Team Load", value: "Significantly reduced", icon: Users },
        ],
        gradient: "from-orange-500 via-amber-500 to-yellow-500",
        accentColor: "orange",
        client: "Loading Platform Manufacturers",
        duration: "4–6 weeks",
        year: "2025",
      },
      {
        slug: "loading-platform-rfq-assistant",
        title: "RFQ & Proposal Assistant",
        type: "Sales Automation",
        desc: "AI takes inbound RFQ details from your website, qualifies the project, drafts a structured proposal using your specs and pricing, and sends it to your sales team — ready to review and send.",
        fullDescription: "Every inbound inquiry on your site is captured, qualified by AI, and turned into a structured RFQ summary — logged to your CRM and emailed to the right sales rep. Proposals are pre-drafted using your product catalog and historical quotes.",
        tech: ["AI Chatbot", "CRM Integration", "Email Automation", "Document Generation"],
        metrics: [
          { label: "RFQ Turnaround", value: "Hours not days", icon: Clock },
          { label: "Missed Inquiries", value: "Zero", icon: CheckCircle2 },
          { label: "Admin Time", value: "−70%", icon: TrendingUp },
        ],
        gradient: "from-amber-500 via-yellow-500 to-orange-600",
        accentColor: "amber",
        client: "Sales Teams",
        duration: "3–5 weeks",
        year: "2025",
      },
      {
        slug: "loading-platform-safety-assistant",
        title: "Safety & Compliance Assistant",
        type: "EHS Support",
        desc: "AI surfaces the right safety standard, installation procedure, or inspection record from your own EHS library — in seconds, not hours.",
        fullDescription: "Deployed on your website or internal portal, this AI assistant is trained on your safety manuals, compliance documentation, and installation procedures. When a client or engineer needs a safety reference, they get the exact clause or procedure without waiting for a response.",
        tech: ["AI Chatbot", "RAG / Vector Search", "Document Ingestion", "CRM Integration"],
        metrics: [
          { label: "Compliance Queries", value: "Answered in seconds", icon: Zap },
          { label: "Document Source", value: "Your EHS library only", icon: Shield },
          { label: "Audit Prep", value: "Always ready", icon: CheckCircle2 },
        ],
        gradient: "from-yellow-500 via-orange-500 to-red-500",
        accentColor: "yellow",
        client: "EHS & Safety Teams",
        duration: "3–5 weeks",
        year: "2025",
      },
    ],
  },

  // ── INDUSTRIAL MANUFACTURING ──────────────────────────────────────────────
  {
    id: "industrial-manufacturing",
    title: "Industrial Manufacturing",
    icon: Factory,
    color: "cyan",
    description: "AI sales, support, and knowledge assistants for industrial manufacturers — reducing response time, admin work, and manual data entry across your team.",
    projects: [
      {
        slug: "manufacturing-product-chatbot",
        title: "Product & Technical Chatbot",
        type: "Customer Support",
        desc: "Clients and distributors get instant answers to product, spec, and compatibility questions — sourced entirely from your own documentation and catalog.",
        fullDescription: "We deploy an AI chatbot on your website trained on your full product catalog, technical datasheets, compatibility guides, and FAQs. Clients get accurate answers 24/7 without waiting for a sales rep. All interactions are logged and high-intent leads are pushed to your CRM.",
        tech: ["AI Chatbot", "Document Ingestion", "CRM Integration", "Email Automation"],
        metrics: [
          { label: "Client Response", value: "Instant, 24/7", icon: Zap },
          { label: "Repetitive Queries", value: "Handled automatically", icon: CheckCircle2 },
          { label: "Leads Captured", value: "Every one, to CRM", icon: TrendingUp },
        ],
        gradient: "from-cyan-500 via-blue-500 to-indigo-500",
        accentColor: "cyan",
        client: "Industrial Manufacturers",
        duration: "3–5 weeks",
        year: "2025",
      },
      {
        slug: "manufacturing-quote-automation",
        title: "Quote & Proposal Automation",
        type: "Sales Automation",
        desc: "AI drafts technical quotes and proposals using your product data, historical RFQs, and pricing — your team reviews and sends, without starting from scratch every time.",
        fullDescription: "We build an AI system trained on your historical proposals, product specs, and pricing rules. When a new RFQ comes in — via your website, email, or chat — AI drafts a structured proposal for your team to review. Connected to your CRM so nothing falls through the cracks.",
        tech: ["AI Chatbot", "Document Ingestion", "CRM Integration", "Email Automation"],
        metrics: [
          { label: "Proposal Speed", value: "14× faster", icon: Clock },
          { label: "Engineer Time", value: "Freed up", icon: Users },
          { label: "CRM Updates", value: "Automatic", icon: CheckCircle2 },
        ],
        gradient: "from-blue-500 via-indigo-500 to-violet-500",
        accentColor: "blue",
        client: "Sales & Engineering Teams",
        duration: "4–6 weeks",
        year: "2025",
      },
      {
        slug: "manufacturing-knowledge-base",
        title: "Internal Knowledge Assistant",
        type: "Engineering Support",
        desc: "Engineers and technicians ask questions in plain language and get precise answers from your SOPs, manuals, and CMMS records — no more hunting through binders or waiting for senior staff.",
        fullDescription: "We ingest your SOPs, maintenance manuals, CMMS records, and technical drawings into a private AI knowledge base. Staff ask questions and get answers sourced directly from your own documents. Clients can also upload drawings or photos to get specific recommendations.",
        tech: ["AI Chatbot", "RAG / Vector Search", "Document & Image Ingestion", "Internal Portal"],
        metrics: [
          { label: "Answer Time", value: "Seconds", icon: Zap },
          { label: "Source", value: "100% your documents", icon: CheckCircle2 },
          { label: "Senior Staff Interruptions", value: "Drastically reduced", icon: Users },
        ],
        gradient: "from-indigo-500 via-blue-500 to-cyan-500",
        accentColor: "indigo",
        client: "Engineering & Operations Teams",
        duration: "4–8 weeks",
        year: "2025",
      },
    ],
  },

  // ── EHS & COMPLIANCE ──────────────────────────────────────────────────────
  {
    id: "ehs-compliance",
    title: "EHS & Safety Solutions",
    icon: Shield,
    color: "emerald",
    description: "AI assistants trained on your EHS documentation — giving your team instant access to safety procedures, compliance references, and incident records.",
    projects: [
      {
        slug: "ehs-document-assistant",
        title: "EHS Document Assistant",
        type: "Compliance Support",
        desc: "Staff ask plain-language safety questions and get answers sourced instantly from your own SDS library, inspection records, and EHS manuals.",
        fullDescription: "We create a private AI knowledge base over your EHS documents. Anyone on your team — from a plant floor supervisor to a compliance officer — can ask a question and receive a precise, cited answer drawn from your own approved documentation.",
        tech: ["AI Chatbot", "RAG / Vector Search", "Document Ingestion", "Internal Portal"],
        metrics: [
          { label: "Query Response", value: "Hours → Seconds", icon: Zap },
          { label: "Document Source", value: "Your EHS library only", icon: CheckCircle2 },
          { label: "Audit Readiness", value: "Continuous", icon: Clock },
        ],
        gradient: "from-emerald-500 via-green-500 to-teal-500",
        accentColor: "emerald",
        client: "EHS Managers",
        duration: "3–5 weeks",
        year: "2025",
      },
      {
        slug: "ehs-lead-capture-client-portal",
        title: "Client Safety Portal",
        type: "Customer Support",
        desc: "Clients and site engineers access safety documentation, installation guides, and compliance references via an AI assistant on your website — without calling your team.",
        fullDescription: "A client-facing AI portal trained on your product safety documentation, installation requirements, and compliance guides. Clients can upload site drawings or photos and receive relevant safety recommendations. All interactions are logged to your CRM.",
        tech: ["AI Chatbot", "Document & Image Ingestion", "CRM Integration", "Email Automation"],
        metrics: [
          { label: "Client Self-Service", value: "24/7 access", icon: Zap },
          { label: "Safety Queries", value: "Resolved without calls", icon: CheckCircle2 },
          { label: "Leads & Contacts", value: "Auto-logged to CRM", icon: TrendingUp },
        ],
        gradient: "from-teal-500 via-cyan-500 to-blue-500",
        accentColor: "teal",
        client: "Safety Equipment Suppliers",
        duration: "4–6 weeks",
        year: "2025",
      },
      {
        slug: "ehs-crm-email-automation",
        title: "Inquiry & Follow-Up Automation",
        type: "Sales & Admin Automation",
        desc: "Every safety or compliance inquiry from your website is captured, qualified, and automatically followed up — no manual inbox management required.",
        fullDescription: "We connect your website chatbot to your CRM, email, and spreadsheets. When a prospect or client asks about compliance requirements, certifications, or safety solutions, their details are captured automatically and a contextual follow-up is drafted and sent by AI within minutes.",
        tech: ["AI Chatbot", "CRM Integration", "Email Automation", "Google Sheets"],
        metrics: [
          { label: "Follow-Up Speed", value: "Minutes not days", icon: Clock },
          { label: "Manual Data Entry", value: "Eliminated", icon: CheckCircle2 },
          { label: "Leads Lost", value: "Near zero", icon: TrendingUp },
        ],
        gradient: "from-green-500 via-emerald-500 to-teal-500",
        accentColor: "green",
        client: "Sales & Compliance Teams",
        duration: "2–4 weeks",
        year: "2025",
      },
    ],
  },

  // ── ENGINEERING & TECHNICAL DOCS ──────────────────────────────────────────
  {
    id: "engineering-docs",
    title: "Engineering & Technical Documentation",
    icon: Cog,
    color: "slate",
    description: "AI search and retrieval over your drawings, P&IDs, spec sheets, and technical manuals — so your engineers spend time on engineering, not document hunting.",
    projects: [
      {
        slug: "drawing-spec-search",
        title: "Drawing & Spec Search Assistant",
        type: "Engineering Productivity",
        desc: "Engineers ask for a drawing, spec, or dimension in plain language; AI locates and surfaces the exact document — or the relevant section within it.",
        fullDescription: "We index your PDF drawings, spec sheets, and technical documents into a private AI system. Engineers ask natural-language questions and get the exact answer with the source document and page reference. Clients can also upload a photo of equipment and get the matching spec or procedure.",
        tech: ["AI Chatbot", "RAG / Vector Search", "Document & Image Ingestion", "Internal Portal"],
        metrics: [
          { label: "Search Time", value: "Minutes → Seconds", icon: Clock },
          { label: "Engineering Interruptions", value: "−80%", icon: Users },
          { label: "Source", value: "Correct revision, always", icon: CheckCircle2 },
        ],
        gradient: "from-slate-500 via-gray-500 to-zinc-500",
        accentColor: "slate",
        client: "Engineering Departments",
        duration: "4–6 weeks",
        year: "2025",
      },
      {
        slug: "technical-quote-assistant",
        title: "Technical Quote Assistant",
        type: "Sales Engineering",
        desc: "Sales engineers describe the customer requirement; AI pulls the right specs from your catalog, writes the proposal section, and estimates delivery — in minutes.",
        fullDescription: "We combine your product data, engineering specs, and past proposals into an AI assistant that drafts accurate technical quotes for your team to review. Connected to your CRM so every quote and client interaction is logged automatically.",
        tech: ["AI Chatbot", "Document Ingestion", "CRM Integration", "Email Automation"],
        metrics: [
          { label: "Quote Turnaround", value: "Days → Hours", icon: Zap },
          { label: "Spec Accuracy", value: "Sourced from your data", icon: CheckCircle2 },
          { label: "CRM Logging", value: "Automatic", icon: TrendingUp },
        ],
        gradient: "from-gray-500 via-slate-500 to-zinc-600",
        accentColor: "gray",
        client: "Sales Engineering Teams",
        duration: "4–6 weeks",
        year: "2025",
      },
      {
        slug: "legacy-doc-search",
        title: "Legacy Document Search",
        type: "Knowledge Management",
        desc: "Turn decades of scanned documents, legacy CMMS records, and old PDF manuals into a searchable AI knowledge base your team can query instantly.",
        fullDescription: "We build ingestion pipelines that handle messy, unstructured, and outdated documents — scanned PDFs, legacy records, old spec sheets — and make them queryable through a modern AI interface. Your team asks questions; AI finds the answer from across your entire document history.",
        tech: ["AI Chatbot", "OCR", "RAG / Vector Search", "Document Ingestion"],
        metrics: [
          { label: "Legacy Data Access", value: "Instantly searchable", icon: Clock },
          { label: "Knowledge Recovered", value: "All formats supported", icon: CheckCircle2 },
          { label: "Engineering Productivity", value: "Measurably improved", icon: TrendingUp },
        ],
        gradient: "from-zinc-500 via-stone-500 to-neutral-600",
        accentColor: "zinc",
        client: "Plant & Engineering Managers",
        duration: "5–8 weeks",
        year: "2025",
      },
    ],
  },

  // ── BULK HANDLING & PROCESS EQUIPMENT ─────────────────────────────────────
  {
    id: "bulk-handling",
    title: "Bulk Handling & Process Equipment",
    icon: Package,
    color: "amber",
    description: "AI sales and support assistants for bulk handling, conveyor, and process equipment manufacturers — trained on your specs, manuals, and drawings.",
    projects: [
      {
        slug: "bulk-handling-product-assistant",
        title: "Product Knowledge Assistant",
        type: "Customer Support",
        desc: "Clients ask about equipment specs, material compatibility, and configurations; AI answers instantly from your product catalog and technical documentation.",
        fullDescription: "We train an AI assistant on your full product range — conveyors, silos, hoppers, feeders, mixers, and process equipment — so clients and distributors get accurate answers 24/7 directly on your website. All inquiries are logged to your CRM.",
        tech: ["AI Chatbot", "Document Ingestion", "CRM Integration", "Email Automation"],
        metrics: [
          { label: "Client Response", value: "24/7, instant", icon: Zap },
          { label: "Spec Questions", value: "Answered from your docs", icon: CheckCircle2 },
          { label: "Leads", value: "Captured to CRM", icon: TrendingUp },
        ],
        gradient: "from-amber-500 via-yellow-500 to-orange-500",
        accentColor: "amber",
        client: "Bulk Equipment Manufacturers",
        duration: "4–6 weeks",
        year: "2025",
      },
      {
        slug: "bulk-handling-rfq-bot",
        title: "RFQ Capture & Routing Bot",
        type: "Lead Generation",
        desc: "AI qualifies inbound project inquiries on your website, collects the right details, and routes structured RFQs to the correct sales engineer — automatically.",
        fullDescription: "We deploy an AI assistant that guides website visitors through a qualification conversation — material type, volume, application, budget — then sends a structured RFQ summary to your CRM and the right sales rep. No forms. No manual follow-up.",
        tech: ["AI Chatbot", "CRM Integration", "Email Automation", "Google Sheets"],
        metrics: [
          { label: "RFQ Qualification", value: "Automatic", icon: CheckCircle2 },
          { label: "Response Time", value: "Instant", icon: Zap },
          { label: "Manual Data Entry", value: "Eliminated", icon: Clock },
        ],
        gradient: "from-yellow-500 via-amber-500 to-orange-600",
        accentColor: "yellow",
        client: "Sales Teams",
        duration: "2–4 weeks",
        year: "2025",
      },
      {
        slug: "bulk-handling-image-assistant",
        title: "Image & Drawing Assistant",
        type: "Technical Support",
        desc: "Clients and engineers upload photos of existing equipment or site drawings; AI identifies the relevant product, spec, or compatibility recommendation from your documentation.",
        fullDescription: "We deploy an AI assistant with image understanding capability on your website. Clients upload a photo of their existing equipment or a site drawing; AI cross-references it against your product catalog and technical docs to return the right specification, compatible product, or installation note.",
        tech: ["AI Chatbot", "Image & Document Ingestion", "CRM Integration", "Email Automation"],
        metrics: [
          { label: "Image Queries", value: "Answered instantly", icon: Zap },
          { label: "Product Matching", value: "From your catalog", icon: CheckCircle2 },
          { label: "Technical Calls Avoided", value: "Significant reduction", icon: Users },
        ],
        gradient: "from-orange-500 via-amber-500 to-yellow-500",
        accentColor: "orange",
        client: "Sales & Engineering Teams",
        duration: "5–7 weeks",
        year: "2025",
      },
    ],
  },

];