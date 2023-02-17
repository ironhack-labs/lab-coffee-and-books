const router = require("express").Router();

router.get("/show-map", (req, res, next) => {
  res.render("place/places-map")
})

module.exports = router