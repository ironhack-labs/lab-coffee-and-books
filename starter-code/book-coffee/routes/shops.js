'use strict';

const express = require('express');
const router = express.Router();

const Place = require('../model/place');

router.get((req, res, next) => {
  Place.find((error, place) => {
    if (error) { next(error); } else {
      res.render('/_layout', { place });
    }
  });
});

router.get('/create', (req, res, next) => {
  res.render('create');
});

router.post('/', (req, res, next) => {
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  const newPlace = Place({
    name: req.body.name,
    location: location
  });

  newPlace.save((error) => {
    if (error) { console.log(error); } else {
      res.redirect('/');
    }
  });
});

module.exports = router;
