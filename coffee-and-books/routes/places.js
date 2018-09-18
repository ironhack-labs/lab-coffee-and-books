const express = require("express");
const router = express.Router();
const Place = require("../modules/place");
/* GET home page */
router.get("/", (req, res, next) => {
  Place.find()
    .then(places => {
      console.log(places)
      res.render("index", { places,placesStr:JSON.stringify(places) })
    })
    .catch(e => next(e));
});

router.get("/new", (req, res, next) => {
  res.render("new");
});
router.post("/new", (req, res, next) => {
  const { name, type, lat, lng } = req.body;
  if (!lat || !lng) {
    res.render("new", { e: "Es necesario indicar la ubicacion" })
    return
  }
  Place.create({ name, type, location:{type:'Point', coordinates:[lat, lng]} })
    .then(() => res.redirect("/"))
    .catch(e => res.render("new", { e }));
});

module.exports = router;
