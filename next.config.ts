import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/client-forms/kathy-terry",
        destination: "/client-forms/kathy-terry.html",
      },
      {
        source: "/client-forms/specialty-cutting-tools",
        destination: "/client-forms/specialty-cutting-tools.html",
      },
    ];
  },
};

export default nextConfig;
