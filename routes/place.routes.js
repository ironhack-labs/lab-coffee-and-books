const router = require("express").Router()

const { findByIdAndDelete } = require("../models/Place.model")
const Places = require("../models/Place.model")



// LISTA DE CAFETERIAS Y LIBROS ////////////////////////////

router.get("/cafe-y-libro", (req, res, next) => {
    Places
        .find()
        .then(places => {
            res.render("places/places-list", { places })
        })
        .catch(err => console.log(err))
})

// CREAR CAFES ////////////////////////////
router.get("/crear", (req, res, next) => {
    res.render("places/create")
})

router.post("/crear", (req, res, next) => {
    const { name, lat, lng} = req.body

    const location = {
        type: "Point",
        coordinates: [lat, lng]
    }

    Places
        .create({ name, location })
        .then(places => {
            res.redirect("/cafe-y-libro")
        })
        .catch(err => console.log(err))
})


// EDITAR PLACES ////////////////////////////

router.get("/cafe-y-libro/:id/editar", (req, res, next) => {
    const { id } = req.params

    Places
        .findById(id)
        .then(places => {
            res.render("places/edit-places", places)
        })
        .catch(err => console.log(err))
})

router.post("/cafe-y-libro/:id/editar", (req, res, next) => {
    const { id } = req.params
    const { name, lat, lng } = req.body

    const location = {
        type: "Point",
        coordinates: [lat, lng]
    }

    Places
        .findByIdAndUpdate(id, {name, location}, { new: true })
        .then(() => {
            res.redirect("/cafe-y-libro")
        })
        .catch(() => {
            res.render("places/edit-places")
        })
})


// BORRAR PLACES ////////////////////////////

router.post("/cafe-y-libro/:id/eliminar", (req, res, next) => {
    const { id } = req.params

    Places
        .findByIdAndDelete(id)
        .then(() => {
            res.redirect("/cafe-y-libro")
        })
        .catch(err => console.log(err))
})


// MAPA ////////////////////////////

router.get("/mapa/marcado", (req, res, next) => {
    res.render("places/marked-places")
})


module.exports = router