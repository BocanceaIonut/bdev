import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    // Add domains if using external images
    formats: ["image/webp", "image/avif"], // Add supported image formats
    domains: [],
  },
};

export default nextConfig;
