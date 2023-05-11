const express = require('express');
const router = express.Router();

const Places = require('./../models/places.model')

router.get("/places/map", (req, res, next) => {

    Places
        .find()
        .then(places => res.json(places))
        .catch(err => next(err))
});

module.exports = router