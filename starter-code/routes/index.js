const express = require('express');
const router  = express.Router();
const Place = require('../models/Place')
//const { editPlace, editPlaceForm, deletePlace } = require('../controllers/index')
//const { catchErrors } = require('../middlewares/catchErrors')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/map', (req, res, next) => {
  Place.find().then( places => {
    console.log(places)
    res.render('map', {places});
  })
});

router.get('/new', (req, res, next) => {
  res.render('new')
})

router.post('/new', (req, res, next) => {
  let { lng, lat, name, address, type } = req.body
  let place = {
    name,
    address,
    location: {
      type: "Point",
      coordinates: [lng, lat]
    },
    type
  }
  Place.create(place).then(() => {
    res.redirect('/map')
  })
})

router.post("/delete/:placeid", async(req,res,next)=>{
  const {placeid} = req.params
  const place = await Place.findByIdAndRemove(placeid)
  res.redirect("/map")
})


router.get("/edit/:placeid",async(req,res)=>{
  const {placeid}= req.params
  const place = await Place.findById(placeid)
  console.log(place)
  res.render("edit", place)

})

router.post("/edit/:placeid", async(req,res,next)=>{
  const {placeid}= req.params

  let {lng, lat, name, address, type} = req.body;
  let place = {
    name,
    address,
    location: {
      type: "Point",
      coordinates: [lng,lat]
    },
    type
  }
  const {id} = req.params
  await Place.findByIdAndUpdate(id, place)
    res.redirect('/map')

})


module.exports = router;