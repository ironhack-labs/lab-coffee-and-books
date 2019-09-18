
const express = require('express');
const Place = require('../models/place');

const router = express.Router();
router.get('/map', (req, res, next) => {
  Place.find()
    .then((allPlaces) => {
      res.json(allPlaces);
    });
});
router.get('/', (req, res, next) => {
  Place.find()
    .then((allPlaces) => {
      res.render("index", { allPlaces });
    });
});

// router.get('/new', (req, res, next) => {
//   res.render('placesAdd');
// });

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
      console.log('place created');
      res.redirect('/');
    })
    .catch(error => next(error));
});

module.exports = router;