
// index.js
const express = require('express');
const router  = express.Router();

router.post((req, res, next) => {
  // Get Params from POST
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  // Create a new Restaurant with location
    const newRestaurant = {
      name:        req.body.name,
      description: req.body.description,
      location:    location
    };

  // Save the restaurant to the Database
  restaurant.save((error) => {
    if (error) { console.log(error) }
    else {
      res.redirect('/');
    }
  })
});

module.exports = router;
