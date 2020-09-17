const express = require('express')
const router = express.Router()

const Place = require('../models/place.model')

router.get('/', (req, res, next) => {

    Place.find()
        .then(places => res.render('places/list', { places }))
        .catch(err => next(err))

})

router.get('/new', (req, res, next) => res.render('places/new'))

router.post('/new', (req, res, next) => {

    const { name, type, latitude, longitude } = req.body

    Place.create({ name, type, location: {type: 'Point', coordinates: [latitude, longitude] } })
        .then(() => res.redirect('/places'))
        .catch(err => next(err))
    
})

router.get('/:place_id/edit', (req, res, next) => {

    const id = req.params.place_id

    Place.findById(id)
        .then(details => res.render('places/edit', details))
        .catch(err => next(err))

})

router.post('/:place_id/edit', (req, res, next) => {

    const id = req.params.place_id

    const { name, type, latitude, longitude } = req.body

    Place.findByIdAndUpdate(id, { name, type, location: { type: 'Point', coordinates: [latitude, longitude] } })
        .then(() => res.redirect('/places'))
        .catch(err => next(err))

})

router.post('/:place_id/delete', (req, res, next) => {

    const id = req.params.place_id

    Place.findByIdAndDelete(id)
        .then(() => res.redirect('/places'))
        .catch(err => next(err))

})


module.exports = router