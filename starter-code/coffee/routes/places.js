const express = require('express');
const router = express.Router();

const Place = require('../models/place.js');

router.get('/places', (req, res, next) => {
  Place.find({}, (err, places) => {
    if (err) {
      console.error(err);
    }
    res.render('places/index', {
      places,
    });
  });
});

router.post('/places', (req, res, next) => {

  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  const newPlaceInfo = {
    name: req.body.name,
    location: location
  };

  const newPlace = new Place(newPlaceInfo);

  newPlace.save((error) => {
    if (error) {
      console.log(error)
    } else {
      console.log('success!')
      res.redirect('/places');
    }
  });
});

module.exports = router;