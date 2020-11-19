const express = require('express')
const router = express.Router()

const Place = require('./../models/place')

router.get('/places', (req, res, next) => {

  Place
    .find()
    .then(places => res.json(places))
    .catch(err => next(new Error(err)))
})

module.exports = router