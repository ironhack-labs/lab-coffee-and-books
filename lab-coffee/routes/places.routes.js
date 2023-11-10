const express = require("express")
const router = express.Router()

const Places = require("./../models/place.model")


router.get("/lista", (req, res, next) => {
    Places
        .find()
        .then(places => res.render("places/list-place", { places }))
        .catch(err => next(err))
})

router.get("/crear", (req, res, next) => {
    res.render("places/create-place")
})

router.post("/crear", (req, res, next) => {
    const { name, type, latitude, longitude } = req.body

    const location = {
        type: "Point",
        coordinates: [longitude, latitude]
    }

    Places
        .create({ name, type, location })
        .then(() => res.redirect("/"))
        .catch(err => next(err))
})

router.get("/editar/:id", (req, res, next) => {
    const { id } = req.params

    Places
        .findById(id)
        .then(place => res.render("places/edit-place", place))
        .catch(err => next(err))
})

router.post("/editar/:id", (req, res, next) => {
    const { name, type, latitude, longitude } = req.body
    const { id } = req.params

    Places
        .findByIdAndUpdate(id, { name, type, latitude, longitude })
        .then(() => res.redirect("/"))
        .catch(err => next(err))
})


router.post("/eliminar/:id", (req, res, next) => {
    const { id } = req.params

    Places
        .findByIdAndDelete(id)
        .then(() => res.redirect("/lista"))
        .catch(err => next(err))
})

router.get("/mapa", (req, res, next) => {
    res.render("places/map")
})


module.exports = router