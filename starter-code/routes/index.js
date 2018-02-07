
'use strict';

const express = require('express');
const router = express.Router();
const place = require('./models/place');

router.get('/create', (req, res, next) => {
  const data = {
    name: '',
    latitude: '',
    longitude: ''
  };
  res.render('create', data);
});

router.post((req, res, next) => {
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  // Create a new Restaurant with location
  const newPlace = {
    name: req.body.name,
    description: req.body.description,
    location: location
  };

  // Save the restaurant to the Database
  newPlace.save().then(response => {
    res.redirect('/_layout');
  }).catch(next);
});

router.post('/', (req, res, next) => {
  // Get Params from POST
  const place = {
    name: req.body.placename,
    description: req.body.description,
    latitude: req.body.latitude,
    longitude: req.body.longitude
  };

  // Save the restaurant to the Database
  place.save.then(response => {
    res.redirect('/');
  }).catch(next);
});

module.exports = router;
