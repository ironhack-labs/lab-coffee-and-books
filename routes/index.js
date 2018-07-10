const express = require("express");
const router = express.Router();
const Place = require("../models/place");

router.get("/", (req, res, next) => {
  Place.find().then(places => {
    console.log(places);
    res.render("index", { places, placesString: JSON.stringify(places)});
  });
});


router.get("/new", (req, res, next) => {
  Place.find().then (places => {
    res.render("new", {places, placesString: JSON.stringify(places)});
  })
})

// POST new
router.post("/new", (req, res, next) => {
  const location = {
    type: "Point",
    coordinates: [Number(req.body.lat), (req.body.lng)]
  }

  const {name, description, typeOfPlace} = req.body;

  const newPlace = new Place({
    name,
    description,
    typeOfPlace,
    location
  });

  newPlace.save()
    .then( place => {
      res.redirect("/");
    })
    .catch( (err) => {
      console.log(err);
    });
})

router.get('/edit/:id',(req,res) => {
  Place.findById(req.params.id).then(place => {
    res.render('edit',{place});;
  })
})

router.post('/edit/:id', (req,res) => {
  const {name, description, typeOfPlace} = req.body;
  Place.findByIdAndUpdate(req.params.id,{name, description, typeOfPlace})
      .then( place => {
        res.redirect('/')
      })
})

router.get('/delete/:id',(req,res) => {
  Place.findByIdAndRemove(req.params.id, () => res.redirect('/'));
})



module.exports = router;
