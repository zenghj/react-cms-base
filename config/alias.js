const path = require('path')
const resolve = path.resolve

function resolveRelative (relative) {
  return resolve(__dirname, relative)
}
module.exports = {
  'react-native': 'react-native-web',
  'Src': resolveRelative('../src/'),
  'Assets': resolveRelative('../src/assets/'),
  'Components': resolveRelative('../src/components/'),
  'Config': resolveRelative('../src/config/'),
  'Pages': resolve('../src/pages'),
  'Plugins': resolveRelative('../src/plugins/'),
  'Store': resolveRelative('../src/store/'),
}