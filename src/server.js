'use strict';

const express = require('express');
const app = express();

// setup dust view engine
require('./lib/dust')(app);

app.get('/', function (req, res) {
  res.render('index.dust', {});
});

module.exports = app;
