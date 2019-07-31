const express = require('express')
const router = express.Router()

const Place = require('../models/Place.model')


// Listado de places
router.get('/list', (req, res, next) => {
  Place.find({})
    .then(allThePlaces => res.render('places-list', { places: allThePlaces }))  // ojo! pasar obj
    .catch(err => console.log('Hubo un error:', err))
})


// Detalle de place
router.get('/detail/:id', (req, res, next) => {
  const placeId = req.params.id
  Place.findById(placeId)
    .then(theWholePlace => res.render('place-detail', { place: theWholePlace }))
    .catch(err => console.log('Hubo un error:', err))
})