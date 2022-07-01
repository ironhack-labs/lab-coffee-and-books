const router = require("express").Router();

router.get("/", (req, res, next) => res.render("maps/index"))

module.exports = router