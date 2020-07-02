const express = require('express')
const router = express.Router()

const Place = require('../models/place.model')

router.get('/api', (req, res) => {

    Place
        .find()
        .then(placesArray => res.json({ placesArray }))
        .catch(err => console.log("BBDD error", err))
})

router.get('/', (req, res) => {
    
    Place
        .find()
        .then(allPlaces => res.render('places/index', {allPlaces}))
        .catch(err => console.log("BBDD error", err))
})

router.get('/new', (req, res) => {

    res.render("places/new")
})

router.post('/new', (req, res) => {

    const { name, type } = req.body

    const location = { type: 'Point', coordinates: [req.body.longitude, req.body.latitude] }

    Place
        .create({ name, type, location })
        .then( newPlace => {
            console.log("Place creada", newPlace)
            res.redirect('/places')
        })
        .catch(err => console.log("BBDD error", err))
})

router.get('/:id', (req, res) => {

    Place
        .findById(req.params.id)
        .then(thePlace => res.render('places/show', thePlace))
        .catch(err => console.log("BBDD error", err))
})

router.post('/:id/delete', (req, res) => {

    Place
        .findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/places'))
        .catch(err => console.log("BBDD error", err))
})

router.get('/:id/edit', (req, res) => {

    Place
        .findById(req.params.id)
        .then(thePlace => res.render('places/edit', thePlace))
        .catch(err => console.log("BBDD error", err))
})

router.post('/:id', (req, res) => {

    const { name, type } = req.body

    Place
        .findByIdAndUpdate(req.params.id, { name, type }, { new: true })
        .then(() => res.redirect('/places'))
        .catch(err => console.log("BBDD error", err))
})

module.exports = router