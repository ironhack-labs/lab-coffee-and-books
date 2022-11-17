const router = require("express").Router()
const Place = require("../models/Place.model")

router.get("/create", (req, res, next) => res.render("places/new-place"))

router.post("/create", (req, res, next) => {

    const { name, type, latitude, longitude } = req.body

    const location = { type: "Point", coordinates: [latitude, longitude] }

    Place
        .create({ name, type, location })
        .then(() => res.redirect("/list"))
        .catch(err => console.log(err))
})

router.get("/list", (req, res, next) => {

    Place
        .find()
        .then(places => res.render("places/places-list", { places: places }))
        .catch(err => console.log(err))
})

router.get("/:idPlace/edit", (req, res, next) => {

    const { idPlace } = req.params

    Place
        .findById(idPlace)
        .then(place => res.render("places/edit-place", { place }))
        .catch(err => console.log(err))
})

router.post("/:idPlace/edit", (req, res, next) => {

    const { idPlace } = req.params

    const { name, type, latitude, longitude } = req.body

    const location = { type: "Point", coordinates: [latitude, longitude] }

    Place
        .findByIdAndUpdate(idPlace, { name, type, location })
        .then(() => res.redirect("/places/list"))
        .catch(err => console.log(err))
})


router.post("/:idPlace/delete", (req, res, next) => {

    const { idPlace } = req.params

    Place
        .findByIdAndDelete(idPlace)
        .then(() => res.redirect("/places/list"))
        .catch(err => console.log(err))
})

module.exports = router