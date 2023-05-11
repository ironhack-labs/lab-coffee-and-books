const express = require('express');
const router = express.Router();

const Place = require('../models/Place.model')

//Ruta para listar places

router.get("/places", (req, res, next) => {

    Place
        .find()
        .then(places => { res.render("places/place-list", { places }) })
        .catch(err => next(err))

})


//Ruta para crear placer

router.get("/create-place", (req, res, next) => {

    res.render("places/create-place")
})


router.post("/create-place", (req, res, next) => {

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/places'))
        .catch(err => next(err))
})


// Ruta para editar place

router.get('/:place_id/edit', (req, res, next) => {

    const { place_id } = req.params

    Place
        .findById(place_id)
        .then(place => res.render('places/edit-place', place))
        .catch(err => next(err))
})

router.post('/:place_id/edit', (req, res, next) => {

    const { name, type, latitude, longitude, place_id } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .findByIdAndUpdate(place_id, { name, type, location })
        .then(() => res.redirect('/places'))
        .catch(err => next(err))
})

//Ruta para borrar

router.post('/:place_id/delete', (req, res, next) => {
    const { place_id } = req.params

    Place
        .findByIdAndDelete(place_id)
        .then(() => res.redirect('/places'))
        .catch(err => next(err))
})




module.exports = router