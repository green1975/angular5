let mongoose = require('mongoose');

let ArticleSchema = new mongoose.Schema({
  title: String,
  img: String,
  text: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Articles', ArticleSchema);
