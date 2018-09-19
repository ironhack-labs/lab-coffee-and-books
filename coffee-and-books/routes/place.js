
const express = require('express');
const router  = express.Router();
const Place = require('../models/Place');

//GET LIST
router.get('/', (req, res, next) => {
  Place.find().then(places => {
    res.render('place/list', {
      places,
      placeStr: JSON.stringify(places)
    })
  }).catch(e => next(e));
});

//GEt NEW
router.get('/new', (req, res, next) => {
  res.render('place/new')
})

//POSt NEW
router.post('/new', (req, res, next) => {
  
  let place = {
    name: req.body.name,
    kind: req.body.kind,
    location: {
      type: 'Point',
      coordinates: [Number(req.body.latitude), Number(req.body.longitude)]
    }
  };

  Place.create(place).then( place => {
    res.redirect('/place')
  }).catch(e => next(e));
})


module.exports = router;