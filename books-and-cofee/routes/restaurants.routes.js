const express = require('express');
const router = express.Router();

const Place = require('./../models/Place.model')

router.get('/new', (req, res, next) => {
    res.render('restaurants/new-restaurant')
})

router.post('/new', (req, res, next) => {
    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})

router.get('/map', (req, res, next) => {
    Place
        .find()
        .then(places => res.render('restaurants/map-restaurants', { places }))
        .catch(err => next(err))
})

router.get('/edit/:id', (req, res, next) => {
    const { id } = req.params
    Place
        .findById(id)
        .then(place => res.render('restaurants/edit-restaurant', place))
        .catch(err => next(err))
})

router.post('/edit/:id', (req, res, next) => {
    const { id } = req.params
    const { name, type, latitude, longitude } = req.body
    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }
    Place
        .findByIdAndUpdate(id, { name, type, location })
        .then(() => res.redirect('/places/map'))
        .catch(err => next(err))
})

router.post('/delete/:id', (req, res, next) => {
    const { id } = req.params
    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect('/places/map'))
        .catch(err => next(err))
})


module.exports = router