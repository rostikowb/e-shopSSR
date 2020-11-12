const {withPlugins} = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@material-ui/lab/es', '@fortawesome/react-fontawesome']);
const withPWA = require('next-pwa')
const withOffline = require('next-offline')
// const withSass = require('@zeit/next-sass');
// const withCSS = require('@zeit/next-css');
const optimizedImages = require('next-optimized-images');
// const path = require('path');

module.exports = withPlugins([
  [optimizedImages, {
    optimizeImagesInDev: true,
  }],
  [withTM, {}],
  // [withOffline, {
  //   generateInDevMode: true,
  //   // transformManifest: manifest => ['/'].concat(manifest)
  // }]
  [withPWA, {
    pwa: {
      dest: 'public',
      // disable: process.env.NODE_ENV === 'development',
      // register: true,
      // scope: '/app',
      // sw: 'service-worker.js',
    }
  }]

  // [withCSS, {
  //     cssModules: true,
  // }],
  // [withSass,
  //     {
  //         cssModules: true,
  //         cssLoaderOptions: {
  //             localIdentName: '[folder]--[local]__[hash:base64:2]',
  //         },
  //         sourceMap: true,
  //         sassLoaderOptions: {
  //             includePaths: [
  //                 path.resolve(__dirname, '../../node_modules'),
  //                 path.resolve(__dirname, '../'),
  //                 path.resolve(__dirname, './node_modules'),
  //                 path.resolve(__dirname, './'),
  //             ],
  //         },
  //     },
  // ],
]);