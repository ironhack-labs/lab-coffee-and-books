const express = require('express')
const Place = require('../models/place')
const router = express.Router()

//crud - ruta para crear restaurante



router.get("/", (req, res, next) => {
    Place
        .find()
        .then(places => res.render('places/list-place', { places }))
        .catch(err => next(err))
})




router.get("/create", (req, res, next) => {

    res.render("places/create-place");
});

router.post("/create", (req, res, next) => {
    const { name, type } = req.body
    Place
        .create({ name, type })
        .then(() => res.redirect("/places"))
        .catch(err => next(err))
})

router.get("/:id/edit", (req, res, next) => {
    const { id } = req.params
    Place
        .findById(id)
        .then(() => res.render("/places/edit-place"))
        .catch(err => next(err))

});

router.post("/:id/edit", (req, res, next) => {
    const { name, type } = req.body
    const { id } = req.params
    Place
        .findByIdAndUpdate(id, { name, type })
        .then(() => res.redirect("/places"))
        .catch(err => next(err))
})












module.exports = router;