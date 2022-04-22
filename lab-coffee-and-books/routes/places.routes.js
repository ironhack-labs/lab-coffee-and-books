
const express = require('express');
const { reset } = require('nodemon');
const router = express.Router();
const Place = require('../models/Place.model')



// LISTADO DE ESTABLECIMIENTOS

router.get('/listado', (req, res) => {

    Place
        .find()
        .then(places => {
            res.render('places/places-list', { places })
        })
        .catch(err => console.log(err))

})

// ESTABLECIMIENTOS POR ID

router.get('/detalles/:id', (req, res) => {

    const { id } = req.params
    console.log(id)

    Place
        .findById(id)
        .then(place => {
            console.log(place)
            res.render('places/place-detail', { place })
        })
})


// CREAR ESTABLECIMIENTOS


router.get('/crear', (req, res, next) => {

    res.render('places/new-place')

})

router.post('/crear', (req, res, next) => {

    const { name, type, longitude, latitude } = req.body

    Place
        .create({ name, type, location: { type: 'Point', coordinates: [longitude, latitude] } })
        .then(newPlace => {
            res.redirect('/establecimientos/listado')
        })
        .catch(err => console.log(err))
})


// EDITAR ESTABLECIMIENTOS

router.get('/editar/:id', (req, res, next) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(place => {
            res.render('places/edit-place', place)
        })
        .catch(err => console.log(err))
}
)


router.post('/editar/:id', (req, res, next) => {

    const { id } = req.params
    const { name, type, longitude, latitude} = req.body

    Place
        .findByIdAndUpdate(id, { name, type, longitude, latitude })
        .then(place => {
            res.redirect('/establecimientos/listado')
        })
        .catch(err => console.log(err))
})


// ELIMINAR

router.post('/eliminar/:id', (req, res) => {

    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => {
            res.redirect('/establecimientos/listado')
        })
        .catch(err => console.log(err))
})


// RUTA MAPA

router.get('/mapa', (req, res, next) => {

    res.render('places/places-map')


})

module.exports = router