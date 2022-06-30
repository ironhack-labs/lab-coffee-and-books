const router = require("express").Router();

router.get("/place/list", (req, res, next) => res.render("place/list-place"))

module.exports = router