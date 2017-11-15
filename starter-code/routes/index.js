"use strict";

const express = require('express');
const router = express.Router();
const Place = require('../models/place').Place;

// -- THIS SECTION IS RESPONDING WITH AN ERROR -- //

/* GET home page. */
router.get('/', function(err, req, res, next) {
  Place.find({}, (err, req, res, next) => {
    if (err) {
      console.log(err);
    } else {
      res.render("index"); //should be here??
    }
  }); // place here a callback or promise
  // res.render('index', {});
});


/////////////////////////
router.post("/", (req, res, next) => {
  // Get Params from POST
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  // Create a new Place with location
  const newPlace = {
    name: req.body.name,
    category: req.body.category,
    location: location
  };

  const place = new Place(newPlace);

  // Save the place to the Database
  place.save((error) => {
    if (error) {
      next(error);
    } else {
      res.redirect('/');
    }
  });
});

///////////////////////

module.exports = router;
