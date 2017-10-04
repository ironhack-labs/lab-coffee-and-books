const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Place = require('../models/place')


router.get('/', (req, res, next) => {
  Place.find({}, (err, places) => {
    if (err) { return next(err) };
    res.render('index', { places })
  })
})

router.post('/', (req, res, next) => {
  const { name, lat, lng, description } = req.body

  const newPlace = new Place({
    name,
    description,
    location: { type: 'Point', coordinates: [lng, lat] },
  })
  newPlace.save((err) => {
    if (err) { return next(err) } else {
      res.redirect('/');
    }
  })
})







module.exports = router;