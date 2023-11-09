const express = require('express')
const router = express.Router()

const Place = require('./../models/Place.model')

router.get('/lista', (req, res, next) => {

    Place
        .find()
        .then(places => res.render('places/list', { places }))
        .catch(err => next(err))

})
router.get('/crear', (req, res, next) => {
    res.render('places/create')
})

router.post('/crear', (req, res, next) => {

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})

router.get('/detalles/:places_id', (req, res, next) => {

    const { places_id } = req.params

    Place
        .findById(places_id)
        .then(places => res.render('places/details', { places }))
        .catch(err => next(err))
})

router.get('/:places_id/editar', (req, res, next) => {

    const { places_id } = req.params

    Place
        .findById(places_id)
        .then(places => res.render('places/edit', { places }))
        .catch(err => next(err))
})

router.post('/:places_id/editar', (req, res, next) => {

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }
    const { places_id } = req.params

    Place
        .findByIdAndUpdate(places_id, { name, type, location })
        .then(() => res.redirect(`/detalles/${places_id}`))
        .catch(err => next(err))
})

router.post('/:places_id/eliminar', (req, res, next) => {

    const { places_id } = req.params

    Place
        .findByIdAndDelete(places_id)
        .then(() => res.redirect('/lista'))
        .catch(err => next(err))
})

router.get("/mapa", (req, res, next) => {
    res.render('places/map');
})
module.exports = router