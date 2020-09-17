const express = require('express');
const router = express.Router();
const Place = require('../models/place.model');

// vista places
router.get('/', (req, res) => {

    Place.find({})
        .then(allPlaces => res.render('places/places', { allPlaces }))
        .catch(err => console.log('ERROR:', err))
})



// vista new y create
router.get('/new', (req, res) => res.render('places/new-places'))

// Vista new Proceso
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

// Delete
router.post('/delete/:id', (req, res, next) => {

    const id = req.params.id

    Place.findByIdAndDelete(id)
        .then(() => res.redirect('/places'))
        .catch(err => next(err))
})

//edit
router.get('/edit/:id', (req, res, next) => {

    const id = req.params.id

    Place.findById(id)
        .then(editPlace => res.render('places/edit-place', editPlace))
        .catch(err => next(err))
})

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