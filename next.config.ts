import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "irevault.com",
      },
      {
        protocol: "https",
        hostname: "taskflow-sufv.vercel.app",
      },
      {
        protocol: "https",
        hostname: "dros-care.vercel.app",
      },
      {
        protocol: "https",
        hostname: "ecommerce-roan-ten-21.vercel.app",
      },
    ],
  },
};

export default nextConfig;
