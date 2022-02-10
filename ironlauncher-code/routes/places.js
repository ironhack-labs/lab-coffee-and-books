const router = require("express").Router();
const Place = require("../models/place.model");

//Places
router.get("/places", (req, res, next) => {
  Place.find()
    .then((places) => res.render("places/placeslist", { places }))
    .catch((err) => console.log(err));
});

//Places create
router.get("/places/create", (req, res, next) => {
  Place.find()
    .then((places) => res.render("places/new-place", { places }))
    .catch((err) => console.log(err));
});

router.post("/places/create", (req, res, next) => {
  const { name, type, lat, lng } = req.body;
  const location = {
    type: "Point",
    coordinates: [lat, lng],
  };

  Place.create({ name, type, location })
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => console.log(err));
});

//Places edit

router.get("/places/edit/:id", (req, res, next) => {
  const { id } = req.params;

  Place.findById(id)
    .then((place) => res.render("places/update-place", place))
    .catch((err) => console.log(err));
});

router.post("/places/edit/:id", (req, res, next) => {
  const { id } = req.params;
  const { name, type, lat, lng } = req.body;
  //Es importante que vaya en este orden
  const location = {
    type: "Point",
    coordinates: [lat, lng],
  };

  Place.findByIdAndUpdate(id, { name, type, location }, { new: true })
    .then((updatedplace) => res.redirect("/places"))
    .catch((err) => console.log(err));
});

//Places delete

router.post("/places/delete/:id", (req, res, next) => {
  const { id } = req.params;

  Place.findByIdAndDelete(id)
    .then(() => res.redirect("/places"))
    .catch((err) => console.log(err));
});

//Place map
router.get("/map", (req, res, next) => res.render("places/marked-place"));

module.exports = router;
