const router = require("express").Router();
const places = require("./places.routes")

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});
router.use('/places', places)
const api = require("./api.routes")
router.use('/api', api)

module.exports = router;
