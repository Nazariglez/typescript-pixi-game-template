var webpack = require('webpack');
var path = require('path');

var plugins = [];
var production = process.env.NODE_ENV === "production";

if(production){
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
        pure_funcs: ['console.log']
      },
      output: {comments:false}
    })
  );
}

module.exports = {
  devtool: 'source-map',
  entry: ['pixi.js', './src/index.ts'],
  output: {
    filename: "./build/game.js"
  },
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  plugins: plugins,
  module: {
    postLoaders: [
      {
        loader: "transform/cacheable?brfs"
      }
    ],
    loaders: [
      {
        test: /\.json$/,
        include: path.join(__dirname, 'node_modules', 'pixi.js'),
        loader: 'json'
      },
      // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
};
