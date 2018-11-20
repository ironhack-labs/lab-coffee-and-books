const express = require('express');
const router = express.Router();
const Place = require('../models/Place.js');


router.get('/', (req, res, next) => { //Find

  Place.find()
    .then(places => {
      res.render("places/index", { places });
    })
    .catch(error => {
      console.error(err);
      next(err);
    })
});

router.get('/getPlaces', (req, res, next) => {
  Place.find()
    .then(places => res.json({ places }))
    .catch(err => next(err));
});

router.get('/new', (req, res, next) => {
  res.render('places/new');
});

router.get('/:id', (req, res, next) => {

  Place.findById(req.params.id)
    .then(place => {
      res.render('places/show', { place });
      
    })
    .catch(err => {
      console.error(err);
    })
});



router.post('/new', (req, res, next) => { //Save


  if (req.body.name == '' || req.body.type == '' || req.body.lat == '' || req.body.lng == '') {
    res.redirect('/places/new');
  }

  const newPlace = new Place({
    name: req.body.name,
    type: req.body.type,
    location: {
      lat: parseFloat(req.body.lat),
      lng: parseFloat(req.body.lng),
    },
  });

  newPlace.save()
    .then(() => res.redirect('/places'))
    .catch(() => res.redirect('/places/new'));
});


router.post('/:id/delete', (req, res, next) => { //Delete
  Place.findByIdAndRemove(req.params.id)
    .then(place => {
      res.redirect('/places');
    })
    .catch(err => console.log(err));
});

module.exports = router;