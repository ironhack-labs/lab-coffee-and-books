const express = require('express');
const Place = require('../models/place');
const router = express.Router();



router.get("/places", (req, res, next) => {

    Place
        .find()
        .then(places => res.json(places))
        .catch(err => res.status(500).json({ message: 'Server issue', errorDetails: err }))
})

module.exports = router