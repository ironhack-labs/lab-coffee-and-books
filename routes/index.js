const express = require('express');
const router  = express.Router();
const Place = require('../models/places')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/place-list', (req, res, next) => {
  Place.find()
  .then( places => {
    res.render('place-list', {places})
  }).catch( e => next(e));
});

router.get('/form', (req, res, next) => {
  res.render('form');
});

router.post('/form', (req, res, next) => {
  // Get Params from POST
  let location = {
    type: 'Point',
    coordinates: [Number(req.body.longitude), Number(req.body.latitude)]
  };

  // Create a new Restaurant with location
    const newPlace = {
      name:        req.body.name,
      description: req.body.description,
      location:    location
    };

  // Save the restaurant to the Database
  Place.create(newPlace)
  .then(() => res.redirect('place-list'))
  .catch(e => next(e))
});

module.exports = router;

