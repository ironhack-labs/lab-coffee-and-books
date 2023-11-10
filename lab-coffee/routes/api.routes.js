const express = require("express")
const router = express.Router()


const Places = require("./../models/place.model")

router.get("/places", (req, res, next) => {
    Places
        .find()
        .then(places => res.json(places))
        .catch(err => res.status(500).json({ message: "Houston hay un problemon", errorDetails: err }))
})


module.exports = router