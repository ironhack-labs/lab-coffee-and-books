const express = require('express');
const router  = express.Router();
let Place =require("../models/Place")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get("/places",(req,res,next)=>{
  Place.find()
  .then( places=>{
    res.render("places",{places})
  })
  .catch(e=>{
    res.render("places",e)
  })
})

router.get("/places/detail/:id",(req,res,next)=>{
  let {id}=req.params
  Place.findById(id)
  .then(place=>{
    res.render("detail",place)
  })
  .catch(e=>{
    res.render("place",e)
  })

})

router.get("/places/new",(req,res,next)=>{
  let config =  {
    action:"/places/new",
    submit:"New",
    name:"",
    stars:""
  }
  res.render("new")
})

router.get("//places/edit/:id",(req,res,next)=>{
  let {id}=req.params
  Place.findById(id)
  .then(place=>{
    let config={
      action:`/places/edit/${place._id}`,
      submit:"Update",
      name:place.name,
      stars:place.stars
    }
  res.render("new",config)
  })
  .catch(e=>next(e))
})

router.post("/places/edit/:id",(req,res,next)=>{
  let {id}=req.params
  
  Place.findByIdAndUpdate(id,req.body,{new:true})
  .then(()=>{
  res.redirect(`/places/detail/${id}`)
  })
  .catch(e=>next(e))
})



router.post("/places/new",(req,res,next)=>{
  Place.create(req.body)
  .then(place=>{
    res.redirect(`/places/detail/${place._id}`)
  })
  .catch(e=>{
    res.send(e)
  })
})


module.exports = router;
