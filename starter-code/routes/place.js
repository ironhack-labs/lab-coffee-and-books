const express = require('express');
const mongoose = require('mongoose')
const router  = express.Router();
const modelPlace = require('../models/place')

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

/* GET home page */
router.get('/place', (req, res, next) => {

  modelPlace.find({})
  .then((data)=>{

    res.render('./places/index',{data});

  })
});

router.post('/insert',(req,res,next)=>{

  const todo = req.body

  const insertAll = {

    name: req.body.name,
    type: req.body.type,
   location :{
      type: 'Point',
      coordinates: [req.body.longitude, req.body.latitude]
      }
  }

  modelPlace.create(insertAll)
  .then(()=>{
    res.redirect('/place')
  })

})


router.get('/eliminate/:id',(req,res,next)=>{

  const id = req.params.id
  
  modelPlace.findByIdAndDelete(id)
  .then(()=>{
    
    
    res.redirect('/place')
  })

})

router.get('/edit/:id',(req,res,next)=>{

  const id = req.params.id

  modelPlace.findById(id)
  .then((data)=>{

    res.render('places/edit', {data})

  })
})

router.post('/edit',(req,res,next)=>{

  const id = req.body.id
  const name = req.body.name
  const type = req.body.type

  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
    };
    
    
  
   
  
  modelPlace.findByIdAndUpdate(id,{name: name, type: type,location: location})
  .then(()=>{
    res.redirect('/place')
  })

})


 router.get('/coordenates',(req,res,next)=>{

 modelPlace.find({})
 .then((data)=>{

  res.json(data)
  
 })
  

 })


module.exports = router;
