const express = require("express");
const router = express.Router();

const Library = require("../models/Library");

router.get("/Libraries", (req, res, next) => {
  Library.find().then(libraries => {
    res.render("indexL", { libraries });
  });
});

//Borrar librerias
router.post("/library/:id/delete", (req,res)=>{
  Library.findByIdAndRemove(req.params.id)
  .then(()=> {
    res.redirect("/")
  })
  .catch(e=>next(e))
})

// Vista para agregar nuevas librerias
router.get("/newL", (req, res) => {
  res.render("newL");
});

router.post("/newL", (req, res) => {
  const { name, desc, image, lat, lng } = req.body;
  let coordinates = [];
  coordinates.push(lng);
  coordinates.push(lat);
  let library = {
    name,
    desc,
    image,
    location: {
      coordinates
    }
  };
  Library.create(library).then(() => {
    res.redirect("/");
  });
});

// Detalle librerias
router.get("/:id", (req, res) =>{
  Library.findById(req.params.id)
      .then(libraries => {
        res.render("detailL",{libraries});
      })
});


module.exports = router;