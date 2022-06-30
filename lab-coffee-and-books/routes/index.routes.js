const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

const placesRouter = require("./places.routes")
router.use("/", placesRouter)

const apiRouter = require('./api.routes')
router.use('/api', apiRouter)

const mapRouter = require('./maps.routes')
router.use('/maps', mapRouter)

module.exports = router;
