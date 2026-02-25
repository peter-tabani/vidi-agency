// ============================================================================
// SITE CONFIGURATION
// Centralized configuration for the entire website
// ============================================================================

// ============================================================================
// COMPANY INFORMATION
// ============================================================================

export const company = {
  name: 'Vidi Agency',
  legalName: 'Vidi Agency LLC',
  tagline: 'AI Automation for Business',
  description: 'We build AI systems that capture leads, automate customer engagement, and eliminate repetitive work. Custom AI automation for B2B and e-commerce businesses.',
  founded: 2023,
  email: 'hello@vidiagency.com',
  phone: '+1 (555) 123-4567',
  address: {
    street: '123 Innovation Drive',
    city: 'San Francisco',
    state: 'CA',
    zip: '94105',
    country: 'USA',
    full: '123 Innovation Drive, San Francisco, CA 94105, USA',
  },
};

// ============================================================================
// SOCIAL LINKS
// ============================================================================

export const social = {
  twitter: 'https://twitter.com/vidiagency',
  linkedin: 'https://linkedin.com/company/vidiagency',
  github: 'https://github.com/vidiagency',
  instagram: 'https://instagram.com/vidiagency',
  youtube: 'https://youtube.com/@vidiagency',
  dribbble: 'https://dribbble.com/vidiagency',
};

// ============================================================================
// NAVIGATION
// ============================================================================

export const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/get-started' },
  ],
  footer: {
    services: [
      { name: 'AI Lead Capture', href: '/services/ai-lead-capture' },
      { name: 'AI Customer Engagement', href: '/services/ai-engagement' },
      { name: 'Workflow Automation', href: '/services/workflow-automation' },
      { name: 'System Integration', href: '/services/system-integration' },
      { name: 'AI-Powered Websites', href: '/services/web-development' },
      { name: 'Support & Optimization', href: '/services/maintenance' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  },
};

// ============================================================================
// SERVICES
// ============================================================================

export const services = [
  {
    id: 'ai-lead-capture',
    title: 'AI Lead Capture & Qualification',
    description: 'AI agents that engage every visitor, qualify leads in real time, and route them to your sales team 24/7.',
    icon: 'Bot',
    features: [
      'Real-Time Lead Qualification',
      'Multi-Channel Capture',
      'CRM Integration',
      'Automated Lead Routing',
    ],
  },
  {
    id: 'ai-engagement',
    title: 'AI Customer Engagement & Support',
    description: 'Intelligent chatbots and automated sequences that handle customer questions, follow-ups, and support around the clock.',
    icon: 'MessageSquare',
    features: [
      'AI Support Agents',
      'Automated Follow-Ups',
      'Booking & Scheduling',
      'Unified Inbox',
    ],
  },
  {
    id: 'workflow-automation',
    title: 'AI Workflow Automation',
    description: 'Eliminate repetitive tasks by connecting your existing tools into seamless automated workflows.',
    icon: 'Workflow',
    features: [
      'Process Automation',
      'System Integration',
      'Data Sync & Routing',
      'Custom AI Tools',
    ],
  },
  {
    id: 'system-integration',
    title: 'System Integration',
    description: 'Connect your CRM, email, payments, and other tools into one seamless ecosystem. No rebuild required.',
    icon: 'Database',
    features: [
      'CRM Integration',
      'Payment Systems',
      'Email & SMS Platforms',
      'Custom API Connections',
    ],
  },
  {
    id: 'web-development',
    title: 'AI-Powered Websites & Apps',
    description: 'High-performance websites and mobile apps built to support your AI systems and convert more customers.',
    icon: 'Globe',
    features: [
      'Custom Web Development',
      'E-Commerce Stores',
      'Mobile Apps (iOS & Android)',
      'SEO & Performance',
    ],
  },
  {
    id: 'maintenance',
    title: 'Support & Optimization',
    description: 'Optional ongoing support to keep your AI systems optimized, updated, and performing at their best.',
    icon: 'Wrench',
    features: [
      'AI Performance Tuning',
      'System Monitoring',
      'Security Updates',
      'Feature Enhancements',
    ],
  },
];

// ============================================================================
// PRICING TIERS
// ============================================================================

export const pricing = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'For businesses ready to automate lead capture and customer engagement.',
    price: 2500,
    priceLabel: 'Starting at',
    features: [
      'AI Chatbot (Web + 1 Channel)',
      'Lead Capture & Qualification',
      'Basic Workflow Automation',
      'CRM Integration',
      '30-Day Post-Launch Support',
      'You Own Everything',
    ],
    cta: 'Book a Demo',
    popular: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    description: 'Full AI automation across channels with advanced workflows and reporting.',
    price: null,
    priceLabel: 'Custom',
    features: [
      'Multi-Channel AI (Web, WA, IG, SMS)',
      'Automated Follow-Up Sequences',
      'Smart Dashboard & Analytics',
      'Deep System Integrations',
      'Priority Support & Optimization',
      'Dedicated Account Manager',
    ],
    cta: 'Book a Demo',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'End-to-end AI infrastructure for complex operations and high volume.',
    price: null,
    priceLabel: 'Custom',
    features: [
      'Full AI Automation Suite',
      'Custom AI Agents & Tools',
      'Advanced Analytics & Reporting',
      'Unlimited Integrations',
      'Dedicated Partnership',
      'Custom SLA',
    ],
    cta: 'Contact Us',
    popular: false,
  },
];

// ============================================================================
// TESTIMONIALS
// ============================================================================

export const testimonials = [
  {
    id: 1,
    quote: "Vidi's AI system captures and qualifies leads around the clock. Our sales team only talks to people who are ready to buy.",
    author: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    image: '/testimonials/sarah.jpg',
    rating: 5,
  },
  {
    id: 2,
    quote: "The AI chatbot handles 80% of our customer inquiries automatically. It paid for itself in the first month.",
    author: 'Michael Chen',
    role: 'Operations Director',
    company: 'RetailMax',
    image: '/testimonials/michael.jpg',
    rating: 5,
  },
  {
    id: 3,
    quote: "They integrated AI into our existing systems without rebuilding anything. Fast deployment, real results.",
    author: 'Emily Rodriguez',
    role: 'Marketing Manager',
    company: 'GrowthLabs',
    image: '/testimonials/emily.jpg',
    rating: 5,
  },
];

// ============================================================================
// STATISTICS
// ============================================================================

export const stats = [
  { label: 'Projects Completed', value: '150+' },
  { label: 'Happy Clients', value: '100+' },
  { label: 'Years Experience', value: '5+' },
  { label: 'Team Members', value: '15+' },
];

// ============================================================================
// FAQ
// ============================================================================

export const faq = [
  {
    question: 'How long does it take to deploy an AI system?',
    answer: 'A focused AI lead capture or chatbot system can be live in 7-14 days. A full multi-channel automation suite typically takes 4-8 weeks. We work in short sprints so you see progress constantly.',
  },
  {
    question: 'What is your process?',
    answer: 'We follow a simple four-step process: Discover (understand your business) → Build (create your AI system) → Integrate (connect to your existing tools) → Improve (optimize for results).',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Every project includes a 30-day warranty period. After that, we offer optional support packages to keep your AI system optimized and performing at its best. No forced recurring fees.',
  },
  {
    question: 'Can you integrate AI into my existing systems?',
    answer: 'Absolutely. We specialize in adding AI to what you already have — WordPress, Shopify, custom apps, CRMs, and more. No rebuild required.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We use OpenAI, Python, Next.js, React, and modern cloud infrastructure. We choose the best tools for each project and integrate with your existing tech stack.',
  },
  {
    question: 'How does pricing work?',
    answer: 'Projects typically start at $2,500 for a focused AI automation build. We provide a clear proposal with fixed pricing before any work begins. No hidden fees.',
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
  pricing,
  testimonials,
  stats,
  faq,
};
