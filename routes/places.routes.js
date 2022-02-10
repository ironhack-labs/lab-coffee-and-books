const router = require("express").Router()

const Place = require("../models/place.model")

//INDEX
router.get("/", (req, res, next) => {
    res.render("index")
})


//CREATE PLACE render
router.get("/create", (req, res, next) => {
    res.render("places/create-places")
})

//handle
router.post("/create", (req, res, next) => {
    const { name, type, lat, lng } = req.body

    const location = {
        type: "Point",
        coordinates: [lat, lng]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect("/places"))
})

//READ list
router.get("/places", (req, res, next) => {
    Place
        .find()
        .then(places => res.render("places/places", { places }))
        .catch(err => console.log(err))
})

//UPDATE render
router.get("/:id/update", (req, res, next) => {
    const placeId = req.params.id

    Place
        .findById(placeId)
        .then(place => res.render("places/edit-places", place))

})

//handle
router.post("/:id/update", (req, res, next) => {
    const { name, type, lat, lng } = req.body

    const location ={
        type: "Point",
        coordinates: [lat, lng]
    }

    const placeId = req.params.id
    Place
        .findByIdAndUpdate(placeId, { name, type, location }, { new: true })
        .then(() =>res.redirect("/places"))
        .catch(err => console.log(err))
})

//DELETE
router.post("/:id/delete", (req,res,next) => {
    const placeId = req.params.id
    Place
        .findByIdAndDelete(placeId)
        .then(()=> res.redirect("/places"))
        .catch(err => console.log(err))
})


module.exports = router