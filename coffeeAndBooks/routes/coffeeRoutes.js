const express = require("express");
const coffeeRouter = express.Router();
const Coffeeplace = require("../models/Coffeeplace");


// Coffee - View index

coffeeRouter.get("/", (req, res) => {
  Coffeeplace.find()
  .then(coffeePlaces => {
    res.render('coffee/index', {coffeePlaces});
  })
  .catch(error => {
    console.log(error)
  })
});

// Coffee - View New form

coffeeRouter.get("/new", (req, res) => {
  res.render('coffee/form_new');
})

// Coffee - Post New form

coffeeRouter.post('/new', (req, res, next) => {
 
  const myPlace  = { 
    name:req.body.name,
    location:{
      type: 'Point',
      coordinates: [req.body.lat,req.body.long]
      }
    };
  const newCoffee = new Coffeeplace(myPlace);
  newCoffee.save()
  .then((coffeePlace) => {  
    res.redirect('/coffee');
  })
  .catch((error) => {
    console.log ("Couldn't add new coffee place");
    res.redirect("/coffee/new");
  })
});

// Coffee - Edit


coffeeRouter.get("/edit/:id", (req, res) => {
  let id = req.params.id;
  Coffeeplace.findById(id)
  .then(coffeePlace=> {
    res.render('coffee/form_edit', {coffeePlace});
  })
  .catch(error => {
    console.log(error)
  })
});


coffeeRouter.post("/edit/:id", (req, res) => {
  let id = req.params.id;
  const myPlace  = { 
    name:req.body.name,
    location:{
      type: 'Point',
      coordinates: [req.body.lat,req.body.long]
      }
    };

    Coffeeplace.findByIdAndUpdate(id,myPlace)
  .then(()=> {
    res.redirect("/coffee");
  });
  
})

module.exports = coffeeRouter;