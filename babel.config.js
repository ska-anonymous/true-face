module.exports = {
  presets: ['module:@react-native/babel-preset'],

  // plugins that should run in ALL environments
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@store': './src/store',
          '@services': './src/services',
          '@hooks': './src/hooks',
          '@lib': './src/lib',
        },
      },
    ],
    // If you use Reanimated, keep it LAST:
    // 'react-native-reanimated/plugin',
  ],

  // plugins added ONLY in production
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
