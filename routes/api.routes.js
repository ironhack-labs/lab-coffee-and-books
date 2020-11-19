const express = require('express')
const router = express.Router()

const Places = require('./../models/place')

// Endpoints
router.get('/places', (req, res) => {

    Places
        .find()
        .then(restaurants => res.json(places))
        .catch(err => next(err))
})

module.exports = router