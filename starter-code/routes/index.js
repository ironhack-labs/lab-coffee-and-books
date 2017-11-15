const express = require('express');
const router = express.Router();
const Store = require('../models/Store');

/* GET home page. */
router.route('/')
	.get((req, res, next) => {
	  Store.find((error, stores) => {
	  	if (error) {
	  		next(error);
	  	} else {
	  		res.render('index', { stores });
	  	}
	  })
	})

  .post((req, res, next) => {
    const newStore = {
      name: req.body.name,
      type: req.body.type,
      location: req.body.location,
      city: req.body.city,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    };
    console.log(newStore);
  	const store = new Store(newStore);

  	store.save((error) => {
  		if (error) {
  			next(error);
  		} else {
  			res.redirect('/');
  		}
  	})

  });

router.route('/new')
	.get((req, res, next) => {
		res.render('new');
	});

router.route('/:_id')
	.get((req, res, next) => {
		Store.findById(req.params.store_id, (error, store) => {
			if (error) {
				next(error);
			} else {
				res.render('show', {store});
			}
		})
	})
	.post((req, res, next) => {
		Store.findById(req.params.store_id, (error, store) => {
			if (error) {
				next(error);
			} else {
				store.name = req.body.name;
				store.type = req.body.type;
				store.save((error) => {
		  		if (error) {
		  			next(error);
		  		} else {
		  			res.redirect('/');
		  		}
		  	})
			}
		})
	});

router.route('/_id/edit')
	.get((req, res, next) => {
		Store.findById(req.params.store_id, (error, store) => {
			if (error) {
				next(error);
			} else {
				res.render('update', { store });
			}
		})
	});

router.route('/:id/delete')
	.get((req, res, next) => {
		Store.remove({ _id: req.params.store_id }, function(error, store) {
	    if (error) {
	    	next(error)
	    } else {
	    	res.redirect('/')
	    }
    });
	});

module.exports = router;
