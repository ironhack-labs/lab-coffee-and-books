const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.render("index");
});

router.use('/', require('./places.routes'))

router.use('/', require('./maps.routes'))

router.use('/api', require('./api.routes'))




module.exports = router