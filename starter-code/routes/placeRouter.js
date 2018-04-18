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
        res.render("index", { places: JSON.stringify(places), placeList: places });
      })
      .catch(error => {
        console.log(error);
      });
  });
  /* CRUD -> Delete the place in DB */
routerPlace.get("/:id/delete", (req, res) => {
    Place.findByIdAndRemove(req.params.id)
      .then(() => {
        res.redirect("/");
      })
      .catch(error => {
        res.render("error");
      });
  });
/* CRUD -> Udpate, show place update form */
routerPlace.get("/:id/edit", (req, res) => {
    Place.findById(req.params.id).then(place => {
      res.render("place_edit", { place });
    });
  });
  
  /* CRUD -> Udpate, update the place in DB */
  routerPlace.post("/:id/edit", (req, res) => {
    const { name, description, type, location } = req.body;
    const updates = { name, description, type, location };
    Place.findByIdAndUpdate(req.params.id, updates).then(() => {
      res.redirect("/");
    });
  });
  module.exports = routerPlace;