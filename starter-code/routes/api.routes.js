const express = require('express')
const router = express.Router()

const Place = require('./../models/place')

// Endpoints
router.get('/places', (req, res, next) => {

    Place
        .find()
        .then(allPlaces => res.json(allPlaces))
        .catch(err => next(new Error(err)))
})

module.exports = router