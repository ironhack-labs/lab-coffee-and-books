const express = require("express")
const router = express.Router()

const Place = require("./../models/Place.model")



router.get("/create", (req, res, next) => {
    res.render("place/create")

})
// router.post("/create", (req, res, next) => {
//     const { name, type } = req.body
//     console.log(name, type, req.body)
//     Place
//         .create({ name, type })
//         .then(() => res.redirect("/"))
//         .catch(err => next(err))

// })
router.post("/create", (req, res, next) => {
    const { name, type, latitude, longitud } = req.body
    const location = {
        type: "Point",
        coordinates: [longitud, latitude]
    }
    console.log(req.body, location)
    Place
        .create({ name, type, location })
        .then(() => res.redirect("/"))
        .catch(err => next(err))

})

router.get("/list", (req, res, next) => {

    const { name, body } = req.body

    Place
        .find()
        .then(places => res.render("place/list", { places }))
        .catch(err => next(err))
})





router.get("/update/:placeId", (req, res, next) => {

    const { placeId } = req.params

    Place
        .findById(placeId)
        .then(place => res.render("place/update", place))
        .catch(err => next(err))
})
router.post("/update/:placeId", (req, res, next) => {
    const { placeId } = req.params
    const { name, type } = req.body

    Place
        .findByIdAndUpdate(placeId, { name, type })
        .then(() => res.redirect("/"))
        .catch(err => next(err))
})


router.post("/delete/:placeId", (req, res, next) => {

    const { placeId } = req.params

    Place
        .findByIdAndDelete(placeId)
        .then(() => res.redirect("/"))
        .catch(err => next(err))

})

router.get("/map", (req, res, next) => {
    res.render("place/map")

})


module.exports = router