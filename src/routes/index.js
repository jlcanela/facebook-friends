'use strict';

const Admin = require('../models/admin');
const User = require('../models/user');

module.exports = function(app) {

  app.get('/api/users', function(req, res) {

    User.find(function (err, users) {
      if (err) return res.send('');
      res.send(users.map(function(user) {
        return { name: user.name };
      }));
    })

  });

  app.post('/api/admin/:admin', function(req, res) {
    const admin = req.params.admin;

    var searchQuery = {
    };

    var updates = {
      name: admin
    };

    var options = {
      upsert: true
    };

    // update the user if s/he exists or add a new user
    Admin.findOneAndUpdate(searchQuery, updates, options, function(err, u) {
      if(err) {
        return res.send({error: 'admin update failed', name: admin});
      } else {
        return res.send({success: true, name: admin});
      }
    });

  })

}
