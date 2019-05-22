const express = require('express');
const router  = express.Router();
const place = require('../models/place.model');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// GET => render the form to create a new place
router.get('/new', (req, res, next) => {
  res.render('places/new');
});

// POST => to create new place and save it to the DB
router.post('/', (req, res, next) => {

  console.log(req.body)

  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  const newPlace = new Place({
    name: req.body.name,
    type: req.body.type,
    location: location // <= add the location when creating a new restaurant
  });

  newPlace.save((error) => {
    if (error) {
      next(error);
    } else {
      res.redirect('/place');
    }
  });
})

module.exports = router
