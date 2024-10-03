const dev = process.env.NODE_ENV === 'development';

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: dev ? '' : '/data-for-london',
    output: "export",
    distDir: "build"
};

export default nextConfig;
