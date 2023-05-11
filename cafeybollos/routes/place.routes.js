const express = require('express');
const router = express.Router();

const Place = require('./../models/Place.model')

router.get('/create', (req, res, next) => {
    res.render('place/create-place')
})

router.post('/create', (req, res, next) => {

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

router.get('/list', (req, res, next) => {

    Place
        .find()
        .then(places => res.render('place/list-place', { places }))
        .catch(err => next(err))
})

router.get('/edit/:id', (req, res, next) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(place => res.render('place/edit-place', place))
        .catch(err => next(err))
})

router.post('/edit/:id', (req, res, next) => {

    const { name, type, latitude, longitude } = req.body
    const { id } = req.params
    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .findByIdAndUpdate(id, { name, type, location })
        .then(() => res.redirect('/places/list'))
        .catch(err => next(err))

})

router.post('/delete/:id', (req, res, next) => {

    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect('/places/list'))
        .catch(err => next(err))
})

module.exports = router