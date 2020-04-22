const express = require("express");
const router = express.Router();

const Place = require("../models/place");

router.get("/", (req, res, next) => {
  console.log('you are in')
  Place.find()
  .then(allPlaces => {
  res.render("places/index", {allPlaces})})
  .catch(err => {
      next()
      console.log("Ha habido un PROBLEMA!", err)
      return err
  });
});


module.exports = router;