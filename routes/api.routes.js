
const express = require('express')
const router = express.Router()

const Place = require('./../models/place.model')

// Endpoints
router.get('/places', (req, res) => {  //repasar por si es places o lugares

    Place
        .find()
        .then(places => res.json(places))
        .catch(err => next(err))
})

module.exports = router