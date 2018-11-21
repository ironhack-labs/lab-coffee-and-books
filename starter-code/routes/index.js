const express = require('express');
const router  = express.Router();
const Place = require("../models/Place");
const place = new Place();


/* GET home page */
router.get("/", (req, res, next) => {
  Place.find({})
    .then(places => {
      res.render("index", { places: places });
    })
    .catch(err => {});
});

router.post("/new", (req, res) => {
  place.name = req.body.name;
  place.type = req.body.type;
  place.save()
    .then(() => {
      res.redirect("/");
    })
    .catch(() => {});
});

router.get("/delete/:id", (req, res, next) => {
  Place.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/");
    })
    .catch(err => {});
});

router.get("/edit/:id", (req, res, next) => {
  Place.findById(req.params.id)
    .then(place => {
      res.render("edit", { place: place });
    })
    .catch(err => {});
});

router.post("edit/:id", (req, res, next) => {
  const { name, type } = req.body;
  Place.update(
    { _id: req.query.Places_id },
    { $set: { name, type } }
  )
    .then(() => {
      res.redirect("/");
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
