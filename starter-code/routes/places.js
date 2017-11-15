'use strict';

var express = require('express');
var router = express.Router();
var Place = require("../models/place");

/* GET home page. */
router.get('/places', function(req, res, next) {
  res.render('places');
});

module.exports = router;
