const express = require('express')
const router = express.Router()
const Place = require('../models/place.model')

// Endpoints
router.get('/', (req, res, next) => {
  Place
    .find()
    .then(all => res.render('places/places-list', { all }))
    .catch(err => new Error(next(err)))
})

// Create place
router.get('/new', (req, res) => res.render('places/place-new'))

router.post('/new', (req, res, next) => {
  const { name, type, description, latitude, longitude } = req.body

  const location = {
    type: 'Point',
    coordinates: [ latitude, longitude ]
  }

  Place
    .create({ name, type, description, location })
    .then(place => res.redirect('/places'))
    .catch(err => new Error(next(err)))
})

// Edit place
router.get('/edit/:id', (req, res, next) => {
  Place
    .findById(req.params.id)
    .then(info => res.render('places/place-edit', info))
    .catch(err => new Error(next(err)))
})

router.post('/edit/:id', (req, res, next) => {
  const { name, type, description, latitude, longitude } = req.body

  const location = {
    type: 'Point',
    coordinates: [ latitude, longitude ]
  }

  Place
    .findByIdAndUpdate(req.params.id, { name, type, description, location })
    .then(() => res.redirect('/places'))
    .catch(err => new Error(next(err)))
})

// Delete
router.post('/delete/:id', (req, res, next) => {
  Place
    .findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/places'))
    .catch(err => new Error(next(err)))
})

// Details
router.get('/:id', (req, res, next) => {
  Place
    .findById(req.params.id)
    .then(place => res.render('places/place-info', place))
    .catch(err => new Error(next(err)))
})


module.exports = router
