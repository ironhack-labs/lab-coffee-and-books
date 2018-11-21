const express = require('express');
const router  = express.Router();
const Place   = require('../models/Place');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.post('/news',(req,res,nex)=>{
  const {name, type} = {name: req.body.name, type:req.body.type};

  
   var coordinates = {
     "lng": req.body.lng, 
     "ltd": req.body.ltd
    }


    

  const newPlace = new Place({name,type,coordinates});

  console.log(name,type);

  newPlace.save()
    .then(()=>{
      res.redirect('/');
    })
    .catch(()=>{
      res.redirect('/');
    });
})

router.get('/view-all',(req,res,next) =>{
  Place.find()
    .then(places=>{
       
        res.render('places',{places});
    })
    .catch(next)
})

router.get('/edit/:id',(req,res,next)=>{
    let placeId = req.params.id;
    Place.findOne({_id: placeId})
      .then(place=>{
          res.render('edit',place);
      })
})

router.post('/edit/:id',(req,res,next)=>{
  let placeId = req.params.id;

  var coordinates = {
    "lng": req.body.lng, 
    "ltd": req.body.ltd
   }


   console.log(req.body.lng,req.body.ltd);

  const {name, type} = {name: req.body.name, type:req.body.type};



  Place.findByIdAndUpdate(placeId, {$set:{name,type,coordinates}},{new:true})
    .then(()=>{
      res.redirect('/view-all');
    })
    .catch(next)
})

router.get('/delete/:id',(req,res,next)=>{
    let placeId = req.params.id;

    Place.findByIdAndDelete({_id:placeId})
      .then(()=>{
        res.redirect('/view-all');
      })
      .catch(next)
})



router.get('/json-all',(req,res,next) =>{
  Place.find()
    .then(places=>{
        res.json({places});
    })
    .catch(next)
});

module.exports = router;
