const express = require('express')
const { findByIdAndDelete } = require('../../models/place.model')
const router = express.Router()

// Models
const Place = require('../../models/place.model')

// READ
router.get('/', (req, res, next) => {

    Place.find()
        .then(allPlaces => res.render('places/index', { allPlaces }))
        .catch(err => next(err))

})

// CREATE (get)
router.get('/new', (req, res, next) => res.render('places/create'))

// CREATE (post)
router.post('/new', (req, res, next) => {

    if (req.body.type != 'coffee shop' && req.body.type != 'bookstore') {

        res.render('places/create', { errorMessage: 'Selecciona un tipo' })

        return

    }

    const { name, type, latitude, longitude } = req.body

    Place.create({ name, type, location: { latitude, longitude } })
        .then(newPlace => res.redirect(`/places`))
        .catch(err => next(err))
})

// DELETE
router.get('/delete/:id', (req, res, next) => {

    Place.findByIdAndDelete(req.params.id)
        .then(res.redirect('/places'))
        .catch(err => next(err))
})

// UPDATE (get)
router.get('/edit/:id', (req, res, next) => {

    Place.findById(req.params.id)
        .then(matchedPlace => {

            res.render('places/edit', matchedPlace)
        })
        .catch(err => next(err))
})

// UPDATE (post)
router.post('/edit/:id', (req, res, next) => {

    const { name, type, latitude, longitude } = req.body

    Place.findByIdAndUpdate(req.params.id, { name, type, location: { latitude, longitude } })
        .then(res.redirect('/places'))
        .catch(err => next(err))
})

// READ (Detailed view)
router.get('/:id', (req, res, next) => res.render('places/detailed'))


module.exports = router
