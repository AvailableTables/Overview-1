var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');
var CompressionPlugin = require('compression-webpack-plugin');

const client = {
  mode: 'development',
  entry: {
    app: ['babel-polyfill', `${SRC_DIR}/index.jsx`]
  },
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  }, 
  optimization: {
    minimize: true
  },
  plugins: [
    new CompressionPlugin({  
      algorithm: "gzip"
    })
  ],
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx?$/],
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: { 
          presets: ['env', 'react', 'stage-0']
        }
      }
    ]
  }
};
const server = {
  target: 'node', 
  entry: {
    app: ['babel-polyfill', `${SRC_DIR}/appserver.js`]
  },
  output: {
    filename: 'bundle-server.js',
    path: DIST_DIR,
    publicPath: '/',
    libraryTarget: 'commonjs2',
  }, 
  optimization: {
    minimize: true
  },
  plugins: [
    new CompressionPlugin({  
      algorithm: "gzip"
    })
  ],
  module: {   
    rules: [
      {
        test: [/\.js$/, /\.jsx?$/],
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: { 
          presets: ['env', 'react', 'stage-0']
        }
      }
    ]
  }
}
module.exports = [client, server];

