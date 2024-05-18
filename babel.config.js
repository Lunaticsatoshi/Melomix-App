module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "src": "./src",
          "components": "./src/components",
          "screens": "./src/screens",
          "utils": "./src/utils",
          "assets": "./src/assets",
          "navigation": "./src/navigation",
        }
      }
    ],
    'nativewind/babel'
  ]
};
