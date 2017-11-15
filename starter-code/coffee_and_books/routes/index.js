var express = require("express");
var router = express.Router();
const Place = require("../models/place");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/", (req, res, next) => {
  // Get Params from POST
  let location = {
    type: "Point",
    coordinates: [req.body.longitude, req.body.latitude]
  };

  const place = new Place({
    name: req.body.name,
    location: location,
    type: req.body.place
  });

  // Save the restaurant to the Database
  place.save(error => {
    if (error) {
      console.log(error);
    } else {
      res.redirect("/");
    }
  });
});

module.exports = router;
