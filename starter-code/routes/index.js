var express = require('express');
var router = express.Router();
const MongoDB = require('mongodb');

const mongoClient = MongoDB.MongoClient;

const Place = require('../models/place.js');

const url = `mongodb://localhost/coffee-and-books`;

mongoClient.connect(url, (error, db) => {
  if (error) {
    console.log('Error trying to connect to the Database');
    console.log(error);
  } else {
    console.log('Connection established correctly!! 😬');
  }
});

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
  let placeInfo = Place.find({}, (err, places) => {
    if (err) {
      return next(err);
    }
  }).toArray();
  console.log(placeInfo);

  res.render('map', placeInfo);
});
module.exports = router;
