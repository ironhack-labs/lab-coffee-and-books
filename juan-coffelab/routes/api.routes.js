const express = require('express');
const router = express.Router();
const Place = require('../models/Place.model')

router.get("/places", (req, res, next) => {
  Place
    .find()
    .then(coffees => res.json(coffees))
    .catch(err => console.log(err))
})

module.exports = router