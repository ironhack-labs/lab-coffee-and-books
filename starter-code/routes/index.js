/*jshint esversion: 6*/
var express = require('express');
var router = express.Router();
const Place = require('../models/place');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/show', function(req, res, next) {
  res.render('show');
});

router.post('/create',(req, res, next) => {
  // Get Params from POST
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  // Create a new Restaurant with location
    const newPlace = new Place ({
      name:        req.body.name,
      description: req.body.description,
      local: req.body.level,
      location:    location
    });

  // Save the restaurant to the Database
  newPlace.save((error) => {
    if (error) { console.log(error); }
    else {
      res.redirect('/');
    }
  });
});

module.exports = router;
