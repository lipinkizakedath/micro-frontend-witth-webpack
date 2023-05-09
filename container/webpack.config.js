const htmlWebpack = require('html-webpack-plugin');
const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
  },

  plugins: [
    new ModuleFederation({
      name: 'container',
      remotes: {
        products: 'products@http://localhost:3000/remoteEntry.js',
        cart: 'cart@http://localhost:3001/remoteEntry.js',
      },
    }),
    new htmlWebpack({
      template: './public/index.html',
    }),
  ],
};
