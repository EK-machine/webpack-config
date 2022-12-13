const path = require('path');
const {path: PROJECT_ROOT} = require('app-root-path');

exports.PROJECT_ROOT = PROJECT_ROOT;
exports.BUILD_DIRECTORY = path.resolve(PROJECT_ROOT, './dist');
exports.SOURCE_DIRECTORY = path.resolve(PROJECT_ROOT, './src');
exports.HOST = 'localhost';
exports.PORT = 3000;

// module.exports = PATHS = {
//   dist: path.resolve(__dirname, '../../dist'),
//   root: path.resolve(__dirname, '../..'),
//   src: path.resolve(__dirname, '../../src'),
//   public: path.resolve(__dirname, '../../public/'),
//   components: path.resolve(__dirname, '../../src/components/'),
//   data: path.resolve(__dirname, '../../src/data/'),
//   interfaces: path.resolve(__dirname, '../../src/data/'),
//   reduxSlices: path.resolve(__dirname, '../../src/redux/slices/'),
//   helpers: path.resolve(__dirname, '../../src/helpers/'),
//   hooks: path.resolve(__dirname, '../../src/hooks/'),
//   apis: path.resolve(__dirname, '../../src/api/'),
//   assets: '../../assets/',
// };