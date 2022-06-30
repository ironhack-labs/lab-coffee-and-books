const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

//Places routes
router.use("/", require("./places.routes"))

module.exports = router;
