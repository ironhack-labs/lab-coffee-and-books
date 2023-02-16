const express = require('express');
const router = express.Router();

const Place = require('../models/place')

router.get("/locations", (req, res, next) => {

    Place
        .find()
        .then(places => res.json(places))
        .catch(err => next(err))
})


module.exports = router