const express = require("express");
const router = express.Router();
const Place   = require('../models/Place')
/* GET home page */

router.get('/', (req, res, next) => {
  Place.find()
  .then(places => res.render('index', { places }))
  .catch(err => { next(err) });
});

router.post("/", (req, res, next) => {
  const newPlace = new Place()
  newPlace.name = req.body.name;
  newPlace.type = req.body.type;
  newPlace
    .save()
    .then(() => res.redirect("/"))
    .catch(err => console.log(err));
});

router.post("/:id/delete", (req, res, next) => {
  Place.findByIdAndRemove(req.params.id)
    .then(() => res.redirect("/"))
    .catch(error => next(error));
});


module.exports = router;
