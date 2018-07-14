const express = require('express');
const router = express.Router();
const Bookstore = require('../models/place');

/* GET home page. */
router.get('/', (req, res, next) => {
	Bookstore.find((error, bookstores) => {
		if (error) { next(error) } 
		else { res.render('bookstore/index', { bookstores })}
	})
})

router.post('/', (req, res, next) => {
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

router.get('/api', (req, res, next) => {
	Bookstore.find((error, bookstores) => {
		if (error) { next(error) } 
		else { res.status(200).json({ bookstores })}
	})
})

router.get('/api/:id', (req, res, next) => {
	let bookstoreId = req.params.id;
	Bookstore.findOne({_id: bookstoreId}, (error, bookstore) => {
		if (error) { next(error) } 
		else { res.status(200).json({ bookstore }) }
	})
})

router.get('/new', (req, res, next) => {
		res.render('bookstores/new');
});

router.get('/:bookstore_id', (req, res, next) => {
		Bookstore.findById(req.params.bookstore_id, (error, bookstore) => {
			if (error) {
				next(error);
			} else {
				res.render('bookstores/show', {bookstore});
			}
		})
})

router.post('/:bookstore_id', (req, res, next) => {
		Bookstore.findById(req.params.bookstore_id, (error, bookstore) => {
			if (error) { next(error) } 
			else {
				bookstore.name        = req.body.name;
				bookstore.description = req.body.description;
				bookstore.save((error) => {
					if (error) { next(error) } 
					else { res.redirect('/') }
		  	})
			}
		})
	});


	router.get('/:bookstore_id/edit', (req, res, next) => {
		Bookstore.findById(req.params.bookstore_id, (error, bookstore) => {
			if (error) {
				next(error);
			} else {
				res.render('bookstores/update', { bookstore });
			}
		})
});

router.get('/:bookstore_id/delete', (req, res, next) => {
		Bookstore.remove({ _id: req.params.bookstore_id }, function(error, bookstore) {
	    if (error) {
	    	next(error)
	    } else {
	    	res.redirect('/')
	    }
    });
});

module.exports = router;
