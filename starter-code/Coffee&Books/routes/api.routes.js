const express = require('express');
const router = express.Router();

const Places = require('./../models/Places.model')

router.get("/map", (req, res, next) => {

    Places
        .find()
        .then(places => res.json(places))
        .catch(err => res.status(500).json({ message: 'Server issue D:', errorDetails: err }))
})


module.exports = router

