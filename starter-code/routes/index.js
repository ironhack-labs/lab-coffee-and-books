const express = require('express');
const router  = express.Router();
const Place = require("../models/Place");


/* GET home page */
router.get('/', (req, res, next) => {
  Place.find().then(places=>{
    res.render('index',{places});
  })
  
});

router.get('/new',(req,res,next)=>{
  res.render('new');
});

router.post('/new' ,(req,res) => {
  const name = req.body.name;
  const type = req.body.type;

  Place.create({name,type}).then(place => {
    console.log(`The following place was creates ${place._id} ${place.name}`);
    res.redirect('/');
  });
});

router.get('/:id/edit/', (req,res) => {
  Place.findById(req.params.id).then( place =>{
    res.render('edit',{place})
  })
});

router.post('/:id/edit/', (req,res) => {
  const {name, type} = req.body;
  const id = req.params.id;
  Place.findByIdAndUpdate(id,{name, type})
     .then(() =>  res.redirect(`/`))
})

router.get('/:id/delete/', (req,res) => {
  Place.findByIdAndDelete(req.params.id).then(()=> {
    res.redirect('/');
  })
});



module.exports = router;
