const express = require('express');
const router = express.Router();
const Book = require('../models/book');

/* GET home page. */
router.route('/')
	.get((req, res, next) => {
	  Book.find((error, books) => {
	  	if (error) {
	  		next(error);
	  	} else {
	  		res.render('books/index', { books });
	  	}
	  })
	})
  .post((req, res, next) => {
    const newBook = {
      title: req.body.title,
      author: req.body.author,
			location: { type: { type: String }, coordinates: [Number] }
    };

  	const book = new Book(newbook);

  	book.save((error) => {
  		if (error) {
  			next(error);
  		} else {
  			res.redirect('/');
  		}
  	})

  });


router.route('/new')
	.get((req, res, next) => {
		res.render('books/new');
	});

router.route('/:book_id')
	.get((req, res, next) => {
		Book.findById(req.params.book_id, (error, book) => {
			if (error) {
				next(error);
			} else {
				res.render('books/show', {book});
			}
		})
	})
	.post((req, res, next) => {
		Book.findById(req.params.book_id, (error, book) => {
			if (error) {
				next(error);
			} else {
				book.name        = req.body.name;
				book.description = req.body.description;
				book.save((error) => {
		  		if (error) {
		  			next(error);
		  		} else {
		  			res.redirect('/');
		  		}
		  	})
			}
		})
	});

router.route('/:book_id/edit')
	.get((req, res, next) => {
		Book.findById(req.params.book_id, (error, book) => {
			if (error) {
				next(error);
			} else {
				res.render('books/update', { book });
			}
		})
	});

router.route('/:book_id/delete')
	.get((req, res, next) => {
		Book.remove({ _id: req.params.book_id }, function(error, book) {
	    if (error) {
	    	next(error)
	    } else {
	    	res.redirect('/')
	    }
    });
	});

module.exports = router;
