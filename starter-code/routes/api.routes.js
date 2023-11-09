const express = require('express')
const router = express.Router()

const Place = require('../models/place.model')

router.get('/places', (req, res, next) => {
    Place
        .find()
        .then(place => res.json(place))
        .catch(err => res.status(500).json({ message: 'Server issue', errorDetails: err }))
})

module.exports = router