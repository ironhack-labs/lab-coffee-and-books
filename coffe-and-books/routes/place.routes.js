
const express = require('express');
const router = express.Router();

const Place = require('./../models/Place.model')


router.get('/create', (req, res, next) => {
    res.render('places/new-place')
})

router.post('/create', (req, res, next) => {
    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})

router.get('/list', (req, res, next) => {

    Place
        .find()
        .then(places => res.render('places/places-list', { places }))
        .catch(err => next(err))
})

router.get('/edit/:place_id', (req, res, next) => {
    const { place_id } = req.params

    Place
        .findById(place_id)
        .then(place => res.render('places/place-edit', place))
        .catch(err => next(err))
})

router.post('/edit/:place_id', (req, res, next) => {
    const { place_id } = req.params
    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]

    }
    Place
        .findByIdAndUpdate(place_id, { name, type, location })
        .then(place => res.redirect('/list'))
        .catch(err => next(err))
})

router.post('/delete/:place_id', (req, res, next) => {
    const { place_id } = req.params

    Place
        .findByIdAndDelete(place_id)
        .then(() => res.redirect('/list'))
        .catch(err => next(err))

})







module.exports = router;