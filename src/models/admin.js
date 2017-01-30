var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create User Schema
var Admin = new Schema({
  name: String
});


module.exports = mongoose.model('admins', Admin);
