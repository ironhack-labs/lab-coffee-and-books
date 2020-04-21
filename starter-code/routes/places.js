const express = require('express')
const router = express.Router()
const Place = require('../models/place')

//lista
router.get('/', (req, res, next) => {
    Place.find()
        .then(allPlaces => res.render('places/index', { allPlaces }))
        .catch(err => console.log('Error', err))
})

//new place
router.get('/new', (req, res, next) => res.render('places/new'))
router.post('/new', (req, res, next) => {
    let location = {
        type: "Point",
        coordinates: [req.body.longitude, req.body.latitude]
    }

    Place.create({
        name: req.body.name,
        type: req.body.type,
        location: location
    })
        .then(() => res.redirect('/'))
        .catch(err => console.log('Error', err))
})

//delete
router.post('/:id/delete', (req, res, next) => {
    Place.findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/'))
        .catch(err => console.log('Error', err))
})

//edit
router.get('/:id/edit', (req, res, next) => {
    Place.findById(req.params.id)
        .then(placeEdit => res.render('places/edit', { placeEdit }))
        .catch(err => console.log('Error', err))
})

router.post('/:id/edit', (req, res, next) => {
    let location = {
        type: "Point",
        coordinates: [req.body.longitude, req.body.latitude]
    }

    Place.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        type: req.body.type,
        location: location
    }, { new: true })
        .then(updatedPlace => res.redirect(`/`))
        .catch(err => console.log('Error', err))
})


router.get('/places-data', (req, res, next) => {
    Place.find()
        .then(allPlaces => res.json(allPlaces))
        .catch(err => console.log('Error', err))
})


module.exports = router