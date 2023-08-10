const express = require('express')
const Place = require('../models/Place.model')
const router = express.Router()

router.get('/places', (req, res, next) => {
  Place.find()
    .then(places => res.json(places))
    .catch(err => console.log(err))
})

module.exports = router
