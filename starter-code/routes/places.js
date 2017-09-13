const express = require('express');
const router  = express.Router();
const Place = require("../models/place")

router.post('/', (req, res, next) => {
  // Get Params from POST
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  // Create a new Restaurant with location
    const newPlace = new Place ({
      name:        req.body.name,
      category:    req.body.category,
      location:    location
    });

  // Save the restaurant to the Database
  newPlace.save((error) => {
    if (error) { console.log(error) }
    else {
      res.redirect('/');
    }
  })
});

module.exports = router;
