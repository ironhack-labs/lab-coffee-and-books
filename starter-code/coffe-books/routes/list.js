var express = require('express');
var router = express.Router();
var Place = require("../models/Place")

//CRUD COMPLETO

router.get("/create", (req,res) => {
  res.render("create");
})

router.post("/create", (req,res,next) => {
  const newPlace = new Place({
    type: req.body.type,
    name: req.body.name,
    description: req.body.description,
  })

  newPlace.save((err) => {
    if (err){
      res.render("create", {errorMessage : "Error"} )
    } else {
      res.redirect("/");
    }
  });
});

router.get("/show", (req,res) => {
  Place.find({}).exec((err, list) => {
    res.render("show", {list});
  });
});

router.get("/edit/:id", (req, res) =>{
  const id = req.params.id;
  Place.findById(id).exec((err, place) => {
    res.render("edit", {place});
  });
})

router.post("/edit/:id", (req,res, next) =>{
  const id = req.params.id;
  Place.findById(id).exec((err,place) => {
    if (err){
      res.redirect("/show");
      return
    };
    const updatePlace = {
      type: req.body.type,
      name: req.body.name,
      location : {
        lat: req.body.lat,
        lng: req.body.lng
      }
    };

    Place.findByIdAndUpdate(id, updatePlace, (err, place) => {
      if (err){ return next(err); }
      res.redirect("/show");
    });
  })
})

router.get("/delete/:id", (req, res) =>{
  const id = req.params.id;
  Place.findById(id).exec((err, place) => {
    place.remove({},(err) =>{
      res.redirect("/show");
    })
    
  });
})

module.exports = router;
