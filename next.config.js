const {withPlugins} = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@material-ui/lab/es', '@fortawesome/react-fontawesome']);
const withPWA = require('next-pwa')
// const withOffline = require('next-offline')
const runtimeCaching = require('next-pwa/cache')
const optimizedImages = require('next-optimized-images');
// const i18n = require('i18n')

module.exports = withPlugins([
  [optimizedImages, {
    optimizeImagesInDev: true,
  }],
  [withTM, {}],
  // [withOffline, {
  //   generateInDevMode: true,
  //   workboxOpts: {
  //     // navigateFallback: '/',
  //     // navigateFallbackDenylist: [/api/],
  //   }
  //   // transformManifest: manifest => ['/'].concat(manifest)
  // }]

  {
    i18n: {
      locales: ['ua', 'ru'],
      defaultLocale: 'ua',
      localeDetection: false,
    }
  },

  [withPWA, {
    pwa: {
      dest: 'public',
      runtimeCaching,
    }
  }]

]);