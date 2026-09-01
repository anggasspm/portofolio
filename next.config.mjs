/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/portofolio",
  assetPrefix: "/portofolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;