const router = require("express").Router();
const Place = require("../models/Place.model");

router.get("/", (req, res, next) => {
  Place.find()
    .then((places) => res.render("places/places-page", { places }))
    .catch((err) => console.log(err));
});

router.get("/create", (req, res, next) => {
  res.render("places/new-place");
});

router.post("/create", (req, res, next) => {
  const { name, description, lat, lng } = req.body;

  const location = {
    type: "Point",
    coordinates: [lat, lng],
  };

  Place.create({ name, description, location }).then((places) =>
    res.redirect("/places").catch((err) => console.log(err))
  );
});

router.get("/mapa", (req, res, next) => res.render("places/marked-map"));

module.exports = router;
