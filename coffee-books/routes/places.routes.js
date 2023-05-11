const express = require('express')
const router = express.Router()
const Places = require('../models/places')

// List/READ
router.get("/places", (req, res, next) => {
    Places
        .find()
        .then(places => {
            res.render("places/places", { places })
        })
        .catch(err => next(err))
})

// Create
router.get("/create-places", (req, res, next) => {
    res.render('places/create-places')
})

router.post("/create-places", (req, res, next) => {
    const { name, type, latitude, longitude } = req.body
    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Places
        .create({ name, type, location })
        .then(() => res.redirect('/places'))
        .catch(err => next(err))
})


// Edit
router.get("/edit/:places_id", (req, res, next) => {
    const { places_id } = req.params
    Places
        .findById(places_id)
        .then(place => res.render('places/edit-place', place))
        .catch(err => next(err))
})

router.post('/edit/:places_id', (req, res, next) => {
    const { name, type, latitude, longitude } = req.body
    const { places_id } = req.params

    Places
        .findByIdAndUpdate(places_id, { name, type, latitude, longitude })
        .then(user => res.redirect('/places'))
        .catch(err => next(err))
})

// Delete
router.post('/delete/:places_id', (req, res, next) => {
    const { places_id } = req.params
    Places
        .findByIdAndDelete(places_id)
        .then(() => res.redirect('/places'))
        .catch(err => next(err))
})

// Map
router.get("/places/placesmap", (req, res, next) => {
    res.render("places/placesmap")
})


module.exports = router