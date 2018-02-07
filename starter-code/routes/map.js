var express = require("express");
var router = express.Router();
var Place = require("../models/Place")

// AIzaSyDFiypHaUq5-spnc4yVfgvB8MStxuvwE2M

router.get("/", (req, res, next) => {
  Place.find((error, places) => {
    if (error) { next(error); }
    else {
      res.render('index', { places });
    }
  })
})

module.exports = router;