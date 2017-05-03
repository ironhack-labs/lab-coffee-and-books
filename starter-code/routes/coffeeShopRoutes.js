const express = require('express');
const router = express.Router();
const CoffeeShop = require('../models/coffeeShop');

/* GET home page. */
router.route('/')
	.get((req, res, next) => {
	  coffeeShop.find((error, coffeeShops) => {
	  	if (error) {
	  		next(error);
	  	} else {
	  		res.render('coffeeShops/index', { coffeeShops });
	  	}
	  })
	})
  .post((req, res, next) => {
    const newCoffeeShop = {
      name:  req.body.name,
      location: { type: { type: String }, coordinates: [Number] }
    };

  	const coffeeShop = new CoffeeShop(newcoffeeShop);

  	coffeeShop.save((error) => {
  		if (error) {
  			next(error);
  		} else {
  			res.redirect('/');
  		}
  	})

  });


router.route('/new')
	.get((req, res, next) => {
		res.render('coffeeShops/new');
	});

router.route('/:coffeeShop_id')
	.get((req, res, next) => {
		CoffeeShop.findById(req.params.coffeeShop_id, (error, coffeeShop) => {
			if (error) {
				next(error);
			} else {
				res.render('coffeeShops/show', {coffeeShop});
			}
		})
	})
	.post((req, res, next) => {
		CoffeeShop.findById(req.params.coffeeShop_id, (error, coffeeShop) => {
			if (error) next(error)
			else {
				coffeeShop.name = req.body.name;
        coffeShop.location = req.body.location;
      }
    })
			coffeeShop.save( error => {
		  		if (error) next(error)
		  		else res.redirect('/');
		  	})
		})

router.route('/:coffeeShop_id/edit')
	.get((req, res, next) => {
		CoffeeShop.findById(req.params.coffeeShop_id, (error, coffeeShop) => {
			if (error) {
				next(error);
			} else {
				res.render('coffeeShops/edit', { coffeeShop });
			}
		})
	});

router.route('/:coffeeShop_id/delete')
	.get((req, res, next) => {
		CoffeeShop.remove({ _id: req.params.coffeeShop_id }, function(error, coffeeShop) {
	    if (error) {
	    	next(error)
	    } else {
	    	res.redirect('/')
	    }
    });
	});

module.exports = router;
