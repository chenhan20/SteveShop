var path = require('path')

module.exports = {
  entry: ['./src/js/index'],
  output: {
    path: path.join(__dirname, '/public/dist'),
    filename: 'bundle.js'
  }
}