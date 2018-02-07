var express = require("express");
var router = express.Router();
const Place = require("../models/Place");

/* GET home page. */
router.get("/", function(req, res, next) {
  Place.find().exec((err, places) => {
    res.render("index", { title: "Places", places: places });
  });
});

router.get("/new", (req, res, next) => {
  res.render("places/new");
});

router.post("/new", (req, res, next) => {
  
  console.log("entramos en new");
  console.log(req.body);
  const place = new Place({ 
      name: req.body.name,
      descriptiopn: req.body.descriptiopn, 
      type: req.body.type, 
      location: { lat: req.body.latitude, lng: req.body.longitude}
  });
  place.save(err => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
