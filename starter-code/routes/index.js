const express = require("express");
const router = express.Router();
const Place = require("../models/place");

/* GET home page */
router.get("/test", (req, res, next) => {
  Place.find()
    .then(allPlaces => {
      res.render("index", { allPlaces });
    })
    .catch(error => {
      console.log(error);
    });
});



router.post("/update-place", (req, res) => {
  Place
    .findByIdAndUpdate(req.body._id, {
      name: req.body.name,
      place: req.body.place,
    })
    .then(updatedPlace => {
      res.redirect("/test")
    })
})


router.post("/delete", (req, res, next) => {
  Place.findByIdAndRemove(req.body._id)
    .then(place => {
      res.redirect("/test");
    })
    .catch(err => {
      console.log(err);
     });
});
module.exports = router;


// ==============CREATE=============

router.get("/celebrities/create/new", (req, res, next) => {
  res.render("./celebrities/new.hbs");
});

router.post("/celebrities/create-add", (req, res, next) => {
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })

    .then(celebrity => {
      Celebrity.save;
      // .then(celebrity => {
      res.redirect("/celebrities");
      // })
    })
    .catch(err => {
      console.log(err);
      res.render("./celebrities/create/new", { celebrity });
    });
});