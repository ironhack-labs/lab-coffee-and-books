var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/all", (req, res, next) => {
  Place.find({}, (err, places) => {
    res.render("/all", {
      places: places
    });
  });
});

router.post((req, res, next) => {
  let location = {
    tupe: "Point",
    coordinates: [req.body.longitude, req.body.latitude]
  };
  const newPlace = {
    name: req.body.name,
    description: req.body.description,
    location: location
  };
  place.save(error => {
    if (error) {
      console.log(error);
    } else {
      res.redirect("/", { message: "vouz avez bien joue" });
    }
  });
});

module.exports = router;
