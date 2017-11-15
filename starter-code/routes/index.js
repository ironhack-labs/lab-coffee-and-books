"use strict";

const express = require('express');
const router = express.Router();
const Place = require('../models/place').Place;

// -- THIS SECTION IS RESPONDING WITH AN ERROR -- //

/* GET home page. */
router.get('/', function(req, res, next) {
  Place.find({}, (err, place) => {
    // place[place._id] = place;
    if (err) {
      console.log(err);
    } else {
      // console.log(place);
      res.render("index", {
        place
      });
    }
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

router.get("/places/json", (req, res, next) => {
  Place.find((error, places) => {
    if (error) {
      console.log("error", error);
      res.status(500).json({
        error: "Ya fucked up!!"
      });
    } else {
      res.json(places);
    }
  });
});

///////////////////////

module.exports = router;
