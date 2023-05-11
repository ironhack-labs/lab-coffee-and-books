const express = require('express');
const router = express.Router();

const Place = require('./..//models/Place.model')

// Places List
router.get("/places/lista", (req, res, next) => {
    Place
        .find()
        .then(places => res.render("places/places-list", { places }))
})

// Crear Place get
router.get("/places/crear", (req, res, next) => {

    res.render("places/new-place");
});

// Crear Place post
router.post("/places/crear", (req, res, next) => {

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }
    Place
        .create({ name, type, location })
        .then(() => res.redirect("/"))
        .catch(err => next(err))
})

// Update Place 
router.get("/places/editar/:place_id", (req, res, next) => {
    const { place_id } = req.params
    Place
        .findById(place_id)
        .then(place => res.render('places/edit-place', place))

        .catch(err => next(err))
})

router.post("/places/editar/:place_id", (req, res, next) => {
    const { place_id } = req.params
    const { name, type, latitude, longitude } = req.body
    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }
    Place
        .findByIdAndUpdate(place_id, { name, type, location })
        .then(() => res.redirect("/"))
        .catch(err => next(err))
})

router.post("/places/eliminar/:place_id", (req, res, next) => {
    const { place_id } = req.params
    Place
        .findByIdAndDelete(place_id)
        .then(() => res.redirect("/places/lista"))
        .catch(err => next(err))
})


router.get('/places/mapa', (req, res, next) => {
    res.render('places/places-map')
})

module.exports = router;