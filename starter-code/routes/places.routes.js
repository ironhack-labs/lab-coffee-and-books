const express = require('express')
const router = express.Router()
const Place = require('../models/place.model')

// Endpoints

//Display
router.get('/', (req, res, next) => {
  Place.find()
    .then(allPlaces => res.render('places/index-places', { places: allPlaces }))
    .catch(err => next(new Error(err)))
})
//Create
router.get('/new', (req, res) => res.render('places/new-form'))
router.post('/new', (req, res, next) => {

  const { name, type, latitude, longitude } = req.body

  const location = {
      type: 'Point',
      coordinates: [latitude, longitude]
  }

  Place
      .create({ name, type, location })
      .then(() => res.redirect('/'))
      .catch(err => next(err))
})
//Edit
router.get('/edit', (req, res) => {
  Place
      .findById(req.query.id)
      .then(placeInfo => res.render('places/edit-form', placeInfo))
      .catch(err => console.log(err))
})
router.post('/edit', (req, res) => {

  const { name, type, latitude, longitude } = req.body

  const location = {
      type: 'Point',
      coordinates: [latitude, longitude]
  }  

  Place
      .findByIdAndUpdate(req.query.id, { name, type, location })
      .then(placeInfo => res.redirect('/places'))
      .catch(err => console.log(err))
})
//DELETE
router.get('/delete', (req, res, next) => {
  Place
    .findByIdAndDelete(req.query.id)
    .then(() => res.redirect('/places'))
    .catch(err => next(new Error(err)))
})

module.exports = router