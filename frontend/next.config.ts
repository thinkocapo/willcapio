import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
      },
    ],
    // Allow images from the API
    domains: ['localhost'],
  },
  // Enable static exports for better Vercel performance
  output: 'standalone',
};

export default nextConfig;
