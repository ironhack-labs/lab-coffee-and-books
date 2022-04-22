const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});


router.use('/', require('./place.routes'))

router.use('/', require('./api.routes'))


module.exports = router;
