const router = require("express").Router();

router.get("/", (req, res, next) => res.render("places/all-places"))

module.exports = router