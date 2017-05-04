var express = require('express');
const Place = require('../models/place');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Place.find({},{_id: 0} ,(err, places)=>{  //if _id: 0, the data excludes all _id values, if _id: 1, then it exclusively returns only _ids
    if (err){
      res.render('index');
    } else {
      console.log(places);
      res.render('index', {places});
    }
  })

});

module.exports = router;
