import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   allowedDevOrigins: ["192.168.1.122"],

    serverExternalPackages: [
    "firebase-admin",
    "jwks-rsa",
    "jose",
  ],
};

export default nextConfig;
