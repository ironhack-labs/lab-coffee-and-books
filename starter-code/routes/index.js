const express = require('express');
const router = express.Router();
const Places = require('../models/Places');

/* GET home page. */
router.get('/', function(req, res, next) {
  Places.find((error, places) => {
    if (error) {
      next(error);
    } else {
      res.render('places/index', { places });
    }
  })
});

router.get('/new', function(req, res, next) {
  res.render('places/new');
});

router.post('/new',(req, res, next) => {
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  const newPlaces = {
    name: req.body.name,
    description: req.body.description,
    location: location
  };

  const places = new Places(newPlaces);

  places.save()
   .then(() => res.redirect('/'))
   .catch(err => next(err))

});

module.exports = router;
