const express = require('express');
const router = express.Router();
const Place = require('../models/place.model')

router.get('/list', (req, res, next) => {
    Place
        .find()
        .then(places => res.render('places/list-places', { places }))
        .catch(err => next(err))
})

router.get('/create', (req, res, next) => {
    res.render('places/create-place')
})

router.post('/create', (req, res, next) => {

    const { name, type, latitud, longitud } = req.body
    const locate = {
        type: 'Point',
        cordinates: [latitud, longitud]
    }

    Place
        .create({ name, type, locate })
        .then(res.redirect('/places/list'))
        .catch(err => next(err))
})

router.get('/:id/edit', (req, res, next) => {
    const { id } = req.params
    Place
        .findById(id)
        .then(place => res.render('places/edit-place', place))
        .catch(err => next(err))
})
router.post('/:id/edit', (req, res, next) => {
    const { id } = req.params

    const { name, type, latitud, longitud } = req.body
    const locate = {
        type: 'Point',
        cordinates: [latitud, longitud]
    }
    Place
        .findByIdAndUpdate(id, { name, type, locate })
        .then(() => res.redirect('/places/list'))
        .catch(err => next(err))
})

router.post('/:id/delete', (req, res, next) => {
    const { id } = req.params
    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect('/places/list'))
        .catch(err => next(err))
})
router.get('/map', (req, res, next) => {
    res.render('places/places-map')
})

module.exports = router