const router = require("express").Router();
const Place = require("./../models/place.model");

router.get("/places", (req, res, next) => {
  Place.find()
    .then(data => res.json(data))
    .catch(err => console.log(err))
})


module.exports = router;