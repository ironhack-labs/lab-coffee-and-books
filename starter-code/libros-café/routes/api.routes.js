const router = require("express").Router();

const Place = require("../models/Place.model")






router.get("/markers", (req, res, next) => {
    Place
        .find()
        .then(places => res.json(places))
        .catch(err => console.log(err))
});

module.exports = router;


