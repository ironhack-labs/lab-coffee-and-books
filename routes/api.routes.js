const express = require('express')
const router = express.Router()



const Places = require('../models/place.model')

router.get('/locales', (req, res) => {

    Places
        .find()
        .then(locales => res.json(locales))
        .catch(err => next(err))
})

router.get('/locales/:id', (req, res) => {
    const placesId = req.params.id
    Places
        .findById(placesId)
        .then(local => res.json(local))
        .catch(err => next(err))
})



module.exports = router