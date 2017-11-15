"use strict";

const express = require('express');
const router = express.Router();
const Place = require('../models/place');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

/////////////////////////
router.post("/", (req, res, next) => {
  // Get Params from POST
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  // Create a new Place with location
  const newPlace = new Place({
    name: req.body.name,
    location: location
  });

  // Save the place to the Database
  newPlace.save((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("added to database");
      // res.redirect('/');
    }
  });
});

///////////////////////

module.exports = router;
