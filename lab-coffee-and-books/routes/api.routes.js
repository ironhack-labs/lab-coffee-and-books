const express = require('express');
const router = express.Router();

const Places = require('./../models/place')

router.get("/places", (req, res, next) => {

    Places
        .find()
        .then(places => res.json(places))
        .catch(err => res.status(500).json({ message: 'Not reaching the server', errorDetails: err }))
})

module.exports = router