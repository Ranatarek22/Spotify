module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          crypto: 'react-native-crypto',
        },
      },
    ],
  ],
};
