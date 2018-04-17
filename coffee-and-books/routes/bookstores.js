const express = require("express");
const mongoose = require("mongoose");
const Bookstore = require("../models/Bookstore");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("bookstores/index");
});

router.get("/new", (req, res, next) => {
  res.render("bookstores/new");
});

router.post("/new", (req, res, next) => {
  const location = {
    type: "Point",
    coordinates: [req.body.latitute, req.body.longitude]
  };

  const bookPlaceDetail = {
    name: req.body.name,
    description: req.body.description,
    location: location
  };

  const bookPlace = new Bookstore(bookPlaceDetail);

  bookPlace
    .save()
    .then(bookPlace => {
      res.redirect("/bookstores");
    })
    .catch(err => {
      res.render("error", err);
    });
});

module.exports = router;
