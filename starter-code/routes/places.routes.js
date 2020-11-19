const express = require('express')
const router = express.Router()

const Place = require('./../models/place')

router.get('/', (req, res, next) => {

  Place
    .find()
    .then(response => res.render('places/index-places', { response }))
    .catch(err => next(new Error(err)))

})

router.get('/new', (req, res, next) => {

  res.render('places/new-place')
})

router.post('/new', (req, res, next) => {

  const { name, type, latitude, longitude } = req.body

  const location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }

  Place
    .create({ name, type, location })
    .then(() => res.redirect('/places'))
    .catch(err => next(new Error(err)))
})

router.post('/delete', (req, res, next) => {

  const placeId = req.query.place_id

  Place
    .findByIdAndDelete(placeId)
    .then(() => res.redirect('/places'))
    .catch(err => next(new Error(err)))

})

router.get('/edit', (req, res, next) => {

  const placeId = req.query.place_id

  Place
    .findById(placeId)
    .then(response => res.render('places/edit-place', response))
    .catch(err => next(new Error(err)))

})

router.post('/edit', (req, res, next) => {

  const placeId = req.query.place_id

  const { name, type, latitude, longitude } = req.body

  const location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }

  Place
    .findByIdAndUpdate(placeId, { name, type, location})
    .then(()=> res.redirect('/places'))
    .catch(err => next(new Error(err)))

})

router.get('/:place_id', (req, res, next) => {

  const placeId = req.params.place_id

  Place
    .findById(placeId)
    .then(response => res.render('places/details-place', response))
    .catch(err => next(new Error(err)))
})

module.exports = router