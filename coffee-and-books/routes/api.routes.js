const express = require('express');
const router = express.Router();
const Place = require('../models/Place.model')

router.get("/place", (req, res, next) => {

    Place
        .find()
        .then(places => res.json(places))
        .catch(err => console.log(err))
});

module.exports = router