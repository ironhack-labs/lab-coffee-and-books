const router = require("express").Router();

router.get("/mapa", (req, res, next) => res.render("maps/places-map"))

module.exports = router