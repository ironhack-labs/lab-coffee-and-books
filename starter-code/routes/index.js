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
// router.get('/delete', (req, res, next) => {
//   res.render('delete');
// });


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
router.get('/update', (req, res, next) => {
  res.render('update');

  // router.get('/:restaurant_id/edit', (req, res, next) => {
  //   Restaurant.findById(req.params.restaurant_id, (error, restaurant) => {
  //     if (error) {
  //       next(error);
  //     } else {
  //       res.render('restaurants/update', { restaurant });
  //     }
  //   });
  // });
  
  // // POST => save updates in the database
  // router.post('/:restaurant_id', (req, res, next) => {
  //   Restaurant.findById(req.params.restaurant_id, (error, restaurant) => {
  //     if (error) { 
  //       next(error); 
  //     } else {
  //       restaurant.name        = req.body.name;
  //       restaurant.description = req.body.description;
  //       restaurant.save(error => {
  //         if (error) { 
  //           next(error); 
  //         } else { 
  //           res.redirect(`/restaurants/${req.params.restaurant_id}`); 
  //         }
  //       });
  //     }
  //   });
  // });
});



module.exports = router;
