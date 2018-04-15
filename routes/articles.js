var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Users = require('../api/models/Articles.js');

/* GET ALL Articles */
router.get('/', function(req, res, next) {
  console.log(req.body);
  Articles.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});


/* SAVE Article */
router.post('/', function(req, res, next) {
  Articles.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */
router.put('/:id', function(req, res, next) {
  Articles.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
  Articles.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
