const express = require('express');
const router  = express.Router();

const Place = require('../models/place');

/* GET home page */
router.get('/', (req, res, next) => {
  Place.find()
  .then((allPlaces) => {
    res.render('index', {PLACES: allPlaces})

  })
  
});

module.exports = router;
