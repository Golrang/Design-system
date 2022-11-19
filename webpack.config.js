const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, './src/app/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              compact: true,
              cacheDirectory: true,
              cacheCompression: false,
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      node: 'current',
                    },
                  },
                ],
                [
                  '@babel/preset-react',
                  {
                    runtime: 'automatic',
                  },
                ],
                '@babel/preset-typescript',
              ],
              plugins: [
                ['@babel/plugin-transform-runtime', { regenerator: true }],
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-optional-chaining',
              ],
            },
          },
        ],
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', '../build'),
    filename: 'js/[name].[contenthash].js',
    publicPath: '/',
    chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new ReactRefreshWebpackPlugin(),
  ],
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    port: '8001',
    open: true,
    historyApiFallback: true,
  },
  stats: 'minimal',
}
