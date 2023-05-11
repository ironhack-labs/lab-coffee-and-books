const express = require('express');
const Place = require('../models/Place.model');
const router = express.Router();

router.get('/locations', (req, res, next) => {
    Place
        .find()
        .then(places => res.json(places))
        .catch(err => console.log('--->error yay', err))
})


module.exports = router
