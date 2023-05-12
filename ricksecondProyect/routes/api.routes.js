const express = require('express');
const router = express.Router();
const Place = require('../models/Place.model')



router.get("/api-places", (req, res, next) => {

    Place
        .find()
        .then(restaurants => res.json(restaurants))
        .catch(err => next(err))
});


module.exports = router;