import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
  },
};

export default nextConfig;
