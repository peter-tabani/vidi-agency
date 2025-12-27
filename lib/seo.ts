// ============================================================================
// SEO CONFIGURATION & UTILITIES
// Centralized SEO metadata for all pages
// ============================================================================

import { Metadata } from 'next';

// ============================================================================
// SITE CONFIGURATION
// ============================================================================

export const siteConfig = {
  name: 'Vidi Agency',
  description: 'Premium web development agency specializing in custom websites, web applications, and digital transformation for businesses worldwide.',
  url: 'https://vidiagency.com',
  ogImage: '/og-image.jpg',
  twitterHandle: '@vidiagency',
  email: 'hello@vidiagency.com',
  phone: '+1 (555) 123-4567',
  address: {
    street: '123 Innovation Drive',
    city: 'San Francisco',
    state: 'CA',
    zip: '94105',
    country: 'USA',
  },
  social: {
    twitter: 'https://twitter.com/vidiagency',
    linkedin: 'https://linkedin.com/company/vidiagency',
    github: 'https://github.com/vidiagency',
    instagram: 'https://instagram.com/vidiagency',
  },
  keywords: [
    'web development',
    'web design',
    'custom websites',
    'web applications',
    'digital agency',
    'React development',
    'Next.js agency',
    'UI/UX design',
    'e-commerce development',
    'SaaS development',
    'mobile app development',
    'digital transformation',
  ],
};

// ============================================================================
// DEFAULT METADATA
// ============================================================================

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Premium Web Development Agency`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Premium Web Development Agency`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Premium Web Development`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Premium Web Development Agency`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

// ============================================================================
// PAGE-SPECIFIC METADATA GENERATORS
// ============================================================================

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = '',
  additionalKeywords: string[] = []
): Metadata {
  const url = `${siteConfig.url}${path}`;
  const keywords = [...siteConfig.keywords, ...additionalKeywords];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [siteConfig.ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

// ============================================================================
// STRUCTURED DATA GENERATORS
// ============================================================================

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country,
    },
    sameAs: Object.values(siteConfig.social),
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateServiceSchema(
  serviceName: string,
  serviceDescription: string,
  price?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Worldwide',
    },
    ...(price && {
      offers: {
        '@type': 'Offer',
        price,
        priceCurrency: 'USD',
      },
    }),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleSchema(
  title: string,
  description: string,
  publishDate: string,
  modifiedDate: string,
  author: string,
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: publishDate,
    dateModified: modifiedDate,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

// ============================================================================
// EXPORT ALL
// ============================================================================

export default {
  siteConfig,
  defaultMetadata,
  generatePageMetadata,
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateArticleSchema,
};
