'use strict';

const express = require('express');
const router = express.Router();

const Place = require('../models/place');

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/create', (req, res, next) => {
  res.render('create');
});

router.post('/', (req, res, next) => {
  const data = {
    name: req.body.name,
    type: req.body.type,
    latitude: req.body.latitude,
    longitude: req.body.longitude
  };

  const thePlace = new Place(data);
  thePlace.save((err, result) => {
    console.log(result);
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

module.exports = router;
