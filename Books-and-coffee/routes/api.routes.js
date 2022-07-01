const router = require("express").Router()

const Place = require('./../models/Place')

router.get('/', (req, res) => {

    Place
        .find()
        .then(place => res.json(place))
        .catch(err => res.json({ Message: 'server error', err }))
})

module.exports = router