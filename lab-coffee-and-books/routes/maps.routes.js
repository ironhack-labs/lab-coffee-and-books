const router = require("express").Router();

router.get("/basic", (req, res, next) => res.render("places/map-place"))

module.exports = router