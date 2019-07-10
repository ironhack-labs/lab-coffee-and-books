const express = require('express');
const router = express.Router();
const Place = require('../models/place');


router.get('/places', (req, res) => {
  Place.find()
    .then((places) => {
      res.render('places/places', { places });
    })
    .catch(err => console.log(err));
});

router.get('/places/:placesID', (req, res) => {
  Place.findById(req.params.placesID)
    .then((places) => {
      res.render('places/places-page', places);
    })
    .catch(err => console.log(err));
});

router.get('/place/new', (req, res) => {
  res.render('places/places-new');
});

router.post('/place/new', (req, res) => {
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude],
  };
  const { name, type } = req.body;
  const newPlace = new Place({ 
    name,
    type,
    location,
  });
  newPlace.save()
    .then(() => res.redirect('/places'))
    .catch(err => console.log(err));
});

router.post('/place/:placesID/delete', (req, res) => {
  const { placesID } = req.body;
  Place.findByIdAndRemove(placesID)
    .then(() => {
      res.redirect('/places');
    })
    .catch(err => console.log(err));
});

router.get('/:placesID/edit', (req, res) => {
  Place.findById(req.params.placesID)
    .then((places) => {
      console.log(places)
      res.render('places/places-edit', places);
    })
    .catch(err => console.log(err));
});

router.post('/:placesID/edit', (req, res) => {
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude],
  };
  const { name, type } = req.body;
  Place.update({ _id: req.params.placesID }, { $set: { name, type, location } })
    .then(() => {
      res.redirect('/places');
    })
    .catch(err => console.log(err));
});

module.exports = router;
