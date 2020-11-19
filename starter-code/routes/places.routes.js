const express = require('express')
const router = express.Router()

const Place = require('../models/place.model')


// Endpoints

// List of places
router.get('/', (req, res) => {

    Place 
        .find()
        .then(allPlaces => res.render('places/places-list', { allPlaces }))
    .catch(err => console.log(err))
})



// Details of places
router.get('/details/:place_id', (req, res) => {

    const placeId = req.params.place_id

    Place
        .findById(placeId)
        .then(thePlace => res.render('places/details', thePlace))
    .catch(err => console.log(err))
})


// Create new place: renderizar (GET)
router.get('/create-place', (req, res) => res.render('places/new-place-form'))



// Create new place: gestionar (POST)
router.post('/create-place', (req, res) => {

    const { name, type, location } = req.body

    // const location = {
    //     type: 'Point',
    //     coordinates: [latitude, longitude]
    // }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/places'))
    .catch(err => console.log('Error:', err))
})




// Edit place form: renderizar (GET)
router.get('/edit-place', (req, res) => {

    const placeId = req.query.place_id

    Place
        .findById(placeId)
        .then(placeInfo => res.render('places/edit-place-form', placeInfo))
    .catch(err => console.log(err))
})


// Edit place form: gestionar (POST)
router.post('/edit-place', (req, res) => {

    const placeId = req.query.place_id

    const { name, type, location } = req.body

    Place
        .findByIdAndUpdate(placeId, { name, type, location })
        .then(placeInfo => res.redirect('/places'))
    .catch(err => console.log(err))
})



// Delete place
router.get('/delete-place', (req, res) => {

    const placeId = req.query.place_id

    Place
        .findByIdAndDelete(placeId)
        .then(() => res.redirect('/places'))
    .catch(err => console.log(err))
})




module.exports = router