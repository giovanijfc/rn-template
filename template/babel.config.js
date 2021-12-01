module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'macros',

    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: './src/',
        rootPathPrefix: '~/'
      }
    ]
  ]
}
