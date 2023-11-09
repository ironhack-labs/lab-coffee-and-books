const express = require('express')
const router = express.Router()

const Place = require("../models/place.model")

router.get('/create', (req, res, next) => {
    res.render('places/create-place')
})

router.post('/create', (req, res, next) => {
    const { name, category, latitude, longitude } = req.body


    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    Place
        .create({ name, category, location })
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})

router.get('/map', (req, res, next) => {
    res.render('map/basic')
})

router.get('/shops', (req, res, next) => {
    Place
        .find()
        .then(place => res.render('places/list-places', { place }))
        .catch(err => next(err))
})

router.get('/edit/:placeid', (req, res, next) => {
    const { placeid } = req.params
    Place
        .findById(placeid)
        .then(placetoedit => res.render('places/edit-place', placetoedit))
        .catch(err => next(err))
})

router.post('/edit/:placeid', (req, res, next) => {
    const { placeid } = req.params
    const { name, category, latitude, longitude } = req.body


    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    Place
        .findByIdAndUpdate(placeid, { name, category, location })
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})

router.post('/delete/:placeid', (req, res, next) => {
    const { placeid } = req.params
    Place
        .findByIdAndDelete(placeid)
        .then(() => res.redirect('/shops'))
        .catch(err => next(err))
})





module.exports = router