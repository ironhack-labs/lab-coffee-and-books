const express = require('express');
const router = express.Router();

router.get("/places/map", (req, res, next) => {
  res.render("maps/places-map")
})

module.exports = router