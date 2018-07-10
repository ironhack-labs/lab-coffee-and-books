const express = require('express');
const router  = express.Router();
const Restaurant = require('../models/Restaurant');


/* GET home page */
router.get('/', (req, res, next) => {
  Restaurant.find().then( restaurants => {
    console.log(restaurants);
    res.render('index',{restaurants:JSON.stringify(restaurants)});
  })
});


/* Places add new form */
router.get("/places/new", (req, res, next) => {
  res.render("newPlace");
});

/* Adding new place */
router.post("/places/new", (req, res, next) => {
  const { name, description} = req.body;
  const location = {
    type: "Point",
    coordinates: [ req.body.latitude, req.body.longitude ]
  }
  const newRestaurant = new Restaurant({ name, description, location});
  
  newRestaurant
    .save()
    .then(restaurant => {
      console.log("New restaurant sucessfully created!");
      res.redirect("/");
    })

    .catch(error => {
      console.log ("que")
      res.redirect("new");
    });
});

router.get("/places", (req, res, next) => {
  res.render("places");
});

/* List all places*/


module.exports = router;



/* GET home page */


module.exports = router;