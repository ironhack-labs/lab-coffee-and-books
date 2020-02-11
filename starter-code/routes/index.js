const express = require('express');
const router  = express.Router();
const Place = require('../models/place');

/* GET home page */
router.get('/', (req, res, next) => {
  Place.find()
  .then(places => res.render('home', {places: JSON.stringify(places)}))
  .catch(err => console.log(err))
});

// New - Show form to add a new place
router.get('/add', (req, res, next) => {
  res.render('add', {layout: false});
});

// Add - Add new place to the DB
router.post('/add', (req, res, next) => {
  let location = {
    type: 'Point',
    coordinates: [req.body.lon, req.body.lat]
  };

  let placeData = {
    name: req.body.name,
    type: req.body.type,
    location: location
  }

  let newPlace = new Place(placeData);

  newPlace.save(error => {
    if (error) { 
      console.log(error); 
    } else { 
      res.redirect('/');
    }
  })
});

// Delete - Delete a specific place
router.post('/:id/delete', (req, res, next) => {
  Place.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error));
});


module.exports = router;
