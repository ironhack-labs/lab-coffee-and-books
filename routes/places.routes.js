const express = require('express');
const router = express.Router();

const Place = require('./../models/place-model')

router.get('/', (req, res) => {
    Place
        .find()
        .select({ name: 1 })
        .then((places) => {
            res.render('places/list-places', { places })
        })
        .catch(err => console.log(err))
})

router.get('/create', (req, res) => {
    res.render('places/create-place')
})

router.post('/create', (req, res) => {
    const { name, type, latitude, longitude } = req.body

    let location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }
    console.log(location)

    Place
        .create({ name, type, location })
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => console.log(err))
})

router.get('/:place_id', (req, res) => {
    const { place_id } = req.params

    Place
        .findById(place_id)
        .then((place) => {
            /*  console.log(place) */

            res.render('places/details-place', place)
        })
        .catch(err => console.log(err))
})

router.get('/:place_id/edit', (req, res) => {
    const { place_id } = req.params

    Place
        .findById(place_id)
        .then((place) => {
            res.render('places/edit-place', place)
        })
        .catch(err => console.log(err))
})

router.post('/:place_id/edit', (req, res) => {
    const { name, type, latitude, longitude } = req.body
    const { place_id } = req.params

    let location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .findOneAndUpdate(place_id, { name, type, location })
        .then(() => {
            res.redirect(`/places/${place_id}}`)
        })
        .catch(err => console.log(err))
})


router.post('/:place_id/delete', (req, res) => {
    const { place_id } = req.params

    Place
        .findByIdAndDelete(place_id)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => console.log(err))
})



module.exports = router