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
    ],
  },
};

export default nextConfig;
