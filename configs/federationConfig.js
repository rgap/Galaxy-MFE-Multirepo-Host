const { dependencies } = require('../package.json');

module.exports = {
  name: 'host',
  filename: 'remoteEntry.js',
  remotes: {
    catalog: 'catalog@http://localhost:3001/remoteEntry.js',
    cart: 'cart@http://localhost:3002/remoteEntry.js',
    checkout: 'checkout@http://localhost:3003/remoteEntry.js'
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: dependencies.react,
      eager: true
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
      eager: true
    },
    'react-router-dom': {
      singleton: true,
      requiredVersion: dependencies['react-router-dom'],
      eager: true
    }
  },
}; 