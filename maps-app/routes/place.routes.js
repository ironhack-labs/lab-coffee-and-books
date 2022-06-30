const router = require("express").Router()
const Place = require('../models/Place.model')


// New restaurant form (render)
router.get("/place/create", (req, res, next) => res.render("place/new-place"))

router.post("/place/create", (req, res, next) => {
    const { name, type, latitude, longitude } = req.body

    const location = {

        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place

        .create({ name, type, location })
        .then(() => {
            res.redirect("/place/list")
        })
        .catch(err => console.log(err))
})

router.get("/place/list", (req, res, next) => {
    Place
        .find()
        .then(places => res.render('place/list-place', { places }))
        .catch(err => console.log(err))
})

router.get("/place/edit/:id", (req, res, next) => {
    const { id } = req.params
    Place
        .findById(id)
        .then(place => res.render("place/edit-place", place))
        .catch(err => console.log(err))

})

router.post("/place/edit/:id", (req, res, next) => {
    const { id } = req.params
    const { name, type, latitude, longitude } = req.body
    const location = {

        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .findByIdAndUpdate(id, { name, type, location })
        .then(place => res.redirect("/place/list"))
})

router.get("/place/delete/:id", (req, res, next) => {
    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect('/place/list'))
        .catch(err => console.log(err))
})


module.exports = router