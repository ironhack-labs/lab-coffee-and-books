const express = require("express");
const router = express.Router();
const Place = require("../models/Place");

router.get("/new", (req, res, next) => {
  res.render("./places/new");
});

router.get("/all", (req, res, next) => {
  Place.find().then(places => res.render("./places/all", { places }));
});

router.get("/:id",(req,res,next)=>{
    const { id } = req.params;
    Place.findById(id).then(place => {
        const longitude = place.location.coordinates[0]
        const latitude = place.location.coordinates[1]
        res.render("./places/edit", { place , latitude, longitude})});
})

router.get("/:id/edit", (req, res, next) => {
  const { id } = req.params;
  Place.findById(id).then(place => {
    const longitude = place.location.coordinates[0]
    const latitude = place.location.coordinates[1]
    res.render("./places/edit", { place , latitude, longitude})});
});
router.get("/:id/delete", (req, res, next) => {
  const { id } = req.params;
  Place.findByIdAndDelete(id).then(() => res.redirect("/places/all"));
});

router.post("/new", (req, res, next) => {
  const { name, type ,latitude, longitude} = req.body;
  if (name == ""||latitude == ""||longitude=="") {
    return res.render("./places/new", { error: "Empty field" });
  }
  Place.findOne({ name: name }, "name")
    .then(place => {
      if (place == null) {
        const location={type:"Point",coordinates:[longitude,latitude]}
        Place.create({ name: name, type: type ,location }).then(() =>
          res.redirect("/places/all")
        );
      } else {
        res.render("./places/new", { error: "the place already exist" });
      }
    })
    .catch(e => console.log("Error", e));
});
router.post("/:id/edit", (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const { name, type } = req.body;
  Place.findById(id)
    .then(place => {
      if (place.name != name) {
        Place.findOne({ name: name }).then(places => {
          if (places == null) {
            Place.findByIdAndUpdate(id, { name: name, type: type }).then(() =>
              res.redirect("/places/all")
            );
          } else {
            res.render("./places/edit", {
              error: "there are a place with the same name"
            });
          }
        });
      } else {
        Place.findByIdAndUpdate(id, { name: name, type: type }).then(() =>
          res.redirect("/places/all")
        );
      }
    })
    .catch(e => console.log("ERROR", e));
});
module.exports = router;
