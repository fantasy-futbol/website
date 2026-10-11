import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

const redirects = async () => {
  return [
    {
      source: '/knowledge-hub/the-monthly-lock',
      destination: '/knowledge-hub/the-weekly-lock',
      permanent: true,
    },
  ];
};

export { redirects };
