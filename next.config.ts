import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  /* config options here */
  images: {
    domains: ['storage.nextskill.academy'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
