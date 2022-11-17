const router = require("express").Router();

router.get("/mapa", (req, res) => res.render("maps/locations-map"));

module.exports = router;
