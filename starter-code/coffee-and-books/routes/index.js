var express = require("express");
var router = express.Router();
const Place = require("../models/place");

/* GET home page. */
router.route("/").get((req, res, next) => {
  Place.find((error, places) => {
    if (error) {
      next(error);
    } else {
      res.render("places/index", { places });
    }
  });
});
// .post((req, res, next) => {
//   const newPlace = {
//     name: req.body.name,
//     description: req.body.description
//   };

//   const place = new Place(newPlace);

//   place.save(error => {
//     if (error) {
//       next(error);
//     } else {
//       res.redirect("/");
//     }
//   });
// });

module.exports = router;
