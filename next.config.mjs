/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kingsbarber.com.sg",
      },
    ],
  },
};

export default nextConfig;
