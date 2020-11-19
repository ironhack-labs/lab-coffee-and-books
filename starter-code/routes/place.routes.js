const express = require('express');
const router = express.Router();
const Place = require('../models/place');

router.get('/', (req, res, next) => {

    Place
        .find()
        .then(places => res.render('places/all-places', { places }))
        .catch(err => next(err))
})


router.get('/new', (req, res) => res.render('places/new-place'))


router.post('/new', (req, res, next) => {

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})

router.get('/edit', (req, res, next) => {

    const placeId = req.query.id

    Place
        .findById(placeId)
        .then(placeInfo => res.render('places/edit-places', placeInfo))
        .catch(err => next(new Error(err)))
})


router.post('/edit', (req, res, next) => {
    const { name, type, location } = req.body
  
    Place
        .findByIdAndUpdate(req.query.id, { name, type, location })
        .then(() => res.redirect(`/places`))
        .catch(err => next(new Error(err)))
})
  

router.get('/delete', (req, res, next) => {

    Place
    
        .findByIdAndDelete(req.query.id)
        .then(() => res.redirect('/places'))
        .catch(err => next(new Error(err)))
  })
  


router.get('/map', (req, res) => res.render('places-map'))



module.exports = router