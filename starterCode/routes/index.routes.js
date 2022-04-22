const router = require("express").Router()

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index")
})

// -------------> PLACES <-------------
router.use('/', require('./places.routes'))


// -------------> API <-------------
router.use('/api', require('./api.routes'))


module.exports = router
