// ============================================================================
// DYNAMIC SITEMAP GENERATION
// Automatically generates sitemap.xml for SEO
// ============================================================================

import { MetadataRoute } from 'next';
import { industries } from '@/lib/case-studies-detail';

// ============================================================================
// SITEMAP CONFIGURATION
// ============================================================================

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://vidiagency.com';

// ============================================================================
// SITEMAP GENERATOR
// ============================================================================

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/get-started`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/case-studies`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Dynamic case study pages
  const caseStudyPages: MetadataRoute.Sitemap = industries.flatMap((industry) =>
    industry.projects.map((project) => ({
      url: `${BASE_URL}/case-studies/${project.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  // Blog post pages (you can expand this with actual blog data)
  const blogPosts = [
    'ai-transforming-web-development',
    'nextjs-vs-react-2024',
    'web-design-trends-2024',
    'ecommerce-conversion-optimization',
    'mobile-first-design-guide',
    'seo-best-practices-2024',
    'web-accessibility-guide',
    'performance-optimization-tips',
    'choosing-right-tech-stack',
    'ux-design-principles',
    'progressive-web-apps-guide',
    'headless-cms-benefits',
    'api-design-best-practices',
    'web-security-essentials',
    'jamstack-architecture',
    'design-systems-guide',
    'testing-strategies-web-apps',
    'ci-cd-best-practices',
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...staticPages, ...caseStudyPages, ...blogPages];
}
