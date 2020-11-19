const express = require('express')
const Place = require('../models/place.model')
const router = express.Router()


// Endpoints

// GOOGLE MAP 
router.get('/places-map', (req, res) => res.render('places/map-place'))


// GOOGLE MAP MARKERS
router.get('/places', (req, res, next) => {

    Place
        .find()
        .then(places => res.json(places))
        .catch(err => next(err))
})

////////////////////////////////////////////////////////////

// ALL PLACES
router.get('/', (req, res, next) => {

    Place
        .find()
        .then(allPlaces => res.render('index', { allPlaces }))
        .catch(err => next(new Error(err)))
})


////////////////////////////////////////////////////////////

// CREATE NEW place FORM
router.get('/new', (req, res) => res.render('places/new-place'))
router.post('/new', (req, res, next) => {

    //const { name, place } = req.body
    const { name, description, place, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .create({ name, description, place, location })
        .then(() => res.redirect('/'))
        .catch(err => next(new Error(err)))
})


////////////////////////////////////////////////////////////

// DELETE Place
router.get('/delete', (req, res, next) => {

    const placeId = req.query.id

    Place
        .findByIdAndDelete(placeId)
        .then(() => res.redirect('/'))
        .catch(err => next(new Error(err)))
})

////////////////////////////////////////////////////////////


//EDIT Place FORM

router.get('/edit', (req, res, next) => {

    const placeId = req.query.id

    Place
        .findById(placeId)
        .then(thePlace => res.render('places/edit-place', thePlace))
        .catch(err => next(new Error(err)))

})

//edit (POST)
router.post('/edit', (req, res, next) => {

    const placeId = req.query.id

    const { name, description, place, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .findByIdAndUpdate(placeId, { name, description, place, location })
        .then(() => res.redirect('/'))
        .catch(err => next(new Error(err)))

})



////////////////////////////////////////////////////////////


// DETAIL PLACE

router.get('/:place_id', (req, res, next) => {

    const placeId = req.params.place_id

    Place
        .findById(placeId)
        .then(thePlace => { res.render('places/place-details', thePlace) })
        .catch(err => next(new Error(err)))

})





module.exports = router



