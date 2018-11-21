const express = require('express');

const router  = express.Router();
const mongoose = require('mongoose');
const Place = require('../models/place');

const placeRouter = express.Router();
mongoose.connect('mondodb://localhost/Places');
/* GET home page */

router.get('/', (req, res, next) => {
  res.redirect('/placesList');
});

router.get('/new', (req, res, next) => {
  res.render('new');
});

router.post('/new', (req, res) => {
  const { name, type } = req.body;

  const newPlace = new Place({
    name,
    type,
  });
  newPlace.save()
    .then(() => {
      res.redirect('/placesList');
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/placesList', (req, res) => {
  Place.find({})
    .then(places => res.render('placesList',  { places }))
    .catch(err => next(err));
});

router.get('/showPlace/:id', (req, res, next) => {
  Place.findById(req.params.id)
    .then(place => res.render('showPlace', { place }))
    .catch(err => next(err));
});

router.get('/:id/edit', (req, res, next) => {
  Place.findById(req.params.id)
    .then(place => res.render('updatePlace', { place }))
    .catch(err => next(err));
});

router.post('/:id', (req, res) => {
  const { name, type } = req.body;

  const newPlace = new Place({
    name,
    type,
  });
  Place.findById(req.params.id)
    .then((place) => {
      place.name = req.body.name;
      place.type = req.body.type;
      place.save()
        .then(() => {
          res.redirect('/placesList');
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/:id/delete', (req, res, next) => {
  Place.findByIdAndRemove(req.params.id)
    .then(place => res.redirect('/placesList'))
    .catch(err => next(err));
});

module.exports = router;
