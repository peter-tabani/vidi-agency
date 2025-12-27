// ============================================================================
// ROOT LAYOUT
// Global layout with SEO metadata and structured data
// ============================================================================

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { 
  defaultMetadata, 
  siteConfig, 
  generateOrganizationSchema, 
  generateWebsiteSchema 
} from "@/lib/seo";

// ============================================================================
// FONT CONFIGURATION
// ============================================================================

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

// ============================================================================
// METADATA CONFIGURATION
// ============================================================================

export const metadata: Metadata = {
  ...defaultMetadata,
  title: {
    default: `${siteConfig.name} | Premium Web Development & AI Automation`,
    template: `%s | ${siteConfig.name}`,
  },
  description: "Full-service website development and AI automation systems. We build stunning websites, powerful web applications, and intelligent automation solutions for businesses worldwide.",
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
};

// ============================================================================
// VIEWPORT CONFIGURATION
// ============================================================================

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#000000' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

// ============================================================================
// ROOT LAYOUT COMPONENT
// ============================================================================

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate structured data
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for common third-party services */}
        <link rel="dns-prefetch" href="https://api.groq.com" />
        <link rel="dns-prefetch" href="https://supabase.co" />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Skip to main content
        </a>
        
        {/* Main content wrapper */}
        <div id="main-content">
          {children}
        </div>
        
        {/* Noscript fallback */}
        <noscript>
          <div className="fixed inset-0 bg-black flex items-center justify-center p-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white mb-4">JavaScript Required</h1>
              <p className="text-gray-400">
                Please enable JavaScript to use this website. Our interactive features 
                and AI assistant require JavaScript to function properly.
              </p>
            </div>
          </div>
        </noscript>
      </body>
    </html>
  );
}
