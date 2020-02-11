const express = require("express");
const router = express.Router();
const Places = require("../models/place");

/* GET home page */
router.get("/", (req, res, next) => {
  Places.find()
    .then(placesFound => res.render("index", { placesFound }))
    .catch(err => {
      console.error("Error connecting to mongo");
      next(err);
    });
});

router.post("/places", (req, res, next) => {
  Places.create({
    name: req.body.name,
    type: req.body.type
  }).then(() => {
    Places.find()
      .then(placesFound => res.render("index", { placesFound }))
      .catch(err => {
        console.error("Error connecting to mongo");
        next(err);
      });
  });
  // }
});

router.post("/places/:id/delete", (req, res, next) => {
  let { id } = req.params;
  Places.findByIdAndRemove(id).then(() => {
    res.redirect("/").catch(err => {
      console.error("Error connecting to mongo");
      next(err);
    });
  });
  // }
});

router.get("/places/:id", (req, res, next) => {
  let { id } = req.params;
  Places.findById(id)
    .then(placesFound => res.render("detail", placesFound))
    .catch(err => {
      console.error("Error connecting to mongo");
      next(err);
    });
});

router.post("/places/:id", (req, res, next) => {
  let { id } = req.params;
  let place = {
    name: req.body.name,
    type: req.body.type
  };
  Places.findByIdAndUpdate(id, place)
    .then(() => Places.findById(id))
    .then(placesFound => res.render("detail", placesFound))
    .catch(err => {
      console.error("Error connecting to mongo");
      next(err);
    });
});

module.exports = router;
