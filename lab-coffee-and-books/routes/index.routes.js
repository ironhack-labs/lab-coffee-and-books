const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.use('/places', require('./places.routes'))
router.use('/', require('./map-routes'))
router.use('/', require('./api.routes'))


module.exports = router;
