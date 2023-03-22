const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'poc',
        filename: 'static/chunks/remoteEntry.js',
        extraOptions: {
          automaticAsyncBoundary: true,
        },
        exposes: {},
        shared: {},
      })
    );

    return config;
  },
}

module.exports = nextConfig
