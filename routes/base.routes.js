const express = require('express')
const router = express.Router()

const Place = require("../models/place.model")


// Index view
router.get('/', (req, res, next) => {
    Place.find()
        .then(allPlaces => res.render('index', { allPlaces }))
        .catch(err => next(err))

    
})

//List with the places to manage
router.get("/places/list", (req, res, next) => {
    Place.find()
        .then(allPlaces => res.render('places-list', { allPlaces }))
        .catch(err => next(err))
})

// Edit some place
router.get("/places/edit/:place_id", (req, res, next) => {
    const placeId = req.params.place_id
    
    Place.findById(placeId)
        .then(foundPlace => {
            const { name, type } = foundPlace
            const coordinates = foundPlace.location.coordinates
            res.render("places-edit", { name, type, coordinates })
        })
        .catch(err => next(err))

})
router.post("/places/edit/:place_id", (req, res, next) => {
    
    const placeId = req.params.place_id
    console.log(placeId)
    const { name, type } = req.body

    // add the location object
    let location = {
        type: 'Point',
        coordinates: [req.body.latitude, req.body.longitude]
    }

    console.log({ name, type, location })

    Place.findByIdAndUpdate(placeId, { name, type, location })
        .then(() => res.redirect("/places/list"))
        .catch(err => next(err))
})

//Add new place
router.get("/places/new", (req, res) => res.render("places-new"))
router.post("/places/new", (req, res) => {

    // add the location object
    let location = {
        type: 'Point',
        coordinates: [req.body.latitude, req.body.longitude]
    };
    const { name, type } = req.body
    
    console.log({ name, type, location })

    Place.create({ name, type, location })
        .then(() => res.redirect("/places/list"))
        .catch(err=> next(err))
})


//Delete a place
router.get("/places/delete/:place_id", (req, res) => {
    const placeId = req.params.place_id
    Place.findByIdAndDelete(placeId)
        .then(() => res.redirect("/places/list"))
        .catch(err=> next(err))
})

module.exports = router