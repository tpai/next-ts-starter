const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const path = require('path');
const { PROD } = require('./server/constants');
const { CSP_STRING } = require('./server/middleware');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nodeEnv = process.env.NODE_ENV;
const getHash = () => process.env.COMMIT_VERSION || Date.now();

const nextConfig = {
  productionBrowserSourceMaps: true,

  env: {
    BUILD_ID: getHash(),
  },

  webpack: (config, { isServer }) => {
    const newConfig = { ...config };

    newConfig.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 1000,
            fallback: 'file-loader',
            publicPath: '/_next/static/fonts/',
            outputPath: `${isServer ? '../' : ''}static/fonts/`,
            name: '[name]-[hash].[ext]',
          },
        },
      ],
    });

    newConfig.resolve.alias.react = path.resolve(__dirname, 'node_modules/react');
    newConfig.resolve.alias['prop-types'] = path.resolve(__dirname, 'node_modules/prop-types');
    newConfig.resolve.alias['query-string'] = path.resolve(__dirname, 'node_modules/query-string');
    /* to consistent with web-ui-kit */
    newConfig.resolve.alias.classnames = path.resolve(__dirname, 'node_modules', 'classnames');
    newConfig.resolve.alias['styled-components'] = path.resolve(__dirname, 'node_modules', 'styled-components');

    return newConfig;
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: nodeEnv === PROD ? CSP_STRING : '',
          },
        ],
      },
    ];
  },
};

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
        gifsicle: {
          interlaced: false,
        },
        optipng: {
          enabled: false,
        },
        pngquant: {
          quality: '90-100',
          speed: 4,
        },
        mozjpeg: {
          progressive: true,
          quality: 65,
        },
        svgo: {
          plugins: [
            {
              removeViewBox: false,
            },
          ],
        },
        webp: {
          preset: 'default',
          quality: 65,
        },
      },
    ],
    [withBundleAnalyzer, {}],
  ],
  nextConfig
);
