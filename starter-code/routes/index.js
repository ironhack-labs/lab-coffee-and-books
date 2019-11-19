const express = require("express");
const router = express.Router();
const Places = require("../models/Place");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/places", (req, res) => {
  Places.find()
    .then(place => res.render("places/index", { place }))
    .catch(err => {
      console.log(err);
      next();
    });
});

router.get("/show/:id", (req, res) => {
  let place = req.params.id;
  Places.find({ _id: place })
    .then(place => {
      res.render("places/show", place[0]);
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.get("/places/new", (req, res) => {
  res.render("places/new");
});

router.post("/place-create", (req, res) => {
  let location = {
    type: "Point",
    coordinates: [req.body.longitude, req.body.latitude]
  };
  Places.create({
    name: req.body.name,
    type: req.body.type,
    location: location
  }).then(celebrityCreated => {
    celebrityCreated.save(err => {
      if (err) {
        res.render("places/new", {
          errorMessage: "Something went wrong. Try again later."
        });
        return;
      }
      res.redirect("places");
    });
  });
});

router.post("/:id/place-delete", (req, res) => {
  let place = req.params.id;
  Places.findByIdAndRemove({ _id: place })
    .then(() => {
      res.redirect("/places");
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.get("/edit/:id", (req, res) => {
  let place = req.params.id;
  Places.find({ _id: place })
    .then(place => {
      res.render("places/edit", place[0]);
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.post("/place-edit", (req, res) => {
  Places.findByIdAndUpdate(req.body._id, req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.get("/placesData", (req, res) => {
  Places.find().then(payload => res.json(payload));
});

module.exports = router;
