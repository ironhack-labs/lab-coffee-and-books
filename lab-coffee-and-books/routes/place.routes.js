const express = require('express')
const router = express.Router()

const Place = require('../models/Place.model')

router.get('/lista', (req, res, next) => {
    Place
        .find()
        .then(places => {
            res.render('place/list', { places })
        })
})

router.get('/crear', (req, res, next) => {
  res.render('place/create')
})

router.post('/crear', (req, res, next) => {
    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .create({ name, type, location})
        .then(() => {
            return res.redirect('/lugares/lista')
        })
        .catch(error => next(error))
})

router.get('/detalles/:place_id', (req, res, next) => {
    const { place_id } = req.params

    Place
        .findById(place_id)
        .then(place => {
            return res.render('place/detail', place)
        })
        .catch(error => next(error))
})

router.get('/editar/:place_id', (req, res, next) => {
    const { place_id } = req.params

    Place
        .findById(place_id)
        .then(place => {
            return res.render('place/edit', place)
        })
        .catch(error => next(error))
})
  
router.post('/editar/:place_id', (req, res, next) => {
    const { name, type } = req.body
    const { place_id } = req.params
  
    Place
        .findByIdAndUpdate(place_id, { name, type })
        .then(() => {
            return res.redirect('/lugares/lista')
        })
        .catch(error => next(error))
})

router.get('/eliminar/:place_id', (req, res, next) => {
    const { place_id } = req.params

    Place
        .findByIdAndDelete(place_id)
        .then(() => {
            return res.redirect('/lugares/lista')
        })
        .catch(error => next(error))
})

router.get('/mapa', (req, res, next) => {
    res.render('place/map')
})

module.exports = router