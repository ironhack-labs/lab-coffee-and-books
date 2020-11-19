const express = require('express')
const Place = require('../models/place')
const router = express.Router()
const places = require("../models/place")




router.get('/', (req, res) => {

    Place
        .find()
        .then(allPlaces => res.render('places/places-list', { allPlaces }))
        .catch(err => console.log(err))
})



// Formulario nuevo place: renderizar (GET)
router.get('/new', (req, res) => res.render('places/new-place'))

//Formulario nuevo place: gestionar (POST)
router.post('/new', (req, res) => {

    const { name, type } = req.body  //meter location para hacer el mapa

    // const location = {
    //     type: "Point",
    //     coordinates: [latitude, longitude]
    // }

    Place
        .create({ name, type })   //meter location
        .then(() => res.redirect('/places'))
        .catch(err => console.log('Error:', err))
})

//editar


router.get('/edit/:_id', (req, res, next) => {

    const PlaceId = req.params._id

    Place
        .findById(PlaceId)
        .then(PlaceInfo => res.render('places/edit-places', PlaceInfo))
        .catch(err => console.log(err))
})


router.post('/edit/:_id', (req, res, next) => {

const PlaceId = req.params._id
  const { name, type } = req.body

    Place
    .findByIdAndUpdate( PlaceId, { name, type})
    .then(() => res.redirect(`/places`))
    .catch(err => next(new Error(err)))
})

router.get('/delete/:_id', (req, res, next) => {
    const PlaceId = req.params._id
    
    Place
    .findByIdAndDelete(PlaceId)
    .then(() => res.redirect('/places'))
    .catch(err => next(new Error(err)))
})


module.exports = router