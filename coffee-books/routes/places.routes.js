
const express = require('express')

const router = express.Router()


const Place = require('../models/Place.model')


router.get('/', (req, res, next) => {

    Place
        .find()
        .then(places => res.render('places/places.hbs', { places }))
        .catch(err => next(err))
})


router.get('/detalles/:id', (req, res, next) => {

    const { id: place_id } = req.params

    Place
        .findById(place_id)
        .then(places => res.render('places/details.hbs', places))
        .catch(err => next(err))

})


router.get('/crear', (req, res, next) => {
    res.render('places/create.hbs')
})


router.post('/crear', (req, res, next) => {

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/lugares'))
        .catch(err => next(err))
})


router.get('/editar/:id', (req, res, next) => {

    const { id: place_id } = req.params


    Place
        .findById(place_id)
        .then(places => res.render('places/edit.hbs', places))
        .catch(err => next(err))


})


router.post('/editar/:id', (req, res, next) => {

    const { id: place_id } = req.params

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }


    Place
        .findByIdAndUpdate(place_id, { name, type, location })
        .then(() => res.redirect('/lugares'))
        .catch(err => next(err))


})



router.post('/eliminar/:id', (req, res, next) => {
    const { id: place_id } = req.params

    Place
        .findByIdAndDelete(place_id)
        .then(() => res.redirect('/lugares'))
        .catch(err => next(err))
})





router.get('/lugarmap', (req, res, next) => {
    res.render('places/map.hbs')
})



module.exports = router