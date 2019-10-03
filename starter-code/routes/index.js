const express = require("express");
const router = express.Router();
const Place = require("../models/Place");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

//GET ALL PLACES IN DB
router.get("/places", (req, res, next) => {
  Place.find()
    .then(places => {
      console.log("Here all the places saved:", places);
      res.render("places/showall", { places });
    })
    .catch(err => {
      console.log(err);
    });
});

//RUTA PARA IR A PAG DE NUEVO LUGAR
router.get("/places-new", (req, res, next) => {
  res.render("places/new");
});

//RUTA POST QUE CREA UN NUEVO LUGAR EN DB
router.post("/places-new", (req, res) => {
  let { latitude, longitude, name, ...place } = req.body;
  place = { ...place, name, location: { coordinates: [longitude, latitude] } };

  console.log("CREANDO NUEVO DOCUMENTO EN DB: ", place);
  Place.create(place)
    .then(place => {
      res.redirect("/places");
    })
    .catch(err => {
      console.log(err);
    });
});

//RUTA PARA ELIMINAR UN LUGAR EN ESPECIFICO
router.post("/places/:id/delete", (req, res) => {
  let { id } = req.params;
  Place.findByIdAndRemove(id)
    .then(() => {
      res.redirect("/places");
    })
    .catch(err => {
      console.log(err);
    });
});

//RUTA PARA HACER UPDATE DE LUGAR EN ESPECIFICO
router.post("/places/:id", (req, res) => {
  let place = { ...req.body };
  console.log("VALORES RECUPERADOS", place);
  let { id } = req.params;

  Place.findByIdAndUpdate(id, { $set: place })
    .then(() => {
      res.redirect("/places");
    })
    .catch(err => {
      console.log(err);
    });
});

//RUTA PARA IR A PAGINA DE EDICION DE LUGAR EN ESPECIFICO
router.get("/places/:id/edit", (req, res) => {
  let { id } = req.params;
  Place.findById(id)
    .then(place => {
      console.log("TO EDIT", place);
      res.render("places/edit", {
        place,
        options: ["coffee shop", "bookstore"]
      });
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
