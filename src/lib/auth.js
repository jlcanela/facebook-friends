'use strict';

const express = require('express');
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

module.exports = {
  init: function init(app) {
    passport.use(new LocalStrategy(
      function(username, password, done) {

        if (password !== 'password') {
          return done(null, false, { message: 'Incorrect password'});
        }

        return done(null, { name: username });
      }
    ));

    passport.serializeUser(function(user, done) {

      var searchQuery = {
        name: user.name
      };

      var updates = {
        name: user.name,
        token: (new Date()).getTime(),
        refreshToken: (new Date()).getTime(),

      };

      var options = {
        upsert: true
      };

      // update the user if s/he exists or add a new user
      User.findOneAndUpdate(searchQuery, updates, options, function(err, u) {
        console.log('serializeUser');
        if(err) {
          console.log(`err: ${err}`);
          return done(err);
        } else {
          console.log(`user: ${u}`);
          return done(null, user.name);
        }
      });

    });

    passport.deserializeUser(function(name, done) {

      var searchQuery = {
        name: name
      };

      User.findOne(searchQuery, function(err, user)  {
        if (err) {
          return done(err);
        } else {
          return done(null, user);
        }
      });
    });

    app.use(require('cookie-parser')());
    app.use(require('body-parser').urlencoded({ extended: true }));
    app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
    app.use(passport.initialize());
    app.use(passport.session());

    app.post('/login',
      passport.authenticate('local', { successRedirect: '/',
                                       failureRedirect: '/login',
                                       failureFlash: true })
    );

    app.get('/login', function (req, res) {
      res.render('login.dust', {});
    });
  },
  isAuthenticated: function isAuthenticated(req, res, next) {
    if (req.user)
      return next();

    res.redirect('/login');
  }
}
