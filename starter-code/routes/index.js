const express = require('express');
const router  = express.Router();

const Place= require("../models/Place");

// /* GET home page */
// router.get('/', (req, res, next) => {
//   res.render('index', {Place});
// });



router.get("/", (req, res) => {
  Place.find({}).then(place => {
    res.render("index", { place, me: req.place });
  });
});
module.exports = router;
