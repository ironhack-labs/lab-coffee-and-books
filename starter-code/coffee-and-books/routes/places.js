var express = require("express");
var router = express.Router();

const Place = require("../models/place");
//list all places
router.get("/places", function(req, res, next) {
  Place.find({}, (err, placesArray) => {
    if (err) {
      return next(err);
    }

    res.render("places/index", {
      places: placesArray
    });
  });
});
//list one place

router.get("/:id", function(req, res, next) {
  const placeId = rep.params.id;
  Place.findbyId(
    { placeId },
    (err,
    placesDetails => {
      if (err) {
        return next(err);
      }

      res.render("places/show", {
        place: placeDetails
      });
    })
  );
});

router.post((req, res, next) => {
  // Get Params from POST
  let location = {
    type: "Point",
    coordinates: [req.body.longitude, req.body.latitude]
  };

  // Create a new Place with location
  const newPlace = {
    name: req.body.name,
    description: req.body.description,
    location: location
  };

  // Save the place to the Database
  place.save(error => {
    if (error) {
      console.log(error);
    } else {
      res.redirect("/");
    }
  });
});

module.exports = router;
