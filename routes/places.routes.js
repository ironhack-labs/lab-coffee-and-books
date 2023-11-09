const express = require("express")
const router = express.Router()

const Place = require("./../models/Place.model")

router.get("/places", (req, res, next) => {
    Place
        .find()
        .then(places => res.render("places/list", { places }))
        .catch(err => console.log(err))
})

router.get("/places/create", (req, res, next) => {
    res.render("places/create")
})

router.post("/places/create", (req, res, next) => {

    const { name, description, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    Place
        .create({ name, description, location })
        .then(() => res.redirect("/places"))
        .catch(err => console.log(err))
})

router.get("/places/:id/edit", (req, res, next) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(place => res.render("places/edit", place))
        .catch(err => console.log(err))

})

router.post("/places/:id/edit", (req, res, next) => {

    const { id } = req.params
    const place = { name, description } = req.body

    Place
        .findByIdAndUpdate(id, place)
        .then(() => res.redirect("/places"))
        .catch(err => console.log(err))
})

router.post("/places/:id/delete", (req, res, next) => {

    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect("/places"))
        .catch(err => console.log(err))
})

router.get("/api/map", (req, res, next) => {
    Place
        .find()
        .then(places => res.json(places))
        .catch(err => console.log(err))
})


router.get("/places/map", (req, res, next) => {
    res.render("places/map")
})

module.exports = router