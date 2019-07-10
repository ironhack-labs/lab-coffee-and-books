const express = require('express');
const router = express.Router();
const Place = require('../models/place');

router.get('/', (req, res, next) => {
  Place.find()
  .then(places => res.render('places/show', { places, GMAPS: process.env.GMAPS }))
  .catch(err => console.log(err));
});

router.get('/create', (req, res, next) => {
  res.render('places/create');
});

router.post('/create', (req, res, next) => {
  const {name, type, latitude, longitude} = req.body;
  const location = {
    type: 'Point',
    coordinates: [longitude, latitude],
  }
  Place.findOne({name: name})
  .then((place) => {
    if(place) {
      res.render('places/create', {message: "Place already registered!"});
    } else {
      Place.create({name: name, type: type, location: location})
      .then(() => res.redirect('/places'))
      .catch(err => console.log(err));
    }
  })
  .catch(err => console.log(err));
});

router.get('/show-details/:placeId', (req, res, next) => {
  Place.findById(req.params.placeId)
  .then(place => res.render('places/show-details', {  place, GMAPS: process.env.GMAPS }))
  .catch(err => console.log(err));
});


router.get('/edit/:placeId', (req, res, next) => {
  Place.findById(req.params.placeId)
  .then(place =>  res.render('places/edit', place))
  .catch(err => console.log(err));
});

router.post('/edit/:placeId', (req, res, next) => {
  const {name, type, latitude, longitude} = req.body;
  const location = {
    type: 'Point',
    coordinates: [longitude, latitude],
  }

  Place.findByIdAndUpdate(req.params.placeId, {name: name, type: type, location: location})
  .then(() =>  res.redirect('/places'))
  .catch(err => console.log(err));
});

router.get('/delete/:placeId', (req, res, next) => {
  Place.findByIdAndDelete(req.params.placeId)
  .then(() => res.redirect('/places'))
  .catch(err => console.log(err));
});

module.exports = router;