const express = require('express');
const router = express.Router();
const Place = require("../models/Place")

router.get('/', (req, res, next) => {
  Place.find()
    .select({
      name: 1
    })
    .then(allPlaces => {
      console.log(allPlaces)
      res.render('index', {
        allPlaces
      });
    })
});


router.get('/map', (req, res, next) => {
  Place.find()
    .then((allPlaces) => {
      res.json(allPlaces);
    });
});


router.get("/new", (req, res) => {
  res.render("new")
})

router.post("/new", (req, res) => {
  const {
    name, lat, lng, type,
  } = req.body;

  const newPlace = new Place({
    name,
    type,
    location: {
      coordinates: [lng, lat],
      type: 'Point',
    },
  });
  newPlace.save()
    .then(createdPlace => {
      res.redirect("/")
    }).catch((err) => console.log(err))
})

router.get("/:id/edit-place", (req, res) => {
  Place.findById(req.params.id)
    .then(thisPlace => {
      res.render("edit-place", {
        thisPlace
      })
    })
    .catch(err => console.log(err))
})

router.post("/:id/edit-place", (req, res) => {
  Place.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    type: req.body.type,
    location: {
      coordinates: [req.body.lng, req.body.lat],
      type: 'Point',
    }
  }, {
    new: true
  }).then(updateMyPlace => {
    res.redirect("/")
  }).catch((err) => console.log(err))
});

router.post("/:id/delete", (req, res) => {
  Place.findByIdAndDelete(req.params.id).then(() => {
    res.redirect("/");
  }).catch((err) => console.log(err))
})


module.exports = router;
module.exports = router;
