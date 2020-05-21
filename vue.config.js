// vue.config.js修改后需要重启服务器

module.exports = {
  // publicPath: '/demo',
  devServer: {
    proxy: 'http://localhost:3000'
  }
}