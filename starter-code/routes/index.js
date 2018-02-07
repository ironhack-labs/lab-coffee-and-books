const express = require("express");
const router = express.Router();
const Place = require("../models/Place");

/* GET home page. */
router.get("/", (req, res, next) => {
  Place.find().exec((err, places) => {
    res.render("index", {
      places: places,
      title: "Home"
    });
  });

});

//get new place
router.get("/new-place", (req, res, next) => {
  res.render("newplace", { title: "New Place" });
});
//post new place
router.post("/new-place", (req, res, next) => {
  const name = req.body.name;
  const description = req.body.description;
  const kindof = req.body.kindof;
  const location1 = req.body.location1;
  const location2 = req.body.location2;

  if (name === "" || location1 === "") {
    res.render("newplace", {
      message: "Indicate name and location"
    });
    return;
  }

  Place.findOne({ name }, "name", (err, name) => {
    if (name !== null) {
      res.render("newplace", {
        message: "The name already exists"
      });
      return;
    }

    const newPlace = new Place({
      name: req.body.name,
      description: description,
      kindOfEstablishment: kindof,
      location: {
        coordinates: [location1, location2]
      }
    });

    newPlace.save(err => {
      if (err) {
        console.log(err);
        res.render("newplace", {
          message: "Something went wrong"
        });
      } else {
        res.redirect("/");
      }
    });
  });
});

module.exports = router;
