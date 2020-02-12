const express = require('express');
const router  = express.Router();
const Places = require('../models/place');



router.get('/', (req, res, next) => {
  Places.find()
  .then((placeAll)=>{
  res.render('index',{placeAll});
});
});


router.get('/place', (req, res, next) => {
  Places.find()
  .then((placeAll)=>{
  res.render('place',{placeAll});
});
});

router.get('/create', (req, res, next) => {
  res.render('create');
});


router.post(`/:id/delete`, (req, res, next)=>{
  let {id} =req.params
Place.findByIdAndRemove(id)
.then(()=>{
  res.redirect(`/place`)
})

});















// // POST => to create new restaurant and save it to the DB
// router.post('/', (req, res, next) => {

// // add the location object
//   let location = {
// 	type: 'Point',
// 	coordinates: [req.body.longitude, req.body.latitude]
//   };
  
//   const newPlace = new Place({
// 	name:        req.body.name,
// 	description: req.body.description,
// 	location:    location // <= add the location when creating a new restaurant
//   });

//   newPlace.save((error) => {
// 	if (error) { 
// 	  next(error); 
// 	} else { 
// 	  res.redirect('/place');
// 	}
//   })
// });


module.exports = router;
