const path = require('path')
const resolve = path.resolve

module.exports = {
  'react-native': 'react-native-web',
  'Assets': resolve(__dirname, '../src/assets/'),
  'Plugins': resolve(__dirname, '../src/plugins/'),
  'Components': resolve(__dirname, '../src/components/'),
  'Store': resolve(__dirname, '../src/store/'),
  'Config': resolve(__dirname, '../src/config/'),
}