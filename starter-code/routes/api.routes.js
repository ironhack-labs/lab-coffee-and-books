const router = require("express").Router()

const Restaurant = require('./../models/User.model')

router.get("/restaurants", (req, res, next) => {

    Restaurant
        .find()
        .then(restaurants => res.json(restaurants))
        .catch(err => console.log(err))
})

module.exports = router