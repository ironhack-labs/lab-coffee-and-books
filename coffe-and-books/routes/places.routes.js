const router = require("express").Router();

const Place = require("../models/Place.model")

// Create Places
router.get("/create", (req, res, next) => res.render("places/create-places-page"))

router.post("/create", (req, res, next) => {
    const { name, type, lat, lng } = req.body

    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect("/places"))
        .catch(err => {
            console.log('An error occurred when creating the place', err)
        })
})

// Places List
router.get("/", (req, res, next) => {

    Place
        .find()
        .then(places => res.render("places/places-list-page", { places }))
        .catch(err => console.log('An error occurred when finding the places', err))

});

// Edit places
router.get("/:id/edit", (req, res, next) => {
    const { id } = req.params

    Place
        .findById(id)
        .then(place => res.render("places/edit-place-page", place))
        .catch(err => console.log('An error occurred when finding the place', err))
})

router.post("/:id/edit", (req, res, next) => {
    const { id } = req.params
    const { name, type } = req.body

    Place
        .findByIdAndUpdate(id, { name, type })
        .then(() => res.redirect("/places"))
        .catch(err => console.log('An error occurred when updating the place', err))
})

// Delete places
router.post("/:id/delete", (req, res, next) => {
    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect("/places"))
        .catch(err => console.log('An error occurred when deleting the place', err))
})

module.exports = router;