const router = require("express").Router();

router.get("/map", (req, res, next) => res.render("map"))

module.exports = router