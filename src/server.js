'use strict';

const express = require('express');
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {

    if (password !== 'password') {
      return done(null, false, { message: 'Incorrect password'});
    }

    return done(null, { id: username, username });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  done(null, { id, username: id});
});


app.use(express.static('public'));

app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// setup dust view engine
require('./lib/dust')(app);

function isAuthenticated(req, res, next) {
    if (req.user)
        return next();

    res.redirect('/login');
}


app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

app.get('/login', function (req, res) {
  res.render('login.dust', {});
});

app.use(isAuthenticated, express.static('../object-editor/build'));


module.exports = app;
