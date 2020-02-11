const express = require('express');
const router  = express.Router();
const Places = require('../models/place');

/* GET home page */
router.get('/', (req, res, next) => {
	Places.find({},(error, placesFromDB) => {
		if (error) { 
			next(error); 
		} else { 
			res.render('index', { placesFromDB });
		}
	});
});
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/', (req, res, next) => {
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
    };
  const newPlace = new Places({
    name: req.body.name,
    type: req.body.type,
    location:  location // <= add the location when creating a new restaurant
    });
  newPlace.save((error) => {
    if (error) { 
      next(error); 
    } else { 
      res.redirect('/');
    }
    })
});


router.post('/:_id/delete', (req, res, next) => {
	Places.remove({ _id: req.params._id }, function(error, place) {
		if (error) {
			next(error);
		} else {
			res.redirect('/');
		}
	});
});

router.get("/:_id", (req, res, next) => {
  Places.findById({_id: req.params._id})
  .then(placeFound => {
    console.log(placeFound)
    res.render("show", placeFound)
  })
  .catch(() => {
    next();
  });
})

router.post("/:id/edit", (req, res, next) => {
  Places.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      res.redirect("/");
    })
    .catch(() => {
      next();
    });
});


router.get('/api', (req, res, next) => {
	Places.find({}, (error, allPlacesFromDB) => {
		if (error) { 
			next(error); 
		} else { 
			res.status(200).json({ places: allPlacesFromDB });
		}
	});
});

router.get('/api/:id', (req, res, next) => {
	let placeId = req.params.id;
	Places.findOne({_id: placeId}, (error, onePlaceFromDB) => {
		if (error) { 
			next(error) 
		} else { 
			res.status(200).json({ place: onePlaceFromDB }); 
		}
	});
});

module.exports = router;
