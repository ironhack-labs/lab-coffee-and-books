const express = require('express');
const router = express.Router();
const Place = require('../models/place');

/* GET home page */
router.get('/', (req, res, next) => {
  Place.find().then( places => {
    res.render('index',{places:JSON.stringify(places)});
  })
});

router.post('/', (req, res, next) => {
  const { name, kind, lat, lng } = req.body;
  let location = {
    type: 'Point',
    coordinates: [req.body.lat, req.body.lng]
  };
  const newPlace = new Place({
    name: req.body.name,
    kind: req.body.kind,
    location: location
  });
  newPlace.save((error) => {
    if (error) { next(error) }
    else {
      res.redirect('/');
    }
  })
});

module.exports = router;
