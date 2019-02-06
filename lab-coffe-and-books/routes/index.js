const express = require("express");
const Place = require("../models/Place");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  Place.find().then(places => {
    res.render("index", { places });
  });
});
router.get("/add", (req, res, next) => {
  const { name, category, lng, lat } = req.query;
  Place.create({ name, category, location: { coordinates: [lng, lat] } })
    .then(() => {
      res.redirect("/");
    })
    .catch(next);
});

module.exports = router;
