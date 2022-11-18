const router = require('express').Router()
const mongoose = require("mongoose")

const PlaceModel = require('../models/Place.model')

//-----------------------------GET----------------------------//

router.get('/', (req, res, next) => {
    PlaceModel
        .find()
        .then(places => res.render('places/index', { places }))
        .catch(next)
})

router.get('/create', (req, res) => {
    res.render('places/create')
})

router.get('/:id', (req, res, next) => {
    const { id } = req.params
    PlaceModel
        .findById(id)
        .then(place => res.render('places/place', { place: place }))
        .catch(next)
})

router.get('/:id/edit', (req, res, next) => {
    const { id } = req.params
    PlaceModel
        .findById(id)
        .then(place => res.render('places/edit', { place: place }))
        .catch(next)
})

router.get('/:id/delete', (req, res, next) => {
    const { id } = req.params
    PlaceModel
        .findByIdAndDelete(id)
        .then(() => res.redirect('/places'))
        .catch(next)
})

// -----------------------------POST--------------------------//

router.post('/create', (req, res, next) => {
    const { name, type, lng, lat } = req.body
    const place = {
        name,
        type,
        location: {
            type: 'Point',
            coordinates: [lng, lat]
        }
    }

    PlaceModel
        .create(place)
        .then(() =>
            console.log(place.type), res.redirect('/places'))
        .catch(next)
})

router.post('/:id/edit', (req, res, next) => {
    const { id } = req.params
    const { name, type, lng, lat } = req.body
    PlaceModel
        .findByIdAndUpdate(id, { name, type, lng, lat })
        .then(() => res.redirect('/places/place'))
        .catch(next)
})

module.exports = router