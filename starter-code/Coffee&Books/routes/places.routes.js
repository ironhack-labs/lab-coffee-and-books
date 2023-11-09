const express = require('express');
const router = express.Router();

const Place = require('./../models/Places.model')

router.get('/create', (req, res, next) => {
    res.render('places/create')
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
        .catch(error => next(error))
})

router.get('/list', (req, res, next) => {
    Place
        .find()
        .then(places => res.render(('places/list'), { places }))
        .catch(error => next(error))

})

router.get('/edit/:id', (req, res, next) => {
    const { id } = req.params

    Place
        .findById(id)
        .then(place => res.render(('places/edit'), place))
        .catch(error => next(error))

})

router.post('/edit/:id', (req, res, next) => {
    const { name, type, latitude, longitude } = req.body
    const { id } = req.params

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    Place
        .findByIdAndUpdate(id, { name, type, location })
        .then(() => res.redirect('/places/list'))
        .catch(error => next(error))

})

router.post('/delete/:id', (req, res, next) => {
    const { id } = req.params
    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect('/places/list'))
        .catch(error => next(error))

})

router.get('/map', (req, res, next) => {
    res.render('maps/map-places')
})


module.exports = router