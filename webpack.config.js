const mdToVue = require('./src/plugin/mdToVue');
const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './src/dist'),
  },
  module: {
    rules: [{ test: /\.md$/, use: ['./src/loader/md-loader.js'] }],
  },
  plugins: [new mdToVue()],
};
