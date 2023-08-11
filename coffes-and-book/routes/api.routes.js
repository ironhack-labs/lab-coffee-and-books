const express = require('express');
const Place = require("../models/place");
const router = express.Router();

router.get("/places", (req, res, next) => {

    Place
        .find()
        .then(place => res.json(place))
        .catch(err => console.log(err))
});

module.exports = router;