var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  firstname: String,
  birthday: String,
  email: String,
  sexe: String,
  work: String,
  password: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Users', UserSchema);
