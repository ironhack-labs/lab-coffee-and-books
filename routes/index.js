const express = require('express');
const router  = express.Router();
const Bookstore = require('../models/bookstores');
const Coffeshop = require('../models/coffeshop');

/* GET home page */
router.get('/', (req, res, next) => {
	res.render('index')
})

router.get('/maps', (req, res, next) => {
	Bookstore.find((error, bookstore) => {
		if (error) { next(error) } 
		else { res.render('maps', { bookstore })}
	})
})

router.post('/maps', (req, res, next) => {
	let location = {
		type: 'Point',
		coordinates: [req.body.longitude, req.body.latitude]
	};
	const newBookstore = new Bookstore({
		name:        req.body.name,
		description: req.body.description,
		location:    location
	});
	newBookstore.save((error) => {
		if (error) { next(error) }
		else { res.redirect('/');
		}
	})
});


module.exports = router;
