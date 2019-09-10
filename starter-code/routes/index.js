const express = require('express');
const router  = express.Router();
const Place = require('../models/Place')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/map', (req,res,next)=>{
  Place.find().then( places =>{
    console.log(places)
    res.render('map',{places})
  })
})


router.get("/new", (req,res)=>{
  res.render("new")
})

router.post("/new", (req,res)=>{
  let {lng, lat, name, address} = req.body;
  let place = {
    name,
    address,
    location: {
      type: "Point",
      coordinates: [lng,lat]
    }
  }
  Place.create(place).then(()=>{
    res.redirect("/map")
  })
})

router.post("/delete/:placeid", async(req,res,next)=>{
  const {placeid} = req.params
  const place = await Place.findByIdAndRemove(placeid)
  res.redirect("/map")
})


router.get("/update/:placeid",async(req,res)=>{
  const {placeid}= req.params
  const place = await Place.findById(placeid)
  console.log(place)
  res.render("update", place)
  
})

router.post("/update/:placeid", async(req,res,next)=>{
  const {placeid}= req.params

  let {lng, lat, name, address} = req.body;
  let newplace = {
    name,
    address,
    location: {
      type: "Point",
      coordinates: [lng,lat]
    }
  }

  const place = await Place.findByIdAndUpdate(placeid, newplace)
  
  res.redirect("/map")
})



module.exports = router;


