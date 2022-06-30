const router = require("express").Router();

//home page
router.get("/", (req, res, next) => {
  res.render("index")
})

//create page
router.use('/places', require('./places.routes'))

//render map
router.use('/places/list', require('./maps.routes'))

//api
router.use('/api', require('./api.routes'))

module.exports = router
