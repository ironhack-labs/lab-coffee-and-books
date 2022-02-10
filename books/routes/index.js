const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/mapa", (req, res, next) => {
  res.render("maps")
})


module.exports = router;
