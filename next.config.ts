import type { NextConfig } from "next";

const nextConfig: any = {
  // We removed "output: 'export'" so dynamic pages like /pay work again.
  
  images: {
    // We can allow optimization again (optional, but better for performance)
    unoptimized: true, 
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;