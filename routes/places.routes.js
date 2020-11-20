const express = require('express');
const router = express.Router();
const Place = require('../models/place.model');


// Listado de places
router.get('/', (req, res, next) => {
    Place
        .find()
        .then(allPlaces => res.render('places/all-places', { allPlaces: allPlaces }))
        .catch(error => next(new Error(error)))

})

// Crear places
router.get('/new', (req, res) => res.render('places/new-place'));

router.post('/new', (req, res) => {
    
    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/places/'))
        .catch(error => next(new Error(error)))

})

// Editar sitio
router.get('/edit', (req, res, next) => {
    const placeID = req.query.place_id;
    Place
        .findById(placeID)
        .then(thePlace => res.render('places/edit-place', thePlace))
        .catch(error => next(new Error(error)))
})

router.post('/edit', (req, res, next) => {
    const placeID = req.query.place_id
    
    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .findByIdAndUpdate(placeID, { name, type, location }, { new: true })
        .then(() => res.redirect('/places/'))
        .catch(error => next(new Error(error)))
})

// Eliminar sitio
router.get('/delete', (req, res, next) => {
    const placeID = req.query.place_id
    Place
        .findByIdAndDelete(placeID)
        .then(res.redirect('/places/'))
        .catch(error => next(new Error(error)))
})


module.exports = router