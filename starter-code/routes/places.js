const express = require("express");
const router = expres.Router();
const Places = require("../models/Place")

router.get("/", (req, res) => {
    Places.find().then(places => {
      res.render("places", { places });
    });
  });
  
  router.get("/new", (req, res) => {
    res.render("new");
  });

  router.post("/new", (req, res) => {
    let { lng, lat, name, description } = req.body;
    let rest = {
      name,
      description,
      location: {
        type: "Point",
        coordinates: [lng, lat]
      }
    };
    Places.create(rest).then(rest => {
      res.redirect("/places");
    });
  });
  
  router.get("/:id/edit", (req, res) => {
    let { id } = req.params;
    Places.findById(id).then(places => {
      res.render("new", places);
    });
  });

  router.post("/:id/edit", (req, res) => {
    let { id } = req.params;
    let { lng, lat, name, description } = req.body;
    let rest = {
      name,
      description,
      location: {
        type: "Point",
        coordinates: [lng, lat]
      }
    };
    Places.findByIdAndUpdate(id, { $set: rest }).then(() => {
      res.redirect("/places");
    });
  });

  router.get("/:id/delete", (req, res) => {
    let { id } = req.params;
    Places.findByIdAndDelete(id).then(() => {
      res.redirect("/places");
    });
  });

  module.exports = router;