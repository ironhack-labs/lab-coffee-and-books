const express = require('express');
const router = express.Router();

const Places = require('../models/Place.model')

router.get("/location", (req, res, next) => {

    Places
        .find()
        .then(places => res.json(places))
        .catch(err => console.log(err))
})


module.exports = router