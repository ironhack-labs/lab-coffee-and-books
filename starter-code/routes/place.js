const express = require("express");
const router = express.Router();
const Place = require("../models/Place");

router.get("/", (req, res, next) => {
  Place.find()
    .then(places => {
      res.render("place/index", { places });
    })
    .catch(e => next(e));
});

router.get('/newPlace', (req, res, next) => {
  res.render('place/newPlace')
})

module.exports = router;
