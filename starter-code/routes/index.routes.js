const express = require('express');
const router = express.Router();
const Places = require("../models/place.model")

/* GET home page */
router.get('/', (req, res) => res.render('index'))

router.post('/', (req, res, next) => {

  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  }

  const newPlaces = new Places({
    name: req.body.name,
    type: req.body.type,
    location
  });

  newPlaces.save((error) => {
    if (error) {
      next(error);
    } else {
      res.redirect('/');
    }
  });
});
module.exports = router