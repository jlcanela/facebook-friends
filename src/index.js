'use strict'

const app = require('./server')

const port = parseInt(process.env.npm_package_config_port) || 8080

app.listen(port, function () {
  console.log('server listening on port ' + port + ' !')
})
