/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
    eslint: {
    ignoreDuringBuilds: true, // Don’t ignore ESLint errors during build
  },
}

module.exports = nextConfig
