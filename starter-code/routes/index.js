/*jshint esversion: 6*/

const express = require('express');
const router  = express.Router();

const Place = require('../models/place');

/* GET home page. */
router.get('/', (req, res, next) => {
  Place.find({}, {"_id":0}, (err, places) => {
    if(err) {next(err);}
    res.render('index', { places });
  });

});

router.get('/create', (req, res, next) => {
  res.render('create');
});

router.post('/create', (req, res, next) => {
  let location = {
	    type: 'Point',
	    coordinates: [req.body.longitude, req.body.latitude]
	  };
  let placeInfo = {
    name: req.body.name,
    description: req.body.description,
    kindPlace: req.body.kindPlace,
    location: location
  };

  const place = new Place (placeInfo);
  place.save((err) => {
    if(err) {next(err);}
    res.redirect('/');
  });
});

module.exports = router;
