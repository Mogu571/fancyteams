import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If deploying to https://<username>.github.io/<repo-name>/
  // uncomment and set your repo name:
  basePath: "/fancyteams",
};

export default nextConfig;
