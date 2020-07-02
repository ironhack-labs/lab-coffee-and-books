const express = require('express')
const router = express.Router()

const Place = require("../models/place")

// Endpoints
router.get("/api", (req, res, send) => {
    Place.find()
        .then(allPlaces => res.json({
            allPlaces
        }))
        .catch(err => console.log("There was an error returning from the DDBB", err))
})
router.post("/delete/:id", (req, res, next) => {
    Place.findByIdAndRemove(req.params.id)
        .then(() => res.redirect("/places"))
        .catch(err => console.log("There was an error returning from the DDBB", err))
})
router.get("/edit/:id", (req, res, next) => {
    Place.findById(req.params.id)
        .then(place => res.render("places/edit-place", place))
        .catch(err => console.log("There was an error returning from the DDBB", err))

})
router.post("/edit/:id", (req, res, next) => {
    const {
        name,
        type,
        lat,
        lng
    } = req.body
    Place.findByIdAndUpdate(req.params.id, {
            name,
            type,
            location: {
                type: "Point",
                coordinates: {
                    lat,
                    lng
                }
            }
        })
        .then(res.redirect("/places"))
        .catch(err => console.log("There was an error returning from the DDBB", err))
})
router.get("/create", (req, res, next) => res.render("places/new-place"))
router.post("/create", (req, res, next) => {
    const {
        name,
        type,
        lng,
        lat
    } = req.body
    Place.create({
            name,
            type,
            location: {
                type: "Point",
                coordinates: {
                    lat,
                    lng
                }
            }
        })
        .then(res.redirect("/places"))
        .catch(err => console.log("There was an error returning from the DDBB", err))
})
router.get("delail/:id", )
router.get("/", (req, res, next) => {
    Place.find()
        .then(places => res.render("places/places-list", {
            places
        }))
})

module.exports = router