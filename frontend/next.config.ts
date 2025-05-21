import type { NextConfig } from "next";
import "./env-config";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "127.0.0.1:8000";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(`${BACKEND_URL}/**`),
      new URL(`${BACKEND_URL.replace("https", "http")}/**`),
    ],
  },
};

export default nextConfig;
