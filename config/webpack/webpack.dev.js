const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',

  devServer: {
    port: '8001',
    open: true,
    historyApiFallback: true,
    hot: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.variable': JSON.stringify('dev'),
    }),
    new ReactRefreshWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
