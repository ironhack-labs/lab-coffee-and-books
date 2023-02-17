const router = require("express").Router();

const Place = require('./../models/Place.model')

router.get('/create', (req, res, next) => {
    res.render('place/new-place')
})

router.post('/create', (req, res, next) => {

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect(`/place/all-places`))
        .catch(err => next(err))
})

router.get('/all-places', (req, res, next) => {

    Place
        .find()
        .sort({ title: 1 })
        .then(place => res.render('place/places', { place }))
        .catch(err => next(err))
})

router.get('/details/:id', (req, res, next) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(place => res.render('place/place-details', place))
        .catch(err => next(err))
})

router.post('/delete/:id', (req, res, next) => {

    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect('/place/all-places'))
        .catch(err => next(err))
})

router.get('/edit/:id', (req, res, next) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(place => res.render('place/edit-place', place))
        .catch(err => next(err))
})

router.post('/edit', (req, res, next) => {

    const { name, type, latitude, longitude, id } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .findByIdAndUpdate(id, { name, type, location })
        .then(() => res.redirect(`/place/all-places`))
        .catch(err => next(err))
})

module.exports = router;