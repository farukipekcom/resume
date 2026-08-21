import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "farukipek.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
