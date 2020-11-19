const express = require('express')
const router = express.Router()

const Place = require('./../models/place.model')



// Endpoints


// Listado de lugares
router.get('/', (req, res) => {

    Place
        .find({}, { name: 1 })                                             // BONUS: con proyección! (segundo argumento opcional de find())
        .sort({ name: 1 })                                                 // BONUS: ordenados por título!
        .then(allPlaces => res.render('places/places-list', { allPlaces }))     // es lo mismo que  { allBooks: allBooks }
        .catch(err => console.log(err))
})




// Detalle de lugar
router.get('/detalle/:place_id', (req, res) => {

    const placeId = req.params.place_id

    Place
        .findById(placeId)
        .then(thePlace => res.render('places/details', thePlace))
        .catch(err => console.log(err))
})





// Formulario nuevo lugar: renderizar (GET)
router.get('/crear-lugar', (req, res) => res.render('places/new-place-form'))


// Formulario nuevo lugar: gestionar (POST)
router.post('/crear-lugar', (req, res) => {

    const { name, type, location } = req.body

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/lugares'))
        .catch(err => console.log('Error:', err))
})





// Formulario edición lugar: renderizar (GET)
router.get('/editar-lugar', (req, res) => {

    const placeId = req.query.place_id

    Place
        .findById(placeId)
        .then(placeInfo => res.render('places/edit-place-form', placeInfo))
        .catch(err => console.log(err))
})



// Formulario edición lugar: gestionar (POST)
router.post('/editar-lugar', (req, res) => {

    const placeId = req.query.place_id                            // El ID lo recibodo como query string

    const { title, name, location } = req.body     // Los datos del formulario POST, como req.body

    Place
        .findByIdAndUpdate(placeId, { title, name, location })
        .then(placeInfo => res.redirect('/lugares'))
        .catch(err => console.log(err))
})




// Eliminar lugar
router.get('/eliminar-lugar', (req, res) => {

    const placeId = req.query.place_id

    Place
        .findByIdAndDelete(placeId)
        .then(() => res.redirect('/lugares'))
        .catch(err => console.log(err))
})




module.exports = router