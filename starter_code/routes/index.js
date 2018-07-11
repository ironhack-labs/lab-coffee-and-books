const express = require('express');
const router  = express.Router();
const Coffee = require('../models/Coffee');

/* GET home page */
router.get('/', (req, res, next) => {
  Coffee.find().then( coffee => {
    console.log(coffee);
    res.render('index',{coffee:JSON.stringify(coffee)});
  });
});
module.exports = router;
