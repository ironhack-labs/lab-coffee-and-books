const express = require("express");
const router = express.Router();
const Place = require("../models/place");

/* GET home page */
router.get("/", (req, res, next) => {
  Place.find().then(places => {
    res.render("index", { places, placesAux: JSON.stringify(places) });
  });
});

router.get("/new", (req, res, next) => {
  Place.find().then(places => {
    res.render("new", { places, placesAux: JSON.stringify(places) });
  });
});

router.post('/new', (req, res, next) => {
  const location ={
    type: "Point",
    coordinates: [Number(req.body.lat), Number(req.body.lng)]
}

  const {
    name,
    description,
    kindOfPlace,
  } = req.body;

  Place.findOne({
      name
    })
    .then(place=> {
      if (place!== null) {
        throw new Error("name Already exists");
      }

      const newPlace = new Place({
        name,
        description,
        kindOfPlace,
        location
      })
      return newPlace.save()
    })
    .then(place=> {
      res.redirect("/");
    })
    .catch(err => {
      console.log(err);
      Place.find().then(places => {
        res.render("new", { places, placesAux: JSON.stringify(places) });
      });
    })
})

router.get('/delete/:id',(req,res) => {
  Place.findByIdAndRemove(req.params.id, () => res.redirect('/'));
})
module.exports = router;
