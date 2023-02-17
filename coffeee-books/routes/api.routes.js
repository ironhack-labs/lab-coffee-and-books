const express = require('express');
const router = express.Router();

const Place = require('../models/Place.model')

router.get("/apiplaces", (req, res, next) => {

    Place
        .find()
        .then(apiplaces => res.json(apiplaces))
        .catch(err => console.log(err))
})


module.exports = router