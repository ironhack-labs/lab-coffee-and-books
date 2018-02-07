var express = require('express');
var router = express.Router();
var Place = require("../models/Place")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/create", (req,res) => {
  res.render("create");
})

router.post("/create", (req,res,next) => {
  const newPlace = new Place({
    type: req.body.type,
    name: req.body.name,
    location : {
      lat: req.body.lat,
      lng: req.body.lng
    }
  })
  newPlace.save((err) => {
    if (err){
      res.render("create", {errorMessage : "Error saving the place."} )
    } else {
      res.redirect("/");
    }
  });
});

module.exports = router;
