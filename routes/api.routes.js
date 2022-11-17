const express = require('express');
const router = express.Router();
const Place = require('../models/place.model')


router.get('/palces', (req, res, next) => {
    Place
        .find()
        .then(places => res.json(places))
        .catch(err => console.log(err))
})

module.exports = router