const express = require('express')
const router = express.Router()

const Place = require('../models/place-model')

//READ
router.get('/', (req, res, next) => {
  Place.find()
    .then(allPlaces => res.render('index', { coffeeShops: allPlaces.filter(elm => elm.type == 'coffee shop'), bookstores: allPlaces.filter(elm => elm.type == 'bookstore') }))
    .catch(error => next(error))

})

router.get('/:placeId/details', (req, res, next) => {
  Place.findById(req.params.placeId)
    .then(foundPlace => res.render('places/details', foundPlace))
    .catch(error => next(error))
})

//CREATE
router.get('/creation', (req, res, next) => res.render('places/create'))

router.post('/creation', (req, res, next) => {
  const { name, type, latitude, longitude } = req.body
  Place.create({ name, type, location: { type: 'Point', coordinates: [latitude, longitude] } })
    .then(res.redirect('/'))
    .catch(error => next(error))
})

//DELETE
router.get('/:placeId/delete', (req, res, next) => {
  Place.findByIdAndRemove(req.params.placeId)
    .then(removedPlace => res.redirect('/'))
    .catch(error => next(error))
})

//UPDATE
router.get('/:placeId/update', (req, res, next) => {
  Place.findById(req.params.placeId)
    .then(foundPlace => res.render('places/update', foundPlace))
    .catch(error => next(error))
})

router.post('/:placeId/update', (req, res, next) => {
  const { name, type, latitude, longitude } = req.body
  Place.findByIdAndUpdate(req.params.placeId, { name, type, location: { type: 'Point', coordinates: [latitude, longitude] } }, { new: true })
    .then(foundPlace => res.redirect(`/${foundPlace._id}/details`))
    .catch(error => next(error))
})

//AJAX
router.get('/list-places', (req, res, next) => {
  Place.find()
    .then(allPlaces => res.json({ places: allPlaces }))
    .catch(error => next(error))
})

router.get('/:placeId/place', (req, res, next) => {
  Place.findById(req.params.placeId)
    .then(foundPlace => res.json({ place: foundPlace }))
    .catch(error => next(error))
})

module.exports = router
