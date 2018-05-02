const express = require('express');
const router  = express.Router();
const Place = require("../models/place")
/* GET home page */
router.get('/', (req, res, next) => {
  
  Place.find({},(err,places)=>{
    res.render('index',{places});
  });
 
});

router.post("/",(req,res,next)=>{
  Place.create(req.body)
  .then(
    ()=>{
      res.render("index");
    }
  )
  .catch(e=>next(e));
});

module.exports = router;
