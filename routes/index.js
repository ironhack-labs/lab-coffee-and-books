const express = require("express");
const router = express.Router();
const Place = require("../models/Place");

/* GET home page */
router.get("/", (req, res, next) => {
  Place.find().then(places => {
    res.render("index", { places: JSON.stringify(places) });
  });
});

router.get("/new", (req, res, next) => {
  res.render("places/new");
});

router.post("/new", (req, res, next) => {
  console.log('asdasd')
  const { name, kind } = req.body;

  let location = {
    type: "point",
    coordinates: [req.body.latitude, req.body.longitude]
  };

  var fieldsPromise = new Promise((resolve, reject) => {
    if (name === "" || kind === "" || location === ['','']) {
      reject(
        new Error("Indicate a name, kind and location to create the place")
      );
    } else {
      resolve();
    }
  });

  fieldsPromise
    .then(() => {
      return Place.findOne({ name });
    })
    .then(place => {
      if (place) {
        throw new Error("The place already exists");
      }

      const newPlace = new Place({
        name,
        kind,
        location
      });
      return newPlace.save();
    })
    .then(() => {
      res.redirect("/new");
    })
    .catch(err => {
      res.render("places/new", {
        errorMessage: err.message
      });
    });
});

module.exports = router;
