/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "houseplants.xyz",
        port: "",
      },
    ],
  },
}

module.exports = nextConfig
