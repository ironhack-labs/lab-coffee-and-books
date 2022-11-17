const router = require("express").Router();

router.get("/", (req, res, next) => res.render("places/maps"))

module.exports = router