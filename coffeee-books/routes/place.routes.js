const express = require('express')
const { findByIdAndDelete } = require('./../models/Place.model')
const router = express.Router()

const Place = require('./../models/Place.model')

router.get('/places', (req, res, next) => {
    // res.send('hola')

    Place
        .find()
        .then(places => res.render('places/places-list', { places }))
        .catch(err => next(err))
})

router.get("/placesmap", (req, res, next) => {
    res.render("places/places-map")
})


router.get('/create-places', (req, res, next) => {
    res.render('places/create-places')
})
router.post('/create-places', (req, res, next) => {
    const { name, type, longitude, latitude } = req.body

    const location = {
        type: 'point',
        coordinates: [longitude, latitude]
    }
    Place
        .create({ name, type, location })
        .then(place => res.redirect('/places'))
        .catch(err => next(err))

})

router.get('/places/:_id/update', (req, res, next) => {
    const { _id } = req.params
    Place
        .findById(_id)
        .then(place => res.render('places/update-places', place))
        .catch(err => next(err))
})

router.post('/places/:_id/update', (req, res, next) => {
    const { name, type, longitude, latitude, _id } = req.body

    const location = {
        type: 'point',
        coordinates: [longitude, latitude]
    }
    Place
        .findByIdAndUpdate(_id, { name, type, location })
        .then(() => res.redirect('/places'))
        .catch(err => next(err))
})

router.post('/places/:_id/delete', (req, res, next) => {

    const { _id } = req.params

    Place
        .findByIdAndDelete(_id)
        .then(() => res.redirect('/places'))
        .catch(err => next(err))
})

module.exports = router;
