const express = require('express');
const router  = express.Router();
const Place = require("../models/place");

router.get('/', function(req, res, next) {
  res.render('place/new');
});

router.get('/json', function(req, res, next) {
  
  Place.find({}, (err, places) => {
    if (err) { 
      res.status(500).json();
    }
    else {
      console.log(places);
      res.json(places);
    }
  });
});

router.post("/",(req, res, next) => {
  // Get Params from POST
  // Create a new Restaurant with location
    const location =  {
      type: 'Point',
      coordinates: [req.body.longitude, req.body.latitude]
    }

    const newInfo = {
      name:        req.body.name,
      description: req.body.description,
      location:    location,
    };

  const newPlace = new Place(newInfo);

  // Save the restaurant to the Database
  newPlace.save((error) => {
    if (error) { console.log(error) }
    else {
      res.redirect('/');
    }
  })
});
  
module.exports = router;