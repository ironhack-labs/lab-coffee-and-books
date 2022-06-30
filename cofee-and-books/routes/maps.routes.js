const router = require("express").Router();

router.get("/mapa", (req, res, next) => res.render("maps/maps"))

module.exports = router