var express = require('express');
var router = express.Router();

const LocationModel = require("../models/location");


/* GET place. */
// router.get('/place', function(req, res, next) {
//   res.render('place', { title: 'Express' });
// });

router.post('/', function(req, res, next) {

  let location = {
   type: 'Point',
   coordinates: [req.body.longitude, req.body.latitude]
 };

 // Create a new Restaurant with location
   const newLocation = new LocationModel({
     name:        req.body.name,
     description: req.body.description,
     location:    location
   });

 // Save the restaurant to the Database
   newLocation.save((error) => {
     if (error) {
       console.log(error);
     }
     else {
       res.redirect('/');
     }
   });
});




module.exports = router;
