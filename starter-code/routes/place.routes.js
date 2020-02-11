const express = require('express');
const router = express.Router();

const Place = require('../models/place.model')

router.get('/create', (req, res, next) => {
    res.render('places/create');
});


router.post('/create', (req, res, next) => {

    const location = {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude]
    }
    console.log(location)
    const newPlace = new Place({
        name: req.body.name,
        type: req.body.type,
        location: location,
    })

    Place.create(newPlace)
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})


router.get('/api', (req, res, next) => {

    Place.find()
        .then(allPlacesFromDB => res.json(allPlacesFromDB))
        .catch(err => next(err))

})


router.get('/:id', (req, res, next) => {

    console.log("llama a la ruta correcta")
    Place.findById(req.params.id)
        .then(placeFromDB => {
            console.log(placeFromDB.location.coordinates[0], " || ", placeFromDB.location.coordinates[1])
            res.render('places/profile', placeFromDB)
        })
        .catch(err => next(err))
})

router.get('/:id/delete', (req, res, next) => {

    Place.findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})

router.get('/:id/edit', (req, res, next) => {

    Place.findById(req.params.id)
        .then(placeFromDB => res.render('places/edit', placeFromDB))
        .catch(err => next(err))
})


router.post('/:id/edit', (req, res, next) => {
    const { name, type } = req.body

    Place.findByIdAndUpdate(req.params.id, { name, type })
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})



module.exports = router;
