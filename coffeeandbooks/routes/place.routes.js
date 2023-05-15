const express = require("express");
const router = express.Router();
const Place = require("../models/Place.model")



router.get("/placeslist", (req, res, next) => {
    Place
        .find()
        .then(place => res.render("place/placelist", { place }))
        .catch(err => console.log(err))
})
router.get("/create", (req, res, next) => {
    res.render("place/create")
})
router.post("/create", (req, res, next) => {
    const { name, type, latitude, longitude } = req.body
    const location = {
        type: "Point",
        coordinates: [latitude, longitude]
    }
    Place
        .create({ name, type, location })
        .then(res.redirect("/"))
        .catch(err => next(err))

})
router.get("/edit/:id", (req, res, next) => {
    const { id } = req.params
    Place
        .findById(id)
        .then((place) => res.render('place/edit', { place }))
        .catch(err => next(err))
})
router.post("/editar/:id", (req, res, next) => {
    const { id } = req.params
    const { name, type, latitude, longitude } = req.body
    const location = {
        type: "Point",
        coordinates: [latitude, longitude]
    }
    Place
        .findByIdAndUpdate(id, { name, type, location })
        .then(res.redirect("/places/placeslist"))
        .catch(err => next(err))

})
router.get('/mapa', (req, res, next) => {
    res.render('place/place-map')
})
module.exports = router