const express = require('express');
const User = require('../models/user');
const Place= require('../models/place');
const passport = require('passport');
const router = express.Router();

router.get('/list', (req, res, next) => {
  data={};
  if ((res.locals.user !== undefined) &&
     (res.locals.user.role == 'editor'))
      data.isEditor=true;

  Place.find({}).then(places => {
    data.places=places;
    res.render('places/places-list',data);
    // logica en JS cliente para ver como mostrar diferente
    //mostrar muchas etiquetas a la vez.
  })
});

router.post('/list',(req,res,next)=>{
  console.log(res.locals);
  if ((res.locals.user !== undefined) &&
    (res.locals.user.role == 'editor')){
      const name=req.body.name;
    }

  User.findOne({
    name
  })
    .then(user => {
      if (user !== null) {
        throw new Error("Place Already exists");
      }


      const newUser = new User({
        name:req.body.name,
        description:req.body.description,
        votesPos:req.body.votesPos,
        votesNeg:req.body.votesNeg,
        type:req.body.type,
        creator:res.locals.user._id,
        // location:{
        //   lat=req.body.latitude,
        //   lng=req.body.longitude
        // }
      });
      
      return newUser.save()
    })
    .then(user => {
      res.redirect("/");
    })
    .catch(err => {
      console.log(err);
      res.render("users/signup", {
        flashMessage: err.message
      });
    })

})

router.get('/:id',(req,res,next)=>{
  // mostrar info de solo este place
  // mostrar mapa solo con un lugar


})

module.exports = router;
