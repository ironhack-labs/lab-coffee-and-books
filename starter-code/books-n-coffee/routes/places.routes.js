const router = require("express").Router()
const Place = require('../models/place.model')

router.get("/create", (req, res, next) => res.render("places/create-place"))

router.post('/create', (req, res, next) => {
    const {name, type, lat, lng} = req.body

    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Place
    .create({ name, type, location })
    .then(() => res.redirect("/places"))
    .catch(err => {
        res.render('places/create-place')
        console.log(err)
        next(err)
    })
})

router.get("/", (req, res, next) => {

    Place
    .find()
    .then(places => res.render("places/places-list", { places }))
    .catch(err => next(err))

})

router.get("/:id/edit", (req, res, next) => {
    const { id } = req.params

    Place
    .findById(id)
    .then(place => res.render("places/edit-places", place))
    .catch(err => next(err))
})

router.post("/:id/edit", (req, res, next) => {
    const { id } = req.params
    const { name, type } = req.body

    Place
    .findByIdAndUpdate(id, { name, type })
    .then(() => res.redirect("/places"))
    .catch(err => next(err))

})

router.post("/:id/delete", (req, res, next) => {
    const { id } = req.params

    Place
    .findByIdAndDelete(id)
    .then(() => res.redirect("/places"))
    .catch(err => next(err))
})


module.exports = router;
