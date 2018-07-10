const express = require('express');
const router = express.Router();
const Bookstores = require("../models/Bookstore");
const Coffee = require("../models/Coffee");

router.get('/bookstores',(req,res) => {
    Bookstores.find({})
    .then(places => {
      res.render('places/bookstores', { places });
    })
    .catch(error => {
      console.log(error);
    });
})

router.get('/coffees',(req,res) => {
    Coffee.find({})
    .then(places => {
      res.render("places/coffees", { places });
    })
    .catch(error => {
      console.log(error);
    });
})

module.exports = router;