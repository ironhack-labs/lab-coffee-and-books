const express = require('express');
const router = express.Router();
const Place = require('../models/place.model')


// --- LIST PLACES ---

router.get('/', (req, res, next) => {
    Place.find()
    .then(allPlaces => res.render('/places/places-index', {allPlaces}))
    .catch(err => next(err))
})

// --- DETAILS ---

router.get('/:id', (req, res) => {
    Place.findById(req.params.id)
    .then(thePlace => res.render('/places/places-details', { thePlace }))
    .catch(err => next(err))

})
// --- ADD PLACES ---

router.get('/new', (req, res, ) => res.render('/places/places-new'))

router.post('/new', (req, res) => {

    const {name, type, lat, long } = req.body

    Place.create({name, type, location:{lat, long}})
        .then(() => res.redirect('/'))
        .catch(err => console.log('error', err))

})

// --- DELETE PLACES ---
router.get('/delete/:id', (req, res) => {
    Place.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/places'))
    .catch(err => console.log('error', err))
})

// --- EDIT PLACES ---

router.get('/edit/:id', (req, res) => {

    Place.findById(req.params.id)
    .then(thePlace => res.render('../views/places/places-edit.hbs', { thePlace }))
    .catch(err => console.log('error', err))
})

router.post('/edit/:id', (req, res) => {
    
        const {name,type,lat,long} = req.body

    Place.findByIdAndUpdate(req.params.id, { name, type, location: { lat, long } })
    .then(() => res.redirect('/places'))
    .catch(err => console.log('error', err))
})



module.exports = router