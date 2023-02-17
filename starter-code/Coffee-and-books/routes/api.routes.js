const express = require('express');
const router = express.Router();

const Restaurant = require('../models/Restaurant.model');

router.get("/rests", (req, res, next) => {
    Restaurant
        .find()
        .then(rests => res.json(rests))
        .catch(err => next(err))
})

module.exports = router;
