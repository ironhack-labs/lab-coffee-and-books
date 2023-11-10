const express = require('express')
const router = express.Router()
const Place = require('../models/place.model')

router.get("/", (req, res, next) => {

    Place
        .find()
        .then(places => res.render("places/places-list", { places }))
        .catch(err => next(err))
})

router.get('/create', (req, res, next) => {
    res.render('places/create-place')
})

router.post('/create', (req, res, next) => {

    const { name, type, longitud, latitud } = req.body

    const location = {
        type: "Point",
        coordinates: [longitud, latitud]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/places'))
        .catch(err => next(err))

})

router.get('/:id/edit', (req, res, next) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(place => res.render('places/update-place', place))
        .catch(err => next(err))

})


router.post('/:id/edit', (req, res, next) => {

    const { id } = req.params
    const { name, type, longitud, latitud } = req.body

    const location = {
        type: "Point",
        coordinates: [longitud, latitud]
    }

    Place
        .findByIdAndUpdate(id, { name, type, location })
        .then(place => res.redirect('/places'))
        .catch(err => next(err))
})

router.post('/:id/delete', (req, res, next) => {
    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect('/places'))
        .catch(err => next(err))
})

router.get("/map", (req, res, next) => {
    res.render("places/places-map")
})

module.exports = router