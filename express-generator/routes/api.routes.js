const express = require('express');
const router = express.Router();
const Places = require('../models/place.model');

router.get('/api', (req, res, next) => {

    Places
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
})

module.exports = router