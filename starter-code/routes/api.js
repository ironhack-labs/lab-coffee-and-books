/*jshint esversion: 6*/
var express = require('express');
var router = express.Router();
const Place = require('../models/place');


router.route('/show').get((req, res) => {
  Place.find((error, places) => {
    if (error) {
      res.status(500).json({message: error});
    } else {
      res.status(200).json(places);
    }
  });
});

module.exports = router;
