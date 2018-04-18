const express = require('express');
const router  = express.Router();
const Place = require("../models/Place")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.post("/", (req, res, next) => {
  // Get Params from POST
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  // Create a new Place with location
    const newPlace = new Place( {
      name:        req.body.name,
      description: req.body.description,
      location:    location
    });

  // Save the place to the Database
  newPlace.save((error) => {
    if (error) { console.log(error) }
    else {
      res.redirect('/');
    }
  })
});

module.exports = router;