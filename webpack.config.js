const path = require('path');

console.log('test');

module.exports = (env) => {
  console.log('execute config');

  return {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: {
      index: './js/index.js'
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      alias: {
        _js: path.join(__dirname, '/src/js'),
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: '/node_modules/',
          use: ['eslint-loader'],
        },
      ]
    }
  };
};
