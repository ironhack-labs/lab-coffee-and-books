const express = require('express');
const router  = express.Router();
const Place = require('../models/Place');

/* GET home page */
// router.get('/', (req, res, next) => {
//   res.render('index');
// });

//C(R)UD -> Retrieve
router.get('/', (req, res, next) => {
	Place.find()
		.then( places => {
			res.render('places/index', { 
				places,
				placesStr: JSON.stringify(places),
				subtitle: 'Places List'
			});
		})
		.catch( e => {
			console.log('Error on retrieving the list of celebrities', e);
			next(e);
		})
});

module.exports = router;
