const { application } = require("express");

const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});


//place
router.use("/place", require("./../routes/place.routes"))

//maps
router.use("/maps", require("./../routes/map.routes"))

//api
router.use("/api", require("./../routes/api.routes"))

module.exports = router;
