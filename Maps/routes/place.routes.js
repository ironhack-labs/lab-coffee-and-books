const express = require('express')
const Place = require('../models/Place.model')
const router = express.Router()

router.get("/create", (req, res, next) => {
    res.render("places/create")
})

router.post("/create", (req, res, next) => {

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }
    Place
        .create({ name, type, location })
        .then(() => res.redirect('/'))
        .catch(err => next(err))

})

router.get("/map", (req, res, next) => {
    res.render("places/map")
})


router.get('/', (req, res, next) => {

    Place
        .find()
        .then(places => res.render('places/places', { places }))
        .catch(err => console.log(err))
})


router.get('/:place_id', (req, res, next) => {

    const { place_id } = req.params

    Place
        .findById(place_id)
        .then(place => res.render("places/place-details", place))
        .catch(err => console.log(err))
})


router.post('/:place_id/delete', (req, res, next) => {

    const { place_id } = req.params

    Place
        .findByIdAndDelete(place_id)
        .then(() => res.redirect(`/place`))
        .catch(err => console.log(err))
})


router.get('/:place_id/edit', (req, res, next) => {

    const { place_id } = req.params

    Place
        .findById(place_id)
        .then(place => res.render(`places/edit-place`, place))
        .catch(err => console.log(err))
})



router.post('/:place_id/edit', (req, res, next) => {
    const { place_id } = req.params
    const { name, type } = req.body


    Place
        .findByIdAndUpdate(place_id, { name, type })
        .then(() => res.redirect(`/place`))
        .catch(err => console.log(err))

})



module.exports = router;


module.exports = router
