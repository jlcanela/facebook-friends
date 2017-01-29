'use strict';

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

}
