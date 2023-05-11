const express = require('express');
const router = express.Router();

const Place = require('../models/Place.model')

// ------------------------------------------------------------------------------------------

router.get("/places", (req, res, next) => {

    Place.find()
    .then(placesList => res.render("places/listPlaces", {placesList}))
    .catch(err => next(err))

});

// ------------------------------------------------------------------------------------------

router.get("/places/create", (req, res, next) => {
  res.render("places/createPlace");
});

router.post("/places/create", (req, res, next) => {

    const {name, type, lat, lon} = req.body
    const location = {
        type: 'point' ,
        coordinates: [lat , lon]}

    Place.create({name, type, location})
    .then( () => res.redirect('/places'))

});

// ------------------------------------------------------------------------------------------

router.get("/places/:id", (req, res, next) => {

    const {id} = req.params

    Place.findById(id)
    .then(place => res.render("places/placeDetails", place))
    .catch(err => next(err))

});

// ------------------------------------------------------------------------------------------

router.get("/places/:id/edit", (req, res, next) => {

    const {id} = req.params

    Place.findById(id)
    .then(place => res.render("places/editPlace", place))
    .catch(err => next(err))

});

router.post("/places/:id/edit", (req, res, next) => {

    const {id} = req.params

    const {name, type, lat, lon} = req.body
    const location = {
        type: 'point' ,
        coordinates: [lat , lon]}

    Place.findByIdAndUpdate(id , {name, type, location})
    .then( () => res.redirect(`/places/${id}`))
    .catch(err => next(err))


});

// ------------------------------------------------------------------------------------------

router.post("/places/:id/delete", (req, res, next) => {

    const {id} = req.params

    Place.findByIdAndDelete(id)
    .then( () => res.redirect("/places"))
    .catch(err => next(err))

});

// ------------------------------------------------------------------------------------------



module.exports = router;
