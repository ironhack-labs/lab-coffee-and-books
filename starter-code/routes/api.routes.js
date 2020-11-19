const express = require('express')
const router = express.Router()
const Places = require('../models/places')

router.get('/places', (req, res, next) => {
    Places
        .find()
        .then(places => res.json(places))
        .catch(err => next(err))
})


module.exports = router
