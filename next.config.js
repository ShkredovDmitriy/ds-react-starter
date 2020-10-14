const path = require('path');
const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const withTM = require('next-transpile-modules')([
  '@fortawesome/fontawesome-free',
  'imask',
  'axios-concurrency',
  'ramda',
  'react-spring',
  'uuid',
]);

module.exports = withPlugins(
  [
    withCSS,
    withSass,
    withLess,
    withTM,
  ],
  {
    transpileModules: ['pretty-bytes'],
    serverRuntimeConfig: {
    },
    publicRuntimeConfig: {
    },
    cssLoaderOptions: {
      url: false
    },
    webpack (config, options) {
      config.resolve.alias['~'] = path.join(__dirname);

      config.module.rules.push({
        test: /.scss$/,
        loader: 'sass-resources-loader',
        options: {
          resources: ['./styles/vars.scss'],
        },
      });

      return config;
    },
  },
);
