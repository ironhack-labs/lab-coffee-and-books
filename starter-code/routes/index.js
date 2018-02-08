var express = require('express');
var router = express.Router();
var sitios = require("../bin/seeds.js")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {sitios, title: 'Hello'});
});

module.exports = router;
