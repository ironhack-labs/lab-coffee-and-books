const express = require('express')
const router = express.Router()
const Place = require('../models/place')

router.get("/", (req, res, next) => {

    Place
        .find()
        .then((places) => {
            res.render("places/places-list", { places });
        })
});

router.get("/create", (req, res, next) => {
    res.render("places/places-create");
});

router.post("/create", (req, res, next) => {

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: "Point",
        coordinates: [longitude, latitude]
    }

    Place
        .create({ name, type, location })
        .then(() =>
            res.redirect('/places')
        )
        .catch(err => next(err))
});

router.get('/:id/details', (req, res, next) => {
    const { id } = req.params

    Place
        .findById(id)
        .then((place) => res.render('places/places-details', place))
        .catch(err => next(err))
})

router.get('/:id/edit', (req, res, next) => {
    const { id } = req.params

    Place
        .findById(id)
        .then((place) => res.render('places/places-edit', place))
        .catch(err => next(err))
})

router.post('/:id/edit', (req, res, next) => {
    const { id } = req.params
    const { name, type } = req.body

    Place
        .findByIdAndUpdate(id, { name, type })
        .then(() => res.redirect('/places'))
        .catch(err => next(err))
})

router.post('/:id/delete', (req, res, next) => {
    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect('/places'))
        .catch(err => next(err))
})


module.exports = router;
