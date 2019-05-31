var path                    = require('path');
const webpack               = require('webpack');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const HtmlWebpackPlugin     = require('html-webpack-plugin');

const entryPreloaders = [
  '@babel/polyfill'
];

const mode = process.env.NODE_ENV || 'development';

if (mode !== 'production') {
  entryPreloaders.push('webpack-hot-middleware/client?reload=true');
  entryPreloaders.push('react-hot-loader/patch');
}

module.exports = {
  devServer: {
    port: 3003
  },
  context: path.resolve(__dirname, 'src'),
  devtool: 'cheap-eval-source-map',
  mode: mode,
  resolve: {
    alias: {
      SRC: path.resolve(__dirname, 'src'),
      Reducers: path.resolve(__dirname, 'src/reducers'),
      Sagas: path.resolve(__dirname, 'src/sagas')
    }
  },
  entry: {
    app: [
      ...entryPreloaders,
      './index.js'
    ],
  },
  output: {
    filename: 'assets/[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css'
    }),
    new HtmlWebpackPlugin({
      title: 'Project Alpha',
      filename: 'index.html',
      template: './index.tpl.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    namedModules: true,      // NamedModulesPlugin
    noEmitOnErrors: false    // NoEmitOnErrorsPlugin
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, './node_modules/ca-ui-kit/'),
          path.resolve(__dirname, './src')
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react']
          }
        }
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
  }
};

