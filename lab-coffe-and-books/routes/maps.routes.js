const router = require("express").Router();

router.get("/basico", (req, res, next) => res.render("map"))

module.exports = router