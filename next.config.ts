import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [{
      protocol: 'https',
      hostname: '*',
    }]
  },
  experimental: {
    ppr: 'incremental',
  },
  devIndicators: {
    appIsrStatus: false,
    buildActivity: true,
    position: 'bottom-right',
  },
};

export default nextConfig;
