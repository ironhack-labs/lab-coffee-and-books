const express = require('express');
const Restaurant = require('../models/Restaurant.model');
const router = express.Router();


router.get("/", (req, res, next) => {

    Restaurant
        .find()
        .then(rests => res.render("restaurants/restaurants-list", { rests }))
        .catch(err => next(err))
})


//CREATE a new restaurant
router.get("/create", (req, res, next) => {
    res.render("restaurants/new-restaurant");
})

router.post("/create", (req, res, next) => {
    // res.render("restaurants/new-restaurant");
    const { name, type, description, lat, lng } = req.body
    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Restaurant
        .create({ name, type, description, location })
        .then(() => res.redirect('/restaurants'))
        .catch(err => next(err))
})

//EDIT a restaurant

router.get("/:id/edit", (req, res, next) => {

    const { id } = req.params

    Restaurant
        .findById(id)
        .then(rest => res.render('restaurants/edit-restaurant', rest))
        .catch(err => next(err))
    // res.render("restaurants/new-restaurant");
})

router.post("/:id/edit", (req, res, next) => {

    const { id } = req.params
    const { name, type, description, lat, lng } = req.body
    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Restaurant
        .findByIdAndUpdate(id, { name, type, description, location })
        .then(() => res.redirect('/restaurants'))
        .catch(err => next(err))
})

// Delete a restaurant

router.post("/:id/delete", (req, res, next) => {

    const { id } = req.params

    Restaurant
        .findByIdAndDelete(id)
        .then(() => res.redirect('/restaurants'))
        .catch(err => next(err))
})

//Details of a restaurant

router.get("/:id/details", (req, res, next) => {

    const { id } = req.params

    Restaurant
        .findById(id)
        .then(rest => res.render('restaurants/restaurant-details', rest))
        .catch(err => next(err))
})

module.exports = router;
