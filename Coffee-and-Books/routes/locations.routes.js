const express = require('express');
const router = express.Router();

const Location = require('../models/Place.model')

// Creamos los nuevos locations
router.get('/create', (req, res, next) => {
    res.render('locations/new-location')
})

router.post('/create', (req, res, next) => {

    const { name, place, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Location
        .create({ name, place, location })
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})

//vista de todos los locations creados
router.get('/list-locations', (req, res, next) => {

    Location
        .find()
        .select({ name: 1 })
        .sort({ name: 1 })
        .then(location => res.render('locations/list-page', { location }))
        .catch(err => next(err))
})

//procedemos con el ataque de los titates, A EDITAR A ESTOS GORDOS!
router.get('/edit-locations/:id', (req, res, next) => {

    const { id } = req.params

    Location
        .findById(id)
        .then(location => res.render('locations/edit-page', location))
        .catch(err => next(err))

})

router.post('/edit-locations/:id', (req, res, next) => {

    const { id } = req.params
    const { name, place, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Location
        .findByIdAndUpdate(id, { name, place, location })
        .then(() => res.redirect('/locations/list-locations'))
        .catch(err => next(err))
})

// empieza la salsa de eliminar a estas vacas
router.post('/delete-locations/:id', (req, res, send) => {

    const { id } = req.params

    Location
        .findByIdAndDelete(id)
        .then(() => res.redirect('/locations/list-locations'))
        .catch(err => next(err))

})

router.get('/mapa', (req, res, next) => {
    res.render('locations/locations-map')
})

module.exports = router;