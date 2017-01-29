var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create User Schema
var User = new Schema({
  name: String,
  token: Number,
  refreshToken: Number
});


module.exports = mongoose.model('users', User);
