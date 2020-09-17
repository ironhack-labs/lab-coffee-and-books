const express = require('express')
const router = express.Router()

const Place = require('../models/place.model')

// Endpoints

// Render all places
router.get('/', (req, res) => {
  
  Place
    .find({})
    .then(allPlaces => res.render('places/list-places', { allPlaces }))
    .catch(err => next(err))

})

// Render create form 
router.get('/new-place', (req, res, next) => res.render('places/create-place'))

// Create new place
router.post('/new-place', (req, res, next) => {

  const location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  }

  const newPlace = {
    name: req.body.name,
    type: req.body.type,
    location
  }

  Place
    .create(newPlace)
    .then(() => res.redirect('/'))  
    .catch(err => next(err))  

})

// Render update form
router.get('/update/:place_id', (req, res, next) => {

  const id = req.params.place_id

  Place
    .findById(id)
    .then(place => res.render('places/update-place', place))
    .catch(err => next(err))

})

// Update place
router.post('/update/:place_id', (req, res, next) => {

  const id = req.params.place_id

  const location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  }

  const updatePlace = {
    name: req.body.name,
    type: req.body.type,
    location
  }

  Place
    .findByIdAndUpdate(id, updatePlace)
    .then(() => res.redirect('/places'))
    .catch(err => next(err))

})
  
  
router.get('/delete/:place_id', (req, res, next) => {

  const id = req.params.place_id

  Place
    .findByIdAndDelete(id)
    .then(() => res.redirect('/places'))
    .catch(err => next(err))

})

module.exports = router
