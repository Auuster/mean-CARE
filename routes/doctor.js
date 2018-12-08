var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Doctor = require('../models/Doctor.js');

/* GET ALL Doctors */
router.get('/', function(req, res, next) {
  Doctor.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Doctor BY ID */
router.get('/:id', function(req, res, next) {
  Doctor.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Doctor */
router.post('/', function(req, res, next) {
  Doctor.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Doctor */
router.put('/:id', function(req, res, next) {
  Doctor.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Doctor */
router.delete('/:id', function(req, res, next) {
  Doctor.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;