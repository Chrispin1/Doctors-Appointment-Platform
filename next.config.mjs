/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {
    // Limits webpack in-memory caching
    webpackMemoryOptimizations: true,
    // Uses separate worker threads for webpack, lower RAM usage
    webpackBuildWorker: true,
  },
  // Disable source maps to save memory during build
  productionBrowserSourceMaps: false,
};

export default nextConfig;
