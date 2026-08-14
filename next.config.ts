import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/stavba",
        destination: "https://www.qikstavba.cz/realizace",
        permanent: true,
      },
      {
        source: "/:path*",
        destination: "https://www.qikstavba.cz/dokumentace",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
