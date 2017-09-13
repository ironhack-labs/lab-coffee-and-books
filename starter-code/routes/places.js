const express = require('express');
const router  = express.Router();
const Place = require("./models/place")

router.post('/places', (req, res, next) => {
  // Get Params from POST
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  // Create a new Restaurant with location
    const newPlace = {
      name:        req.body.name,
      category:    req.body.category,
      location:    location
    };

  // Save the restaurant to the Database
  Place.save((error) => {
    if (error) { console.log(error) }
    else {
      res.redirect('/');
    }
  })
});

module.exports = router;
