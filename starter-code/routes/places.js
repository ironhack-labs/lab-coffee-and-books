const express = require('express');
const placeRouter = express.Router();
const Place = require('../models/Place');

placeRouter.get('/', (req, res) => {
  Place.find({}, (error, places) => {
    if(error) console.log(error);
    res.render('places/index', {places:places});
  });
});

placeRouter.get('/new', (req, res) => {
  res.render('places/new');
});

placeRouter.post('/new', (req, res) => {
  let location = {
    type: 'Point',
    coordinates : [req.body.long, req.body.lat]
  };

  const newPlace = Place({
    name: req.body.name,
    description: req.body.description,
    localType: req.body.localType,
    location: location,
  });

  newPlace.save((error) => {
    (error)? console.log(error):res.redirect('/');
  });
})

module.exports = placeRouter;
