const express = require('express');
const router = express.Router();
const Place = require('../models/Place')

/* GET home page. */
router.get('/', function(req, res, next) {
  Place.find({}, (err, place)=>{
  res.render('index', { place:'place' });
  })
});

router.post((req, res, next) => {
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

    const newPlace = {
      name:        req.body.name,
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
