const path = require('path');

module.exports = {
  'extends': ['airbnb-base'],
  // 'extends': ['jquery'],
  // 'extends': ['google'],
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': path.join(__dirname, 'webpack.config.js')
      }
    }
  }
};
