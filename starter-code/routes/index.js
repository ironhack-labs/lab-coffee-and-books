var express = require('express');
var router = express.Router();
const sitios = require('../bin/seeds');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(sitios)
  res.render('index', { title: 'Express', sitios});
});

module.exports = router;
