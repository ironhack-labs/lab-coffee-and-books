 const express = require("express");
const router = express.Router();

// GET home page
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;




/* 
const express = require("express");
const router = express.Router();

// Get Params from POST
router.post((req, res, next) => {
  let location = {
    type: "Point",
    coordinates: [req.body.longitude, req.body.latitude]
  };

  // Create a new Restaurant with location
  const newRestaurant = {
    name: req.body.name,
    description: req.body.description,
    location: location
  };

  // Save the restaurant to the Database
  restaurant.save(error => {
    if (error) {
      console.log(error);
    } else {
      res.redirect("/");
    }
  });
});

module.exports = router;
 */