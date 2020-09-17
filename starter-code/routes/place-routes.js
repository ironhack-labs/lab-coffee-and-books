const express = require('express');
const router = express.Router();
const Place = require('../models/place.model');



// View of the places
router.get('/', (req, res) => {

    Place.find({})
        .then(allPlaces => res.render('places/places', { allPlaces }))
        .catch(err => console.log('ERROR:', err))
})



// New places
router.get('/new', (req, res) => res.render('places/new-places'))

// Creation of the places
router.post('/new', (req, res, next) => {

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
        .catch(err => next(err))
})

// Delete places
router.post('/delete/:id', (req, res, next) => {

    const id = req.params.id

    Place.findByIdAndDelete(id)
        .then(() => res.redirect('/places'))
        .catch(err => next(err))
})

//Edit places
router.get('/edit/:id', (req, res, next) => {

    const id = req.params.id

    Place.findById(id)
        .then(editPlace => res.render('places/edit-place', editPlace))
        .catch(err => next(err))
})

// submission for editing
router.post('/edit/:id', (req, res, next) => {

    const id = req.params.id

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
        .catch(err => next(err))
})




module.exports = router 