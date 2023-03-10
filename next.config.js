/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn-images-1.medium.com",
      "yt3.ggpht.com",
      "play-lh.googleusercontent.com",
      "media.fidoalliance.org",
      "authy.com",
      "images.unsplash.com",
      "c.tenor.com",
      "res.cloudinary.com",
      "res-console.cloudinary.com",
      "drive.google.com",
    ],
  },
}

module.exports = nextConfig
