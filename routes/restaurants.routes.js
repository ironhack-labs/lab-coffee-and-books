const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurant.model');

router.get('/', (req, res, next) => {

    Restaurant
        .find()
        .then(allRestaurants => res.render('restaurants/all-restaurants', { allRestaurants }))
        .catch(err => next(new Error(err)))
})

router.get('/new', (req, res) => res.render('restaurants/new-restaurant'))

router.post('/new', (req, res, next) => {

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Restaurant
        .create({ name, type, location })
        .then(() => res.redirect('/'))
        .catch(err => next(new Error(err)))

})

router.get('/delete', (req, res, next) => {

    const placeId = req.query.restaurant_id

    Restaurant
        .findByIdAndDelete(placeId)
        .then(() => res.redirect('/restaurants'))
        .catch(err => next(new Error(err)))

})

router.get('/edit', (req, res, next) => {

    const placeId = req.query.restaurant_id

    Restaurant
        .findById(placeId)
        .then(restaurantInfo => res.render('restaurants/edit-restaurant', { restaurantInfo }))
        .catch(err => next(new Error(err)))
})

router.post('/edit', (req, res, next) => {

    const placeId = req.query.restaurant_id

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Restaurant
        .findByIdAndUpdate(placeId, { name, type, location })
        .then(restaurantInfo => res.redirect('/restaurants'))
        .catch(err => next (new Error (err)))

})








module.exports = router