const express = require('express');

 const placeRouter = express.Router();

 const Place = require('../models/Place');

 
//list all places
 placeRouter.get('/', (req, res, next) => {
  Place.find()
    .then(places => res.render('places', { places }))
    .catch(err => next(err));
});

//Form to add a place
placeRouter.get('/new', (req, res, next) => res.render('new'));

//create a place
placeRouter.post('/', (req, res, next) => {
  const myPlace = new Place({
    name: req.body.name,
    type: req.body.type,
  })
  myPlace.save()
    .then(() => res.redirect('/places'))
    .catch(() => res.redirect('/places/new'));
});

//show place
placeRouter.get('/:id', (req, res, next) => {
  Place.findById(req.params.id)
    .then(place => res.render('show', { place }))
    .catch(err => next(err));
});

//form to modify a place
placeRouter.get('/:id/edit', (req, res, next) => {
  Place.findById(req.params.id)
    .then(place => res.render('edit', { place }))
    .catch(err => next(err));
});


  
//update place
placeRouter.post('/:id', (req, res, next) => {
  Place.findByIdAndUpdate(req.params.id, { name: req.body.name, type: req.body.type })
    .then(() => res.redirect('/places'))
    .catch(err => next(err));
});

//Delete place
placeRouter.post('/:id/delete', (req, res, next) => {
  Place.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/places'))
    .catch(err => next(err));
});

 module.exports = placeRouter;