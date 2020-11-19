const express = require('express')
const router = express.Router()

const Place = require('../model/place')



//Listado Cafés y Librerías

router.get('/', (req, res) => {

   Place
        .find()
        .then(allPlaces => res.render('places/places-list', { allPlaces }))   
        .catch(err => console.log(err))
})



//Añadir Nuevo sitio: Formulario (GET)

router.get('/new-place', (req, res) => res.render('places/new-place'))

//Añdir Nuevo sitio: Formulario (POST)

router.post('/new-place', (req, res) => {

    const { name, descrption, location, coordinates } = req.body

    Place
        .create({ name, descrption, location, coordinates })
        .then(() => res.redirect('/places'))
        .catch(err => console.log('Error:', err))
})



// Eliminar Sitio

router.get('/Delete-place', (req, res) => {

    const placeId = req.query.place_id

  Place
        .findByIdAndDelete(placeId)
        .then(() => res.redirect('/places'))
        .catch(err => console.log(err))
})



// Editar Sitio: Renderizar (GET)
router.get('/Edit-place', (req, res) => {

    const placeId = req.query.place_id

    Place
        .findById(placeId)
        .then(placeInfo => res.render('places/edit-place', placeInfo))
        .catch(err => console.log(err))
})

// Editar Sitio: Gestionar (POST)

router.post('/Edit-place', (req, res) => {

    const placeId = req.query.place_id                            

    const { name, descrption, location, coordinates } = req.body     

   Place
        .findByIdAndUpdate(placeId, { name, descrption, location, coordinates })
        .then(placeInfo => res.redirect('/places'))
        .catch(err => console.log(err))
})

module.exports = router
