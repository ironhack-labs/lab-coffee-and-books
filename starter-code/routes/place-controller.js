const express = require('express');
const Place = require('../models/Place');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //Show all places on DB
  Place.find().then(data => {
    res.render('index', {title: 'Coffee & Books', places: data});
  });
});

router.get('/new', (req, res) => {
  res.render('new', {title: 'Coffee & Books'});
});

router.post('/new', (req, res, next) => {
  //Take the data from the user input
  const newPlaceInfo = {
    name: req.body.name,
    type: req.body.kind,
    location: {type:"point", coordinates:[req.body.longitude,req.body.latitude]}
  };

  const newPlace = new Place(newPlaceInfo);
  newPlace.save()
          .then(() => res.redirect('/'))
          .catch(e => next(e));
});
module.exports = router;
