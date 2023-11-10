const router = require('express').Router()

const Place = require('../models/place.model')

router.get('/places', (req, res, next) => {

    Place
        .find()
        .then(places => res.json(places))
        .catch(err => res.status(500).json({ message: 'Server issue D:', errorDetails: err }))
})

module.exports = router