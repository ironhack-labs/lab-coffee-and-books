const express = require("express");
const router = express.Router();
const Places = require("../models/places.model");

// GET => to retrieve all the restaurants from the DB
router.get("/", (req, res, next) => {
  Places.find({}, (error, placesFromDB) => {
    if (error) {
      next(error);
    } else {
      res.render("places/index", { places: placesFromDB });
    }
  });
});

router.get("/new", (req, res, next) => res.render("places/new"));

// POST => to create new restaurant and save it to the DB
router.post("/", (req, res, next) => {
  let location = {
    type: "Point",
    coordinates: [req.body.longitude, req.body.latitude]
  };

  const newPlaces = new Places({
    name: req.body.name,
    description: req.body.description,
    location
  });

  newPlaces.save(error => {
    if (error) {
      next(error);
    } else {
      res.redirect("/places");
    }
  });
});

// GET => get the form pre-filled with the details of one restaurant
router.get("/:places_id/edit", (req, res, next) => {
  Places.findById(req.params.places_id, (error, places) => {
    if (error) {
      next(error);
    } else {
      res.render("places/update", { places });
    }
  });
});

// POST => save updates in the database
router.post("/:places_id", (req, res, next) => {
  Places.findById(req.params.places_id, (error, places) => {
    if (error) {
      next(error);
    } else {
      places.name = req.body.name;
      places.description = req.body.description;
      places.save(error => {
        if (error) {
          next(error);
        } else {
          res.redirect(`/places/${req.params.places_id}`);
        }
      });
    }
  });
});

// DELETE => remove the restaurant from the DB
router.get("/:places_id/delete", (req, res, next) => {
  Places.remove({ _id: req.params.places_id }, function(
    error,
    places
  ) {
    if (error) {
      next(error);
    } else {
      res.redirect("/places");
    }
  });
});

// to see raw data in your browser, just go on: http://localhost:3000/restaurants/api
router.get("/api", (req, res, next) => {
  Places.find()
    .then(allPlacesFromDB =>
      res.status(200).json({ places: allPlacesFromDB })
    )
    .catch(err => next(err));
});

// // to see raw data in your browser, just go on: http://localhost:3000/api/someIdHere
// router.get("/api/:id", (req, res, next) => {
//   let placesId = req.params.id;
//   Places.findOne({ _id: placesId }, (error, onePlacesFromDB) => {
//     if (error) {
//       next(error);
//     } else {
//       res.status(200).json({ places: onePlacesFromDB });
//     }
//   });
// });

// GET => get the details of one restaurant
router.get("/:places_id", (req, res, next) => {
  Places.findById(req.params.places_id, (error, places) => {
    if (error) {
      next(error);
    } else {
      res.render("places/show", { places: places });
    }
  });
});

module.exports = router;
