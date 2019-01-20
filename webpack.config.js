var path = require('path')

module.exports = {
  entry: ['./src/js/index'],
  output: {
    path: path.join(__dirname, '/public/dist'),
    filename: 'bundle.js'
  },
  module: {   
    rules: [
      {
        test: /\.sass$/,
        use: [
          { loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }, 
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  }
}