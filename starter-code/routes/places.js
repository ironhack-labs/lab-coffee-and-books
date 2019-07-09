// index.js

const express = require('express');
const router = express.Router();

const Place = require('../models/place'); // require the Place model!!!

// POST => to create new place and save it to the DB
router.post('/', (req, res, next) => {

  // add the location object
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  const newPlace = new Place({
    name: req.body.name,
    description: req.body.description,
    location: location // <= add the location when creating a new place
  });

  newPlace.save((error) => {
    if (error) {
      next(error);
    } else {
      res.redirect('/');
    }
  })
});
router.get('/places/api', (req, res) => {
  Place.find()
    .then(placeList => {
      res.status(200).json({ placeList });
    })
    .catch(err => console.log(err));
});
module.exports = router;