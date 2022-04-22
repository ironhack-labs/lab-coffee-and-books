const router = require('express').Router()
const Places = require('../models/Places.model')


router.get('/api-places', (req, res) => {

    Places
        .find()
        .then(restaurants => res.json(restaurants))
        .catch(err => console.log(err))
})


module.exports = router