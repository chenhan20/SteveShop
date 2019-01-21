var path = require('path')
const webpack = require('webpack'); //访问内置的插件

module.exports = {
  entry: ['./src/js/index'],
  output: {
    path: path.join(__dirname, '/public/dist'),
    filename: 'bundle.js'
  },
  module: {   
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
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
  },
  plugins: [
    // other plugins
    // ...
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      // Tether: 'tether', //4.0.0-alpha.6
      // tether: 'tether', //4.0.0-alpha.6
      Popper: ['popper.js', 'default'] //4.0.0-beta
    })
  ]
}