const path = require('path');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  entry: {
    main: './src/index.js',  // Punto de entrada de tu aplicación React
  },
  output: {
    path: path.resolve('./myapp/static/bundles/'),
    filename: '[name]-[hash].js',
  },
  plugins: [
    new BundleTracker({ filename: './webpack-stats.json' }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
