var express = require('express');
var router = express.Router();
const Place = require("../models/place");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/places', (req, res, next) => {
  // Get Params from POST
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  // Create a new Restaurant with location
    const placeInfo = {
      name:        req.body.name,
      establishment: req.body.establishment,
      location:    location
    };
  const newPlace = new Place(placeInfo);
  // Save the restaurant to the Database
  newPlace.save((error) => {
    if (error) { console.log(error) }
    else {
      res.redirect('/');
    }
  })
});

  router.get('/api/places',(req, res, next) => {
  Place.find((error, places) => {
    if (error) { next(error); }
    else {
      res.json(places);
    }
  })
})

module.exports = router;
