/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@english-os/constants", "@english-os/types", "@english-os/validators", "@english-os/db"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "*.supabase.co" },
    ],
  },
  serverExternalPackages: ["@prisma/client"],
};

export default nextConfig;
