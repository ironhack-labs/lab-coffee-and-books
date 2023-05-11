const router = require("express").Router();
//const axios = require("axios");
const Places = require('../models/places.model')

router.get("/places", (req, res, next) => {

    Places
        .find()
        .sort({ name: 1 })
        .then(places => res.render('places/places-list', { places }))
        .catch(err => console.log(err))
})

router.get("/places/create", (req, res, next) => {
    res.render('places/places-create')
})

router.post("/places/create", (req, res, next) => {

    const { name, type, latitude, longitude, image } = req.body
    const location = {
        type: "Point",
        coordinates: [latitude, longitude]
    }

    Places
        .create({ name, type, location, image })
        .then(places => res.redirect(`/places`))
        .catch(err => next(err))
})

router.get("/places/:id/edit", (req, res, next) => {

    const { id } = req.params

    Places
        .findById(id)
        .then(places => res.render('places/places-edit', places))
        .catch(err => next(err))

})

router.post("/places/:id/edit", (req, res, next) => {

    const { name, type, latitude, longitude, image } = req.body
    const { id } = req.params
    const location = {
        type: "Point",
        coordinates: [latitude, longitude]
    }

    Places
        .findByIdAndUpdate(id, { name, type, location, image })
        .then(response => res.redirect(`/places`))
        .catch(err => next(err))
})

router.post("/places/:id/delete", (req, res, next) => {
    const { id } = req.params

    Places
        .findByIdAndDelete(id)
        .then(() => res.redirect(`/places`))
        .catch(err => next(err))
})

module.exports = router