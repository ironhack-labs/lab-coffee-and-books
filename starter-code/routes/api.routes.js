const router = require("express").Router()
const Place = require("./../models/Place.model")

router.get('/places', (req, res) => {
    Place
        .find()
        .then(place => res.json(place))
        .catch(err => res.json({ Message: 'server error', err }))
})

module.exports = router