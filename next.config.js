/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
    images: {
        domains: ['medusa-public-images.s3.eu-west-1.amazonaws.com'],
      },
}

module.exports = nextConfig
