const express = require('express');
const PLace = require('./../models/Place.model');
const router = express.Router();

router.get("/places", (req, res, next) => {

    PLace
        .find()
        .then(places => res.json(places))
        .catch(err => console.log(err))
});

module.exports = router;