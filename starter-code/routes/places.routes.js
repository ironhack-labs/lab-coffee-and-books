const router = require('express').Router()
const Place = require('../models/Place.model')

router.get('/create', (req, res, next) => {
    res.render('places/create')

})

router.post('/create', (req, res, next) => {
    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/'))
        .catch(err => next(err))

})


router.get('/edit/:id', (req, res, next) => {
    const { id: place_id } = req.params

    Place
        .findById(place_id)
        .then(place => res.render('places/edit', place))
        .catch(err => next(err))

})


router.post('/edit/:id', (req, res, next) => {
    const { id: place_id } = req.params
    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    Place
        .findByIdAndUpdate(place_id, { name, type, location })
        .then(() => res.redirect('/'))
        .catch(err => new (err))
})

router.post('/delete/:id', (req, res, next) => {
    const { id: place_id } = req.params

    Place
        .findByIdAndDelete(place_id)
        .then(() => res.redirect('/'))
        .catch(err => new (err))
})

module.exports = router