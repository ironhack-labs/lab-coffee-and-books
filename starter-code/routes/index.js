const express = require('express');
const router = express.Router();
const Place = require('../models/Place');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/places', function(req, res, next) {
  Place.find({}, (err, places) => {
    if (err) { return next(err) }
    res.render('show', {
      places: places
    });
  });
});

router.post((req, res, next) => {
  // Get Params from POST
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  // Create a new Restaurant with location
    const newPlace = Place ({
      name: req.body.name,
      type: req.body.type,
      description: req.body.description,
      location: location
    });

  // Save the restaurant to the Database
  Place.save((error) => {
    if (error) {
      console.log(error)
    }
    else {
      res.redirect('/places');
    }
  })
});

module.exports = router;

/* GET home page. */
// router.post('/places', function(req, res, next) {
//   res.render('show', { title: 'Places' });
// });

module.exports = router;
