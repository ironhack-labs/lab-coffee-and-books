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
  let{name,type, lat, lng}=req.body
  let place={
    name,type,
    location: {
      type: "Point",
      coordinates : [lng, lat]
    }
  }
  Place.create(place).then(()=>{
    res.render("create")
  })
  
})

router.get('/update-place/:id', (req, res, next) =>{
  const {id} = req.params
  Place.findById(id)
  .then(place => {
    res.render('update-place', {place})
  })
});

router.post('/update-place/:id', (req, res, next) => {
  const {id} = req.params
  Place.findByIdAndUpdate(id, {$set: {...req.body}})
  .then(place => {
    res.redirect('/lugares');
  })
  .catch(err => {
    console.log(err);
  })
});

router.get('/delete/:_id',deletePlace)

router.post('/edit-place',updatePlace)

module.exports = router;
