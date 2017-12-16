var webpack = require('webpack');
let merge = require('webpack-merge');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    // libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          // 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 
          'css-loader',
          'postcss-loader']
      })
    }, {
      test: /\.svg$/,
      loader: "url-loader?limit=10000&mimetype=image/svg+xml"
    }, {
      test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
      use: [{
        loader: 'file-loader?',
        options: {
          outputPath: 'assets/'
        }
      }]
    }]
  },

  // resolve: {
  //   modulesDirectories: ['node_modules', 'components']
  // },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    }),
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]
};

const dirs = [
  // '',
  // '0-Logo',
  // '1-ScopedSelectors',
  // '2-GlobalSelectors',
  // '3-ClassComposition',
  // '4-CompositionOverrides',
  // '5-ScopedAnimations',
  // 'postcss-mixins',
  // 'postcss-import'
  'custom-properties',
  'css-apply-rule'
];

module.exports = dirs.map(dir => {
  return merge(config, {
    entry: path.resolve(__dirname, 'src', dir),
    output: {
      path: path.resolve(__dirname, 'build', dir),
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: dir || 'css-modules'
      })
    ]
  });
})
