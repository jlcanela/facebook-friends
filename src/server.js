'use strict'

const express = require('express')
const app = express()
const auth = require('./lib/auth')
const authInit = auth.init
    // const isAuthenticated = auth.isAuthenticated

const mongoose = require('mongoose')

app.use(express.static('public'))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

require('./lib/dust')(app)
authInit(app)

mongoose.connect('mongodb://localhost/facebook-friends')

app.get('/login', function (req, res) {
  res.render('login.dust', {})
})

// app.use(isAuthenticated);
app.use(express.static('client/build'))

require('./routes')(app)

module.exports = app
