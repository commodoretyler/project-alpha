const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './index.tsx',
  devServer: {
    port: 3001,
    contentBase: './build',
    hot: true,
    open: 'Google Chrome',
    watchOptions: {
      ignored: /node_modules/
    }
  },
  context: path.resolve(__dirname, 'src'),
  devtool: 'inline-source-map',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'ts-loader' }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: path.resolve(__dirname, 'src/index.tpl.html')
    }),
  ],
  output: {
    filename: '[name].[contentHash].js',
    path: path.resolve(__dirname, 'build')
  },
  optimization: {
    emitOnErrors: true
  }
};

