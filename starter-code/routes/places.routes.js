const router = require('express').Router()
const Place = require('../models/Place.model')

// CREATE FORM

router.get('/create', (req, res, next) => res.render('places/create-form'))

router.post('/create', (req, res, next) => {

    const { name, type, lat, lng } = req.body
    Place
        .create({ name, type, location: { coordinates: [Number(lat), Number(lng)] } })
        .then(() => res.redirect('/'))
        .catch(error => next(error))
})

// PLACES LIST

router.get('/places', (req, res, next) => {
    Place
        .find()
        .then(data => res.render('places/places-page', { data }))
        .catch(error => next(error))
})

// PLACE INFO

router.get('/places/:id', (req, res, next) => {
    const { id } = req.params

    Place
        .findById(id)
        .then(data => res.render('places/place-info-page', data))
        .catch(error => next(error))
})

// EDIT PLACE

router.get('/places/:id/edit', (req, res, next) => {
    const { id } = req.params

    Place
        .findById(id)
        .then(data => res.render('places/edit-place-form', data))
        .catch(error => next(error))
})

router.post('/places/:id/edit', (req, res, next) => {
    const { id } = req.params
    const { name, type } = req.body

    Place
        .findByIdAndUpdate(id, { name, type })
        .then(() => res.redirect(`/places/${id}`))
        .catch(error => next(error))
})

// DELETE PLACE

router.post('/places/:id/delete', (req, res, next) => {
    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect('/places'))
        .catch(error => next(error))
})

module.exports = router