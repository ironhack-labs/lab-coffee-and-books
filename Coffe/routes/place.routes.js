const express = require('express');
const router = express.Router();

const Place = require('./../models/Place.model')

router.get("/create", (req, res, next) => {
    res.render("places/create")
})

router.post("/create", (req, res, next) => {

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: "Point",
        coordinates: [longitude, latitude]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/place/list'))
        .catch(err => next(err))
})

router.get("/list", (req, res, next) => {
    Place
        .find()
        .then(places => res.render("places/list", { places }))
        ;
})

router.get("/edit/:_id", (req, res, next) => {
    const { _id } = req.params
    const { name, type, latitude, longitude } = req.body
    const location = {
        coordinates: [longitude, latitude]
    }
    Place
        .findByIdAndUpdate({ _id })
        .then((place) => res.render("places/edit", { place }))
        .catch(err => next(err))

})
router.post("/edit/:_id", (req, res, next) => {
    const { _id } = req.params
    const { name, type, longitude, latitude } = req.body
    const location = {
        type: "Point",
        coordinates:

            [longitude, latitude]
    }
    Place
        .findByIdAndUpdate({ _id }, { name, type, location })
        .then(() => res.redirect("/place/list"))
        .catch(err => next(err))

})
router.post("/delete/:_id", (req, res, next) => {
    const { _id } = req.params
    Place
        .findByIdAndDelete(_id)
        .then(() => res.redirect("/place/list"))
        .catch(err => next(err))
})







module.exports = router;