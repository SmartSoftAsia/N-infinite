/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  images: {
    formats: ["image/webp"],
  },
  loader: "custom",
};

module.exports = nextConfig;
