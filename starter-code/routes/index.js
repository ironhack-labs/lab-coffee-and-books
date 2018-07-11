const express = require('express');
const router  = express.Router();
const Place  = require("../models/place");

/* GET home page */
router.get('/', (req, res, next) => {
  Place.find({}).then( places => {
    res.render('index'),{places:JSON.stringify(places)};
  })
});


router.get("/list",  (req,res) => {
  Place.find({}).then(place =>{
    res.render("places/list",{place})
  })

  router.get(`/delete/:id`,(req,res) =>{
    Place.findByIdAndRemove(req.params.id, ()=> res.redirect("/list"));
  })

router.get("/add", (req,res) =>{
  res.render("places/add");
})

router.get("/home",(req,res) =>{
  res.render("index");
})

router.post('/add', (req, res, next) => {
  const {
    name,
    type,
    lat,
    lng
  } = req.body;

  Place.findOne({
      name
    })
    .then( place => {
      console.log(Place);
      if (place !== null) {
        throw new Error("Place Already exists");
      }
    
      const newPlace = new Place({
        name,
        type,
        location:{type:"Point",coordinates:[Number(lat),Number(lng)]}
      });

      return newPlace.save()
    })
    .then(place => {
      res.redirect("/");
    })
    .catch(err => {
      console.log(err);
      res.render("places/add", {
        errorMessage: err.message
      });
    })
})
  
})

module.exports = router;
