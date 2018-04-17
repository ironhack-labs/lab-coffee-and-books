const express = require("express");
const bookRouter = express.Router();
const Bookplace = require("../models/Bookplace");


bookRouter.get("/", (req, res) => {
  Bookplace.find()
  .then(bookPlaces => {
    res.render('book/index', {bookPlaces});
  })
  .catch(error => {
    console.log(error)
  })
});

// Books - View New form

bookRouter.get("/new", (req, res) => {
  res.render('book/form_new');
})

// Books - Post New form

bookRouter.post('/new', (req, res, next) => {
 
  const myPlace  = { 
    name:req.body.name,
    location:{
      lat:req.body.lat,
      long:req.body.long }
    };
    
  const newBook = new Bookplace(myPlace);
  newBook.save()
  .then((bookPlace) => {  
    res.redirect('/book');
  })
  .catch((error) => {
    console.log ("Couldn't add new book place");
    res.redirect("/book/new");
  })
});


bookRouter.get("/edit/:id", (req, res) => {
  let id = req.params.id;
  Bookplace.findById(id)
  .then(bookPlace=> {
    res.render('book/form_edit', {bookPlace});
  })
  .catch(error => {
    console.log(error)
  })
});


bookRouter.post("/edit/:id", (req, res) => {
  let id = req.params.id;
  const myPlace  = { 
    name:req.body.name,
    location:{
      lat:req.body.lat,
      long:req.body.long }
    };

  Bookplace.findByIdAndUpdate(id,myPlace)
  .then(()=> {
    res.redirect("/book");
  });
  
})

module.exports = bookRouter;