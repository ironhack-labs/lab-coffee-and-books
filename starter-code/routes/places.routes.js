const express = require('express')
const Place = require('../models/Place.model')
const router = express.Router()

router.get('/list', (req, res) => {
  Place.find()
    .then(places => res.render('places/list', { places }))
    .catch(err => console.log(err))
})

router.get('/create', (req, res, next) => res.render('places/create'))

router.post('/create', (req, res, next) => {
  const { name, type, latitude, longitude } = req.body
  const location = {
    type: 'Point',
    coordinates: [longitude, latitude]
  }

  Place.create({ name, type, location })
    .then(() => res.redirect('/places/list'))
    .catch(err => console.log(err))
})

router.get('/:id/edit', (req, res) => {
  const { id: place_id } = req.params

  Place.findById(place_id)
    .then(place => res.render('places/edit', place))
    .catch(err => console.log(err))
})

router.post('/:id/edit', (req, res) => {
  const { id: place_id } = req.params
  const { name, type, latitude, longitude } = req.body
  const location = {
    type: 'Point',
    coordinates: [longitude, latitude]
  }

  Place.findByIdAndUpdate(place_id, { name, type, location })
    .then(() => res.redirect('/places/list'))
    .catch(err => {
      console.log(err)
      res.render('places/edit')
    })
})

router.post('/:id/delete', (req, res) => {
  const { id: place_id } = req.params

  Place.findByIdAndDelete(place_id)
    .then(() => res.redirect('/places/list'))
    .catch(err => console.log(err))
})

router.get('/map', (req, res, next) => {
  res.render('places/map')
})

module.exports = router
