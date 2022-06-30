const router = require("express").Router()

const Place = require('./../models/place.model')

router.get('/places', (req, res) => {

    Place
        .find()
        .then(maps => res.json(maps))
        .catch(err => res.json({ Message: 'server error', err }))
})

module.exports = router