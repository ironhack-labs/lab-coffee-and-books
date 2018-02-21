var express = require('express');
var router = express.Router();
const Place = require('../models/Place');


/* GET home page. */
router.get('/', function(req, res, next) {
  Place.find({}, (err, doc)=>{
    if (err){
      next();
      return;
    } else{
      res.render('places/index', {placesArray: doc});
    }
  })
});

router.post('/', function(req, res, next) {
  let location = {
		type: 'Point',
		coordinates: [req.body.longitude, req.body.latitude]
	  };

    const newPlace = {
      name:        req.body.name,
      establishment: req.body.establishment,
      location:    location
    };

  	const place = new Place(newPlace);

  	place.save((err) => {
  		if (err) {
  			next(err);
  		} else {
  			res.redirect('/');
  		}
  	})

});

router.route('/new')
	.get((req, res, next) => {
		res.render('places/new');
  });
  
router.get('/:id', function(req, res, next) {
  Place.findOne({_id: req.params.id}, (err, doc)=>{
    if (err){
      next();
      return;
    } else{
      res.render('places/show', {place: doc});
    }
  })
});

router.post('/:id', function(req, res, next){
  Place.findById(req.params.id, (err, place) => {
    if (err) {
      next(err);
    } else {
      place.name        = req.body.name;
      place.establishment = req.body.establishment;
      place.location = {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude]
        };
      place.save((error) => {
        if (error) {
          next(error);
        } else {
          res.redirect('/');
        }
      })
    }
  })
});

router.route('/:id/edit')
	.get((req, res, next) => {
		Place.findById(req.params.id, (err, doc) => {
			if (err) {
				console.log("Holi")
			} else {
				res.render('places/edit', { place: doc });
			}
		})
	});

router.route('/:id/delete')
	.get((req, res, next) => {
		Place.deleteOne({ _id: req.params.id }, function(err, doc) {
	    if (err) {
	    	next(err)
	    } else {
	    	res.redirect('/')
	    }
    });
	});





module.exports = router;
