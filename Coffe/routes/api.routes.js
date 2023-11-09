const express = require('express');
const router = express.Router();

const Place = require('./../models/Place.model')

router.get("/places", (req, res, next) => {

    Place
        .find()
        .then(places => res.json(places))
        .catch(err => res.status(500).json({ message: 'Server:', errorDetails: err }))
})

module.exports = router