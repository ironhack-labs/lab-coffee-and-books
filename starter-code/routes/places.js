const express = require("express");
const router = express.Router();
const Place = require("../models/Place");

//CREATE
router.get("/new", (req, res) => {
  res.render("places/new");
});

router.post("/new", (req, res, next) => {
  const r = {
    name: req.body.name,
    tipo: req.body.tipo,
    location: {
      type: "Point",
      coordinates: [req.body.lng, req.body.lat]
    }
  };
  Place.create(r)
    .then(places => {
      res.redirect("/places/" + places._id);
    })
    .catch(e => next(e));
});

//UPDATE
router.get("/update/:id", (req, res, next) => {
  const id = req.params.id;
  Place.findById(id)
    .then(places => {
      res.render(`places/update`, places);
    })
    .catch(e => next(e));
});

router.post("/update/:id", (req, res, next) => {
  const id = req.params.id;
  let { name, tipo, lat, lng } = req.body;
  Place.findByIdAndUpdate(id, { name, tipo, lat, lng }, { new: true }, null)
    .then(places => {
      res.redirect(`/places/${id}`);
    })
    .catch(error => {
      res.render("places/new", { places: req.body, error });
    });
});

//DELETE
router.get("/delete/:id", (req, res, next) => {
  const id = req.params.id;
  Place.findByIdAndDelete(id)
    .then(places => {
      res.redirect("/places/");
    })
    .catch(e => next(e));
});

//DISPLAY
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Place.findById(id).then(places => {
    res.render("places/detail", places);
  });
});

router.get("/", (req, res, next) => {
  Place.find()
    .then(places => {
      res.render("places/list", { places: places });
    })
    .catch(e => next(e));
});

module.exports = router;
