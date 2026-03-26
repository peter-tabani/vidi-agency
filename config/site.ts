// ============================================================================
// SITE CONFIGURATION
// Centralized configuration for the entire website
// ============================================================================

// ============================================================================
// COMPANY INFORMATION
// ============================================================================

export const company = {
  name: 'Vidi Agency',
  legalName: 'Vidi Agency Ltd',
  tagline: 'Instant answers for heavy equipment and manufacturing operations',
  description:
    'We build private AI assistants trained on your engineering data, safety manuals, and maintenance records. Your team gets the right answer — every time — without hunting through binders or waiting on an engineer.',
  founded: 2023,
  email: 'peter@vidiagencyltd.com',
  phone: '',
  address: {
    street: '',
    city: 'Nairobi',
    state: '',
    zip: '',
    country: 'Kenya',
    full: 'Nairobi, Kenya',
  },
};

// ============================================================================
// SOCIAL LINKS
// ============================================================================

export const social = {
  linkedin: 'https://linkedin.com/company/vidiagency',
};

// ============================================================================
// NAVIGATION
// ============================================================================

export const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/about' },
    { name: 'Our Work', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
  ],
  footer: {
    services: [
      { name: 'Engineering Knowledge Assistant', href: '/#services' },
      { name: 'AI Lead Capture & CRM Sync', href: '/#services' },
      { name: 'AI Customer Support', href: '/#services' },
      { name: 'EHS Compliance Assistant', href: '/#services' },
      { name: 'Document & Image Analysis', href: '/#services' },
      { name: 'AI Strategy Consulting', href: '/#services' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Work', href: '/case-studies' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  },
};

// ============================================================================
// SERVICES
// ============================================================================

export const services = [
  {
    id: 'engineering-knowledge',
    title: 'Engineering Knowledge Assistant',
    description:
      'AI trained on your manuals, drawings, and SOPs. Engineers get instant answers without interrupting senior staff or searching through binders.',
    icon: 'Database',
    features: [
      'Manual & Document Search',
      'Drawing & Spec Retrieval',
      'Image & Photo Analysis',
      'CMMS Integration',
    ],
  },
  {
    id: 'ai-lead-capture',
    title: 'AI Lead Capture & CRM Sync',
    description:
      'An AI assistant on your website that captures visitor details, qualifies them, and sends leads straight to your CRM or email — automatically.',
    icon: 'TrendingUp',
    features: [
      'Automated Lead Capture',
      'Smart Qualification',
      'CRM & Email Sync',
      'Instant Follow-up Emails',
    ],
  },
  {
    id: 'customer-support',
    title: 'AI Customer Support Assistant',
    description:
      '24/7 AI trained on your FAQs, product docs, and support materials. Answers common questions and escalates complex ones to your team.',
    icon: 'MessageSquare',
    features: [
      'FAQ & Doc Automation',
      'Multi-Channel Deployment',
      'Human Handoff',
      'Conversation Logging',
    ],
  },
  {
    id: 'ehs-compliance',
    title: 'EHS Compliance Assistant',
    description:
      'Instant retrieval of safety procedures, inspection records, and compliance documents — the right answer when your team needs it most.',
    icon: 'ShieldCheck',
    features: [
      'Safety Document Ingestion',
      'Incident Logging',
      'Audit-Ready Reports',
      'Regulatory Alerts',
    ],
  },
  {
    id: 'document-analysis',
    title: 'AI Document & Image Analysis',
    description:
      'Upload a manual PDF or a photo of equipment — AI reads it, identifies parts, extracts specs, and answers questions from your own documents.',
    icon: 'FileText',
    features: [
      'Manual Upload & Analysis',
      'Part Identification',
      'Technical Data Extraction',
      'System Diagram Reading',
    ],
  },
  {
    id: 'ai-consulting',
    title: 'AI Strategy Consulting',
    description:
      'We map your current operations and show you exactly where AI saves the most time and money — before you spend anything building it.',
    icon: 'Target',
    features: [
      'AI Opportunity Audit',
      'Workflow Review',
      'Automation Roadmap',
      'Integration Planning',
    ],
  },
];

// ============================================================================
// INDUSTRIES
// ============================================================================

export const industries = [
  'Fall Protection & Safety Equipment',
  'Loading Platforms & Dock Systems',
  'Conveyor & Material Handling',
  'EHS & Compliance Teams',
  'Engineering & Technical Documentation',
  'Heavy Equipment Manufacturing',
  'Spare Parts Management',
  'Field Operations Support',
];

// ============================================================================
// FAQ
// ============================================================================

export const faq = [
  {
    question: 'How long does it take to set up?',
    answer:
      'Most implementations are live within 2–6 weeks depending on the scope and the number of documents we need to ingest. We keep you updated throughout.',
  },
  {
    question: 'Will this work with our existing systems?',
    answer:
      'Yes. We integrate with your existing CMMS, ERP, CRM, and email tools. Your team does not need to learn a new system — the AI sits on top of what you already use.',
  },
  {
    question: 'Is our data secure?',
    answer:
      'Absolutely. Your data stays in your infrastructure and is never shared with third parties. Fully closed-loop and private.',
  },
  {
    question: 'Do you offer a free trial or demo?',
    answer:
      'Yes — we offer a free 30-minute live demo built around your own engineering documents and safety manuals. No slides, just the system working on your actual data.',
  },
  {
    question: 'Do you build mobile apps or websites?',
    answer:
      'We focus exclusively on AI assistants and automation for industrial operations. We are not a general web or app development agency.',
  },
  {
    question: 'What industries do you serve?',
    answer:
      'Fall protection, loading platforms, conveyor systems, EHS, heavy equipment manufacturing, spare parts management, and field operations.',
  },
];

// ============================================================================
// EXPORT ALL
// ============================================================================

export default {
  company,
  social,
  navigation,
  services,
  industries,
  faq,
};