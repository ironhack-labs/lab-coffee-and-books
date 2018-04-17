const express = require("express");
const bookRouter = express.Router();
const Bookplace = require("../models/Bookplace");


bookRouter.get("/", (req, res) => {
  res.render('book/index');

})

// Books - View New form

bookRouter.get("/new", (req, res) => {
  res.render('book/form_new');
})

// Books - Post New form

bookRouter.post('/new', (req, res, next) => {
 
  const { name, lat, long } = req.body;
  const newBook = new Bookplace({ name, lat, long });
  newBook.save()
  .then((bookPlace) => {  
    res.redirect('/book');
  })
  .catch((error) => {
    console.log ("Couldn't add new book place");
    res.redirect("/book/new");
  })
});


module.exports = bookRouter;