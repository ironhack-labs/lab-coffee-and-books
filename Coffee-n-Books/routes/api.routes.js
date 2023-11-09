const express = require('express');
const router = express.Router();
const Place = require('./../models/Place.model')

router.get('/places', (req, res, next) => {

    Place
        .find()
        .then(result => res.json(result))
        .catch(err => res.status(500).json({ message: "Server error", errorDetails: err }))
})

module.exports = router;
