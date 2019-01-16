var path = require('path')

module.exports = {
  entry: ['./public/js/index'],
  output: {
    path: path.join(__dirname, 'src/dist'),
    filename: 'bundle.js'
  }
}