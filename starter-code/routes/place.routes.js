const express = require('express')
const router = express.Router()

const Place = require('../models/place.model')


//LIST IN INDEX
router.get('/', (req, res, next) => {
    Place.find()
        .then(allPlace => res.render('/', {
            allPlace
        }))
        .catch(err => next(new Error(err)))
})

//NEW
router.get('/new', (req, res, next) => {
    res.render('places/new-place')
    Place.find()
        .then(allThePlace => res.render('places/new-place', {
            allThePlace
        }))
        .catch(err => next(new Error(err)))
})

router.post('/new', (req, res, next) => {
    const {
        name,
        typeOfPlace,
    } = req.body

    const location = {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude]
    }
    //    res.send('yay')


    Place.create({
            name,
            typeOfPlace,
            location
        })

        .then(() => res.redirect('/'))
        .catch(err => next(new Error(err)))
})


router.get('/edit', (req, res, next) => {

    const placePromise = Place.findById(req.query.id)

    Promise.all(placePromise)
        .then(results => res.render('places/edit-place', {}))
        .catch(err => next(new Error(err)))
})

router.post('/edit', (req, res, next) => {
    const {
        name,
        typeOfPlace,
    } = req.body
    const location = {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude]
    }


    Place.findByIdAndUpdate(req.query.id, {
            name,
            typeOfPlace,
            location
        })
        .then(() => res.redirect(`/places/${req.query.id}`))
        .catch(err => next(new Error(err)))
})


router.get('/delete', (req, res, next) => {
    Place.findByIdAndDelete(req.query.id)
        .then(() => res.redirect('/places'))
        .catch(err => next(new Error(err)))
})


router.get('/:id', (req, res, next) => {
    Place.findById(req.params.id)
        .then(thePlace => res.render('places/place-details', {
            thePlace
        }))
        .catch(err => next(new Error(err)))
})

module.exports = router