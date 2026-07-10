/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cache.marriott.com', 'images.unsplash.com', 'picsum.photos', 'fastly.picsum.photos', 'images.pexels.com'],
  },
}

module.exports = nextConfig
