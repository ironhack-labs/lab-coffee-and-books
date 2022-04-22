const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// router.get("/", (req, res) => {
//   res.render("places");
// });

module.exports = router;
