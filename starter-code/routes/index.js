var express = require('express');
const mongoose = require('mongoose');
const Place = require('../models/Place');
mongoose.connect('mongodb://localhost/coffee-books')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Place.find().exec((err, places) => {
    res.render('index', {
      places: places
    });
  });
});


router.get('/list', function(req, res, next) {
  Place.find().exec((err, places) => {
    res.render('./list', {
      places: places
    });
  });
});

router.get('/new', (req, res) => {
  res.render('./new');
});

router.post('/new', (req, res) => {
  const place = {
    name: req.body.name,
    location: {
      lat: parseFloat(req.body.locationlat),
      lng: parseFloat(req.body.locationlng)
    },
    kind: req.body.kind
  }

  const newPlace = new Place(place);
  newPlace.save( err => {
    if (err) { return next(err) }
    res.redirect('/');
  })
});

module.exports = router;
