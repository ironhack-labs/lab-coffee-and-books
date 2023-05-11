const express = require('express');
const router = express.Router();

const Place = require('./../models/Place.model')
// const Place = require('../models/Place.model')

router.get("/places", (req, res, next) => {

    Place
        .find()
        .then(places => res.json(places))
        .catch(err => next(err))
});

module.exports = router