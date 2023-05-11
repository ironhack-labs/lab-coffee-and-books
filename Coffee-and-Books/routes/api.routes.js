const express = require('express');
const router = express.Router();

const Locations = require('./../models/Place.model')

router.get("/locations", (req, res, next) => {

    Locations
        .find()
        .then(locations => res.json(locations))
        .catch(err => next(err))
});

module.exports = router