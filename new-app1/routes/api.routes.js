const router = require("express").Router()

const Place = require('./../models/place.model')

router.get("/api/sitios", (req, res, next) => {

    Place
        .find()
        .then(allPlaces => res.json(allPlaces))
        .catch(err => console.log(err))
})

module.exports = router