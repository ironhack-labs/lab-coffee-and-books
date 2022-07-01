const router = require("express").Router();

//----> Home page route
router.get("/", (req, res, next) => res.render("index"))


module.exports = router
