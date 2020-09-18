const express = require('express')
const router = express.Router()
const Place = require('../models/place.model')

router.get('/', (req, res) => {
    Place.find()
        .then(places => res.render('places/index', {
            places
        }))
        .catch(err => console.log('ERROR:', err))
})

router.get('/new', (req, res) => res.render('places/new'))

router.post('/new', (req, res) => {
    const {
        name,
        type,
        latitude,
        longitude
    } = req.body
    let location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }
    Place.create({
            name,
            type,
            location
        })
        .then(() => {
            if (
                name === undefined ||
                type === undefined) {
                res.redirect("/places/new");
            } else {
                res.redirect("/places");
            }
        })
        .catch(() => res.redirect("/places/new"));
})

router.get('/edit/:place_id', (req, res) => {
    const place_id = req.params.place_id

    Place.findById(place_id)
        .then(placeEdit => res.render('places/edit', placeEdit))
        .catch(err => console.log('ERROR:', err))
})

router.post('/edit/:place_id', (req, res) => {
    const place_id = req.params.place_id

    const {
        name,
        type,
        longitude,
        latitude
    } = req.body

    Place.findByIdAndUpdate(place_id, {
            name,
            type,
            longitude,
            latitude
        })
        .then(() => res.redirect('/places'))
        .catch(err => res.redirect('/places/edit', err))
})

router.post('/:place_id/delete', (req, res) => {
    const id = req.params.place_id
    Place.findByIdAndDelete(id)
        .then(() => res.redirect('/places'))
        .catch(err => console.log('ERROR:', err))
})

router.get('/:place_id', (req, res) => {
    const id = req.params.place_id
    Place.findById(id)
        .then(detailPage => res.render('places/details', detailPage))
        .catch(err => console.log('ERROR:', err))
})

module.exports = router