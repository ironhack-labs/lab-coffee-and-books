const express = require('express')
const router = express.Router()

//Models
const Place = require('./../models/Place.model')

// List
router.get("/places", (req, res, next) => {
    Place
        .find()
        .then(place => {
            res.render("places/places", { place })
        })
        .catch(err => next(err))
})

// Create
router.get("/create", (req, res, next) => {
    res.render('places/create-place')
})

router.post("/create", (req, res, next) => {
    const { name, type, latitude, longitude } = req.body
    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/places'))
        .catch(err => next(err))
})


// Edit
router.get("/edit/:place_id", (req, res, next) => {
    const { place_id } = req.params
    Place
        .findById(place_id)
        .then(place => res.render('places/edit-place', place))
        .catch(err => next(err))
})

router.post('/edit/:place_id', (req, res, next) => {
    const { name, type, latitude, longitude, place_id } = req.body
    Place
        .findByIdAndUpdate(place_id, { name, type, latitude, longitude })
        .then(user => res.redirect('/places'))
        .catch(err => next(err))
})

// Delete
router.post('/delete/:place_id', (req, res, next) => {
    const { place_id } = req.params
    Place
        .findByIdAndDelete(place_id)
        .then(() => res.redirect('/places'))
        .catch(err => next(err))
})

// Map
router.get("/places/places-map", (req, res, next) => {
    res.render("places/places-map")
})









module.exports = router