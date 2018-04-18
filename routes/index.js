const express = require('express');
const router  = express.Router();
const Place = require("../models/Place");

/* GET home page */
router.get('/', (req, res, next) => {
  Place.find()
    .then( places => {
      res.render('index', {places: JSON.stringify(places), placesList: places});
    })
});

module.exports = router;
