const router = require("express").Router();

router.get("/map", (req, res, next) => res.render("places/map"))

module.exports = router