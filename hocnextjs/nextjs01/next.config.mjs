/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdnphoto.dantri.com.vn",
      },
    ],
  },
  env: {
    APP_NAME: process.env.APP_NAME,
  },
};

export default nextConfig;
