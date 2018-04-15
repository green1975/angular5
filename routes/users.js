var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Users = require('../api/models/Users.js');

/* GET ALL Users */
router.get('/', function(req, res, next) {
  Users.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});


/* SAVE User */
router.post('/', function(req, res, next) {
  Users.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */
router.put('/:id', function(req, res, next) {
  Users.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
  Users.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
