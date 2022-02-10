const Place = require("../models/Place.model");

const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.render("index")
})

router.get("/map", (req, res, next) => {
  res.render("./Pages/map")
})

router.get("/API", (req, res, next) => {
  Place
    .find()
    .then(resp => res.json(resp))
    .catch(err => console.log(err))
})


module.exports = router;
