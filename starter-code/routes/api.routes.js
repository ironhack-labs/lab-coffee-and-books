const express = require('express').Router()
const Place = require('../models/Place.model')
const router = require('./places.routes')

router.get('/places', (req, res, next) => {

    Place
        .find()
        .then(places => res.json(places))
        .catch(err => next(err))
})


module.exports = router