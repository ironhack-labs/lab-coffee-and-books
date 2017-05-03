var express = require('express');
var router = express.Router();
const Place = require('../models/place.js')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.post('/', function(req, res, next) {
  // Get Params from POST
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  // Create a new Restaurant with location
    const newPlace = {
      name:        req.body.name,
      description: req.body.description,
      location:    location
    };

    const place = new Place (newPlace);

  // Save the restaurant to the Database
  place.save((error) => {
    if (error) { console.log(error) }
    else {
      console.log(location);
      res.redirect('/');
    }
  })
});

module.exports = router;
