const express = require('express');
const router = express.Router();

const Place = require('../models/place');

/* GET form to add the location. */
router.get('/', function (req, res, next) {
  res.render('place');
});

/* POST form to add the location. */
router.post('/', function (req, res, next) {
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  const newPlace = new Place({
    name: req.body.name,
    establishment: req.body.establishment,
    location: location
  });

  newPlace.save((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

module.exports = router;
