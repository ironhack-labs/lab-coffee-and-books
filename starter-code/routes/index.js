const express = require('express');
const router = express.Router();
const Place = require('../models/Place')

/* GET home page. */
router.get('/', function(req, res, next) {
  Place.find({}, (err, place)=>{
  res.render('index', { place:'place' });
  })
});

module.exports = router;
