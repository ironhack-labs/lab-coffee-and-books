var express = require('express');
var router = express.Router();
var mongoose  = require('mongoose');
const Place = require('../models/place');

/* GET home page. */
router.get('/', function(req, res, next) {
 
  Place.find({}, (err, docs)=> {
    res.render('index', { title: 'Express', docs });
  })
  
});

router.get('/new', (req, res, next)=>{
  
  res.render('new',);  
})

router.post('/new', (req, res, next)=>{
  const  address = req.body.address;
  const number  = req.body.number;
  const locality  = req.body.locality;
  const state  = req.body.state;
  const  zip = req.body.zip;
  const  country = req.body.country;
  const  lat = req.body.lat;
  const  long = req.body.long;
  const  name = req.body.name;
  const  description = req.body.description;
  const  businesstype = req.body.businesstype;

   let location = {
    type: 'Point',
    coordinates: [long, lat]
  };
  //console.log(address, number, locality, state, zip, country, lat, long, name, description, businesstype)
  var newPlace = Place({
      name: name,
      description: description,
      direction: address + " - " + number + " - " + locality + " - " + state  + " - " + zip + " - " + country,
      businesstype: businesstype,
      location: location
    });

    newPlace.save((err) => {
      res.redirect("new");
    });

  
});

router.get('/places', (req, res, next)=>{
  Place.find({}, (err, docs)=> {
    res.json(docs);
  })
  
});

module.exports = router;
