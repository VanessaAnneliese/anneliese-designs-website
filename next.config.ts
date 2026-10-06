import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/client-forms/kathy-terry",
        destination: "/client-forms/kathy-terry.html",
      },
    ];
  },
};

export default nextConfig;
