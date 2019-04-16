const express = require('express');
const router  = express.Router();
const Place = require('../models/place');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/places', (req,res)=>{
  res.render('map')
});

router.get('/add', (req, res) =>{
  
});

router.get('/update', (req, res) =>{
  
});

router.get('/remove', (req, res) =>{
  
});

router.post('/add', (req, res) =>{
  
});

router.post('/update/:id', (req, res) =>{
  
});

router.post('/remove/:id', (req, res) =>{
  
});

module.exports = router;
