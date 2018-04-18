const express = require("express");
const routerPlace = express.Router();

const Place = require("../models/place");


/* CRUD -> Create show form */
routerPlace.get("/new", (req, res) => {
    res.render("place_new");
  });
  
  /* CRUD -> Acquire form params and create the celebrity object in DB */
  routerPlace.post("/new", (req, res) => {
    const { name, description, type } = req.body;

    const location = {
        type: "Point",
        coordinates: [ req.body.latitude, req.body.longitude ]
      }
  
    const place = new Place({ name, description, type, location });
    place.save().then(place => {
      console.log("Nueva place");
      console.log(place);
      res.redirect("/");
    });
  });

/* CRUD -> Retrieve ALL */
routerPlace.get("/", (req, res) => {
    Place.find()
      .then(places => {
        console.log(places);
        res.render("index", { places });
      })
      .catch(error => {
        console.log(error);
      });
  });

  module.exports = routerPlace;