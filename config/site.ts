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
  tagline: 'Premium Web Development & AI Automation',
  description: 'Full-service website development and AI automation systems. We build stunning websites, powerful web applications, and intelligent automation solutions for businesses worldwide.',
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
      { name: 'Web Development', href: '/services/web-development' },
      { name: 'Web Applications', href: '/services/web-applications' },
      { name: 'E-Commerce', href: '/services/ecommerce' },
      { name: 'AI Automation', href: '/services/ai-automation' },
      { name: 'UI/UX Design', href: '/services/design' },
      { name: 'Maintenance', href: '/services/maintenance' },
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
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom websites built with modern technologies for optimal performance and user experience.',
    icon: 'Globe',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Fast Loading',
      'CMS Integration',
    ],
  },
  {
    id: 'web-applications',
    title: 'Web Applications',
    description: 'Powerful web apps with complex functionality, real-time features, and seamless user experiences.',
    icon: 'Layers',
    features: [
      'Custom Dashboards',
      'Real-time Features',
      'API Integration',
      'User Authentication',
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    description: 'Online stores that convert visitors into customers with smooth checkout experiences.',
    icon: 'ShoppingCart',
    features: [
      'Product Management',
      'Payment Integration',
      'Inventory Tracking',
      'Order Management',
    ],
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    description: 'Intelligent chatbots and automation systems that work 24/7 to serve your customers.',
    icon: 'Bot',
    features: [
      'AI Chatbots',
      'Lead Qualification',
      'Customer Support',
      'Process Automation',
    ],
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that delight users and drive engagement.',
    icon: 'Palette',
    features: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Design Systems',
    ],
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    description: 'Ongoing support to keep your digital products running smoothly and securely.',
    icon: 'Wrench',
    features: [
      'Bug Fixes',
      'Security Updates',
      'Performance Monitoring',
      'Feature Updates',
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
    description: 'Perfect for small businesses getting started online.',
    price: 2500,
    priceLabel: 'Starting at',
    features: [
      '5-page responsive website',
      'Mobile-first design',
      'Basic SEO setup',
      'Contact form',
      '1 month support',
      'CMS integration',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'For growing businesses that need more functionality.',
    price: 7500,
    priceLabel: 'Starting at',
    features: [
      'Up to 15 pages',
      'Custom design',
      'Advanced SEO',
      'Blog integration',
      '3 months support',
      'Analytics setup',
      'Performance optimization',
      'Social media integration',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Custom solutions for complex business needs.',
    price: null,
    priceLabel: 'Custom',
    features: [
      'Unlimited pages',
      'Custom web application',
      'AI chatbot integration',
      'E-commerce functionality',
      '12 months support',
      'Priority support',
      'Custom integrations',
      'Dedicated project manager',
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
    quote: "Vidi Agency transformed our online presence. Our new website has increased leads by 300% in just 3 months.",
    author: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    image: '/testimonials/sarah.jpg',
    rating: 5,
  },
  {
    id: 2,
    quote: "The AI chatbot they built handles 80% of our customer inquiries automatically. Game changer for our support team.",
    author: 'Michael Chen',
    role: 'Operations Director',
    company: 'RetailMax',
    image: '/testimonials/michael.jpg',
    rating: 5,
  },
  {
    id: 3,
    quote: "Professional, responsive, and delivered exactly what we needed. Highly recommend for any web project.",
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
    question: 'How long does it take to build a website?',
    answer: 'Typical projects take 4-8 weeks depending on complexity. Simple websites can be completed in 2-3 weeks, while complex web applications may take 3-6 months.',
  },
  {
    question: 'What is your development process?',
    answer: 'We follow an agile methodology with regular check-ins. The process includes: Discovery → Design → Development → Testing → Launch → Support.',
  },
  {
    question: 'Do you provide ongoing maintenance?',
    answer: 'Yes! We offer maintenance packages that include security updates, bug fixes, content updates, and performance monitoring.',
  },
  {
    question: 'Can you help with hosting and domain?',
    answer: 'Absolutely. We can set up hosting on platforms like Vercel, AWS, or your preferred provider, and help with domain registration and DNS configuration.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We specialize in modern technologies including React, Next.js, TypeScript, Node.js, and various databases. We choose the best stack for each project.',
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes, we typically structure payments as 50% upfront and 50% upon completion. For larger projects, we can arrange milestone-based payments.',
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
