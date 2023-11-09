const express = require('express')
const router = express.Router()

const Place = require('./../models/Place.model')

router.get('/create', (req, res, next) => {
    res.render('places/create-place')
})

router.get('/map', (req, res, next) => {
    res.render('places/map')
})

router.post('/create', (req, res, next) => {

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/places'))
        .catch(err => next(err))

})

router.get('/', (req, res, next) => {

    Place
        .find()
        .then(places => res.render('places/list-places', { places }))
        .catch(err => next(err))

})

router.get('/:place_id', (req, res, next) => {

    const { place_id } = req.params

    Place
        .findById(place_id)
        .then(place => res.render('places/details-place', place))
        .catch(err => next(err))

})

router.get('/:place_id/edit', (req, res, next) => {

    const { place_id } = req.params

    Place
        .findById(place_id)
        .then(place => res.render('places/edit-place', place))
        .catch(err => next(err))

})

router.post('/:place_id/edit', (req, res, next) => {

    const { place_id } = req.params
    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    Place
        .findByIdAndUpdate(place_id, { name, type, location })
        .then(() => res.redirect('/places'))
        .catch(err => next(err))

})

router.post('/:place_id/delete', (req, res, next) => {

    const { place_id } = req.params

    Place
        .findByIdAndDelete(place_id)
        .then(() => res.redirect('/places'))
        .catch(err => next(err))

})


module.exports = router