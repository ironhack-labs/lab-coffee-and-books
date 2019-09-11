const express = require('express');
const router  = express.Router();
const Place=require('../models/Place')
const {deletePlace, updatePlace}=require('../controllers/places')


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/lugares', (req, res, next) => {
  Place.find().then(places=>{
    console.log(places)
    res.render('lugares',{places})
  })
});

router.get('/create',(req,res)=>{
  res.render("create")
})

router.post('/create',(req,res,next)=>{
  let{name,type}=req.body
  let place={
    name,type
  }
  Place.create(place).then(()=>{
    res.render("create")
  })
  
})

router.get('/delete/:_id',deletePlace)

router.post('/edit-place',updatePlace)

module.exports = router;
