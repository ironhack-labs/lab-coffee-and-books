var express = require('express');
var router = express.Router();
const Place = require('../models/Place');


router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});


router.post('/', (req, res, next) => {
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  const newPlace = {
    name: req.body.name,
    description: req.body.description,
    location: location
  };
  console.log(newPlace);
  const place = new Place(newPlace);
  place.save((error) => {
    if (error) {
    } else {
      res.redirect('/');
    }
  });
});

router.get('/list', function(req, res, next) {
  Place.find({}, (err, item) => {
    res.render('index', {item:item});
  });
});
module.exports = router;
