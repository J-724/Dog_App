const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(s[ac]ss||css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer')
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }, 
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: 'src/template.html',
    }),
    new MiniCssExtractPlugin(),
  ],
}