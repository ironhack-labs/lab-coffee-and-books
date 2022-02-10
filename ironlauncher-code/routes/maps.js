const router = require("express").Router();

router.get("/maps", (req, res, next) => res.render("maps/map"));

module.exports = router;
