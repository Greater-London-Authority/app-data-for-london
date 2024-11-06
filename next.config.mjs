const dev = process.env.NODE_ENV === 'development';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: dev ? '' : '/data-for-london',
  output: 'export',
  images: {
    unoptimized: true,
  },
  distDir: 'build',
};

export default nextConfig;
