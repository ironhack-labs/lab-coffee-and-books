/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();
const Place = require('../models/Place.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
