const express = require('express');
const router  = express.Router();
const Place   = require('../models/Place');

/* GET home page */
router.get('/', (req, res, next) => {
  Place.find({})
  .then(places => {
    let placeObject = {places:places, action: '/coffe/new', button: 'Save', placesStr: JSON.stringify(places)}
    res.render('coffe/home', {placeObject})
  })
});

module.exports = router;
