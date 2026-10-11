import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/knowledge-hub/the-monthly-lock',
        destination: '/knowledge-hub/the-weekly-lock',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
