/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: 'http',
        hostname:'images.igdb.com',
        port:'',
        pathname: '/igdb/**',
      }
    ]
  }
}

module.exports = nextConfig
