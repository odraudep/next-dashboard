/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    // domains: ['github.com', 'petz.com.br'],

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'petz.com.br',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
