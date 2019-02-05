const express = require("express");
const router = express.Router();
const Place = require("../models/Place.js");

router.get("/places", (req, res, next) => {
  Place.find()
    .then(data => {
      res.render("places/index", { data });
    })
    .catch(error => {
      console.log(error);
    });
});
router.get("/new", (req, res) => res.render("places/new"));

router.post("/new", (req, res, next) => {
  const { name, type } = req.body;
  let location = {
    type: "Point",
    coordinates: [req.body.longitude, req.body.latitude]
  };
  const newPlace = new Place({ name, type, location });
  newPlace
    .save()
    .then(data => {
      res.redirect("places");
    })
    .catch(error => {
      res.render("places/new", { data });
      console.log(error);
    });
});

router.get("/places/:id/edit", (req, res, next) => {
  let placeId = req.params.id;
  Place.findById(placeId)
    .then(data => {
      res.render("places/edit", { data });
    })
    .catch(error => {
      console.log(error);
    });
});
router.post("/places/:id/delete", (req, res, next) => {
  let placeId = req.params.id;
  Place.findByIdAndRemove(placeId)
    .then(data => {
      res.redirect("/places");
    })
    .catch(error => {
      console.log(error);
    });
});

router.post("/places/:id/edit", (req, res, next) => {
  let location = {
    type: "Point",
    coordinates: [req.body.longitude, req.body.latitude]
  };
  const { name, type } = req.body;
  Place.findByIdAndUpdate(req.params.id, { name, type, location })
    .then(data => {
      res.redirect("/places");
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
