const express = require('express');
const router = express.Router();

const Place = require('./../models/Place.model')

router.get("/crear", (req, res, next) => {
    res.render("places/new-place")
})

router.post("/crear", (req, res, next) => {

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})


// router.get("/mapa", (req, res, next) => {
//     res.render("places/places-map")
// })


module.exports = router