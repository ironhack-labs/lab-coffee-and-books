const express = require('express');
const router = express.Router();
const Place = require("../models/Place");


router.get('/', (req, res, next) => {
  Place.find()
    .then((place) => {
      res.render('index', {
        place
      })
    })
});

router.get('/new', (req, res, next) => {
  res.render('new');
});

router.post("/new", (req, res) => {
  Place.create({
      name: req.body.name,
      type: req.body.type,
    })
    .then(res.redirect('/'))
    .catch(res.redirect('new', {
      error: `There was an error trying to create ${req.body.name}`
    }));
});

router.post('/:id/delete', (req, res, next) => {
  Place.findByIdAndDelete(req.params.id)
    .then(res.redirect('/'))
    .catch(res.redirect('/', {
      error: `There was an error trying to delete the star`
    }));
});


router.get('/:id/show', (req, res, next) => {
  Place.findById(req.params.id)
    .then(place => {
      res.render('show', place)
    })
    // .catch(res.redirect(''', {
    //   error: `There was an error trying to access the star profile`
    // }));
});

router.post('/:id/update', (req, res, next) => {
  Place.findByIdAndUpdate((req.params.id), { $set: {name: req.body.name, type: req.body.type}})
    .then(res.redirect('/'))
    .catch(res.redirect('/', {
      error: `There was an error trying to delete the star`
    }));
});

router.post('/books/edit', (req, res, next) => {
  const { title, author, description, rating } = req.body;
  Book.update({_id: req.query.book_id}, { $set: {title, author, description, rating }})
  .then((book) => {
    res.redirect('/books');
  })
  .catch((error) => {
    console.log(error);
  })
});

module.exports = router;