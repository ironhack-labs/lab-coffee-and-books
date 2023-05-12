const express = require('express');
const router = express.Router();
const Place = require("../models/Place.model")


router.get("/create", (req, res, next) => {
  res.render("places/create-place-page")
})

router.post("/create", (req, res, next) => {
    
    const {name, type, latitude, longitude} = req.body

    const location = {
        type: "Point",
        coordinates: [latitude, longitude]
    }
    
  Place
  .create({name, type, location})
  .then(()=> res.redirect("/"))
  .catch(err => next(err))

})


router.get("/list", (req, res, next) => {

Place
.find()
.then(places => res.render("places/list-places-page", { places }))
.catch(err => next(err))

})

router.get("/edit/:id_place", (req, res, next) => {
    const {id_place} = req.params

    Place
    .findById(id_place)
    .then(place => res.render("places/edit-place-page", place))
    .catch(err => next(err))

})

router.post("/edit/:id_place", (req, res, next) => {

    const {id_place} = req.params
    const {name, type, latitude, longitude} = req.body

  const location = {
        type: "Point",
        coordinates: [latitude, longitude]
    }
    Place
    .findByIdAndUpdate(id_place, {name, type, location})
    .then(() => res.redirect("/places/list"))
    .catch(err => next(err))

})

router.post("/delete/:id_place", (req, res, next) => {

    const {id_place} = req.params

    Place
    .findByIdAndDelete(id_place)
    .then(()=> res.redirect("/places/list"))
    .catch(err => next(err))
})




module.exports = router



