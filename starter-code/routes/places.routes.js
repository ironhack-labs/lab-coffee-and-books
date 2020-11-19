const express = require('express')
const router = express.Router()
const Places = require('./../models/places')


router.get('/places', (req, res, next) => { Places.find().then(places => res.render('places/index', { places })).catch(err => next(err)) })

router.get('/places/create', (req, res, next) => res.render('places/create'))

router.post('/places/create', (req, res, next) => {
    const { name, type, latitude, longitude } = req.body
    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }
    Places
        .create({ name, type, location })
        .then(() => res.redirect('/places'))
        .catch(err => next(err))
})

router.get('/places/delete', (req, res, next) => {
    const placeId = req.query.id
    Places
        .findByIdAndDelete(placeId)
        .then(deleted => res.redirect('/places'))
        .catch(err => next(err))
})

router.get('/places/edit', (req, res, next) => {
    const placeId = req.query.id
    Places
        .findById(placeId)
        .then(place => res.render('places/edit', place))
        .catch(err => next(err))
})

router.post('/places/edit', (req, res, next) => {

    const { name, type, latitude, longitude } = req.body
    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }
    Places
        .findByIdAndUpdate(req.query.id, { name, type, location })
        .then(() => res.redirect('/places'))
        .catch(err => next(err))

})




module.exports = router
