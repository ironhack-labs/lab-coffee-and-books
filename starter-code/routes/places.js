'use strict';

var express = require('express');
var router = express.Router();

const Place = require('../models/place');

/* GET users listing. */
router.get('/places', (req, res, next) => {
  Place.find((err, places) => {
    if (err) {
      return next(err);
    }
    res.json(places);
  });
});

module.exports = router;
