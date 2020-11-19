const express = require('express')
const router = express.Router()

const Restaurant = require('./../models/restaurant.model')

// Endpoints
router.get('/restaurants', (req, res, next) => {

    Restaurant
        .find()
        .then(restaurants => res.json(restaurants))
        .catch(err => next(new Error(err)))
})

module.exports = router