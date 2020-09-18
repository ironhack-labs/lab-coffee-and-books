const express = require('express')
const router = express.Router()

const Place = require('../models/place')

router.get('/list', (req, res, next) => {

    Place.find()
        .then(allplaces => res.render('places/list', {
            allplaces
        }))
        .catch(err => next(err))
})

router.get('/new', (req, res, next) => res.render('places/new'))

router.post('/new', (req, res, next) => {

    const location = {
        type: 'Point',
        coordinates: [req.body.longitud, req.body.latitud]
    }

    const newPlace = {
        name: req.body.name,
        type: req.body.type,
        location
    }

    Place.create(newPlace)
        .then(() => res.redirect('/place/list'))
        .catch(err => next(err))
})

router.get('/update/:id', (req, res, next) => {

    const placeId = req.params.id

    Place.findById(placeId)
        .then(placeToUpdate => res.render('places/update', placeToUpdate))
        .catch(err => next(err))
})

router.post('/update/:id', (req, res, next) => {

    const placeId = req.params.id

    const location = {
        type: 'Point',
        coordinates: [req.body.longitud, req.body.latitud]
    }

    const newPlace = {
        name: req.body.name,
        type: req.body.type,
        location
    }

    Place.findByIdAndUpdate(placeId, newPlace)
        .then(() => res.redirect(`/place/${placeId}`))
        .catch(err => next(err))

})

router.post('/:id/delete', (req, res, next) => {

    const placeId = req.params.id

    Place.findByIdAndDelete(placeId)
        .then(() => res.redirect('/place/list'))
        .catch(err => console.log(err))

})

router.get('/:id', (req, res, next) => {

    const placeId = req.params.id

    Place.findById(placeId)
        .then(placeDetails => res.render('places/place-details', placeDetails))
        .catch(err => next(err))

})

module.exports = router