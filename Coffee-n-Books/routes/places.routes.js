const express = require('express');
const router = express.Router();
const Place = require("./../models/Place.model")

router.get("/", (req, res, next) => {
    Place
        .find()
        .then(places => res.render("places/list", { places }))
        .catch(err => next(err))
})

router.get("/create", (req, res, next) => {
    res.render('places/create-place')
})

router.post("/create", (req, res, next) => {
    const { name, type, longitude, latitude } = req.body
    const location = { type: "Point", coordinates: [longitude, latitude] }


    console.log(req.body, location)
    Place
        .create({ name, type, location })
        .then(() => res.redirect("/places"))
        .catch(err => next(err))
})

router.get("/edit/:id", (req, res, next) => {
    const { id: placeId } = req.params

    Place
        .findById(placeId)
        .then(place => res.render("places/edit-place", place))
        .catch(err => next(err))

})

router.post("/edit/:id", (req, res, next) => {
    const { id: placeId } = req.params
    const { name, type } = req.body

    Place
        .findByIdAndUpdate(placeId, { name, type })
        .then(() => res.redirect("/places"))
        .catch(err => next(err))

})

router.post("/delete/:id", (req, res, next) => {
    const { id: placeId } = req.params
    Place
        .findByIdAndDelete(placeId)
        .then(() => res.redirect("/places"))
        .catch(err => next(err))
})

module.exports = router