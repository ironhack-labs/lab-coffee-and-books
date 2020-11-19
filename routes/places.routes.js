/*jshint esversion: 6 */

const express = require('express')
const { findByIdAndDelete } = require('../models/place.model')
const router = express.Router()
const Place = require('../models/place.model')

// Endpoints (/places/)

router.get('/', (req, res, next) => {

    Place
        .find()
        .then(allPlaces => res.render('places/index', { allPlaces }))
        .catch(err => next(new Error(err)))
    
})


router.get('/new', (req, res, next) => {
    

    Place
        .find()
        .then(allPlaces => res.render('places/new', { allPlaces }))
        .catch(err => next(new Error(err)))

})


router.post('/new', (req, res, next) => {

    const { name, type, location } = req.body

    Place
        .create(req.body)
        .then(() => res.redirect('/places'))
        .catch(err => next(new Error(err)))

})


router.get('/delete', (req, res, next) => {


    Place
        .findByIdAndDelete(req.query.id)
        .then(() => res.redirect('/places'))
        .catch(err => next(new Error(err)))

})


router.get('/edit', (req, res, next) => {
    
    Place
        .findById(req.query.id)
        .then(editPlace => res.render('places/edit', { editPlace }))
        .catch(err => next(new Error(err)))

})

router.post('/edit', (req, res, next) => {

    const { name, type} = req.body

    Place
        .findByIdAndUpdate(req.query.id, { name, type })
        .then(() => res.redirect(`/places/${req.query.id}`))
        .catch(err => next(new Error(err)))
})



router.get('/:id', (req, res, next) => {

    Place
        .findById(req.params.id)
        .then(placeDetails => res.render('places/places-details', { placeDetails }))
        .catch(err => next(new Error(err)))

})



module.exports = router