/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ['127.0.0.1', 'localhost', '192.168.102.108', '192.168.102.112', '192.168.1.106', '192.168.1.106', '192.168.0.176', '192.168.0.176/'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
        port: "",
        pathname: "/image/**",
      },
    ],
  },
};

export default nextConfig;
