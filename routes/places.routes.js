const express = require('express')
const router = express.Router()

const Place = require('../models/place-model')


// Endpoints
//router.get('/', (req, res) => res.render('places/places-index'))


//List places
router.get('/', (req, res) => {

    Place.find()
        .then(places => res.render('places/places-index', { places }))
        .catch(err => console.log('Hubo un error:', err))
})

//Create places
router.get('/new', (req, res) => res.render('places/places-new'))
router.post('/new', (req, res) => {

    let location = {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude]
    }

    const newPlace = { 
        name: req.body.name, 
        type: req.body.type,
        location
     }
    
    Place.create(newPlace)
    .then(() => res.redirect('/places'))
    .catch(err => console.log('Hubo un error:', err))
})

//Eliminar places
router.post('/delete/:placeId', (req, res) => {

    const id = req.params.placeId

    Place.findByIdAndRemove(id)
        .then(() => res.redirect('/places'))
        .catch(err => console.log('Hubo un error', err))
})

//Editar places
router.get('/edit/:place_id', (req, res) => {
     
    const id = req.params.place_id

    Place.findById(id)
        .then(editPlace => res.render('places/places-edit', editPlace ))
        .catch(err => console.log('Hubo un error', err))
})

router.post('/edit/:place_id', (req, res) => {

    const id = req.params.place_id

    let location = {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude]
    }

    const newPlace = { 
        name: req.body.name, 
        type: req.body.type,
        location
     }

    Place.findByIdAndUpdate(id, newPlace)
        .then(() => res.redirect('/places'))
        .catch(err => console.log('Hubo un error', err))
})

module.exports = router
