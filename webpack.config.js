var path = require('path')

module.exports = {
  entry: ['./src/js/index'],
  output: {
    path: path.join(__dirname, '/public/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.sass$/,
      use: [{
          loader: "style-loader" // 将 JS 字符串生成为 style 节点
      }, {
          loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
      }, {
          loader: "sass-loader" // 将 Sass 编译成 CSS
      }]
    }]
  }
}