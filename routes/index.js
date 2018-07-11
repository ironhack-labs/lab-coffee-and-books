const express = require('express');
const router  = express.Router();
const places = require("../models/Places")

/* GET home page */
router.get('/', (req, res, next) => {
  places.find().then( places => {
    res.render('index',{places:JSON.stringify(places)});
  })
});

router.get("/places", (req, res, next) => {
  res.render("place/places");
});


router.post("/places", (req, res) => {
  const { name, lat, lng } = req.body; //Porque lat y lng se lo puedo pasar asi aunque sea un array veo que funciona pero nose porque es

  let location = {
    type: 'Point',
    coordinates: [lat, lng]
  };

  const newPlace = new places({
    name,
    location
  });

  newPlace.save()
    .then( () => {
      res.redirect("/");
    })
    .catch(err => {
      res.render("place/places", {
        errorMessage: err.message
      });
    });
});


module.exports = router;
