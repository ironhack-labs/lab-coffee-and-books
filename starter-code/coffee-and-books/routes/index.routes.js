const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// Show the map

router.get('/map', (req, res, next) => {
  res.render('map')
})

module.exports = router;
