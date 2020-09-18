const express = require('express')
const { findByIdAndDelete } = require('../../models/place.model')
const router = express.Router()

// Models
const Place = require('../../models/place.model')

// Returns all the places
router.get('/all', (req, res, next) => {

    Place.find()
        .then(allPlaces => {

            res.send(allPlaces)

        })

})

module.exports = router