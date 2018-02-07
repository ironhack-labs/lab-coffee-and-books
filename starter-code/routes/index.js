const express = require('express');
const router = express.Router();
const Place = require('../models/Place')

/* GET home page. */
router.get('/', function (req, res, next) {
  Place.find({}, (err, place) => {
    res.render('index', { place: place });
  })
});


router.get('/form-place', function (req, res, next) {
  Place.find({}, (err, place) => {
    res.render('form', { place: 'place' });
  })
});

router.post('/form-place', (req, res, next) => {
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  const newPlace = new Place ({
    name: req.body.name,
    type: req.body.type,
    location: location
  })

  // Save the restaurant to the Database
  newPlace.save((error) => {
    if (error) { console.log(error) }
    else {
      console.log("New place saved")
      res.redirect('/');
    }
  })
});

module.exports = router;
