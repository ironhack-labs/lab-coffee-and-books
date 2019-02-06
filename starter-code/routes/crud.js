const express = require("express");
const router = express.Router();

const Place = require("../models/place")

//CREATE

router.get("/create", (req, res, next) => {
  res.render("place/create")
})

router.post("/create", (req, res, next) => {

  const place = {
    name: req.body.name,
    type: req.body.type,
    location: {
      lat: req.body.latitude,
      lng: req.body.longitude
    }
  }
  // If(name == "") {
  //   res.render("place/create", { errorMessage: "Please type a name" })
  //   return
  // }

  Place.create(place)
    .then(() => {
      res.redirect('/');
    })
    .catch(error => next(error));
});

//DISPLAY

router.get('/display', (req, res, next) => {
  Place.find()
    .then(places => {
      res.render('place/display', { places });
    })
    .catch(error => next(error));
});

//REMOVE

router.get('/delete/:id', (req, res, next) => {
  const id = req.params.id;
  console.log(id)

  Place.findByIdAndRemove(id)
    .then(() => {
      res.redirect("/display")
    })
    .catch(err => next(err))
});

//UPDATE



module.exports = router;

