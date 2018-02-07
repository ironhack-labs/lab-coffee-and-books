var express = require('express');
var router = express.Router();

const Place = require('../models/place.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/add-place', (req, res, next) => {
  res.render('form');
});

router.post('/add-place', (req, res, next) => {
  const name = req.body.name;
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;

  const newPlace = new Place({
    name,
    longitude,
    latitude
  });
  newPlace.save((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

router.get('/map', (req, res, next) => {
  res.render('map');
});
module.exports = router;
