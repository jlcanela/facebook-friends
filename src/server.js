'use strict';

const express = require('express');
const app = express();
const auth = require('./lib/auth');
const authInit = auth.init;
const isAuthenticated = auth.isAuthenticated;
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

app.use(express.static('public'));

require('./lib/dust')(app);
authInit(app);

app.get('/login', function (req, res) {
  res.render('login.dust', {});
});

app.use(isAuthenticated, express.static('../object-editor/build'));

module.exports = app;
