const router = require('express').Router()
const Place = require('../models/Place')

router.get('/new', (req, res, next) => {
  const action = '/books/new'
  res.render('bookViews/new', { action })
})

router.post('/new', (req, res, next) => {
  const bookstore = {
    name: req.body.name,
    type: req.body.type,
    location: {
      type: "Point",
      coordinates: [req.body.lng, req.body.lat]
    }
  }
  Place.create(bookstore)
    .then(newBook => {
      res.redirect('/books/' + newBook._id)
    })
})

router.get('/delete/:id', (req, res, next) => {
  const { id } = req.params
  Place.findByIdAndDelete(id)
    .then(deleted => {
      res.redirect('/books')
    }).catch(err => next(err))
})

router.get('/:id', (req, res, next) => {
  Place.findById(req.params.id)
    .then(bookstore => {
      res.render('bookViews/detail', bookstore)
    }).catch(err => next(err))
})

router.get('/edit/:id', (req, res, next) => {
  const { id } = req.params
  const action = `/books/edit/${id}`

  Place.findById(id)
    .then(bookstore => {
      res.render('bookViews/new', { bookstore, action })
    }).catch(err => next(err))
})

router.post('/edit/:id', (req, res, next) => {
  const { id } = req.params
  const bookstore = {
    name: req.body.name,
    type: req.body.type,
    location: {
      type: "Point",
      coordinates: [req.body.lng, req.body.lat]
    }
  }
  Place.findByIdAndUpdate(id, { $set: bookstore }, { new: true })
    .then(updated => {
      res.redirect(`/books/${id}`)
    }).catch(err => {
      res.render('booksViews/new', { bookstore: bookstore, err })
    })
})
router.get('/', (req, res, next) => {
  Place.find()
    .then(bookstores => {
      res.render('bookViews/dashboard', { bookstores })
    }).catch(err => next(err))
})









module.exports = router