var express = require('express');
var router = express.Router();

const Place = require('../models/place');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// add new location page
router.get('/new', (req, res, next) => {
  console.log("DEBUG");
  res.render('new');
});


//add a new location
router.post('/new', (req,res,next) => {

    let location = {
      type : "Point",
      coordinates: [req.body.longitude,req.body.latitude]
    };

    //create a new Place
    const newPlace = new Place({
        name : req.body.name,
        description : req.body.description,
        establishment : req.body.establishment,
        location : location,
    });

    //going to save in database
        newPlace.save((err) => {
          if(err) {
            console.log(err);
          } else {
            res.redirect("new");
          }
        });
})

// show map

router.get('/map', (req, res, next) => {
  Place.find((error, places) => {
    if(error){
      next(error);
    } else{
      res.render('map', {places});
    }
  });
});




















module.exports = router;
