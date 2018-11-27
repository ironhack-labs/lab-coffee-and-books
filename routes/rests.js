const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");

router.get("/new", (req, res, next) => {
  res.render("rests/new");
});

router.post("/new", (req, res, next) => {
  const r = {
    name: req.body.name,
    location: {
      type: "Point",
      coordinates: [req.body.lng, req.body.lat]
    }
  };
  Restaurant.create(r).then(rest => {
    res.redirect("/restaurants/" + rest._id);
  });
});

router.get("/:id", (req, res) => {
  Restaurant.findById(req.params.id).then(rest => {
    res.render("rests/detail", rest);
  });
});

router.get("/", (req, res) => {
  Restaurant.find().then(rests => {
    res.render("rests/list", { restaurants: rests });
  });
});

module.exports = router;
