const express = require('express');
const router  = express.Router();
const Shop = require('../models/Shop');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/new', (req,res)=>{
  res.render('shops/new-shop');
})

router.post('/new', (req,res)=>{
  Shop.create(req.body)
  .then(shop=>{
    res.redirect('/shoplist')
  })
  .catch(err=>res.send(err))
})

router.get('/shoplist', (req,res)=>{
  Shop.find()
  .then(results=>{
    res.render('shops/shop-list', {results});
  })
  .catch(err=>res.send(err))
})

router.get('/shoplist/:id', (req,res)=>{
  let id = req.params.id;
  Shop.findById(id)
  .then(result=>{
    res.render('shops/shop-details', result)
  })
})

module.exports = router;
