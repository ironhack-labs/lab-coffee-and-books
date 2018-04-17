const express = require("express");
const coffeeRouter = express.Router();
const Coffeeplace = require("../models/Coffeeplace");


// Coffee - View index

coffeeRouter.get("/", (req, res) => {
  res.render('coffee/index');
})

// Coffee - View New form

coffeeRouter.get("/new", (req, res) => {
  res.render('coffee/form_new');
})

// Coffee - Post New form

coffeeRouter.post('/new', (req, res, next) => {
 
  const { name, lat, long } = req.body;
  const newCoffee = new Coffeeplace({ name, lat, long });
  newCoffee.save()
  .then((coffeePlace) => {  
    res.redirect('/coffee');
  })
  .catch((error) => {
    console.log ("Couldn't add new coffee place");
    res.redirect("/coffee/new");
  })
});

module.exports = coffeeRouter;