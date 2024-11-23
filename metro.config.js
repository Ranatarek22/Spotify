// const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// /**
//  * Metro configuration
//  * https://reactnative.dev/docs/metro
//  *
//  * @type {import('metro-config').MetroConfig}
//  */
// const config = {};

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);
const {getDefaultConfig} = require('@react-native/metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);
  return {
    ...defaultConfig,
    resolver: {
      ...defaultConfig.resolver,
      extraNodeModules: {
        crypto: require.resolve('react-native-crypto'), // Ensure react-native-crypto is used for crypto module
      },
    },
  };
})();


