const express = require('express');
const Places = require('../models/places.model');
const router = express.Router();

router.get("/places", (req, res, next) => {

    Places
        .find()
        .then(places => res.json(places))
        .catch(err => console.log(err))
});

module.exports = router;