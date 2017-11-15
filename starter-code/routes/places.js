const express = require('express');
const placeRouter = express.Router();

// User model
const Place = require("../models/Place");

/* GET home page. */
placeRouter.get('/', function(req, res, next) {
  Place.find()
  .then(places => res.render('places/index', { title: 'Coffee & Cigar', places: places}))
  .catch(err => console.log(err));

});

//go to Add new place
placeRouter.get('/new', function(req, res, next) {
  res.render('places/new', { title: 'Add a new place' });
});
//Post route to receive the data from the signup form and save the user
placeRouter.post('/', (req, res, next) => {
  // Get Params from POST
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  // Create a new Place with location
    const newPlace = Place ({
      name:        req.body.name,
      description: req.body.description,
      location:    location
    });

  // Save the Place to the Database
  newPlace.save((error) => {
    if (error) { console.log(error); }
    else {
      res.redirect('/places');
    }
  });
});

//controller send the information to the view.
placeRouter.get((req, res, next) => {
  Place.find((error, places) => {
    if (error) { next(error); }
    else {
      res.render('places/index', { places });
    }
  });
});


module.exports = placeRouter;
