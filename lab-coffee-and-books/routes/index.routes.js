const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.use('/places', require('./places.routes'))
router.use('/API', require('./API.routes'))

module.exports = router;
