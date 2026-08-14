import type { NextConfig } from "next";

const PROJEKTOVA_DOKUMENTACE_HOST = {
  type: "host",
  value: "(www\\.)?projektova-dokumentace\\.com",
} as const;

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/stavba",
        has: [PROJEKTOVA_DOKUMENTACE_HOST],
        destination: "https://www.qikstavba.cz/realizace",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [PROJEKTOVA_DOKUMENTACE_HOST],
        destination: "https://www.qikstavba.cz/dokumentace",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
