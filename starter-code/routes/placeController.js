const express = require('express');
const placeController = express.Router();


const Place = require("../models/Place");


placeController.get('/', function(req, res, next) {
  console.log("entrando")

  res.render('places/index', { title: 'Express' });
});

module.exports = placeController;
