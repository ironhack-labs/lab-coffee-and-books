const router = require("express").Router();

router.get("/details", (req, res, next) => res.render("places/details"))

module.exports = router