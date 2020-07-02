const express = require('express')
const router = express.Router()

const Place = require('./../models/place.model')

// Endpoints

// ALL PLACES
router.get('/list', (req, res) => {
    Place.find()
        .then(allPlaces => res.render('places/index', {
            allPlaces
        }))
        .catch(err => next(err))
})

// =>>>CREATE NEW COFFEE SHOP
router.get('/new-coffee', (req, res, next) => res.render('places/new-coffee'))
router.post('/new-coffee', (req, res, next) => {
    const {
        name
    } = req.body

    const location = {
        type: 'coffee shop',
        coordinates: [req.body.longitude, req.body.latitude]
    }
    Place.create({
            name,
            location
        })
        .then(() => res.redirect('/places/list'))
        .catch(err => next(err))
})

// =>>>CREATE NEW BOOKSTORE
router.get('/new-book', (req, res, next) => res.render('places/new-book'))
router.post('/new-book', (req, res, next) => {
    const {
        name
    } = req.body

    const location = {
        type: 'bookstore',
        coordinates: [req.body.longitude, req.body.latitude]
    }
    Place.create({
            name,
            location
        })
        .then(() => res.redirect('/places/list'))
        .catch(err => next(err))
})

// <<<= EDIT PLACE
router.get('/:place_id/edit', (req, res, next) => {
    Place.findById(req.params.place_id)
        .then(place => res.render('places/edit', {
            place
        }))
})
router.post('/:place_id', (req, res, next) => {
    const {
        name,
        location
    } = req.body

    Place.findByIdAndUpdate(req.params.place_id, {
            name,
            location
        })
        .then(() => res.redirect(`/places/${req.params.place_id}/`))
        .catch(err => next(err))
})


// ---DELETE---
router.get('/:place_id/delete', (req, res, next) => {
    Place.findByIdAndDelete(req.params.place_id)
        .then(() => res.render(`/places`))
        .catch(err => next(err))
});

// GOOGLE MAPS
router.get('/api', (req, res, next) => {
    Place.find({})
        .then(allPlacesFromDB => res.json({
            allPlacesFromDB
        }))
        .catch(err => next(err))
});

router.get('/api/:id', (req, res, next) => {

    let placeId = req.params.id

    placeId.findById(placeId)
        .then(onePlaceFromDB => res.json({
            onePlaceFromDB
        }))
        .catch(err => next(err))
})


// SEE DETAILS FOR EACH PLACE
router.get('/details/:places_id', (req, res, next) => {
    Place.findById(req.params.places_id)
        .then(place => res.render('places/details', {
            place
        }))
        .catch(err => next(err))
})

module.exports = router