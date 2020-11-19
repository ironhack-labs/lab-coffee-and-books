const express = require('express')
const router = express.Router()

const Place = require('../models/place.model')



// Endpoints


router.get('/', (req, res) => res.render('index'))





router.get('/places', (req, res) => {
  
  const bookstores = Place.find({ type: 'bookstore' })
  const coffeeshops = Place.find({ type: 'coffee shop' })
  
  Promise
    .all([bookstores, coffeeshops])
    .then(places => res.render('places-index', { bookstores: places[0], coffeeshops: places[1] }))
    .catch(err => next(err))
})





router.get('/new', (req, res) => res.render('new-place'))

router.post('/new', (req, res, next) => {
  const { name, type, address, lat, lng } = req.body

  Place
    .create({ name, type, address, location: { coordinates: { lat, lng } } })
    .then(place => res.redirect('/places'))
    .catch(err => next(err))
})





router.get('/delete', (req, res, next) => {
  const placeId = req.query.id
  
  Place
    .findByIdAndDelete(placeId)
    .then(() => res.redirect('/places'))
    .catch(err => next(err))
})





router.get('/edit', (req, res, next) => {
  const placeId = req.query.id
  
  Place
    .findById(placeId)
    .then(place => res.render('edit-place', { place }))
    .catch(err => next(err))
})

router.post('/edit', (req, res, next) => {
  const placeId = req.query.id
  const { name, type, address, lat, lng } = req.body
  
  Place
    .findByIdAndUpdate(placeId, { name, type, address, location: { coordinates: { lat, lng } } })
    .then(place => res.redirect(`${placeId}`))
    .catch(err => next(err))
})





router.get('/:id', (req, res, next) => {
  const placeId = req.params.id

  Place
    .findById(placeId)
    .then(place => res.render('place-details', { place }))
    .catch(err => next(err))
})


module.exports = router
