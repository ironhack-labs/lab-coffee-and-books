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

router.route('/:place_id/show')
.get((req, res) => {
	Place.findById(req.params.place_id, (error, place) => {
		if (error) {
			res.status(500).json({message: error});
		} else {
			res.status(200).json(place);
		}
	});
});

module.exports = router;
