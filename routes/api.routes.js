const express = require('express');
const router = express.Router();

const Place = require('../models/Place.model')

router.get("/place", (req, res, next) => {

  Place
    .find()
    .then(place => res.json(place))
    .catch(err => next(err))
})


module.exports = router