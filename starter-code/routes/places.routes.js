const express = require('express')
const { find } = require('../models/Place.model')
const router = express.Router()
const Place = require('../models/Place.model')

router.get('/lista', (req, res, next) => {
    Place
        .find()
        .then(listPlaces => res.render('places/list', {listPlaces}))
        .catch(err => console.log(err))
})


router.get('/crear', (req, res, next) => { res.render('places/create') })

router.post('/crear', (req, res, next) => {
    const { name, placeS, lat, lng } = req.body
    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Place
        .create({ name, placeS, lat, location })
        .then(res.redirect('/lista'))
        .catch(err => console.log(err))
})

router.get('/:place_id/editar', (req, res) => {
    const { place_id } = req.params

    Place
        .findById(place_id)
        .then(place => res.render('places/edit', place))
        .catch(err => console.log(err))
})

router.post('/:place_id/editar', (req, res) => {
    const { place_id } = req.params
    const { name, placeS, lat, lng} = req.body
    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }
    Place
        .findByIdAndUpdate(place_id, { name, placeS, location }, { new: true })
        .then(() => res.redirect('/lista'))
        .catch(err => console.log(err))
})

router.post('/:place_id/borrar', (req, res) => {
    const { place_id } = req.params
    Place
        .findByIdAndDelete(place_id)
        .then(() => res.redirect('/lista'))
        .catch(err => console.log(err))
})

router.get('/mapa', (req, res, next) => res.render('map'))

module.exports = router;