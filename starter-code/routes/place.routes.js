const express = require('express');
const Place = require('../models/Place');

const router = express.Router();
router.get('/places', (req, res, next) => {
  Place.find()
    .then((allPlaces) => {
      res.json(allPlaces);
    });
});

router.get('/new', (req, res, next) => {
  res.render('placeAdd');
});

router.post('/new', (req, res, next) => {
  const {
    name, lat, lng, type,
  } = req.body;

  const newPlace = new Place({
    name,
    type,
    location: {
      coordinates: [lng, lat],
      type: 'Point',
    },
  });

  newPlace.save()
    .then((place) => {
      console.log('Place created');
      res.redirect('/');
    })
    .catch(error => next(error));
});

module.exports = router;
