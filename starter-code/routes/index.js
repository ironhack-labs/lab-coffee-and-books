const express = require('express');
const router  = express.Router();
const Place = require('../models/Place');

/* GET home page */
router.get('/', (req, res, next) => {
  res.redirect('/displayAll');
});

//MOSTRAMOS LA LISTA

router.get('/displayAll', (req, res, next) => {
	Place.find({},(error, placesFromDataBase) => {
		if (error) { 
			next(error); 
		} else { 
			res.render('displayAll', { places: placesFromDataBase });
		}
	});
});
// CREAMOS LUGARES
router.get('/create', (req, res, next) => {
  res.render('create');
});

router.post('/create', (req, res, next) => {

  let place = {
    name: req.body.name,
    type: req.body.typePlace,
  }
  
  Place.create(place).then( place => {
    res.redirect('/displayAll');
  }).catch(e=> next(e));
});


//ELIMINAMOS LUGARES:


router.get('/:place_id/delete', (req, res, next) => {
	Place.remove({ _id: req.params.place_id }, function(error, place) {
		if (error) {
			next(error);
		} else {
			res.redirect('/');
		}
	});
});


// EDITAMOS LUGARES:

  router.get('/:id/edit', (req, res, next) => {
    Place.findById(req.params.id, (error, place) => {
      if (error) {
        next(error);
      } else {
        res.render('edit', { place });
      }
    });
  
  
  // POST => save updates in the database
  router.post('/:place_id', (req, res, next) => {
    Place.findById(req.params.place_id, (error, place) => {
      if (error) { 
        next(error); 
      } else {
        place.name        = req.body.name;
        place.type        = req.body.typePlace;
        place.save(error => {
          if (error) { 
            next(error); 
          } else { 
            res.redirect(`/displayAll/${req.params.place_id}`); 
          }
        });
      }
    });
  });
});



module.exports = router;
