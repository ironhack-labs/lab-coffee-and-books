const router = require("express").Router();

router.get("/", (req, res, next) => res.render("map/map-render"))

module.exports = router