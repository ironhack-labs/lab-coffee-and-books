const router = require("express").Router();

router.get("/map", (req, res, next) => res.render("restaurants/map"))

module.exports = router