const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.use(require('./places.routes'))
router.use(require('./api.routes'))
router.use(require('./maps.routes'))

module.exports = router;
