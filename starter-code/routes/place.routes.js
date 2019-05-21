const express = require("express");
const router = express.Router();

const Place = require("../models/place.models");
//----------------R-----------------
//list places 

router.get("/", (req, res, next) => {
  Place.find() 
    .then(allplaces => res.render("place-list", { place: allplaces })) 
    .catch(error => console.log(error));
});

//detail places

router.get("/view/:place_id", (req, res) => {
  Place.findById(req.params.place_id)
    .then(place => res.render("place-detail", { place }))
    .catch(error => console.log(error));
});

//----------------C-----------------

//add places
router.get("/add", (req, res) => res.render("place-add"));
router.post("/add", (req, res) => {
  const { name, type} = req.body;
  let location = {
    type: "Point",
    coordinates: [req.body.longitude, req.body.latitude]
  }

  const newPlace = new Place({ name, type, location:location });
  newPlace
    .save()
    .then(x => res.redirect("/place/"))
    .catch(error => console.log(error));
});


//----------------U-----------------

//update place


router.get("/edit", (req, res) => {
  Place.findOne({ _id: req.query.place_id })
    .then(place => res.render("place-edit", { place }))
    .catch(error => console.log(error));
});

router.post("/edit", (req, res) => {
  const { name,type} = req.body;
  
  Place.update(
    { _id: req.query.place_id },
    { $set: { name, type} },

  )
    .then(place => res.redirect("/place/"))
    .catch(error => console.log(error));
});
//----------------D-----------------

//delete places


router.post("/delete/:place_id", (req, res, next) => {
  const id = req.params.place_id;
  Place.findByIdAndDelete({ _id: id })
    .then(x => res.redirect("/place/"))
    .catch(error => console.log(error));
});



//api creator.com guau guau


router.get("/api", (req, res, next) => {
  Place.find({}, (error, allPlacesfromDB) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json({ place: allPlacesfromDB });
    }
  });
});


module.exports = router