const express = require('express');
const router = express.Router();
const Place = require("../models/place");

router.get('/',(req, res, next)=> {
  Place.find({},{_id:0}, (err, places) => {
    if (err) {
      next(err);
    } else {
      res.render("places/index", {places: places});
    }
  });
});

router.post('/',(req, res, next) => {
  // Get Params from POST
  // let location = {
  //   type: 'Point',
  //   coordinates: [req.body.longitude, req.body.latitude]
  // };

  // Create a new place with location
    var place = new Place();
    place.name = req.body.name;
    place.type = req.body.type;
    place.description = req.body.description;
    place.location.type ='Point';
    place.location.coordinates = [req.body.latitude, req.body.longitude];
    place.save((error) => {
      if (error) {
        next(error);
      } else {
        res.redirect('/');
    }
  });

  });

  // Save the restaurant to the Database
//   place.save((error) => {
//     if (error) {
//        console.log(error);
//    } else {
//       res.redirect('/');
//     }
//   // });
// });

module.exports = router;
