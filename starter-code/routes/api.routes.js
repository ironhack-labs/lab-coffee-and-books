const router = require("express").Router()
const Place = require('./../models/Place.model')

router.get("/places", (req, res, next) => {

    Place
        .find()
        .then(place => res.json(place))
        .catch(err => console.log(err))
})


module.exports = router