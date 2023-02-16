const express = require('express');
const router = express.Router();

const Place = require('./../models/Place.model')

router.get('/places', (req, res, next) => {
    Place
        .find()
        .sort({ title: 1 })
        .then(place => {
            res.render('places/list-places', { place })
        })
        .catch(err => next(err))
})

router.get("/create", (req, res, next) => {
    res.render("places/create-places")
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

router.get('/edit/:_id', (req, res, next) => {

    const { _id } = req.params

    Place
        .findById(_id)
        .then(place => res.render('places/edit-places', place))
        .catch(err => next(err))
})

router.post('/places/edit', (req, res, next) => {
    const { name, type, location, place_id } = req.body
    Place
        .findByIdAndUpdate(place_id, { name, type, location })
        .then(place => res.redirect('/places'))
        .catch(err => next(err))
})

router.post('/delete/:place_id', (req, res, next) => {

    const { place_id } = req.params

    Place
        .findByIdAndDelete(place_id)
        .then(() => res.redirect('/places'))
        .catch(err => next(err))
})

router.get("/maps", (req, res, next) => {
    res.render("places/maps")
})


module.exports = router