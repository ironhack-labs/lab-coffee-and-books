const express = require('express')
const router = express.Router()

const Place = require('../models/place.model')

// Endpoints
router.get('/', (req, res) => {

    Place.find()
        .then((places) => res.render('places/places-list', { places }))
        .catch(err => console.log(err))
})

router.get('/details/:id', (req, res) => {

    Place.findById(req.params.id)
        .then((place) => res.render('places/place-details', place))
        .catch(err => console.log(err))
})

router.get('/new', (req, res) => {
    res.render('places/place-new')
})

router.post('/new', (req, res) => {

    const location = {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude]
    }

    const newPlace = {
        name: req.body.name,
        location,
        type: req.body.type
    }

    Place.create(newPlace)
        .then(() => {
            Place.find()
            .then((places) => res.render('places/places-list', { places }))
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    
})

router.get('/edit/:id', (req, res) => {

    Place.findById(req.params.id)
        .then((result) => res.render('places/place-edit', result))
        .catch(err => console.log(err))
})

router.post('/edit/:id', (req, res) => {
    console.log(req.params.id)
    console.log(req.params.body)

    Place.findByIdAndUpdate(req.params.id, req.params.body)
        .then(() => res.redirect('/places'))
        .catch(err => console.log(err))
})

module.exports = router