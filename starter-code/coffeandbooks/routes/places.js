const express = require('express');
const router = express.Router();

const Place = require('../models/places');

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/create', (req, res, next) => {
  const data = {
    name: '',
    description: '',
    latitude: '',
    longitude: ''
  };
  res.render('form', data);
});

router.post('/create', (req, res, next) => {
  const placeInfo = {
    name: req.body.name,
    description: req.body.description,
    location: {
      type: 'Point',
      coordinates: [Number(req.body.latitude), Number(req.body.longitude)]
    }
  };
  const place = new Place(placeInfo);
  place.save((error) => {
    if (error) {
      return next(error);
    }
    res.redirect('/');
    // todo data validation
  });
});

router.get('/places', (req, res, next) => {
  const data = Place.find((error, response) => {
    if (error) {
      return next(error);
    }
    res.json(response);
  });
});

module.exports = router;
