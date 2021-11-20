const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    port: '8001',
    open: true,
    historyApiFallback: true,
  },
  plugins: [new ReactRefreshWebpackPlugin()],
}
