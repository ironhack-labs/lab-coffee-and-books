const express = require('express');
const router = express.Router();
const place = require('../models/place');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


// Place Crud Get
router.get('/place', (req, res, next) => {
  place.find()
    .then(places => {
      res.render('place/index', { places });
    })
    .catch(err => {
      console.log(err);
    })
});

router.get('/place/create', (req, res, next) => {
  res.render('place/create');
});

router.get('/place/edit/:placeID', (req, res, next) => {
  place.findById(req.params.placeID)
    .then(places => {
      res.render('place/edit', places);
    })
    .catch(err => {
      console.log(err);
    })
});

// Place Crud POST

router.post('/place/create', (req, res, next) => {
  const { name, type, latitude, longitude } = req.body;

  const location = {
    type: 'Point',
    coordinates: [longitude, latitude]
  };

  place.create(new place({ name, type, location }))
    .then(() =>
      res.redirect('/place'))
    .catch((err) =>
      console.log(err)
    )
})

router.post('/place/edit', (req, res, next) => {
  const { name, type, latitude, longitude } = req.body;
  const location = {
    type: 'Point',
    coordinates: [longitude, latitude]
  };
  place.update({ _id: req.body.placeID }, { $set: { name, type, location } })
    .then(() =>
      res.redirect('/place'))
    .catch((err) =>
      console.log(err)
    )
})

router.get('/place/remove/:placeID', (req, res, next) => {
  place.findByIdAndRemove(req.params.placeID)
    .then(() => {
      res.redirect('/place')
    })
    .catch((err) => {
      console.log(err);
    })
})
module.exports = router;
