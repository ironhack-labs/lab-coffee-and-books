const express = require('express')
const router = express.Router()

const Place = require('../models/Place.model')

router.get('/places', (req, res, next) => {
    Place
        .find()
        .then((places) => {
            return res.json(places)
        })
        .catch(err => res.status(500).json({ message: 'Server internal error', errorDetails: err }))
})

module.exports = router