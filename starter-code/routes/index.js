const express = require('express');
const router  = express.Router();
const Place = require('../models/place')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});




router.get('/add-place',(req,res,next)=>{
  res.render('add')
})

router.post('/add-place',(req,res,next)=>{
  const name=req.body.name
  const type=req.body.type
  const longitud=req.body.longitud
  const latitud=req.body.latitud

  const newPlace= new Place({
    name,
    type,
    latitud,
    longitud
  })

  newPlace.save()
    .then((place) => {
      console.log('Place created');
      res.redirect('/');
    })
    .catch(error => next(error));
  
})


router.get('/delete-place',(req,res,next)=>{

  Place.find().then((places)=>{
    console.log(places)
    res.render('delete',{places})
  })
  
})



router.get('/delete/:id', (req, res, next) => {
  var idDel = req.params.id
  console.log(idDel)
  Place.findByIdAndDelete(req.params.id).then((x) => {
    res.redirect('/')
  })
})

router.get('/places', (req, res, next) => {
  Place.find()
    .then((allPlaces) => {
      res.json(allPlaces);
    });
});

module.exports = router;
