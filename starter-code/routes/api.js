/*jshint esversion: 6*/
var express = require('express');
var router = express.Router();
const Place = require('../models/place');


router.route('/show').get((req, res) => {
  Place.find((error, places) => {
    if (error) {
      res.status(500).json({message: error});
    } else {
      res.status(200).json(places);
    }
  });
});

router.post('/new',(req, res, next) => {
  // Get Params from POST
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  // Create a new Restaurant with location
    const newPlace = new Place ({
      name:        req.body.name,
      description: req.body.description,
      local: req.body.local,
      location:    location
    });

  // Save the restaurant to the Database
  newPlace.save((error, place) => {
    if (error) {
      res.status(500).json({message: error});
    } else {
      res.status(200).json(place);
    }
  });
});

router.route('/:place_id/delete')
.get((req, res) => {
  const id = req.params.place_id;
  Place.deleteOne({_id:id},(err)=>{
    if(err){
      res.status(500).json({message: error});
    }
    else {
      Place.find((error, places) => {
        if (error) {
          res.status(500).json({message: error});
        } else {
          res.status(200).json(places);
        }
      });
    }
  });
});

router.route('/:place_name/show')
.get((req, res) => {

	Place.find({name: req.params.place_name}, (error, place) => {
		if (error) {
			res.status(500).json({message: error});
		} else {
			res.status(200).json(place);
		}
	});
});

module.exports = router;
