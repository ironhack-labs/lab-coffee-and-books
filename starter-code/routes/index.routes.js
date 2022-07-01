const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// places

const places = require("./places.routes")
router.use("/places", places)

const api = require("./api.routes")
router.use("/api", api)

const map = require("./maps.routes")
router.use("/", map)

module.exports = router;
