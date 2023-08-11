const express = require('express');
const Place = require('../models/Place.model');
const router = express.Router();

router.get("/restaurants", (req, res, next) => {

    Restaurant
        .find()
        .then(restaurants => res.json(restaurants))
        .catch(err => console.log(err))
});

module.exports = router;
