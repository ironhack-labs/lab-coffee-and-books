const express = require('express');
const router  = express.Router();
const mongoose = require("mongoose");
const Place = require("../models/Place");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('bookstore/new');
});

router.get("/new", (req, res, next) => {
    res.render("bookstore/new");
  });

router.post("/new", (req, res, next) => {
    const name = req.body.name;
  const description = req.body.description;

    let location = {
      type: 'Point',
      coordinates: [req.body.longitude, req.body.latitude]
    };
  
    // Create a new Bookstore with location
      const newPlace = new Place ({
        name:        req.body.name,
        description: req.body.description,
        location:    location
      });

    
  
    // Save the restaurant to the Database
    newPlace.save()
    .then( () => {
      res.redirect("/");
    })
    .catch( (err) => {
      console.log(err);
    });
    
  });
  
  router.get("/", (req, res, next) => {
    Place.find()
        .then( places => {
            res.render('index', JSON.stringify(places));
          })
    });
  

module.exports = router;