const express = require("express");
const router = express.Router();
const Place = require("../models/place");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/list", (req, res) => {
  Place.find()
    .then(allThePlaces =>
      res.render("list", {
        places: allThePlaces
      })
    )
    .catch(err => console.log("Error consultando la BBDD: ", err));
});

router.get("/new", (req, res, next) => {
  res.render("new");
});

router.get("/update", (req, res, next) => {
  res.render("update");
});

router.get("/delete", (req, res, next) => {
  res.render("delete");
});

router.post("/new", (req, res) => {
  const { name, type } = req.body;

  Place.create({ name, type })
    .then(x => res.redirect("/new"))
    .catch(err => "error: " + err);
});

router.get("/update", (req, res) => {
  const placeId = req.query.placeId;
  Place.findById(placeId)
    .then(thePlace => res.render("new", thePlace))
    .catch(err => console.log("error!!", err));
});

router.post("/update", (req, res) => {
  const { name, type } = req.body;
  const placeId = req.query.placeId;

  Place.findByIdAndUpdate(placeId, { name, type })
    .then(res.redirect("/list"))
    .catch(err => console.log("error!!", err));
});

// router.post("/new", (req, res) => {
//   Place.create({
//     name: req.body.name,
//     type: req.body.type
//   })
//     .then(res.redirect("/new"))
//     .catch(
//       res.redirect("/delete", {
//         error: `There was an error trying to create ${req.body.name}`
//       })
//     );
// });

module.exports = router;
