'use strict'

const mongo = require('mongodb-bluebird')
const config = require('../../config/mongo.json')

module.exports = function (c) {
  const env = c || process.env.NODE_ENV || 'dev'
  const url = config['mondodb-bluebird'][env]
  return mongo.connect(url)
}
