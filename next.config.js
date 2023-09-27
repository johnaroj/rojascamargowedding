/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["appwrite.dvlppro.com"],
  },
};

module.exports = nextConfig;
