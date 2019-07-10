const express = require('express');
const Place = require('../models/place');

const router  = express.Router();

const { MAPSKEY } = process.env;

/* GET home page */
router.get('/', (req, res, next) => {
  Place.find()
    .then((place) => {
      res.render('index', { place, MAPSKEY });
    })
    .catch(err => console.log(err));
});

router.get('/places/add', (req, res, next) => {
  res.render('addPlace');
});

router.post('/places/add', (req, res) => {
  const { name, type } = req.body;
  const newPlace = new Place({ name, type, location: { type: 'Point', coordinates: [req.body.latitude, req.body.longitude] } });
  newPlace.save()
    .then((place) => {
      res.redirect('/');
    })
    .catch(err => console.log(err));
});

router.get('/places/:id', (req, res) => {
  const { id } = req.params;
  Place.findById(id)
    .then((place) => {
      res.render('placeDetails', { place, MAPSKEY });
    })
    .catch(err => console.log(err));
});

router.get('/places/:id/delete', (req, res) => {
  const { id } = req.params;
  console.log(id);
  Place.findByIdAndDelete(id)
    .then((place) => {
      res.redirect('/');
    })
    .catch(err => console.log(err));
});

router.get('/places/:id/edit', (req, res) => {
  const { id } = req.params;
  console.log(id);
  Place.findById(id)
    .then((place) => {
      res.render('editPlace', { place });
    })
    .catch(err => console.log(err));
});

router.post('/places/:id/edit', (req, res) => {
  const { name, type } = req.body;
  Place.update({ _id: req.params.id }, { $set: { name, type, location: { type: 'Point', coordinates: [req.body.latitude, req.body.longitude] } } }, { new: true })
    .then((place) => {
      res.redirect('/');
    })
    .catch(err => console.log(err));
});

router.get('/places/:id/delete', (req, res) => {
  const { id } = req.params;
  Place.findByIdAndDelete(id)
    .then((place) => {
      res.redirect('/');
    })
    .catch(err => console.log(err));
});

router.get('/api/locations', (req, res, next) => {
  Place.find()
    .then((places) => {
      res.status(200).json({ places });
    })
    .catch(error => console.log(error));
});


router.get('/api/locations/:id', (req, res, next) => {
  const locationId = req.params.id;
  Place.findOne({ _id: locationId })
    .then((location) => {
      res.status(200).json({ location });
    })
    .catch(err => console.log(err));
});

module.exports = router;
