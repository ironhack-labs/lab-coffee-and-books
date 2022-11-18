



const express = require('express');
const { findByIdAndUpdate } = require('./../models/places.model');
const router = express.Router();

const Places= require('./../models/places.model')



router.get("/restaurantes", (req, res, next) => {

  Places
    .find()
    .then(place => {
      res.render('restaurants/restaurants-list', { place })
    })
    .catch(err => console.log(err))
})


router.get('/create', (req, res, next) => {
    res.render('restaurants/create-place')
})


router.post('/create', (req, res, next) => {
    const { name, type } = req.body
    Places
        .create({ name, type })
        .then(()=>res.redirect('/restaurantes'))
        .catch(err=>console.log(err))
 })

router.get('/restaurantes/:coffe_id/edit', (req, res, next) =>
{
  const { coffe_id } = req.params
  Places
    .findById(coffe_id)
    .then(coffeShop => {
      res.render('restaurants/edit-place', coffeShop)
      .catch(err=>console.log(err))
  })
})
 
router.post('/restaurantes/:coffe_id/edit', (req, res, next) =>
{
  const { name, type } = req.body
  const { coffe_id } = req.params
  Places
    .findByIdAndUpdate(coffe_id, { name, type })
    .then(()=>res.redirect('/restaurantes'))
  .catch(err=>console.log(err))
})

router.post('/restaurantes/:coffe_id/delete', (req, res, next) =>
{
  const { coffe_id } = req.params
  Places
    .findByIdAndDelete(coffe_id)
    .then(() => res.redirect('/restaurantes'))
    .catch(err=>console.log(err))
})

module.exports = router;