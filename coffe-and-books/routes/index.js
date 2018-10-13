const express = require("express");
const router = express.Router();
const Place = require("../models/Place");

/* GET home page */
router.get("/", (req, res, next) => {
  Place.find().then(places => {
    res.render("index", { places });
  });
});

router.get("/new", (req, res, next) => {
  res.render("new-place");
});


router.post("/new", (req, res) => {
  console.log(req.body);
  const { name, kind, lat, lng } = req.body;
  let coordinates = [];
  coordinates.push(lng);
  coordinates.push(lat);
  let place = {
    name,
    kind,
    location: {
      coordinates
    }
  };
  //console.log(place);
  Place.create(place)
    .then(() => {
      res.redirect("/");
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/:id", (req, res) =>{
  Place.findById(req.params.id)
      .then(place => {
        res.render("detail",{place});
      })
});

module.exports = router;
