/*jshint esversion:6*/
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
        res.render('books/index', {
          books,
          jsonBooks: JSON.stringify(books)
        });
      }
    });
  })
  .post((req, res, next) => {
    let location = {
      type: 'Point',
      coordinates: [req.body.longitude, req.body.latitude]
    };


    const newBooks = {
      name: req.body.name,
      description: req.body.description,
      location
    };

    const book = new Book(newBooks);

    book.save((error) => {
      if (error) {
        next(error);
      } else {
        res.redirect('/');
      }
    });
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
        res.render('books/show', {
          book,
          jsonBooks: JSON.stringify(book)
        });
      }
    });
  })
  .post((req, res, next) => {

    Book.findById(req.params.book_id, (error, book) => {
      console.log(req.body.latitude, book.location.coordinates[1]);
      let location = {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude]
      };
      if (error) {
        next(error);
      } else {
        book.name = req.body.name;
        book.description = req.body.description;
        book.location = location;
        book.save((error) => {
          if (error) {
            next(error);
          } else {
            res.redirect('/');
          }
        });
      }
    });
  });

router.route('/:book_id/edit')
  .get((req, res, next) => {
    Book.findById(req.params.book_id, (error, book) => {
      if (error) {
        next(error);
      } else {
        res.render('books/update', {
          book
        });
      }
    });
  });

router.route('/:book_id/delete')
  .get((req, res, next) => {
    Book.remove({
      _id: req.params.book_id
    }, function(error, book) {
      if (error) {
        next(error);
      } else {
        res.redirect('/');
      }
    });
  });

module.exports = router;
