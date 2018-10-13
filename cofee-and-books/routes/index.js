const express = require("express");
const router = express.Router();

// Modelos
const Place = require("../models/Place");

/* GET home page */
router.get("/", (req, res, next) => {
  Place.find().then(places => {
    res.render("index", { places });
  });
});

// Vista para agregar nuevas cafeterias 
router.get("/newP", (req, res) => {
  res.render("news");
});

router.post("/newP", (req, res) => {
  const { name, desc, image, lat, lng } = req.body;
  let coordinates = [];
  coordinates.push(lng);
  coordinates.push(lat);
  let place = {
    name,
    desc,
    image,
    location: {
      coordinates
    }
  };
  Place.create(place).then(() => {
    res.redirect("/");
  });
});
 
 
// Detalle cafeterias
router.get("/:id", (req, res) =>{
  Place.findById(req.params.id)
      .then(places => {
        res.render("detail",{places});
      })
});

//Borrar cafe
router.post("/cofee/:id/delete", (req,res)=>{
  Place.findByIdAndRemove(req.params.id)
  .then(places => {
    res.redirect("/")
  })
  .catch(e=>next(e))
})


module.exports = router;
