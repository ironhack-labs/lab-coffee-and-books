const router = require("express").Router();

router.get("/", (req, res, next) => res.render("maps/mapbasic"))

module.exports = router