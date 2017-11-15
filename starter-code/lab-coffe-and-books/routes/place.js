var express = require('express');
var router = express.Router();
const Place = require("../models/place");
/* GET home page. */
router.get('/', function(req, res, next) {
  Place.find({},(error, restaurants) => {
     if (error) { next(error); }
     else {
       res.render('index', { restaurants });
  }
  });
});

router.get('/add', (req, res) => {

       res.render('locations/add');

});

router.post('/add', (req, res) =>{
  const name = req.body.name;
  const description = req.body.description;
  const city = req.body.city;
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;

  if (name === "" || description === "" ||
          city === "" ||  latitude === "" || longitude === "") {
    res.render("locations/add", {
      errorMessage: "Please, fill all fields"
    });
    return;
  }
  // if all is filled, search in bbdd
  let newPlace = Place({
     name,
     description,
     city,
     location:{ type: "Point",
                coordinates: [req.body.latitude,req.body.longitude]
              }
  });

  newPlace.save((err) => {
    res.redirect("/");
  });
});

module.exports = router;
