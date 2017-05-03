/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();
const Library = require('../models/library');

/* GET home page. */
router.route('/')
	.get((req, res, next) => {
	  Library.find({}, {"__v":0}, (error, library) => {
	  	if (error) {
	  		next(error);
	  	} else {
	  		res.render('library/index', { library });
	  	}
	  });
	})
  .post((req, res, next) => {
    const newLibrary = {
      name:        req.body.name,
      description: req.body.description,
			longitude:        req.body.longitude,
      latitude: req.body.latitude,
    };

  	const library = new Library(newLibrary);

  	library.save((error) => {
  		if (error) {
  			next(error);
  		} else {
  			res.redirect('/');
  		}
  	});

  });


router.route('/new')
	.get((req, res, next) => {
		res.render('library/new');
	});

router.route('/:library_id')
	.get((req, res, next) => {
		Library.findById(req.params.library_id, (error, library) => {
			if (error) {
				next(error);
			} else {
				res.render('library/show', {library});
			}
		});
	})
	.post((req, res, next) => {
		Library.findById(req.params.library_id, (error, library) => {
			if (error) {
				next(error);
			} else {
				library.name        = req.body.name;
				library.description = req.body.description;
				library.save((error) => {
		  		if (error) {
		  			next(error);
		  		} else {
		  			res.redirect('/');
		  		}
		  	});
			}
		});
	});

router.route('/:library_id/edit')
	.get((req, res, next) => {
		Library.findById(req.params.library_id, (error, library) => {
			if (error) {
				next(error);
			} else {
				res.render('library/update', { library });
			}
		});
	});

router.route('/:library_id/delete')
	.get((req, res, next) => {
		Library.remove({ _id: req.params.library_id }, function(error, library) {
	    if (error) {
	    	next(error)
	    } else {
	    	res.redirect('/')
	    }
    });
	});

module.exports = router;
