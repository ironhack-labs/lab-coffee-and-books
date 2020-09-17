const express = require('express');
const router = express.Router();
const Place = require('../models/places.model.js');

router.get('/places', (req, res, next) => {

    Place
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
})

module.exports = router