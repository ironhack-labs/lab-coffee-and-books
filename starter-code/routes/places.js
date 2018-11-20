const express = require('express');

const placeRouter = express.Router();

const Place = require('../models/Place');

placeRouter.get('/', (req, res, next) => {
  Place.find()
    .then(places => res.render('places', { places }))
    .catch(err => next(err));
});

placeRouter.get('/getAll', (req, res, next) => {
  Place.find()
    .then(places => res.json({ places }))
    .catch(err => next(err));
});

placeRouter.get('/new', (req, res, next) => res.render('newPlace'));

placeRouter.get('/:id', (req, res, next) => {
  Place.findById(req.params.id)
    .then(place => res.render('show', { place }))
    .catch(err => next(err));
});

placeRouter.get('/:id/edit', (req, res, next) => {
  Place.findById(req.params.id)
    .then(place => res.render('edit', { place }))
    .catch(err => next(err));
});

placeRouter.post('/', (req, res, next) => {
  const myPlace = new Place({
    name: req.body.name,
    type: req.body.type,
    location: {
      lat: parseFloat(req.body.lat),
      lng: parseFloat(req.body.lng),
    },
  });

  myPlace.save()
    .then(() => res.redirect('/places'))
    .catch(() => res.redirect('/places/new'));
});

placeRouter.post('/:id', (req, res, next) => {
  Place.findByIdAndUpdate(req.params.id, { name: req.body.name, type: req.body.type })
    .then(() => res.redirect('/places'))
    .catch(err => next(err));
});

placeRouter.post('/:id/delete', (req, res, next) => {
  Place.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/places'))
    .catch(err => next(err));
});

module.exports = placeRouter;
