const express = require('express');
const router  = express.Router();
const place = require('../models/Place');


/* GET home page. */
router.get('/', function(req, res, next) {

  place.find((error, places) => {
    if (error) { next(error); }
    else {
      res.render('index', { places });
    }
  });

});


router.post((req, res, next) => {
  // Get Params from POST
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

    const newPlace = {
      name:        req.body.name,
      description: req.body.description,
      location:    location
    };

  // Save the restaurant to the Database
  place.save((error) => {
    if (error) { console.log(error); }
    else {
      res.redirect('/');
    }
  });
});




module.exports = router;
