const express = require('express');

const router = express.Router();

const Place = require('../models/place');


/* GET home page */
router.get('/', (req, res, next) => {
  Place.find()
    .then((place) => {
      res.render('index', { place });
    })
    .catch(err => console.log(err));
});

module.exports = router;

router.get('/create', (req, res, next) => {
  res.render('create');
});

router.post('/create', (req, res, next) => {
  const {
    name, type, latitude, longitude,
  } = req.body;

  const location = {
    type: 'Point',
    coordinates: [longitude, latitude],
  };
  const newPlace = new Place({ name, type, location });

  newPlace.save()
    .then(() => {
      res.redirect('/create');
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get('/edit/:id', (req, res, next) => {
  const place = req.params.id;
  Place.findById(place)
    .then((place) => {
      res.render('edit', place);
    })
    .catch(err => console.log(err));
});

router.post('/edit/:id', (req, res, next) => {
  const {
    name, type, latitude, longitude,
  } = req.body;

  const location = {
    type: 'Point',
    coordinates: [longitude, latitude],
  };

  Place.update({ _id: req.params.id }, { $set: { name, type, location } })
    .then(() => {
      res.redirect('/');
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post('/delete/:id', (req, res, next) => {
  const place = req.params.id;
  Place.findByIdAndDelete(place)
    .then(() => {
      res.redirect('/');
    })
    .catch(err => console.log(err));
});

router.get('/api', (req, res, next) => {
  Place.find()
    .then((places) => {
      res.status(200).json({ places });
    })
    .catch(error => console.log(error));
});

