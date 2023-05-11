const express = require('express');
const router = express.Router();

const Place = require('./../models/Place.model')

router.get("/see-all", (req, res, next) => {

    Place
        .find()
        .select({ name: 1 })
        .then(places => res.render("places/place-list", { places }))
        .catch(err => console.log('---> user error', err))
})

router.get("/add-place", (req, res, next) => {
    res.render("places/new-place")
})

router.post("/add-place", (req, res, next) => {

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/places/see-all'))
        .catch(err => next(err))
})

router.get('/:id', (req, res, next) => {
    const { id } = req.params

    Place
        .findById(id)
        .then(place => {
            const latitude = place.location.coordinates[1]
            const longitude = place.location.coordinates[0]
            res.render('places/place-details', { place, latitude, longitude })
        })

        .catch(err => console.log('---> error displaying student profile', err))
})

router.get('/edit/:id', (req, res, next) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(place => {
            const latitude = place.location.coordinates[1]
            const longitude = place.location.coordinates[0]
            res.render('places/place-edit', { place, latitude, longitude })
        })
        .catch(err => console.log('---> error displaying place edit page', err))
})

router.post('/edit/:id', (req, res, next) => {
    const { name, type, latitude, longitude } = req.body
    const { id } = req.params
    const location = {
        type: 'Point',
        coordinates: [Number(longitude), Number(latitude)],
    }
    Place
        .findByIdAndUpdate(id, { name, type, location })
        .then(() => res.redirect(`/places/${id}`))
        .catch(err => console.log('---> error editing place', err))
})

router.post('/delete-place/:id', (req, res, next) => {
    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect('/places/see-all'))
        .catch(err => console.log('--> error deleting', err))
})

module.exports = router