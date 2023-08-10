const router = require("express").Router();
const Place = require('../models/place.model');
// const axios = require("axios");
//const charactersApi = require("../services/character.service");

//Create Place (RENDER)
router.get("/places/create", (req, res) => {

    res.render("places/new-place")

});

// (HANDLER)
router.post("/places/create", (req, res) => {

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect("/"))
        .catch(err => console.log(err))
})

//Place List
router.get("/places", (req, res) => {
    Place
        .find()
        .then(places => res.render("places/list-places", { places }))
        .catch(err => console.log(err))
})

//Place Details
router.get("/places/:id", (req, res, next) => {
    const { id: place_id } = req.params

    Place
        .findById(place_id)
        .then((place) => res.render(`places/place-details`, { place }))
        .catch(err => console.log(err))
})

// Edit Places (RENDER)

router.get("/edit-place/:id", (req, res, next) => {
    const { id: place_id } = req.params

    Place
        .findById(place_id)
        .then((place) => res.render(`places/edit-place`, { place }))
        .catch(err => console.log(err))
})

// (HANDLER)

router.post("/edit-place/:id", (req, res, next) => {
    const { id: place_id } = req.params
    const { name, type } = req.body

    Place
        .findByIdAndUpdate(place_id, { name, type })
        .then((updatedPlace) => {
            res.redirect(`/places/${place_id}`)

        })

        .catch((err) => {
            console.log(err);
            res.redirect("/places");
        })
})


//Delete Places
router.post("/delete-place/:id", (req, res, next) => {
    const { id: place_id } = req.params

    Place
        .findByIdAndDelete(place_id)
        .then(() => res.redirect('/places-list'))
        .catch(err => next(err))
})

module.exports = router;