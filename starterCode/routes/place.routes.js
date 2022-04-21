const router = require("express").Router()

const Place = require('./../models/Place.model')


// Create new place

router.get('/create', (req, res, next) => {
    res.render('places/create-place')
})

router.post("/create", (req, res, next) => {
    const { name, type, lat, lng } = req.body
    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }
    console.log(req.body)

    Place
        .create({ name, type, location })
        .then(() => res.redirect("/places/list"))
        .catch(err => console.log(err))
})

// List all places

router.get('/list', (req, res, next) => {

    Place
        .find()
        .then(places => {
            res.render('places/list-places', { places })
        })
        .catch(err => console.log(err))
})

// Edit a place

router.get("/:id/edit", (req, res, next) => {
    const { id } = req.params

    Place
        .findById(id)
        .then(place => {
            res.render("places/update-place", place)
        })
        .catch(err => console.log(err))
})

router.post("/:id/edit", (req, res, next) => {
    const { id } = req.params
    const { name, type } = req.body

    Place
        .findByIdAndUpdate(id, { name, type })
        .then(() => {
            res.redirect("/places/list")
        })
        .catch(err => console.log(err))
})

// Delete a place

router.post("/:id/delete", (req, res, next) => {
    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => {
            res.redirect("/places/list")
        })
        .catch(err => console.log(err))
})




module.exports = router
