const express = require('express');
const Coffee = require('../models/Coffee');
const Book = require('../models/Books');
const router = express.Router();

router.get('/list/cofee',(req,res,next)=>{
  Coffee.find()
  .then(coffees=>res.render('listaCoffee',{coffees}))
})

router.get('/list/books',(req,res,next)=>{
  Book.find()
  .then(books=>res.render('listaBook',{books}))
})

router.get('/list/coffee/:id',(req,res,next)=>{
  Coffee.findById(req.params.id)
  .then(coffee=>res.render('coffeeInfo', coffee))
  .catch(e=>next(e));
})

router.get('/list/book/:id',(req,res,next)=>{
  Book.findById(req.params.id)
  .then(book=>res.render('bookInfo', book))
  .catch(e=>next(e));
})

router.get('/newCoffe',(req,res,next)=>{
  res.render('coffeeForm');
})

router.post('/newCoffe',(req,res,next)=>{
  Coffee.create(req.body)
  .then(coffees => res.redirect('/list/cofee'))
  .catch(e=>next(e));
})

router.get('/newBook',(req,res,next)=>{
  res.render('bookForm');
})
module.exports = router;

router.post('/newBook',(req,res,next)=>{
  Book.create(req.body)
  .then(books=>res.redirect('/list/books'))
})