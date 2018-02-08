const express = require('express');
const router = express.Router();
const Coffee= require("../models/Coffe")


/* GET home page. */
router.get('/', function(req, res, next) {
  Coffee.find().exec((e, coffe) => {
    console.log(coffe)
    res.render('index', { 
      coffeePlaces: coffe,
      title: 'Coffed'
    });
})
});

module.exports = router;
