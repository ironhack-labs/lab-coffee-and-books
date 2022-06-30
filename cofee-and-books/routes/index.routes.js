const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

//PLACES

router.use('/places', require('./../routes/places.routes'))
router.use('/maps', require('./../routes/maps.routes'))
router.use('/api', require('./../routes/api.routes'))

module.exports = router;
