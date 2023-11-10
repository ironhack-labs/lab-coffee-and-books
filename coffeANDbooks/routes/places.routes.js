const express = require('express');
const Place = require('../models/place');
const router = express.Router();

router.get('/', (req, res, next) => {
    Place
        .find()
        .then(places => res.render('places/list', { places }))
        .catch(err => next(err))
})
router.get('/create', (req, res, next) => {
    res.render('places/create')
})

router.post('/create', (req, res, next) => {
    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [Number(longitude), Number(latitude)]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/places'))
        .catch(err => next(err))

})
router.get('/:id/edit', (req, res, next) => {


    const { id: places_id } = req.params
    Place
        .findById(places_id)
        .then(places => {
            res.render("places/edit", places)
        })
        .catch(err => next(err))
})
router.post('/:id/edit', (req, res, next) => {
    const { name, type } = req.body
    const { id: places_id } = req.params
    const places_data = { name, type }
    Place
        .findByIdAndUpdate(places_id, places_data)
        .then(() => {
            res.redirect(`/places/${places_id}`)
        })
        .catch(err => next(err))
})

router.get('/:id', (req, res, next) => {
    const { id: places_id } = req.params
    Place
        .findById(places_id)
        .then(place => console.log(place)/*res.render('places/details', place)*/)
        .catch(err => next(err))
})
router.get('/:id/delete', (req, res, next) => {
    const { id: places_id } = req.params
    Place
        .findByIdAndDelete(places_id)
        .then(() => res.redirect('/places'))
        .catch(err => next(err))
})
router.get("/mapa", (req, res, next) => {
    res.render('places/map');
})
module.exports = router;