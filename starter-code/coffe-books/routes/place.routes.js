const router = require("express").Router();
const Place = require('./../models/Place.model')



router.get("/create", (req, res, next) => res.render("places/create-place"))

router.post("/create", (req, res, next) => {

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .create({ name, type, location })
        .then(place => res.redirect('/'))
        .catch(err => console.log(err))

})

router.get("/list", (req, res, next) => {

    Place
        .find()
        .then(places => {
            res.render('places/places-list', { places })
        })
        .catch(err => console.log(err))

})

router.get("/:id/edit", (req, res, next) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(place => { res.render('places/edit-place', place) })
        .catch(err => console.log(err))

})

router.post("/:id/edit", (req, res, next) => {
    const { id } = req.params

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    const newPlace = { name, type, location }

    Place
        .findByIdAndUpdate(id, newPlace, { new: true })
        .then(place => { res.redirect('/places/list') })
        .catch(err => console.log(err))

})

router.post("/:id/delete", (req, res, next) => {
    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(place => { res.redirect('/places/list') })
        .catch(err => console.log(err))

})

router.get("/map", (req, res, next) => {
    res.render("maps/place-map")
})




module.exports = router;