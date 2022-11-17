const express = require('express')
const router = express.Router()
const Place = require('./../models/Place.model')

router.get("/list", (req, res) => {

    Place
        .find()
        .then(places => {
            console.log(places)
            res.render('places/list', { places })
        })
        .catch(err => console.log(err))
})

router.get("/list/:id", (req, res) => {

    const { id: places_id } = req.params

    Place
        .findById(places_id)
        .then(place => res.render('places/details', place))
        .catch(err => console.log(err))
})



router.get("/create", (req, res) => {

    res.render("places/create")
})

router.post("/create", (req, res) => {

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/places/list'))
        .catch(err => console.log(err))
})


router.get("/list/:id/edit", (req, res) => {

    const { id: places_id } = req.params
    Place
        .findById(places_id)
        .then(place => {
            res.render("places/edit", place)
        })
        .catch(err => console.log(err))

})

router.post("/list/:id/edit", (req, res) => {

    const { id: places_id } = req.params
    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .findByIdAndUpdate(places_id, { name, type, location })
        .then(() => res.redirect('/places/list'))
        .catch(err => console.log(err))
})

router.post("/list/:id/delete", (req, res) => {

    const { id: places_id } = req.params

    Place
        .findByIdAndRemove(places_id)
        .then(() => res.redirect('/places/list'))
        .catch(err => console.log(err))
})








module.exports = router