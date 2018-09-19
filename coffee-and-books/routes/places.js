const express = require('express');
const router  = express.Router();
const Place = require('../models/Place');


router.get('/', (req, res, next) => {
    Place.find().then( places => {
    res.render('places/list', {places, placeStr: JSON.stringify(places)});
  }).catch(e=> next(e));
});


router.get('/new', (req, res, next) => {
  res.render('places/new');
});

router.post('/new', (req, res, next) => {
  let place = {
    name: req.body.name,
    location: {
      type: 'Point',
      coordinates: [Number(req.body.latitude), Number(req.body.longitude)]
    }
  }
  Place.create(place).then( place => {
    res.redirect('/places');
  }).catch(e=> next(e));
});


module.exports = router;
