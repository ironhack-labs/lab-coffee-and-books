const express = require('express')
const router = express.Router()

const Place = require('../models/place.model')

router.get('/places', (req, res, next) => {
  Place
    .find()
    .then(places => res.json(places))
    .catch(err => new Error(next(err)))
})

module.exports = router