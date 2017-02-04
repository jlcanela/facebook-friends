'use strict'

const adaro = require('adaro')
const debug = require('debug')('boot:dust.js')

module.exports = function (app) {
  var options = {}

  app.engine('dust', adaro.dust(options))
  app.set('view engine', 'dust')
  app.set('views', 'src/templates')

  debug('setting dust as default view engine')
}
