const express = require('express')
const router = express.Router()

const Place = require('../models/place.model')

//List places
router.get("/", (req, res, next) => {

    Place.find({})
        .then(places => res.render("places/index", { places }))
        .catch(err => next(err))
})

//New place
router.get("/new", (req, res) => res.render("places/new"))

router.post("/new", (req, res, next) => {
    let location = {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude]
    }

    const newPlace = {
        name: req.body.name,
        type: req.body.type,
        location
    }
    
    Place.create(newPlace)
        .then(() => res.redirect("/places"))
        .catch(err => next(err))
})

//Edit Place
router.get("/edit/:place_id", (req, res, next) => {
    const id = req.params.place_id

    Place.findById(id)
        .then(placeDetails => res.render("places/edit", placeDetails))
        .catch(err => next(err))
})

router.post("/edit/:place_id", (req, res, next) => {
    const id = req.params.place_id
    
    let location = {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude]
    }

    const newPlace = {
        name: req.body.name,
        type: req.body.type,
        location
    }

    Place.findByIdAndUpdate(id, newPlace)
        .then(() => res.redirect("/places"))
        .catch(err => next(err))
})

//Delete place
router.post("/delete/:place_id", (req, res, next) => {
    const id = req.params.place_id

    Place.findByIdAndDelete(id)
        .then(() => res.redirect("/places"))
        .catch(err => next(err))
})

module.exports = router