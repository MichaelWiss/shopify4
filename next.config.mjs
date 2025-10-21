/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "1mb"
    },
    instrumentationHook: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com"
      },
      {
        protocol: "https",
        hostname: "*.cdn.shopify.com"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  },
  redirects: async () => [
    {
      source: "/admin",
      destination: "/api/auth/signin",
      permanent: false
    }
  ]
};

export default nextConfig;
