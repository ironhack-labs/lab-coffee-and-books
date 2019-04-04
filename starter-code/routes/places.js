const express = require('express');
const router = express.Router();
const Place = require('../models/places');


router.get('/index', (req, res) => {
  Place.find()
  .then(places => {
    res.render('places/index', {places: places})
  })
  .catch(err => {
    console.log(`Error showing the places in the DB: ${err}`)
  })
})


router.get('/new', (req, res) => {
  res.render('places/new');
})

router.post('/new', (req, res) => {
  let { lng, lat, ...place } = req.body;
  let newPlace = {
    ...place,
    location: {
      type: "Point",
      coordinates: [lng, lat]
    }
  };

  Place.create(newPlace)
    .then(() => {
      res.redirect('/places/index');
    })
    .catch(err => {
      console.log(`Error creting the place: ${err}`)
    })
});

router.get('/:id/edit', (req, res) => {
  const {id} = req.params;
  Place.findById(id)
    .then(place => {
      res.render('places/edit', place)
    })
    .catch(err => {
      console.log(err)
    })
})

router.post('/:id/delete', (req, res) => {
  const {id} = req.params;
  Place.findByIdAndRemove(id)
    .then(() => {
      res.redirect('/places/index')
    })
    .catch(err => {
      console.log(`There was an error deleting the place: ${err}`)
    })
})

router.post('/:id', (req, res) => {
  const {id} = req.params;
  Place.findByIdAndUpdate(id, {$set: {...req.body}})
    .then(() => {
      res.redirect('/places/index')
    })
    .catch(err => {
      console.log(`There was an error editing the place: ${err}`)
    })
})

module.exports = router;