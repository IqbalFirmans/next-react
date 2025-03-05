/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
};
