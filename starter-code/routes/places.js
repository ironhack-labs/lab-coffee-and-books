const express = require("express");
const router = express.Router();
const PlaceModel = require("./../models/Place");

router.get("/", (req, res) => {
  PlaceModel.find()
    .then(dbRes => res.render("places/manage", { places: dbRes }))
    .catch(err => console.log(err));
});

router.get("/edit/:id", (req, res) => {
  PlaceModel.findById(req.params.id)
    .then(dbRes => res.render("places/edit", { place: dbRes, msg: "" }))
    .catch(err => console.log(err));
});

router.post("/edit/:id", (req, res) => {
  const { name, type, lat, lng } = req.body;
  const editPlace = {
    name,
    type,
    lat,
    lng
  };
  PlaceModel.findByIdAndUpdate(req.params.id, editPlace)
    .then(dbRes => res.redirect("/places"))
    .catch(err => console.log(err));
});

router.get("/delete/:id", (req, res) => {
  PlaceModel.findByIdAndDelete(req.params.id)
    .then(dbRes => res.redirect("/places"))
    .catch(err => console.log(err));
});

router.get("/create", (req, res) => {
  res.render("places/create", { msg: "" });
});

router.post("/create", (req, res) => {
  const { name, type, lat, lng } = req.body;
  const newPlace = {
    name,
    type,
    lat,
    lng
  };
  PlaceModel.findOne({ lat: req.body.lat, lng: req.body.lng })
    .then(dbRes => {
      if (dbRes) {
        res.render("places/create", { msg: "This place already exists." });
      } else {
        PlaceModel.create(newPlace)
          .then(response =>
            res.render("places/create", { msg: "Your place was created" })
          )
          .catch(err => console.log(err));
      }
    })
    .catch(error => console.log(error));
});

router.get("/api", (req, res) => {
  PlaceModel.find()
    .then(dbRes => res.send(dbRes))
    .catch(error => console.log(error));
});
module.exports = router;
